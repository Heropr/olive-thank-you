import { useNavigate, useLocation } from 'react-router-dom'
import './FundingSource.css'

function FundingSource() {
  const navigate = useNavigate()
  const location = useLocation()
  const amount = location.state?.amount || '0'

  const handleSelect = () => {
    navigate('/thank-you', { state: { amount } })
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
            <div className="option-icon card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="5" width="20" height="14" rx="2" stroke="white" strokeWidth="2"/>
                <line x1="2" y1="10" x2="22" y2="10" stroke="white" strokeWidth="2"/>
              </svg>
            </div>
            <div className="option-details">
              <span className="option-title">Visa debit</span>
              <span className="option-subtitle">•••• 0987</span>
            </div>
            <svg className="option-chevron" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="#AEB5B9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <button className="funding-option" onClick={handleSelect}>
            <div className="option-icon bank-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 21H21M4 18H20M6 18V14M10 18V14M14 18V14M18 18V14M12 3L21 10H3L12 3Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="option-details">
              <span className="option-title">JP Morgan Chase</span>
              <span className="option-subtitle">Ending in 5243</span>
            </div>
            <svg className="option-chevron" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="#AEB5B9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="funding-section">
          <h2 className="section-label">Other</h2>

          <button className="funding-option" onClick={handleSelect}>
            <div className="option-icon card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="5" width="20" height="14" rx="2" stroke="white" strokeWidth="2"/>
                <line x1="2" y1="10" x2="22" y2="10" stroke="white" strokeWidth="2"/>
              </svg>
            </div>
            <div className="option-details">
              <span className="option-title">Add Card</span>
            </div>
            <svg className="option-chevron" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="#AEB5B9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <button className="funding-option" onClick={handleSelect}>
            <div className="option-icon bank-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 21H21M4 18H20M6 18V14M10 18V14M14 18V14M18 18V14M12 3L21 10H3L12 3Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="option-details">
              <span className="option-title">Add Bank Account</span>
            </div>
            <svg className="option-chevron" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="#AEB5B9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <button className="funding-option" onClick={handleSelect}>
            <div className="option-icon apple-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M17.05 20.28C16.07 21.23 15 21.08 13.97 20.63C12.88 20.17 11.88 20.15 10.73 20.63C9.29 21.25 8.53 21.07 7.67 20.28C2.79 15.25 3.51 7.59 9.05 7.31C10.4 7.38 11.34 8.05 12.13 8.11C13.31 7.87 14.44 7.18 15.7 7.27C17.21 7.39 18.35 7.99 19.1 9.07C15.98 10.94 16.72 15.05 19.58 16.2C18.93 17.82 18.1 19.42 17.04 20.29L17.05 20.28ZM12.03 7.25C11.88 5.02 13.69 3.18 15.77 3C16.06 5.58 13.43 7.5 12.03 7.25Z" fill="white"/>
              </svg>
            </div>
            <div className="option-details">
              <span className="option-title">Apple Pay</span>
            </div>
            <svg className="option-chevron" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="#AEB5B9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </main>
    </div>
  )
}

export default FundingSource
