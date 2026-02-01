import { useState } from 'react'
import './Dashboard.css'

function Dashboard() {
  const [activeNav, setActiveNav] = useState('dashboard')

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'home' },
    { id: 'transactions', label: 'Transactions', icon: 'receipt' },
    { id: 'donor', label: 'Donor', icon: 'people' },
    { id: 'recurring', label: 'Recurring', icon: 'refresh' },
    { id: 'funds', label: 'Funds', icon: 'account_balance_wallet' },
    { id: 'reports', label: 'Reports', icon: 'description' },
    { id: 'settings', label: 'Settings', icon: 'settings' },
  ]

  const stats = [
    {
      label: 'This Week',
      amount: '$47,250.32',
      change: '+1.7%',
      isPositive: true,
      comparison: 'vs. $46,460.69 last week'
    },
    {
      label: 'This Month',
      amount: '$287,500',
      change: '-3.7%',
      isPositive: false,
      comparison: 'vs. $298,546.21 last month'
    },
    {
      label: 'Year To Date',
      amount: '$704,381.92',
      change: '+1.7%',
      isPositive: true,
      comparison: 'vs. $692,607.59 last year'
    }
  ]

  const transactions = [
    { id: 1, donor: 'Sarah Johnson', amount: 250, fund: 'General Fund', campus: 'Downtown', service: 'Sunday 9 AM', source: 'Online', status: 'completed', date: 'Today, 9:23 AM' },
    { id: 2, donor: 'Michael Chen', amount: 100, fund: 'Missions', campus: 'North Campus', service: 'Sunday 11 AM', source: 'Text-to-Give', status: 'completed', date: 'Today, 9:15 AM' },
    { id: 3, donor: 'Anonymous', amount: 500, fund: 'Building Fund', campus: 'Downtown', service: 'Sunday 9 AM', source: 'Online', status: 'completed', date: 'Today, 9:02 AM' },
    { id: 4, donor: 'Emily Williams', amount: 75, fund: 'Youth Ministry', campus: 'Online', service: 'Online Live', source: 'Online', status: 'completed', date: 'Yesterday, 7:45 PM' },
    { id: 5, donor: 'David Thompson', amount: 1000, fund: 'General Fund', campus: 'Downtown', service: 'Saturday Night', source: 'Manual', status: 'pending', date: 'Yesterday, 6:30 PM' },
    { id: 6, donor: 'Jennifer Garcia', amount: 150, fund: 'Benevolence', campus: 'North Campus', service: 'Sunday 9 AM', source: 'Online', status: 'completed', date: 'Jan 29, 2026' },
    { id: 7, donor: 'Robert Taylor', amount: 2500, fund: 'Building Fund', campus: 'Downtown', service: 'Sunday 11 AM', source: 'Manual', status: 'completed', date: 'Jan 28, 2026' },
    { id: 8, donor: 'Amanda Brown', amount: 100, fund: 'General Fund', campus: 'Online', service: 'Online Live', source: 'Text-to-Give', status: 'failed', date: 'Jan 28, 2026' },
  ]

  const donors = [
    { id: 1, name: 'Sarah Johnson', email: 'sarah.j@email.com', totalAllTime: 12500, totalThisYear: 3200, lastGift: 'Today', recurring: true, campus: 'Downtown' },
    { id: 2, name: 'Michael Chen', email: 'mchen@email.com', totalAllTime: 8750, totalThisYear: 2100, lastGift: 'Today', recurring: true, campus: 'North Campus' },
    { id: 3, name: 'Emily Williams', email: 'emily.w@email.com', totalAllTime: 4200, totalThisYear: 950, lastGift: 'Yesterday', recurring: false, campus: 'Online' },
    { id: 4, name: 'David Thompson', email: 'dthompson@email.com', totalAllTime: 25000, totalThisYear: 6000, lastGift: 'Yesterday', recurring: true, campus: 'Downtown' },
    { id: 5, name: 'Jennifer Garcia', email: 'jgarcia@email.com', totalAllTime: 3100, totalThisYear: 800, lastGift: '3 days ago', recurring: false, campus: 'North Campus' },
    { id: 6, name: 'Robert Taylor', email: 'rtaylor@email.com', totalAllTime: 45000, totalThisYear: 12000, lastGift: 'Jan 28, 2026', recurring: true, campus: 'Downtown' },
    { id: 7, name: 'Amanda Brown', email: 'abrown@email.com', totalAllTime: 2100, totalThisYear: 450, lastGift: 'Jan 28, 2026', recurring: false, campus: 'Online' },
    { id: 8, name: 'Christopher Lee', email: 'clee@email.com', totalAllTime: 6850, totalThisYear: 1800, lastGift: 'Jan 27, 2026', recurring: true, campus: 'North Campus' },
  ]

  const recurringDonations = [
    { id: 1, donor: 'Sarah Johnson', amount: 250, frequency: 'Monthly', fund: 'General Fund', campus: 'Downtown', nextCharge: 'Feb 1, 2026', status: 'active' },
    { id: 2, donor: 'Michael Chen', amount: 100, frequency: 'Weekly', fund: 'Missions', campus: 'North Campus', nextCharge: 'Jan 28, 2026', status: 'active' },
    { id: 3, donor: 'David Thompson', amount: 500, frequency: 'Monthly', fund: 'Building Fund', campus: 'Downtown', nextCharge: 'Feb 15, 2026', status: 'active' },
    { id: 4, donor: 'Jennifer Garcia', amount: 75, frequency: 'Bi-weekly', fund: 'General Fund', campus: 'Online', nextCharge: 'Feb 3, 2026', status: 'failed' },
    { id: 5, donor: 'Robert Taylor', amount: 2500, frequency: 'Monthly', fund: 'Building Fund', campus: 'Downtown', nextCharge: 'Feb 28, 2026', status: 'active' },
    { id: 6, donor: 'Christopher Lee', amount: 150, frequency: 'Bi-weekly', fund: 'Youth Ministry', campus: 'North Campus', nextCharge: 'Feb 10, 2026', status: 'active' },
  ]

  const funds = [
    { id: 1, name: 'General Fund', description: 'Tithes & Offerings', raised: 145000, goal: 200000, donations: 892, status: 'active' },
    { id: 2, name: 'Building Fund', description: 'New sanctuary construction', raised: 89000, goal: 150000, donations: 234, status: 'active' },
    { id: 3, name: 'Missions', description: 'Local & global missions support', raised: 32000, goal: 50000, donations: 156, status: 'active' },
    { id: 4, name: 'Youth Ministry', description: 'Youth programs & retreats', raised: 12500, goal: 20000, donations: 89, status: 'active' },
    { id: 5, name: 'Benevolence', description: 'Community assistance', raised: 8200, goal: null, donations: 67, status: 'active' },
    { id: 6, name: 'Worship & Arts', description: 'Music and creative ministries', raised: 15600, goal: 25000, donations: 124, status: 'active' },
  ]

  const reports = [
    { id: 1, name: 'Monthly Giving Summary', type: 'Financial', lastGenerated: 'Jan 31, 2026', frequency: 'Monthly' },
    { id: 2, name: 'Donor Retention Report', type: 'Analytics', lastGenerated: 'Jan 28, 2026', frequency: 'Quarterly' },
    { id: 3, name: 'Fund Performance', type: 'Financial', lastGenerated: 'Jan 31, 2026', frequency: 'Monthly' },
    { id: 4, name: 'Year-End Giving Statements', type: 'Tax', lastGenerated: 'Jan 15, 2026', frequency: 'Annually' },
    { id: 5, name: 'Recurring Donations Summary', type: 'Financial', lastGenerated: 'Jan 31, 2026', frequency: 'Weekly' },
    { id: 6, name: 'New Donor Acquisition', type: 'Analytics', lastGenerated: 'Jan 25, 2026', frequency: 'Monthly' },
  ]

  const campuses = [
    { id: 'downtown', name: 'Downtown', giving: 156000 },
    { id: 'north', name: 'North Campus', giving: 89500 },
    { id: 'online', name: 'Online', giving: 42000 },
  ]

  const services = [
    { id: 1, name: 'Sunday 9 AM', campus: 'Downtown', giving: 45000, donations: 156 },
    { id: 2, name: 'Sunday 11 AM', campus: 'Downtown', giving: 62000, donations: 203 },
    { id: 3, name: 'Saturday Night', campus: 'North Campus', giving: 38000, donations: 124 },
    { id: 4, name: 'Online Live', campus: 'Online', giving: 28000, donations: 189 },
  ]

  const chartData = [65, 45, 78, 52, 88, 72, 95, 68, 82, 76, 90, 85]
  const months = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']

  const renderContent = () => {
    switch (activeNav) {
      case 'dashboard':
        return (
          <div className="dashboard-content">
            {/* Stats Grid */}
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-header">
                    <span className="stat-label">{stat.label}</span>
                    <span className={`stat-change ${stat.isPositive ? 'positive' : 'negative'}`}>
                      {stat.isPositive ? (
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.83331 10.7641L4.95482 6.38494C5.35575 5.82248 6.19137 5.8225 6.59228 6.38496L8.89491 9.6154C9.29578 10.1779 10.1314 10.1779 10.5324 9.6154L13.6537 5.23633M13.6537 5.23633L14.1666 8.0342M13.6537 5.23633L10.8552 5.74722" stroke="#1BAA6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      ) : (
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.83325 5.23633L4.95476 9.61547C5.35569 10.1779 6.19131 10.1779 6.59222 9.61547L8.89485 6.38498C9.29572 5.82251 10.1314 5.82252 10.5323 6.38499L13.6537 10.7641M13.6537 10.7641L14.1666 7.966M13.6537 10.7641L10.8551 10.253" stroke="#DF4646" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {stat.change}
                    </span>
                  </div>
                  <div className="stat-value-group">
                    <div className="stat-amount">{stat.amount}</div>
                    <div className="stat-comparison">{stat.comparison}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Charts Row */}
            <div className="charts-row">
              {/* Giving Trend Chart */}
              <div className="chart-card chart-wide">
                <div className="chart-header">
                  <h3>Giving Trend</h3>
                  <div className="chart-filters">
                    <button className="chart-filter active">12 Months</button>
                    <button className="chart-filter">6 Months</button>
                    <button className="chart-filter">3 Months</button>
                  </div>
                </div>
                <div className="bar-chart">
                  {chartData.map((height, i) => (
                    <div key={i} className="bar-column">
                      <div className="bar" style={{ height: `${height * 2}px` }}></div>
                      <span className="bar-label">{months[i]}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Campus Breakdown */}
              <div className="chart-card">
                <h3>By Campus</h3>
                <div className="campus-list">
                  {campuses.map((campus, i) => (
                    <div key={campus.id} className="campus-item">
                      <div className={`campus-dot color-${i + 1}`}></div>
                      <div className="campus-info">
                        <div className="campus-row">
                          <span className="campus-name">{campus.name}</span>
                          <span className="campus-amount">${campus.giving.toLocaleString()}</span>
                        </div>
                        <div className="campus-progress">
                          <div className={`campus-progress-fill color-${i + 1}`} style={{ width: `${(campus.giving / 287500) * 100}%` }}></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="services-section">
                  <h4>This Week's Services</h4>
                  <div className="services-list">
                    {services.slice(0, 3).map((service) => (
                      <div key={service.id} className="service-item">
                        <div className="service-info">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" stroke="#AEB5B9" strokeWidth="1.5"/>
                            <path d="M6.5 5.5L10.5 8L6.5 10.5V5.5Z" fill="#AEB5B9"/>
                          </svg>
                          <span>{service.name}</span>
                        </div>
                        <span className="service-amount">${Math.round(service.giving / 12).toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="bottom-row">
              {/* Recent Transactions */}
              <div className="recent-transactions-card">
                <div className="card-header">
                  <h3>Recent Transactions</h3>
                  <button className="view-all-btn" onClick={() => setActiveNav('transactions')}>
                    View All
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 12L10 8L6 4" stroke="#FF531D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
                <div className="transactions-list">
                  {transactions.slice(0, 5).map((tx) => (
                    <div key={tx.id} className="transaction-item">
                      <div className="transaction-avatar">
                        {tx.donor === 'Anonymous' ? '?' : tx.donor.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="transaction-info">
                        <span className="transaction-name">{tx.donor}</span>
                        <span className="transaction-detail">{tx.fund} · {tx.campus}</span>
                      </div>
                      <span className={`source-badge ${tx.source.toLowerCase().replace('-', '')}`}>{tx.source}</span>
                      <div className="transaction-amount-col">
                        <span className="transaction-amount">${tx.amount.toLocaleString()}</span>
                        <span className="transaction-date">{tx.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Text-to-Give */}
              <div className="text-to-give-card">
                <div className="card-header">
                  <h3>Text-to-Give</h3>
                  <button className="manage-btn">Manage</button>
                </div>
                <div className="text-number-box">
                  <span className="text-number-label">Your Number</span>
                  <span className="text-number">84321</span>
                  <span className="text-number-hint">Text "GIVE" to donate</span>
                </div>
                <div className="text-stats">
                  <div className="text-stat-row">
                    <span>This Month</span>
                    <span className="text-stat-value">$4,850</span>
                  </div>
                  <div className="text-stat-row">
                    <span>Text Donors</span>
                    <span className="text-stat-value">89</span>
                  </div>
                  <div className="text-stat-row">
                    <span>Active Keywords</span>
                    <span className="text-stat-value">4</span>
                  </div>
                </div>
                <button className="promo-btn">Download Promo Materials</button>
              </div>
            </div>
          </div>
        )
      case 'transactions':
        return (
          <div className="page-content">
            {/* Filters */}
            <div className="filters-bar">
              <div className="search-input">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z" stroke="#7E8284" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <input type="text" placeholder="Search by donor name..." />
              </div>
              <select className="filter-select">
                <option>All Funds</option>
                <option>General Fund</option>
                <option>Building Fund</option>
                <option>Missions</option>
              </select>
              <select className="filter-select">
                <option>All Campuses</option>
                <option>Downtown</option>
                <option>North Campus</option>
                <option>Online</option>
              </select>
              <select className="filter-select">
                <option>All Sources</option>
                <option>Online</option>
                <option>Text-to-Give</option>
                <option>Manual</option>
              </select>
              <select className="filter-select">
                <option>Last 30 Days</option>
                <option>Last 7 Days</option>
                <option>This Month</option>
                <option>Last Month</option>
              </select>
            </div>

            {/* Data Table */}
            <div className="data-table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Donor</th>
                    <th>Amount</th>
                    <th>Fund</th>
                    <th>Campus / Service</th>
                    <th>Source</th>
                    <th>Status</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map(tx => (
                    <tr key={tx.id}>
                      <td className="donor-name">{tx.donor}</td>
                      <td className="amount-cell">${tx.amount.toLocaleString()}</td>
                      <td>{tx.fund}</td>
                      <td>
                        <div className="donor-cell">
                          <span className="donor-name">{tx.campus}</span>
                          <span className="donor-email">{tx.service}</span>
                        </div>
                      </td>
                      <td><span className={`source-badge ${tx.source.toLowerCase().replace('-', '')}`}>{tx.source}</span></td>
                      <td><span className={`status-badge ${tx.status}`}>{tx.status.charAt(0).toUpperCase() + tx.status.slice(1)}</span></td>
                      <td>{tx.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="table-pagination">
                <span className="pagination-info">Showing 1-8 of 892 transactions</span>
                <div className="pagination-buttons">
                  <button className="pagination-btn">Previous</button>
                  <button className="pagination-btn active">1</button>
                  <button className="pagination-btn">2</button>
                  <button className="pagination-btn">3</button>
                  <button className="pagination-btn">Next</button>
                </div>
              </div>
            </div>
          </div>
        )
      case 'donor':
        return (
          <div className="page-content">
            {/* Quick Filters */}
            <div className="quick-filters">
              <button className="filter-pill active">All Donors</button>
              <button className="filter-pill">Recurring</button>
              <button className="filter-pill">First-Time (30 days)</button>
              <button className="filter-pill">Lapsed</button>
              <button className="filter-pill">Top Donors</button>
            </div>

            {/* Data Table */}
            <div className="data-table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Donor</th>
                    <th>Total (All-Time)</th>
                    <th>This Year</th>
                    <th>Last Gift</th>
                    <th>Campus</th>
                    <th>Recurring</th>
                  </tr>
                </thead>
                <tbody>
                  {donors.map(donor => (
                    <tr key={donor.id}>
                      <td>
                        <div className="donor-cell">
                          <span className="donor-name">{donor.name}</span>
                          <span className="donor-email">{donor.email}</span>
                        </div>
                      </td>
                      <td className="amount-cell">${donor.totalAllTime.toLocaleString()}</td>
                      <td>${donor.totalThisYear.toLocaleString()}</td>
                      <td>{donor.lastGift}</td>
                      <td>{donor.campus}</td>
                      <td>{donor.recurring ? <span className="recurring-active">Active</span> : <span className="recurring-none">—</span>}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )
      case 'recurring':
        return (
          <div className="page-content">
            {/* Metrics */}
            <div className="metrics-grid">
              <div className="metric-card">
                <div className="metric-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 2V6M7 2V6M3 10H21M5 4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V6C3 4.89543 3.89543 4 5 4Z" stroke="#1BAA6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="metric-change positive">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.83331 10.7641L4.95482 6.38494C5.35575 5.82248 6.19137 5.8225 6.59228 6.38496L8.89491 9.6154C9.29578 10.1779 10.1314 10.1779 10.5324 9.6154L13.6537 5.23633M13.6537 5.23633L14.1666 8.0342M13.6537 5.23633L10.8552 5.74722" stroke="#1BAA6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  +$1,200
                </div>
                <div className="metric-label">Monthly Recurring (MRR)</div>
                <div className="metric-value">$18,450</div>
              </div>
              <div className="metric-card">
                <div className="metric-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21M23 21V19C22.9986 17.1771 21.765 15.5857 20 15.13M16 3.13C17.7699 3.58317 19.0078 5.17852 19.0078 7.005C19.0078 8.83148 17.7699 10.4268 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z" stroke="#1BAA6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="metric-change positive">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.83331 10.7641L4.95482 6.38494C5.35575 5.82248 6.19137 5.8225 6.59228 6.38496L8.89491 9.6154C9.29578 10.1779 10.1314 10.1779 10.5324 9.6154L13.6537 5.23633M13.6537 5.23633L14.1666 8.0342M13.6537 5.23633L10.8552 5.74722" stroke="#1BAA6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  +8
                </div>
                <div className="metric-label">Active Recurring</div>
                <div className="metric-value">156</div>
              </div>
              <div className="metric-card">
                <div className="metric-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 21V19C16 16.7909 14.2091 15 12 15H5C2.79086 15 1 16.7909 1 19V21M20 8V14M23 11H17M12.5 7C12.5 9.20914 10.7091 11 8.5 11C6.29086 11 4.5 9.20914 4.5 7C4.5 4.79086 6.29086 3 8.5 3C10.7091 3 12.5 4.79086 12.5 7Z" stroke="#1BAA6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="metric-label">New This Month</div>
                <div className="metric-value">12</div>
              </div>
              <div className="metric-card">
                <div className="metric-icon warning">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#7E8284" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="metric-label">Failed Payments</div>
                <div className="metric-value">3</div>
                <div className="metric-subtitle">Needs attention</div>
              </div>
            </div>

            {/* Failed Payments Alert */}
            <div className="alert-banner alert-error">
              <div className="alert-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#DF4646" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="alert-content">
                <p className="alert-title">3 recurring payments failed this week</p>
                <p className="alert-text">Send payment update reminders to these donors</p>
              </div>
              <button className="alert-action">View & Send Reminders</button>
            </div>

            {/* Data Table */}
            <div className="data-table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Donor</th>
                    <th>Amount</th>
                    <th>Frequency</th>
                    <th>Fund</th>
                    <th>Campus</th>
                    <th>Next Charge</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recurringDonations.map(rec => (
                    <tr key={rec.id}>
                      <td className="donor-name">{rec.donor}</td>
                      <td className="amount-cell">${rec.amount.toLocaleString()}</td>
                      <td>{rec.frequency}</td>
                      <td>{rec.fund}</td>
                      <td>{rec.campus}</td>
                      <td>{rec.nextCharge}</td>
                      <td><span className={`status-badge ${rec.status}`}>{rec.status.charAt(0).toUpperCase() + rec.status.slice(1)}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )
      case 'funds':
        return (
          <div className="funds-grid">
            {funds.map(fund => {
              const progress = fund.goal ? Math.round((fund.raised / fund.goal) * 100) : 0
              return (
                <div key={fund.id} className="fund-card">
                  <div className="fund-header">
                    <div className="fund-title-group">
                      <h3>{fund.name}</h3>
                      <span className="fund-description">{fund.description}</span>
                    </div>
                    <span className={`status-badge ${fund.status}`}>{fund.status.charAt(0).toUpperCase() + fund.status.slice(1)}</span>
                  </div>
                  <div className="fund-amount">${fund.raised.toLocaleString()}</div>
                  <div className="fund-progress-container">
                    {fund.goal && (
                      <>
                        <div className="fund-progress-bar">
                          <div className="fund-progress-fill" style={{ width: `${progress}%` }}></div>
                        </div>
                        <div className="fund-progress-text">
                          <span>{progress}% of goal</span>
                          <span>${fund.goal.toLocaleString()}</span>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="fund-footer">
                    <span className="fund-donations">{fund.donations} donations</span>
                    <span className="fund-avg">Avg: ${Math.round(fund.raised / fund.donations).toLocaleString()}</span>
                  </div>
                </div>
              )
            })}
          </div>
        )
      case 'reports':
        const reportCards = [
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
        return (
          <div className="page-content">
            {/* Report Cards Grid */}
            <div className="reports-grid">
              {reportCards.map((report, i) => (
                <div key={i} className="report-card">
                  <div className="report-card-icon">
                    {report.icon === 'chart' && (
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.66667 13.3333V8.33333M10 13.3333V6.66667M13.3333 13.3333V10M5.83333 17.5H14.1667C15.0871 17.5 15.8333 16.7538 15.8333 15.8333V4.16667C15.8333 3.24619 15.0871 2.5 14.1667 2.5H5.83333C4.91286 2.5 4.16667 3.24619 4.16667 4.16667V15.8333C4.16667 16.7538 4.91286 17.5 5.83333 17.5Z" stroke="#FF531D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                    {report.icon === 'file' && (
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.6667 2.5V5.83333C11.6667 6.29357 12.0398 6.66667 12.5 6.66667H15.8333M11.6667 2.5H6.66667C5.74619 2.5 5 3.24619 5 4.16667V15.8333C5 16.7538 5.74619 17.5 6.66667 17.5H13.3333C14.2538 17.5 15 16.7538 15 15.8333V5.83333M11.6667 2.5L15 5.83333M7.5 10H12.5M7.5 13.3333H10" stroke="#FF531D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                    {report.icon === 'users' && (
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.1667 17.5V15.8333C14.1667 13.9924 12.6743 12.5 10.8333 12.5H4.16667C2.32572 12.5 0.833336 13.9924 0.833336 15.8333V17.5M19.1667 17.5V15.8333C19.1659 14.7915 18.6005 13.8403 17.6667 13.3333M13.3333 2.83333C14.2708 3.33833 14.8387 4.29233 14.8387 5.33333C14.8387 6.37433 14.2708 7.32833 13.3333 7.83333M10.8333 5.83333C10.8333 7.67428 9.34095 9.16667 7.5 9.16667C5.65905 9.16667 4.16667 7.67428 4.16667 5.83333C4.16667 3.99238 5.65905 2.5 7.5 2.5C9.34095 2.5 10.8333 3.99238 10.8333 5.83333Z" stroke="#FF531D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                    {report.icon === 'refresh' && (
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5 3.33333V7.5H13.3333M2.5 16.6667V12.5H6.66667M2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C12.5311 2.5 14.7714 3.73857 16.1025 5.65789M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C7.46891 17.5 5.22857 16.2614 3.89753 14.3421" stroke="#FF531D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                    {report.icon === 'user-plus' && (
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.3333 17.5V15.8333C13.3333 13.9924 11.841 12.5 10 12.5H4.16667C2.32572 12.5 0.833336 13.9924 0.833336 15.8333V17.5M16.6667 6.66667V11.6667M19.1667 9.16667H14.1667M10.4167 5.83333C10.4167 7.67428 8.92428 9.16667 7.08333 9.16667C5.24238 9.16667 3.75 7.67428 3.75 5.83333C3.75 3.99238 5.24238 2.5 7.08333 2.5C8.92428 2.5 10.4167 3.99238 10.4167 5.83333Z" stroke="#FF531D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                    {report.icon === 'alert' && (
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 6.66667V10M10 13.3333H10.0083M18.3333 10C18.3333 14.6024 14.6024 18.3333 10 18.3333C5.39763 18.3333 1.66667 14.6024 1.66667 10C1.66667 5.39763 5.39763 1.66667 10 1.66667C14.6024 1.66667 18.3333 5.39763 18.3333 10Z" stroke="#FF531D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                    {report.icon === 'building' && (
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.33333 17.5V4.16667C3.33333 3.24619 4.07953 2.5 5 2.5H10.8333C11.7538 2.5 12.5 3.24619 12.5 4.16667V17.5M12.5 8.33333H15C15.9205 8.33333 16.6667 9.07953 16.6667 10V17.5M6.66667 5.83333H9.16667M6.66667 9.16667H9.16667M6.66667 12.5H9.16667" stroke="#FF531D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                    {report.icon === 'clock' && (
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 5V10L13.3333 11.6667M18.3333 10C18.3333 14.6024 14.6024 18.3333 10 18.3333C5.39763 18.3333 1.66667 14.6024 1.66667 10C1.66667 5.39763 5.39763 1.66667 10 1.66667C14.6024 1.66667 18.3333 5.39763 18.3333 10Z" stroke="#FF531D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                    {report.icon === 'phone' && (
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 2.5H7.5C6.57953 2.5 5.83333 3.24619 5.83333 4.16667V15.8333C5.83333 16.7538 6.57953 17.5 7.5 17.5H12.5C13.4205 17.5 14.1667 16.7538 14.1667 15.8333V4.16667C14.1667 3.24619 13.4205 2.5 12.5 2.5ZM10 15H10.0083" stroke="#FF531D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                  <div className="report-card-content">
                    <h3>{report.title}</h3>
                    <p>{report.desc}</p>
                  </div>
                  <div className="report-card-arrow">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.83333 14.1667L14.1667 5.83333M14.1667 5.83333H5.83333M14.1667 5.83333V14.1667" stroke="#AEB5B9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            {/* Giving Statements Section */}
            <div className="statements-section">
              <div className="statements-header">
                <div className="statements-info">
                  <h3>Giving Statements</h3>
                  <p>Generate tax-compliant contribution statements</p>
                </div>
                <div className="statements-actions">
                  <select className="filter-select">
                    <option>2026 (Full Year)</option>
                    <option>Q4 2026</option>
                    <option>Q3 2026</option>
                    <option>Custom Range</option>
                  </select>
                  <button className="generate-btn">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.75 11.25V14.25C15.75 14.6478 15.592 15.0294 15.3107 15.3107C15.0294 15.592 14.6478 15.75 14.25 15.75H3.75C3.35218 15.75 2.97064 15.592 2.68934 15.3107C2.40804 15.0294 2.25 14.6478 2.25 14.25V11.25M12.75 6L9 2.25M9 2.25L5.25 6M9 2.25V11.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Generate All Statements
                  </button>
                </div>
              </div>
              <div className="statements-note">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 6.66667V10M10 13.3333H10.0083M18.3333 10C18.3333 14.6024 14.6024 18.3333 10 18.3333C5.39763 18.3333 1.66667 14.6024 1.66667 10C1.66667 5.39763 5.39763 1.66667 10 1.66667C14.6024 1.66667 18.3333 5.39763 18.3333 10Z" stroke="#FF531D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p>Statements include all tax-deductible donations with required IRS language. Donors can also access their statements anytime through their self-service portal.</p>
              </div>
            </div>
          </div>
        )
      case 'settings':
        return (
          <div className="settings-container">
            <div className="settings-section">
              <h3>Organization</h3>
              <div className="settings-group">
                <div className="setting-item">
                  <label>Church Name</label>
                  <input type="text" value="One Life Center" readOnly />
                </div>
                <div className="setting-item">
                  <label>Email</label>
                  <input type="email" value="admin@onelifecenter.org" readOnly />
                </div>
                <div className="setting-item">
                  <label>Phone</label>
                  <input type="tel" value="(555) 123-4567" readOnly />
                </div>
              </div>
            </div>
            <div className="settings-section">
              <h3>Notifications</h3>
              <div className="settings-group">
                <div className="setting-toggle">
                  <span>Email notifications for new donations</span>
                  <div className="toggle active"></div>
                </div>
                <div className="setting-toggle">
                  <span>Weekly summary reports</span>
                  <div className="toggle active"></div>
                </div>
                <div className="setting-toggle">
                  <span>Failed transaction alerts</span>
                  <div className="toggle active"></div>
                </div>
                <div className="setting-toggle">
                  <span>New donor notifications</span>
                  <div className="toggle"></div>
                </div>
              </div>
            </div>
            <div className="settings-section">
              <h3>Payment Processing</h3>
              <div className="settings-group">
                <div className="setting-item">
                  <label>Processing Fee</label>
                  <input type="text" value="2.9% + $0.30" readOnly />
                </div>
                <div className="setting-item">
                  <label>Payout Schedule</label>
                  <input type="text" value="Weekly (Every Monday)" readOnly />
                </div>
              </div>
            </div>
          </div>
        )
      default:
        return (
          <div className="coming-soon">
            <img src="/coming-soon.png" alt="Coming Soon" />
            <h2>Something great is on the way</h2>
            <p>We're building a giving platform that helps your church raise more with less fees and less hassle.</p>
          </div>
        )
    }
  }

  const getIcon = (iconName, isActive) => {
    const strokeColor = isActive ? 'white' : '#343637'
    const icons = {
      home: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.9999 15.7566V19.3566M11.1359 4.288L4.89595 8.968C4.53334 9.23997 4.31995 9.66678 4.31995 10.12V17.9165C4.31995 18.7119 4.96465 19.3565 5.75995 19.3565H18.2399C19.0352 19.3565 19.6799 18.7119 19.6799 17.9165V10.12C19.6799 9.66678 19.4665 9.23997 19.1039 8.968L12.8639 4.288C12.352 3.904 11.6479 3.904 11.1359 4.288Z" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      receipt: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.88 9.24H20.64M2.88 10.68H20.64M4.32 5.64H19.2C19.9953 5.64 20.64 6.28471 20.64 7.08V17.16C20.64 17.9553 19.9953 18.6 19.2 18.6H4.32C3.52471 18.6 2.88 17.9553 2.88 17.16V7.08C2.88 6.28471 3.52471 5.64 4.32 5.64Z" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      people: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.0812 5.17697C14.4159 5.04144 14.7817 4.96681 15.165 4.96681C16.7608 4.96681 18.0544 6.26044 18.0544 7.85621C18.0544 9.45198 16.7608 10.7456 15.165 10.7456C14.7817 10.7456 14.4159 10.671 14.0812 10.5354M16.4651 13.1563H16.8405C19.2748 13.1563 21.2481 15.1296 21.2481 17.5638C21.2481 18.3752 20.5903 19.033 19.7789 19.033H17.6682M11.7246 7.8562C11.7246 9.45197 10.431 10.7456 8.83519 10.7456C7.23941 10.7456 5.94578 9.45197 5.94578 7.8562C5.94578 6.26043 7.23941 4.9668 8.83519 4.9668C10.431 4.9668 11.7246 6.26043 11.7246 7.8562ZM4.22163 19.033H13.4491C14.2605 19.033 14.9183 18.3752 14.9183 17.5638C14.9183 15.1296 12.9449 13.1563 10.5107 13.1563H7.16C4.72577 13.1563 2.75244 15.1296 2.75244 17.5638C2.75244 18.3752 3.41022 19.033 4.22163 19.033Z" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      refresh: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.51965 15.5318C4.28651 15.7512 4.88877 16.3549 5.10852 17.1216H4.32043C3.87861 17.1216 3.51965 16.7636 3.51965 16.3218V15.5318Z" fill={strokeColor} stroke={strokeColor} strokeWidth="1.28"/>
          <path d="M5.84052 6.72187H4.32C3.52471 6.72187 2.88 7.36659 2.88 8.16187L2.88042 9.68198C4.51524 9.68198 5.84052 8.35669 5.84052 6.72187Z" fill={strokeColor}/>
          <path d="M19.2 6.72187H17.6793C17.6793 8.35669 19.0046 9.68198 20.6395 9.68198L20.64 8.16187C20.64 7.36659 19.9952 6.72187 19.2 6.72187Z" fill={strokeColor}/>
          <path d="M20.205 14.76H18.5414M20.2049 14.7628C19.7997 13.917 19.1372 13.2213 18.3123 12.7753C17.4874 12.3294 16.5424 12.1559 15.6129 12.2799C14.6834 12.404 13.817 12.8192 13.1379 13.4658C12.64 13.94 12.2616 14.5208 12.0283 15.1604M12.195 18.5991H13.858M12.195 18.6003C12.6002 19.446 13.2628 20.1418 14.0877 20.5878C14.9126 21.0338 15.8576 21.2072 16.787 21.0831C17.7166 20.9591 18.583 20.5439 19.2621 19.8972C19.7605 19.4226 20.1392 18.8411 20.3724 18.2006M4.32 6.72187H19.2M4.32 6.72187C3.52471 6.72187 2.88 7.36659 2.88 8.16187M4.32 6.72187H5.84052C5.84052 8.35669 4.51524 9.68198 2.88042 9.68198L2.88 8.16187M19.2 6.72187C19.9953 6.72187 20.64 7.36659 20.64 8.16187M19.2 6.72187H17.6794C17.6794 8.35669 19.0046 9.68198 20.6395 9.68198L20.64 8.16187M2.88 8.16187V16.3219M20.64 8.16187V10.8657M2.88 16.3219C2.88 17.1172 3.52471 17.7619 4.32 17.7619M2.88 16.3219L2.88042 14.8013C4.51524 14.8013 5.84052 16.1266 5.84052 17.7613L4.32 17.7619M4.32 17.7619H8.96251M12.7223 10.2383C12.4312 10.0984 12.105 10.02 11.7605 10.02C10.5331 10.02 9.53813 11.015 9.53813 12.2424C9.53813 12.5875 9.61681 12.9143 9.75725 13.2058" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      account_balance_wallet: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.09417 14.5453L8.07594 15.5635M9.09417 9.45468L8.07594 8.43645M15.2039 8.43657L14.1856 9.4548M15.2039 15.5634L14.1856 14.5452M5.39996 4.32H17.88C18.6752 4.32 19.32 4.96471 19.32 5.76V18.24C19.32 19.0353 18.6752 19.68 17.88 19.68H5.39996C4.60467 19.68 3.95996 19.0353 3.95996 18.24V5.76C3.95996 4.96471 4.60467 4.32 5.39996 4.32ZM8.03996 12C8.03996 13.9883 9.6517 15.6 11.64 15.6C13.6282 15.6 15.24 13.9883 15.24 12C15.24 10.0118 13.6282 8.4 11.64 8.4C9.6517 8.4 8.03996 10.0118 8.03996 12Z" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      description: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 14.5H9M12 17.5H9M5.38427 9.00073C5.45795 8.8385 5.56064 8.68917 5.68901 8.56072L11.0567 3.18967C11.1854 3.06093 11.335 2.95799 11.4976 2.88417M5.38427 9.00073H10.0009C10.8297 9.00073 11.5015 8.32851 11.5009 7.49966L11.4976 2.88417M5.38427 9.00073C5.29661 9.19374 5.25 9.40499 5.25 9.62105V19.75C5.25 20.5784 5.92157 21.25 6.75 21.25H17.25C18.0784 21.25 18.75 20.5784 18.75 19.75V4.25C18.75 3.42157 18.0784 2.75 17.25 2.75H12.1177C11.9017 2.75 11.6905 2.79658 11.4976 2.88417" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      settings: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.2498 2.95194C11.7139 2.68399 12.2857 2.68399 12.7498 2.95194L19.4606 6.8264C19.9247 7.09435 20.2106 7.58954 20.2106 8.12544V15.8744C20.2106 16.4103 19.9247 16.9055 19.4606 17.1734L12.7498 21.0479C12.2857 21.3158 11.7139 21.3158 11.2498 21.0479L4.53906 17.1734C4.07496 16.9055 3.78906 16.4103 3.78906 15.8744V8.12544C3.78906 7.58954 4.07496 7.09435 4.53906 6.8264L11.2498 2.95194Z" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15.0841 11.9999C15.0841 13.7037 13.7029 15.0849 11.9991 15.0849C10.2953 15.0849 8.91406 13.7037 8.91406 11.9999C8.91406 10.2961 10.2953 8.91493 11.9991 8.91493C13.7029 8.91493 15.0841 10.2961 15.0841 11.9999Z" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    }
    return icons[iconName] || null
  }

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="dashboard-sidebar">
        <div className="sidebar-header">
          <div className="logo">
            <svg width="64" height="18" viewBox="0 0 64 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_106_126)">
                <path d="M12.7918 4.5H10.2334C9.66825 4.5 9.21008 4.94772 9.21008 5.5V8C9.21008 8.55228 9.66825 9 10.2334 9H12.7918C13.357 9 13.8151 8.55228 13.8151 8V5.5C13.8151 4.94772 13.357 4.5 12.7918 4.5Z" fill="#FF531D"/>
                <path d="M15.3502 6V8.25C15.3502 9.4925 14.3192 10.5 13.0476 10.5H9.97761C8.70611 10.5 7.67509 9.4925 7.67509 8.25V5.25C7.67509 4.0075 8.70611 3 9.97761 3H12.2801C13.127 3 13.8152 2.3275 13.8152 1.5C13.8152 0.6725 13.127 0 12.2801 0H6.40614C5.25232 0 4.14711 0.4475 3.33099 1.245L1.27406 3.255C0.457947 4.0525 0 5.1325 0 6.26V13.5C0 15.985 2.06204 18 4.60505 18H12.0141C13.1679 18 14.2731 17.5525 15.0892 16.755L17.1461 14.745C17.9623 13.9475 18.4202 12.8675 18.4202 11.74V6C18.4202 5.1725 17.732 4.5 16.8852 4.5C16.0384 4.5 15.3502 5.1725 15.3502 6Z" fill="#1A1A1A"/>
                <path d="M23.0253 10.775C23.0253 8.24751 25.1334 6.45251 28.1369 6.45251C31.1404 6.45251 33.2485 8.25001 33.2485 10.775C33.2485 13.3 31.1404 15.085 28.1369 15.085C25.1334 15.085 23.0253 13.3175 23.0253 10.775ZM28.1369 13.1275C29.81 13.1275 30.9613 12.15 30.9613 10.775C30.9613 9.40001 29.81 8.41001 28.1369 8.41001C26.4637 8.41001 25.2971 9.38751 25.2971 10.775C25.2971 12.1625 26.4791 13.1275 28.1369 13.1275Z" fill="#1A1A1A"/>
                <path d="M35.2389 3.14999H37.4212V14.835H35.2389V3.14999Z" fill="#1A1A1A"/>
                <path d="M41.1743 2.91751C41.9674 2.91751 42.5788 3.48751 42.5788 4.16001C42.5788 4.89001 41.9674 5.46001 41.1743 5.46001C40.3812 5.46001 39.7544 4.89001 39.7544 4.16001C39.7544 3.48751 40.3684 2.91751 41.1743 2.91751ZM40.0691 6.68501H42.2514V14.835H40.0691V6.68501Z" fill="#1A1A1A"/>
                <path d="M43.7147 6.685H46.0914C47.0483 8.6725 47.78 10.38 48.6779 12.425H48.724C49.6655 10.2625 50.3972 8.57 51.2952 6.685H53.613L49.9955 14.835H47.3655L43.7173 6.685H43.7147Z" fill="#1A1A1A"/>
                <path d="M54.2245 10.805C54.2245 8.29252 56.3019 6.45251 59.1877 6.45251C61.5184 6.45251 63.9411 7.79501 63.9411 10.79V11.345H56.4221C56.6012 12.5725 57.8267 13.245 59.3233 13.245C60.5181 13.245 61.4902 12.7925 61.9687 11.945L64.0025 12.72C63.3143 14.05 61.6105 15.085 59.3387 15.085C56.4247 15.085 54.227 13.39 54.227 10.805H54.2245ZM61.7282 9.94251C61.5798 8.68751 60.3825 8.20501 59.1724 8.20501C57.7218 8.20501 56.7956 8.92001 56.527 9.94251H61.7282Z" fill="#1A1A1A"/>
              </g>
              <defs>
                <clipPath id="clip0_106_126">
                  <rect width="64" height="18" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </div>
          <button className="mobile-menu-btn">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.25 5.85C2.25 4.58988 2.25 3.95982 2.49524 3.47852C2.71095 3.05516 3.05516 2.71095 3.47852 2.49524C3.95982 2.25 4.58988 2.25 5.85 2.25H12.15C13.4101 2.25 14.0402 2.25 14.5215 2.49524C14.9448 2.71095 15.289 3.05516 15.5048 3.47852C15.75 3.95982 15.75 4.58988 15.75 5.85V12.15C15.75 13.4101 15.75 14.0402 15.5048 14.5215C15.289 14.9448 14.9448 15.289 14.5215 15.5048C14.0402 15.75 13.4101 15.75 12.15 15.75H5.85C4.58988 15.75 3.95982 15.75 3.47852 15.5048C3.05516 15.289 2.71095 14.9448 2.49524 14.5215C2.25 14.0402 2.25 13.4101 2.25 12.15V5.85Z" stroke="#AEB5B9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M1.5 6.25C1.5 4.04086 3.29086 2.25 5.5 2.25H7.5V15.75H5.5C3.29086 15.75 1.5 13.9591 1.5 11.75V6.25Z" fill="#AEB5B9"/>
              <path d="M12.25 10.5L10.75 9L12.25 7.5" stroke="#AEB5B9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="church-selector">
          <div className="church-icon">
            <img src="/church-logo.png" alt="One Life Center" />
          </div>
          <span className="church-name">One Life Center</span>
          <svg className="dropdown-arrow" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.3125 7.21875L9 11.9063L13.6875 7.21875" stroke="#343637" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <nav className="sidebar-nav">
          {navItems.map(item => (
            <button
              key={item.id}
              className={`nav-item ${activeNav === item.id ? 'active' : ''}`}
              onClick={() => setActiveNav(item.id)}
            >
              {getIcon(item.icon, activeNav === item.id)}
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div className="user-profile">
            <div className="user-avatar">
              <img src="/profile-avatar.png" alt="John Davis" />
            </div>
            <div className="user-info">
              <span className="user-name">John Davis</span>
              <span className="user-role">Admin</span>
            </div>
            <button className="user-menu-btn">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.4081 9.9964L15.4081 10.0042C15.408 10.4239 15.067 10.764 14.6473 10.764C14.2278 10.7638 13.8877 10.4237 13.8876 10.0042L13.8876 9.9964C13.8876 9.57679 14.2278 9.23587 14.6473 9.23566C15.0671 9.23566 15.4081 9.57666 15.4081 9.9964Z" fill="#AEB5B9" stroke="#AEB5B9" strokeWidth="1.28"/>
                <path d="M5.04775 8.59601C5.82095 8.59601 6.44775 9.22281 6.44775 9.99601L6.44775 10.004C6.44775 10.7772 5.82095 11.404 5.04775 11.404C4.27455 11.404 3.64775 10.7772 3.64775 10.004L3.64775 9.99601C3.64775 9.22281 4.27455 8.59601 5.04775 8.59601Z" fill="#AEB5B9"/>
                <path d="M11.2478 9.99601C11.2478 9.22281 10.621 8.59601 9.8478 8.59601C9.0746 8.59601 8.4478 9.22281 8.4478 9.99601L8.4478 10.004C8.4478 10.7772 9.0746 11.404 9.8478 11.404C10.621 11.404 11.2478 10.7772 11.2478 10.004L11.2478 9.99601Z" fill="#AEB5B9"/>
              </svg>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        <header className="dashboard-header">
          <div className="header-left">
            <h1>{navItems.find(item => item.id === activeNav)?.label}</h1>
            {activeNav === 'dashboard' && <p>Welcome back John, here is your overview</p>}
          </div>
          <button className="add-donation-btn">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.41942 8.99992H8.99977M8.99977 8.99992H11.5805M8.99977 8.99992V6.41956M8.99977 8.99992V11.5807M15.9375 9C15.9375 12.8315 12.8315 15.9375 9 15.9375C5.16853 15.9375 2.0625 12.8315 2.0625 9C2.0625 5.16853 5.16853 2.0625 9 2.0625C12.8315 2.0625 15.9375 5.16853 15.9375 9Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Add Donation
          </button>
        </header>

        {renderContent()}
      </main>
    </div>
  )
}

export default Dashboard
