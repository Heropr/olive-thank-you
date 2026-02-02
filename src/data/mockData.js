// Import CSV data as raw text and parse it
import donorsCSV from './donors.csv?raw'
import transactionsCSV from './transactions.csv?raw'
import recurringGiftsCSV from './recurring_gifts.csv?raw'
import fundsCSV from './funds.csv?raw'
import campusCSV from './campus.csv?raw'
import servicesCSV from './services.csv?raw'
import textKeywordsCSV from './text_keywords.csv?raw'
import givingStatementsCSV from './giving_statements.csv?raw'

// CSV Parser
function parseCSV(csvText) {
  const lines = csvText.trim().split('\n')
  const headers = lines[0].split(',')

  return lines.slice(1).map(line => {
    const values = []
    let current = ''
    let inQuotes = false

    for (let char of line) {
      if (char === '"') {
        inQuotes = !inQuotes
      } else if (char === ',' && !inQuotes) {
        values.push(current.trim())
        current = ''
      } else {
        current += char
      }
    }
    values.push(current.trim())

    const obj = {}
    headers.forEach((header, i) => {
      obj[header.trim()] = values[i] || ''
    })
    return obj
  })
}

// Parse all CSV data
const rawDonors = parseCSV(donorsCSV)
let rawTransactions = parseCSV(transactionsCSV)
let rawRecurringGifts = parseCSV(recurringGiftsCSV)
const rawFunds = parseCSV(fundsCSV)
const rawCampus = parseCSV(campusCSV)
const rawServices = parseCSV(servicesCSV)
const rawTextKeywords = parseCSV(textKeywordsCSV)
const rawGivingStatements = parseCSV(givingStatementsCSV)

