import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import confetti from 'canvas-confetti'
import './ThankYou.css'

function ThankYou() {
  const location = useLocation()
  const navigate = useNavigate()
  const rawAmount = location.state?.amount || "152.40"
  const formattedAmount = parseFloat(rawAmount).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

  useEffect(() => {
    const end = Date.now() + 3 * 1000 // 3 seconds
    const colors = ["#FF531D", "#1A1A1A"]

    const frame = () => {
      if (Date.now() > end) return

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      })
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      })

      requestAnimationFrame(frame)
    }

    frame()
  }, [])

  return (
    <div className="thank-you-container">
      <main className="thank-you-content">
        <h1 className="thank-you-heading">
          Thank You for
          <br />
          your
        </h1>

        <div className="praying-hands" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          <img
            src="/praying-hands.png"
            alt="Praying hands"
            className="hands-image"
          />
        </div>

        <h2 className="donation-amount">
          ${formattedAmount}
          <br />
          donation!
        </h2>
      </main>

      <footer className="thank-you-footer">
        <div className="olive-logo">
          <img src="/olive-logo.svg" alt="Olive" className="olive-logo-img" />
        </div>
        <p className="powered-by">
          Powered by Olive Payments Inc.{' '}
          <a href="https://getolive.co" target="_blank" rel="noopener noreferrer">
            Getolive.co
          </a>
        </p>
      </footer>
    </div>
  )
}

export default ThankYou
