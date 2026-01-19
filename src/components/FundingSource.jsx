import { useNavigate, useLocation } from 'react-router-dom'
import './FundingSource.css'

function FundingSource() {
  const navigate = useNavigate()
  const location = useLocation()
  const amount = location.state?.amount || '0'

  const handleSelect = () => {
    navigate('/recurring', { state: { amount } })
  }

  return (
    <div className="funding-container">
      <main className="funding-content">
        <div className="funding-header">
          <h1 className="funding-amount">${amount}</h1>
          <p className="funding-question">How do you want to fund this donation?</p>
        </div>

        <div className="funding-section">
          <h2 className="section-label">Saved</h2>

          <button className="funding-option" onClick={handleSelect}>
            <div className="option-icon chase-icon">
              <img src="/chase-logo.svg" alt="Chase" />
            </div>
            <div className="option-details">
              <span className="option-title">Visa debit</span>
              <span className="option-subtitle">•••• 0987</span>
            </div>
            <img src="/chevron-right.svg" alt="" className="option-chevron" />
          </button>

          <button className="funding-option" onClick={handleSelect}>
            <div className="option-icon chase-icon">
              <img src="/chase-logo.svg" alt="Chase" />
            </div>
            <div className="option-details">
              <span className="option-title">JP Morgan Chase</span>
              <span className="option-subtitle">Ending in 5243</span>
            </div>
            <img src="/chevron-right.svg" alt="" className="option-chevron" />
          </button>
        </div>

        <div className="funding-section">
          <h2 className="section-label">Other</h2>

          <button className="funding-option" onClick={handleSelect}>
            <div className="option-icon">
              <img src="/card-icon.svg" alt="Card" />
            </div>
            <div className="option-details">
              <span className="option-title">Add Card</span>
            </div>
            <img src="/chevron-right.svg" alt="" className="option-chevron" />
          </button>

          <button className="funding-option" onClick={handleSelect}>
            <div className="option-icon">
              <img src="/bank-icon.svg" alt="Bank" />
            </div>
            <div className="option-details">
              <span className="option-title">Add Bank Account</span>
            </div>
            <img src="/chevron-right.svg" alt="" className="option-chevron" />
          </button>

          <button className="funding-option" onClick={handleSelect}>
            <div className="option-icon apple-icon">
              <img src="/apple-icon.svg" alt="Apple Pay" />
            </div>
            <div className="option-details">
              <span className="option-title">Apple Pay</span>
            </div>
            <img src="/chevron-right.svg" alt="" className="option-chevron" />
          </button>
        </div>
      </main>
    </div>
  )
}

export default FundingSource