// Shift all dates to be relative to today
// Find the most recent transaction date and calculate offset to today
function shiftDatesToToday() {
  // Get today's date at noon to avoid timezone issues
  const today = new Date()
  const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`
  const todayMs = new Date(todayStr + 'T12:00:00').getTime()

  // Find the latest date in transactions
  let latestDateStr = '1970-01-01'
  rawTransactions.forEach(tx => {
    if (tx.date > latestDateStr) latestDateStr = tx.date
  })
  const latestMs = new Date(latestDateStr + 'T12:00:00').getTime()

  // Calculate days offset (today - latest date)
  const offsetMs = todayMs - latestMs
  const offsetDays = Math.round(offsetMs / (1000 * 60 * 60 * 24))

  // Helper function to shift a date string
  const shiftDate = (dateStr) => {
    if (!dateStr) return dateStr
    const oldMs = new Date(dateStr + 'T12:00:00').getTime()
    const newMs = oldMs + (offsetDays * 24 * 60 * 60 * 1000)
    const newDate = new Date(newMs)
    return `${newDate.getFullYear()}-${String(newDate.getMonth() + 1).padStart(2, '0')}-${String(newDate.getDate()).padStart(2, '0')}`
  }

  // Shift all transaction dates
  rawTransactions = rawTransactions.map(tx => ({
    ...tx,
    date: shiftDate(tx.date)
  }))

  // Shift recurring gift dates
  rawRecurringGifts = rawRecurringGifts.map(rec => ({
    ...rec,
    start_date: shiftDate(rec.start_date),
    next_charge_date: shiftDate(rec.next_charge_date),
    last_charge_date: shiftDate(rec.last_charge_date)
  }))
}

// Apply date shifting
shiftDatesToToday()

// Helper function to format date
function formatDate(dateStr) {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  const today = new Date()
  const yesterday = new Date(today)
  yesterday.setDate(yesterday.getDate() - 1)

  if (date.toDateString() === today.toDateString()) {
    return 'Today'
  } else if (date.toDateString() === yesterday.toDateString()) {
    return 'Yesterday'
  } else {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  }
}

function formatDateTime(dateStr, timeStr) {
  const formattedDate = formatDate(dateStr)
  if (formattedDate === 'Today' || formattedDate === 'Yesterday') {
    const time = timeStr ? timeStr.substring(0, 5) : ''
    const hour = parseInt(time.split(':')[0])
    const ampm = hour >= 12 ? 'PM' : 'AM'
    const hour12 = hour % 12 || 12
    return `${formattedDate}, ${hour12}:${time.split(':')[1]} ${ampm}`
  }
  return formattedDate
}

// Transform transactions for dashboard
export const transactions = rawTransactions.map((tx, index) => ({
  id: index + 1,
  txId: tx.id,
  donorId: tx.donor_id,
  donor: tx.donor_name,
  amount: parseFloat(tx.amount) || 0,
  fund: tx.fund_name,
  fundId: tx.fund_id,
  campus: tx.campus_name,
  campusId: tx.campus_id,
  service: tx.service_name,
  serviceId: tx.service_id,
  source: tx.source,
  paymentMethod: tx.payment_method,
  status: tx.status,
  recurringGiftId: tx.recurring_gift_id,
  date: formatDateTime(tx.date, tx.time),
  rawDate: tx.date,
  processingFee: parseFloat(tx.processing_fee) || 0,
  netAmount: parseFloat(tx.net_amount) || 0,
}))

// Calculate donor totals from transactions
const donorTotals = {}
const donorThisYear = {}
const donorLastGift = {}

rawTransactions.forEach(tx => {
  const donorId = tx.donor_id
  const amount = parseFloat(tx.amount) || 0
  const date = tx.date
  const year = new Date(date).getFullYear()
  const currentYear = new Date().getFullYear()

  if (!donorTotals[donorId]) donorTotals[donorId] = 0
  if (!donorThisYear[donorId]) donorThisYear[donorId] = 0
  if (!donorLastGift[donorId]) donorLastGift[donorId] = date

  donorTotals[donorId] += amount
  if (year === currentYear || year === currentYear - 1) {
    donorThisYear[donorId] += amount
  }

  if (new Date(date) > new Date(donorLastGift[donorId])) {
    donorLastGift[donorId] = date
  }
})

// Check which donors have recurring gifts
const donorHasRecurring = {}
rawRecurringGifts.forEach(rec => {
  if (rec.status === 'active') {
    donorHasRecurring[rec.donor_id] = true
  }
})

// Transform donors for dashboard
export const donors = rawDonors.map((donor, index) => ({
  id: index + 1,
  donorId: donor.id,
  name: `${donor.first_name} ${donor.last_name}`,
  firstName: donor.first_name,
  lastName: donor.last_name,
  email: donor.email,
  phone: donor.phone,
  address: donor.address,
  city: donor.city,
  state: donor.state,
  zip: donor.zip,
  campus: donor.primary_campus_name,
  campusId: donor.primary_campus_id,
  householdId: donor.household_id,
  createdDate: donor.created_date,
  status: donor.status,
  totalAllTime: Math.round(donorTotals[donor.id] || 0),
  totalThisYear: Math.round(donorThisYear[donor.id] || 0),
  lastGift: formatDate(donorLastGift[donor.id]),
  recurring: donorHasRecurring[donor.id] || false,
}))

// Transform recurring gifts for dashboard
export const recurringDonations = rawRecurringGifts.map((rec, index) => ({
  id: index + 1,
  recId: rec.id,
  donorId: rec.donor_id,
  donor: rec.donor_name,
  amount: parseFloat(rec.amount) || 0,
  frequency: rec.frequency.charAt(0).toUpperCase() + rec.frequency.slice(1),
  fund: rec.fund_name,
  fundId: rec.fund_id,
  campus: rec.campus_name,
  campusId: rec.campus_id,
  paymentMethod: rec.payment_method,
  status: rec.status,
  startDate: rec.start_date,
  nextCharge: formatDate(rec.next_charge_date),
  lastCharge: rec.last_charge_date,
}))

// Calculate fund totals from transactions
const fundTotals = {}
const fundDonationCounts = {}

rawTransactions.forEach(tx => {
  const fundId = tx.fund_id
  const amount = parseFloat(tx.amount) || 0

  if (!fundTotals[fundId]) fundTotals[fundId] = 0
  if (!fundDonationCounts[fundId]) fundDonationCounts[fundId] = 0

  fundTotals[fundId] += amount
  fundDonationCounts[fundId]++
})

// Transform funds for dashboard
export const funds = rawFunds.map((fund, index) => ({
  id: index + 1,
  fundId: fund.id,
  name: fund.name,
  description: fund.description,
  raised: Math.round(fundTotals[fund.id] || 0),
  goal: fund.goal_amount ? parseInt(fund.goal_amount) : null,
  donations: fundDonationCounts[fund.id] || 0,
  isTaxDeductible: fund.is_tax_deductible === 'yes',
  status: fund.status,
}))

// Calculate campus totals from transactions
const campusTotals = {}
rawTransactions.forEach(tx => {
  const campusId = tx.campus_id
  const amount = parseFloat(tx.amount) || 0

  if (!campusTotals[campusId]) campusTotals[campusId] = 0
  campusTotals[campusId] += amount
})

// Transform campuses for dashboard
export const campuses = rawCampus.map(campus => ({
  id: campus.id,
  name: campus.name,
  shortCode: campus.short_code,
  address: campus.address,
  city: campus.city,
  state: campus.state,
  zip: campus.zip,
  isDefault: campus.is_default === 'yes',
  status: campus.status,
  giving: Math.round(campusTotals[campus.id] || 0),
}))

// Calculate service totals from transactions
const serviceTotals = {}
const serviceDonationCounts = {}

rawTransactions.forEach(tx => {
  const serviceId = tx.service_id
  const amount = parseFloat(tx.amount) || 0

  if (!serviceTotals[serviceId]) serviceTotals[serviceId] = 0
  if (!serviceDonationCounts[serviceId]) serviceDonationCounts[serviceId] = 0

  serviceTotals[serviceId] += amount
  serviceDonationCounts[serviceId]++
})

// Transform services for dashboard
export const services = rawServices.map((service, index) => ({
  id: index + 1,
  serviceId: service.id,
  name: service.name,
  day: service.day,
  campusId: service.campus_id,
  campus: campuses.find(c => c.id === service.campus_id)?.name || '',
  giving: Math.round(serviceTotals[service.id] || 0),
  donations: serviceDonationCounts[service.id] || 0,
}))

// Text keywords
export const textKeywords = rawTextKeywords.map((kw, index) => ({
  id: index + 1,
  keyword: kw.keyword,
  fundId: kw.fund_id,
  campusId: kw.campus_id,
  status: kw.status,
}))

// Giving statements
export const givingStatements = rawGivingStatements.map((stmt, index) => ({
  id: index + 1,
  stmtId: stmt.id,
  donorId: stmt.donor_id,
  donorName: stmt.donor_name,
  year: parseInt(stmt.year),
  totalAmount: parseFloat(stmt.total_amount) || 0,
  generatedDate: stmt.generated_date,
  sentDate: stmt.sent_date,
  deliveryMethod: stmt.delivery_method,
}))

// Calculate stats
function calculateStats() {
  // Helper to format date as YYYY-MM-DD string
  const toDateStr = (date) => {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
  }

  const today = new Date()
  const todayStr = toDateStr(today)

  // This week (Sunday to today)
  const thisWeekStart = new Date(today)
  thisWeekStart.setDate(today.getDate() - today.getDay())
  const thisWeekStartStr = toDateStr(thisWeekStart)

  // Last week
  const lastWeekStart = new Date(thisWeekStart)
  lastWeekStart.setDate(lastWeekStart.getDate() - 7)
  const lastWeekStartStr = toDateStr(lastWeekStart)
  const lastWeekEnd = new Date(thisWeekStart)
  lastWeekEnd.setDate(lastWeekEnd.getDate() - 1)
  const lastWeekEndStr = toDateStr(lastWeekEnd)

  // This month
  const thisMonthStart = new Date(today.getFullYear(), today.getMonth(), 1)
  const thisMonthStartStr = toDateStr(thisMonthStart)

  // Last month
  const lastMonthStart = new Date(today.getFullYear(), today.getMonth() - 1, 1)
  const lastMonthStartStr = toDateStr(lastMonthStart)
  const lastMonthEnd = new Date(today.getFullYear(), today.getMonth(), 0)
  const lastMonthEndStr = toDateStr(lastMonthEnd)

  // This year
  const thisYearStart = new Date(today.getFullYear(), 0, 1)
  const thisYearStartStr = toDateStr(thisYearStart)

  // Last year to same date
  const lastYearStart = new Date(today.getFullYear() - 1, 0, 1)
  const lastYearStartStr = toDateStr(lastYearStart)
  const lastYearSameDay = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate())
  const lastYearSameDayStr = toDateStr(lastYearSameDay)

  let thisWeek = 0, lastWeek = 0
  let thisMonth = 0, lastMonth = 0
  let thisYearToDate = 0, lastYearToDate = 0

  rawTransactions.forEach(tx => {
    const dateStr = tx.date // Already in YYYY-MM-DD format
    const amount = parseFloat(tx.amount) || 0

    // This week (using string comparison - YYYY-MM-DD format sorts correctly)
    if (dateStr >= thisWeekStartStr && dateStr <= todayStr) thisWeek += amount
    // Last week
    if (dateStr >= lastWeekStartStr && dateStr <= lastWeekEndStr) lastWeek += amount
    // This month
    if (dateStr >= thisMonthStartStr && dateStr <= todayStr) thisMonth += amount
    // Last month
    if (dateStr >= lastMonthStartStr && dateStr <= lastMonthEndStr) lastMonth += amount
    // Year to date
    if (dateStr >= thisYearStartStr && dateStr <= todayStr) thisYearToDate += amount
    // Last year to same date
    if (dateStr >= lastYearStartStr && dateStr <= lastYearSameDayStr) lastYearToDate += amount
  })

  const weekChange = lastWeek > 0 ? ((thisWeek - lastWeek) / lastWeek * 100).toFixed(1) : 0
  const monthChange = lastMonth > 0 ? ((thisMonth - lastMonth) / lastMonth * 100).toFixed(1) : 0
  const yearChange = lastYearToDate > 0 ? ((thisYearToDate - lastYearToDate) / lastYearToDate * 100).toFixed(1) : 0

  return [
    {
      label: 'This Week',
      amount: `$${thisWeek.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      change: `${weekChange >= 0 ? '+' : ''}${weekChange}%`,
      isPositive: weekChange >= 0,
      comparison: `vs. $${lastWeek.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} last week`
    },
    {
      label: 'This Month',
      amount: `$${thisMonth.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`,
      change: `${monthChange >= 0 ? '+' : ''}${monthChange}%`,
      isPositive: monthChange >= 0,
      comparison: `vs. $${lastMonth.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} last month`
    },
    {
      label: 'Year To Date',
      amount: `$${thisYearToDate.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      change: `${yearChange >= 0 ? '+' : ''}${yearChange}%`,
      isPositive: yearChange >= 0,
      comparison: `vs. $${lastYearToDate.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} last year`
    }
  ]
}

export const stats = calculateStats()

// Calculate monthly giving for chart
function calculateMonthlyGiving() {
  const monthlyTotals = {}
  const today = new Date()

  // Initialize last 12 months
  for (let i = 11; i >= 0; i--) {
    const date = new Date(today.getFullYear(), today.getMonth() - i, 1)
    const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`
    monthlyTotals[key] = 0
  }

  rawTransactions.forEach(tx => {
    const date = new Date(tx.date)
    const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`
    const amount = parseFloat(tx.amount) || 0

    if (monthlyTotals.hasOwnProperty(key)) {
      monthlyTotals[key] += amount
    }
  })

  const values = Object.values(monthlyTotals)
  const maxValue = Math.max(...values)

  // Normalize to 0-100 scale for chart
  return values.map(val => maxValue > 0 ? Math.round((val / maxValue) * 100) : 0)
}

export const chartData = calculateMonthlyGiving()
export const months = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']

// Get the month labels based on current date (last 12 months)
export function getMonthLabels() {
  const labels = []
  const today = new Date()
  for (let i = 11; i >= 0; i--) {
    const date = new Date(today.getFullYear(), today.getMonth() - i, 1)
    labels.push(date.toLocaleDateString('en-US', { month: 'short' }).charAt(0))
  }
  return labels
}

// Calculate recurring metrics
export function getRecurringMetrics() {
  const activeRecurring = recurringDonations.filter(r => r.status === 'active')
  const failedRecurring = recurringDonations.filter(r => r.status === 'failed')

  const mrr = activeRecurring.reduce((sum, r) => {
    if (r.frequency.toLowerCase() === 'monthly') return sum + r.amount
    if (r.frequency.toLowerCase() === 'weekly') return sum + (r.amount * 4)
    if (r.frequency.toLowerCase() === 'bi-weekly') return sum + (r.amount * 2)
    return sum + r.amount
  }, 0)

  // Count new recurring this month (simplified - check start date)
  const thisMonthStart = new Date()
  thisMonthStart.setDate(1)
  const newThisMonth = recurringDonations.filter(r => {
    const startDate = new Date(r.startDate)
    return startDate >= thisMonthStart
  }).length

  return {
    mrr: Math.round(mrr),
    activeCount: activeRecurring.length,
    failedCount: failedRecurring.length,
    newThisMonth,
  }
}

// Text-to-give stats
export function getTextToGiveStats() {
  const textTransactions = transactions.filter(tx => tx.source === 'Text-to-Give')
  const thisMonthStart = new Date()
  thisMonthStart.setDate(1)

  const thisMonthTextGiving = textTransactions.filter(tx => {
    const date = new Date(tx.rawDate)
    return date >= thisMonthStart
  }).reduce((sum, tx) => sum + tx.amount, 0)

  const uniqueTextDonors = new Set(textTransactions.map(tx => tx.donorId)).size

  return {
    thisMonth: Math.round(thisMonthTextGiving),
    textDonors: uniqueTextDonors,
    activeKeywords: textKeywords.filter(k => k.status === 'active').length,
  }
}

// Report cards configuration
export const reportCards = [
  { title: 'Giving Summary', desc: 'Total donations by fund, campus, and source', icon: 'chart' },
  { title: 'Donation Detail', desc: 'Every transaction with full details', icon: 'file' },
  { title: 'Donor Summary', desc: 'All donors with giving totals', icon: 'users' },
  { title: 'Recurring Giving', desc: 'Active recurring gifts and MRR', icon: 'refresh' },
  { title: 'New Donor Report', desc: 'First-time donors in period', icon: 'user-plus' },
  { title: 'Lapsed Donor Report', desc: 'Donors who stopped giving', icon: 'alert' },
  { title: 'Campus Comparison', desc: 'Side-by-side campus giving', icon: 'building' },
  { title: 'Service Giving', desc: 'Giving by service time', icon: 'clock' },
  { title: 'Text-to-Give Report', desc: 'Text donations and keywords', icon: 'phone' },
]

// Export total giving for campus breakdown percentages
export const totalGiving = transactions.reduce((sum, tx) => sum + tx.amount, 0)
