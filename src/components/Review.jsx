import { useNavigate, useLocation } from 'react-router-dom'
import './Review.css'

function Review() {
  const navigate = useNavigate()
  const location = useLocation()
  const amount = location.state?.amount || '150'
  const transferFee = (parseFloat(amount) * 0.016).toFixed(2)
  const total = (parseFloat(amount) + parseFloat(transferFee)).toFixed(2)

  const handleDonate = () => {
    navigate('/thank-you', { state: { amount: total } })
  }

  return (
    <div className="review-container">
      <main className="review-content">
        <div className="donation-card">
          <div className="donation-card-inner">
            <span className="donation-card-label">You are donating</span>
            <div className="donation-card-amount">
              <span className="dollar-sign">$</span>
              <span className="amount-value">{total}</span>
            </div>
          </div>
          <div className="security-badge">
            <img src="/security-badge.svg" alt="Secured" />
          </div>
        </div>

        <div className="review-details">
          <div className="detail-row">
            <span className="detail-label">Donation Amount</span>
            <span className="detail-value">${amount}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">For</span>
            <span className="detail-value">General</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">To</span>
            <div className="detail-value org-value">
              <img src="/merchant-logo.png" alt="One Life Center" className="org-icon" />
              <span>One Life Center</span>
            </div>
          </div>
          <div className="detail-row">
            <span className="detail-label">From</span>
            <span className="detail-value">Visa debit 0987</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Transfer Fee</span>
            <span className="detail-value">${transferFee}</span>
          </div>
          <div className="detail-divider"></div>
          <div className="detail-row total-row">
            <span className="detail-label">Total</span>
            <span className="detail-value">${total}</span>
          </div>
        </div>
      </main>

      <div className="review-footer">
        <p className="privacy-text">
          By tapping donate you agree to our <a href="#" className="privacy-link">Privacy Policy</a>. This donation is being processed by Olive Payments Inc.
        </p>
        <button className="donate-btn" onClick={handleDonate}>
          Donate
        </button>
      </div>
    </div>
  )
}

export default Review
