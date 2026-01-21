import { useState, useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './Verification.css'

function Verification() {
  const [code, setCode] = useState(['', '', '', '', '', ''])
  const [countdown, setCountdown] = useState(30)
  const [canResend, setCanResend] = useState(false)
  const inputRefs = useRef([])
  const navigate = useNavigate()
  const location = useLocation()
  const amount = location.state?.amount || '0'
  const phoneNumber = location.state?.phoneNumber || ''

  useEffect(() => {
    // Focus first input on mount
    inputRefs.current[0]?.focus()
  }, [])

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000)
      return () => clearTimeout(timer)
    } else {
      setCanResend(true)
    }
  }, [countdown])

  const formatPhoneNumber = (number) => {
    if (!number) return ''
    if (number.length <= 3) return `(${number}`
    if (number.length <= 6) return `(${number.slice(0, 3)}) ${number.slice(3)}`
    return `(${number.slice(0, 3)}) ${number.slice(3, 6)}-${number.slice(6)}`
  }

  const handleChange = (index, value) => {
    // Only allow numbers
    const digit = value.replace(/[^0-9]/g, '')
    if (digit.length > 1) return

    const newCode = [...code]
    newCode[index] = digit
    setCode(newCode)

    // Auto-advance to next input
    if (digit && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }

    // Check if all digits entered
    if (newCode.every(d => d !== '') && newCode.join('').length === 6) {
      // Navigate to thank you after a brief delay
      setTimeout(() => {
        navigate('/funding-source', { state: { amount } })
      }, 300)
    }
  }

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handlePaste = (e) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData('text').replace(/[^0-9]/g, '').slice(0, 6)
    if (pastedData) {
      const newCode = [...code]
      for (let i = 0; i < pastedData.length && i < 6; i++) {
        newCode[i] = pastedData[i]
      }
      setCode(newCode)

      // Focus the next empty input or the last one
      const nextEmptyIndex = newCode.findIndex(d => d === '')
      if (nextEmptyIndex !== -1) {
        inputRefs.current[nextEmptyIndex]?.focus()
      } else {
        inputRefs.current[5]?.focus()
        // All digits entered, navigate
        setTimeout(() => {
          navigate('/funding-source', { state: { amount } })
        }, 300)
      }
    }
  }

  const handleResend = () => {
    if (canResend) {
      setCountdown(30)
      setCanResend(false)
      setCode(['', '', '', '', '', ''])
      inputRefs.current[0]?.focus()
    }
  }

  return (
    <div className="verification-container">
      <main className="verification-content">
        <div className="verification-header">
          <h1 className="verification-title">Verify your phone</h1>
          <p className="verification-subtitle">
            We sent a text message with your verification code to {formatPhoneNumber(phoneNumber)}
          </p>
        </div>

        <div className="code-inputs" onPaste={handlePaste}>
          {code.map((digit, index) => (
            <input
              key={index}
              ref={el => inputRefs.current[index] = el}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className={`code-input ${digit ? 'filled' : ''}`}
              placeholder="0"
            />
          ))}
        </div>

        <div className="resend-section">
          <button
            className={`resend-link ${canResend ? 'active' : ''}`}
            onClick={handleResend}
            disabled={!canResend}
          >
            Resend code
          </button>
          {!canResend && (
            <span className="resend-countdown">Code will resend in {countdown}sec</span>
          )}
        </div>

      </main>
    </div>
  )
}

export default Verification
