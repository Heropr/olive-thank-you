import './IOSKeyboard.css'

function IOSKeyboard({ onKeyPress, visible }) {
  if (!visible) return null

  const handleKey = (key) => {
    onKeyPress(key)
  }

  return (
    <div className="ios-keyboard">
      <div className="ios-keyboard-row">
        <button className="ios-key" onClick={() => handleKey('1')}>1</button>
        <button className="ios-key" onClick={() => handleKey('2')}>2</button>
        <button className="ios-key" onClick={() => handleKey('3')}>3</button>
      </div>
      <div className="ios-keyboard-row">
        <button className="ios-key" onClick={() => handleKey('4')}>4</button>
        <button className="ios-key" onClick={() => handleKey('5')}>5</button>
        <button className="ios-key" onClick={() => handleKey('6')}>6</button>
      </div>
      <div className="ios-keyboard-row">
        <button className="ios-key" onClick={() => handleKey('7')}>7</button>
        <button className="ios-key" onClick={() => handleKey('8')}>8</button>
        <button className="ios-key" onClick={() => handleKey('9')}>9</button>
      </div>
      <div className="ios-keyboard-row">
        <button className="ios-key" onClick={() => handleKey('.')}>.</button>
        <button className="ios-key" onClick={() => handleKey('0')}>0</button>
        <button className="ios-key backspace" onClick={() => handleKey('backspace')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 11L15 17M15 11L9 17" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round"/>
            <path d="M8.5 6H18.5C19.6046 6 20.5 6.89543 20.5 8V16C20.5 17.1046 19.6046 18 18.5 18H8.5L3.5 12L8.5 6Z" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default IOSKeyboard
