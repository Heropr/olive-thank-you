import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DonationAmount from './components/DonationAmount'
import UserInfo from './components/UserInfo'
import Verification from './components/Verification'
import FundingSource from './components/FundingSource'
import RecurringBoost from './components/RecurringBoost'
import Review from './components/Review'
import ThankYou from './components/ThankYou'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DonationAmount />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user-info" element={<UserInfo />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/funding-source" element={<FundingSource />} />
        <Route path="/recurring" element={<RecurringBoost />} />
        <Route path="/review" element={<Review />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
