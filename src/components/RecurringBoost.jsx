import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './RecurringBoost.css'

function RecurringBoost() {
  const [isRecurring, setIsRecurring] = useState(false)
  const [showRecurringOptions, setShowRecurringOptions] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const [isBoost, setIsBoost] = useState(false)
  const [frequency, setFrequency] = useState('Every Two Weeks')
  const [dayOfWeek, setDayOfWeek] = useState('Sunday')
  const [dayOfMonth, setDayOfMonth] = useState(1)
  const [lastDayOfMonth, setLastDayOfMonth] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const amount = location.state?.amount || '0'

  const boostAmount = (parseFloat(amount) * 0.016).toFixed(2)

  const getOrdinalSuffix = (day) => {
    if (day > 3 && day < 21) return 'th'
    switch (day % 10) {
      case 1: return 'st'
      case 2: return 'nd'
      case 3: return 'rd'
      default: return 'th'
    }
  }

  const handleRecurringToggle = (checked) => {
    if (checked) {
      setIsRecurring(true)
      setShowRecurringOptions(true)
      setIsClosing(false)
    } else {
      setIsRecurring(false)
      setIsClosing(true)
      setTimeout(() => {
        setShowRecurringOptions(false)
        setIsClosing(false)
      }, 300)
    }
  }

  const getFrequencyText = () => {
    if (!isRecurring) return 'One Time'
    if (frequency === 'Monthly') {
      if (lastDayOfMonth) {
        return 'Monthly on the last day'
      }
      return `Monthly on the ${dayOfMonth}${getOrdinalSuffix(dayOfMonth)}`
    }
    return `${frequency} on ${dayOfWeek}s`
  }

  const handleContinue = () => {
    navigate('/review', { state: { amount, frequencyText: getFrequencyText() } })
  }

  return (
    <div className="recurring-container">
      <main className="recurring-content">
        <h1 className="recurring-title">Make your donation recurring.</h1>

        <div className={`option-card ${showRecurringOptions ? 'expanded' : ''}`}>
          <div className="option-card-header">
            <div className="option-card-icon recurring-icon">
              <img src="/calendar-time.svg" alt="Recurring" />
            </div>
            <div className="option-card-text">
              <span className="option-card-title">Make it Recurring</span>
              <span className="option-card-subtitle">This will help cover the transfer fee for One Life Center.</span>
            </div>
            <label className="toggle">
              <input
                type="checkbox"
                checked={isRecurring}
                onChange={(e) => handleRecurringToggle(e.target.checked)}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>

          {showRecurringOptions && (
            <div className={`recurring-options ${isClosing ? 'closing' : ''}`}>
              <div className="dropdown-row">
                <div className="dropdown-text">
                  <span className="dropdown-label">When:</span>
                  <select
                    value={frequency}
                    onChange={(e) => setFrequency(e.target.value)}
                    className="dropdown-select"
                  >
                    <option value="Weekly">Weekly</option>
                    <option value="Every Two Weeks">Every Two Weeks</option>
                    <option value="Monthly">Monthly</option>
                  </select>
                </div>
                <img src="/chevron-down.svg" alt="" className="dropdown-chevron" />
              </div>
              <div className="dropdown-row">
                <div className="dropdown-text">
                  <span className="dropdown-label">On:</span>
                  {frequency === 'Monthly' ? (
                    <select
                      value={lastDayOfMonth ? 'last' : dayOfMonth}
                      onChange={(e) => {
                        if (e.target.value === 'last') {
                          setLastDayOfMonth(true)
                        } else {
                          setLastDayOfMonth(false)
                          setDayOfMonth(parseInt(e.target.value))
                        }
                      }}
                      className="dropdown-select"
                    >
                      <option value="last">Last day of the month</option>
                      {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                        <option key={day} value={day}>
                          {day}{getOrdinalSuffix(day)}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <select
                      value={dayOfWeek}
                      onChange={(e) => setDayOfWeek(e.target.value)}
                      className="dropdown-select"
                    >
                      <option value="Sunday">Sunday</option>
                      <option value="Monday">Monday</option>
                      <option value="Tuesday">Tuesday</option>
                      <option value="Wednesday">Wednesday</option>
                      <option value="Thursday">Thursday</option>
                      <option value="Friday">Friday</option>
                      <option value="Saturday">Saturday</option>
                    </select>
                  )}
                </div>
                <img src="/chevron-down.svg" alt="" className="dropdown-chevron" />
              </div>
            </div>
          )}
        </div>

        <div className="option-card boost-card">
          <div className="option-card-header">
            <div className="option-card-icon boost-icon">
              <img src="/boost-icon.svg" alt="Boost" />
            </div>
            <div className="option-card-text">
              <span className="option-card-title">Boost Your Donation</span>
              <span className="option-card-subtitle">This will help cover the transfer fee for One Life Center.</span>
            </div>
          </div>
          <div className="divider"></div>
          <div className="boost-toggle-row">
            <span className="boost-label">Add a ${boostAmount} boost</span>
            <label className="toggle">
              <input
                type="checkbox"
                checked={isBoost}
                onChange={(e) => setIsBoost(e.target.checked)}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>
        </div>
      </main>

      <div className="recurring-footer">
        <button className="continue-btn active" onClick={handleContinue}>
          Continue
        </button>
      </div>
    </div>
  )
}

export default RecurringBoost
