import { useState, useEffect } from 'react'
import { useNavigate, useLocation, useNavigationType } from 'react-router-dom'
import './UserInfo.css'

function UserInfo() {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [keyboardHeight, setKeyboardHeight] = useState(0)
  const navigate = useNavigate()
  const location = useLocation()
  const navType = useNavigationType()
  const amount = location.state?.amount || '0'

  useEffect(() => {
    const handleResize = () => {
      if (window.visualViewport) {
        const heightDiff = window.innerHeight - window.visualViewport.height
        setKeyboardHeight(heightDiff > 0 ? heightDiff : 0)
      }
    }

    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', handleResize)
      window.visualViewport.addEventListener('scroll', handleResize)
    }

    return () => {
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', handleResize)
        window.visualViewport.removeEventListener('scroll', handleResize)
      }
    }
  }, [])

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '')
    if (value.length <= 10) {
      setPhoneNumber(value)
    }
  }

  const handleContinue = () => {
    if (phoneNumber.length >= 10) {
      navigate('/verification', { state: { amount, phoneNumber } })
    }
  }

  const isValid = phoneNumber.length >= 10

  const formatPhoneNumber = (number) => {
    if (!number) return ''
    if (number.length <= 3) return `(${number}`
    if (number.length <= 6) return `(${number.slice(0, 3)}) ${number.slice(3)}`
    return `(${number.slice(0, 3)}) ${number.slice(3, 6)}-${number.slice(6)}`
  }

  return (
    <div className={`userinfo-container ${navType === 'POP' ? 'page-transition-back' : 'page-transition-forward'}`}>
      <main className="userinfo-content">
        <div className="userinfo-header">
          <h1 className="userinfo-title">Keep your giving secure</h1>
          <p className="userinfo-subtitle">Add your phone number so we can confirm it's really you.</p>
        </div>

        <div className="userinfo-form">
          <input
            type="tel"
            inputMode="numeric"
            pattern="[0-9]*"
            placeholder="Phone number"
            value={formatPhoneNumber(phoneNumber)}
            onChange={handlePhoneChange}
            className="userinfo-input"
          />
        </div>

      </main>

      <div className="sticky-cta" style={{ bottom: keyboardHeight }}>
        <button
          className={`continue-btn ${isValid ? 'active' : ''}`}
          onClick={handleContinue}
          disabled={!isValid}
        >
          Continue
        </button>
      </div>
    </div>
  )
}

export default UserInfo
