import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import IOSKeyboard from './IOSKeyboard'
import './DonationAmount.css'

function DonationAmount() {
  const [amount, setAmount] = useState('')
  const [hasTyped, setHasTyped] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('')
  const [showKeyboard, setShowKeyboard] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const inputRef = useRef(null)
  const navigate = useNavigate()

  const suggestedAmount = '100'
  const presetAmounts = ['50', '100', '500']

  useEffect(() => {
    // Check if device is mobile (touch device)
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(hover: none) and (pointer: coarse)').matches)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleAmountChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '')
    if (!hasTyped && value) {
      setHasTyped(true)
    }
    if (value === '' && hasTyped) {
      setHasTyped(false)
    }
    setAmount(value)
  }

  const handleKeyboardInput = (key) => {
    if (key === 'backspace') {
      setAmount(prev => {
        const newAmount = prev.slice(0, -1)
        if (newAmount === '') {
          setHasTyped(false)
        }
        return newAmount
      })
    } else {
      if (!hasTyped) {
        setHasTyped(true)
        setAmount(key)
      } else {
        setAmount(prev => {
          if (prev.length >= 6) return prev
          return prev + key
        })
      }
    }
  }

  const handlePresetClick = (preset) => {
    setHasTyped(true)
    setAmount(preset)
  }

  const handleAmountClick = () => {
    if (isMobile) {
      inputRef.current?.focus()
    } else {
      setShowKeyboard(true)
    }
  }

  const displayAmount = hasTyped ? amount : suggestedAmount
  const finalAmount = hasTyped ? amount : suggestedAmount

  const handleContinue = () => {
    if (finalAmount && parseInt(finalAmount) > 0) {
      navigate('/user-info', { state: { amount: finalAmount } })
    }
  }

  const isValidAmount = hasTyped && finalAmount && parseInt(finalAmount) > 0 && selectedCategory

  return (
    <div className="donation-container">
      <main className="donation-content">
        <div className="recipient-badge">
          <span className="recipient-text">You are giving to</span>
          <div className="recipient-org">
            <img src="/merchant-logo.png" alt="One Life Center" className="org-icon-img" />
            <span className="org-name">One Life Center</span>
          </div>
        </div>

        <div className="donation-content-inner">
          <div className="amount-display" onClick={handleAmountClick}>
            <div className="amount-input">
              <span className="currency">$</span>
              {!hasTyped && <span className="cursor"></span>}
              <span className={`amount-value ${hasTyped ? 'typed' : ''}`}>{displayAmount || '0'}</span>
              {hasTyped && <span className="cursor"></span>}
              <input
                ref={inputRef}
                type="number"
                inputMode="numeric"
                pattern="[0-9]*"
                value={amount}
                onChange={handleAmountChange}
                className="amount-hidden-input"
              />
            </div>
            <span className="amount-label">Donation</span>
          </div>

          <label className="category-select">
          <span className="category-label">For:</span>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className={`category-dropdown ${selectedCategory ? 'selected' : ''}`}
          >
            <option value="">Select</option>
            <option value="general">General</option>
            <option value="building">New Building</option>
            <option value="foodbank">Food Bank</option>
            <option value="missions">Missions</option>
          </select>
          <img src="/chevron-down.svg" alt="" className="dropdown-icon" />
          </label>

          <div className="preset-amounts">
            {presetAmounts.map((preset) => (
              <button
                key={preset}
                className="preset-btn"
                onClick={() => handlePresetClick(preset)}
              >
                ${preset}
              </button>
            ))}
          </div>

          <button
            className={`continue-btn ${isValidAmount ? 'active' : ''}`}
            onClick={handleContinue}
            disabled={!isValidAmount}
          >
            Continue
          </button>
        </div>
      </main>

      {showKeyboard && (
        <div className="keyboard-overlay" onClick={() => setShowKeyboard(false)} />
      )}

      <IOSKeyboard
        visible={showKeyboard && !isMobile}
        onKeyPress={handleKeyboardInput}
      />
    </div>
  )
}

export default DonationAmount
