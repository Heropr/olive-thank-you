import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DonationAmount from './components/DonationAmount'
import UserInfo from './components/UserInfo'
import Verification from './components/Verification'
import ThankYou from './components/ThankYou'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DonationAmount />} />
        <Route path="/user-info" element={<UserInfo />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
