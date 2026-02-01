import { useState } from 'react'
import './Dashboard.css'

function Dashboard() {
  const [activeNav, setActiveNav] = useState('dashboard')

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'home' },
    { id: 'transactions', label: 'Transactions', icon: 'receipt' },
    { id: 'donor', label: 'Donor', icon: 'people' },
    { id: 'recurring', label: 'Recurring', icon: 'refresh' },
    { id: 'funds', label: 'Funds', icon: 'account_balance_wallet' },
    { id: 'reports', label: 'Reports', icon: 'description' },
    { id: 'settings', label: 'Settings', icon: 'settings' },
  ]

  const stats = [
    {
      label: 'This Week',
      amount: '$47,250.32',
      change: '+1.7%',
      isPositive: true,
      comparison: 'vs. $46,460.69 last week'
    },
    {
      label: 'This Month',
      amount: '$287,500',
      change: '-3.7%',
      isPositive: false,
      comparison: 'vs. $298,546.21 last month'
    },
    {
      label: 'Year To Date',
      amount: '$704,381.92',
      change: '+1.7%',
      isPositive: true,
      comparison: 'vs. $692,607.59 last year'
    }
  ]

  const getIcon = (iconName, isActive) => {
    const strokeColor = isActive ? 'white' : '#343637'
    const icons = {
      home: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.9999 15.7566V19.3566M11.1359 4.288L4.89595 8.968C4.53334 9.23997 4.31995 9.66678 4.31995 10.12V17.9165C4.31995 18.7119 4.96465 19.3565 5.75995 19.3565H18.2399C19.0352 19.3565 19.6799 18.7119 19.6799 17.9165V10.12C19.6799 9.66678 19.4665 9.23997 19.1039 8.968L12.8639 4.288C12.352 3.904 11.6479 3.904 11.1359 4.288Z" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      receipt: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.88 9.24H20.64M2.88 10.68H20.64M4.32 5.64H19.2C19.9953 5.64 20.64 6.28471 20.64 7.08V17.16C20.64 17.9553 19.9953 18.6 19.2 18.6H4.32C3.52471 18.6 2.88 17.9553 2.88 17.16V7.08C2.88 6.28471 3.52471 5.64 4.32 5.64Z" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      people: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.0812 5.17697C14.4159 5.04144 14.7817 4.96681 15.165 4.96681C16.7608 4.96681 18.0544 6.26044 18.0544 7.85621C18.0544 9.45198 16.7608 10.7456 15.165 10.7456C14.7817 10.7456 14.4159 10.671 14.0812 10.5354M16.4651 13.1563H16.8405C19.2748 13.1563 21.2481 15.1296 21.2481 17.5638C21.2481 18.3752 20.5903 19.033 19.7789 19.033H17.6682M11.7246 7.8562C11.7246 9.45197 10.431 10.7456 8.83519 10.7456C7.23941 10.7456 5.94578 9.45197 5.94578 7.8562C5.94578 6.26043 7.23941 4.9668 8.83519 4.9668C10.431 4.9668 11.7246 6.26043 11.7246 7.8562ZM4.22163 19.033H13.4491C14.2605 19.033 14.9183 18.3752 14.9183 17.5638C14.9183 15.1296 12.9449 13.1563 10.5107 13.1563H7.16C4.72577 13.1563 2.75244 15.1296 2.75244 17.5638C2.75244 18.3752 3.41022 19.033 4.22163 19.033Z" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      refresh: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.51965 15.5318C4.28651 15.7512 4.88877 16.3549 5.10852 17.1216H4.32043C3.87861 17.1216 3.51965 16.7636 3.51965 16.3218V15.5318Z" fill={strokeColor} stroke={strokeColor} strokeWidth="1.28"/>
          <path d="M5.84052 6.72187H4.32C3.52471 6.72187 2.88 7.36659 2.88 8.16187L2.88042 9.68198C4.51524 9.68198 5.84052 8.35669 5.84052 6.72187Z" fill={strokeColor}/>
          <path d="M19.2 6.72187H17.6793C17.6793 8.35669 19.0046 9.68198 20.6395 9.68198L20.64 8.16187C20.64 7.36659 19.9952 6.72187 19.2 6.72187Z" fill={strokeColor}/>
          <path d="M20.205 14.76H18.5414M20.2049 14.7628C19.7997 13.917 19.1372 13.2213 18.3123 12.7753C17.4874 12.3294 16.5424 12.1559 15.6129 12.2799C14.6834 12.404 13.817 12.8192 13.1379 13.4658C12.64 13.94 12.2616 14.5208 12.0283 15.1604M12.195 18.5991H13.858M12.195 18.6003C12.6002 19.446 13.2628 20.1418 14.0877 20.5878C14.9126 21.0338 15.8576 21.2072 16.787 21.0831C17.7166 20.9591 18.583 20.5439 19.2621 19.8972C19.7605 19.4226 20.1392 18.8411 20.3724 18.2006M4.32 6.72187H19.2M4.32 6.72187C3.52471 6.72187 2.88 7.36659 2.88 8.16187M4.32 6.72187H5.84052C5.84052 8.35669 4.51524 9.68198 2.88042 9.68198L2.88 8.16187M19.2 6.72187C19.9953 6.72187 20.64 7.36659 20.64 8.16187M19.2 6.72187H17.6794C17.6794 8.35669 19.0046 9.68198 20.6395 9.68198L20.64 8.16187M2.88 8.16187V16.3219M20.64 8.16187V10.8657M2.88 16.3219C2.88 17.1172 3.52471 17.7619 4.32 17.7619M2.88 16.3219L2.88042 14.8013C4.51524 14.8013 5.84052 16.1266 5.84052 17.7613L4.32 17.7619M4.32 17.7619H8.96251M12.7223 10.2383C12.4312 10.0984 12.105 10.02 11.7605 10.02C10.5331 10.02 9.53813 11.015 9.53813 12.2424C9.53813 12.5875 9.61681 12.9143 9.75725 13.2058" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      account_balance_wallet: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.09417 14.5453L8.07594 15.5635M9.09417 9.45468L8.07594 8.43645M15.2039 8.43657L14.1856 9.4548M15.2039 15.5634L14.1856 14.5452M5.39996 4.32H17.88C18.6752 4.32 19.32 4.96471 19.32 5.76V18.24C19.32 19.0353 18.6752 19.68 17.88 19.68H5.39996C4.60467 19.68 3.95996 19.0353 3.95996 18.24V5.76C3.95996 4.96471 4.60467 4.32 5.39996 4.32ZM8.03996 12C8.03996 13.9883 9.6517 15.6 11.64 15.6C13.6282 15.6 15.24 13.9883 15.24 12C15.24 10.0118 13.6282 8.4 11.64 8.4C9.6517 8.4 8.03996 10.0118 8.03996 12Z" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      description: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 14.5H9M12 17.5H9M5.38427 9.00073C5.45795 8.8385 5.56064 8.68917 5.68901 8.56072L11.0567 3.18967C11.1854 3.06093 11.335 2.95799 11.4976 2.88417M5.38427 9.00073H10.0009C10.8297 9.00073 11.5015 8.32851 11.5009 7.49966L11.4976 2.88417M5.38427 9.00073C5.29661 9.19374 5.25 9.40499 5.25 9.62105V19.75C5.25 20.5784 5.92157 21.25 6.75 21.25H17.25C18.0784 21.25 18.75 20.5784 18.75 19.75V4.25C18.75 3.42157 18.0784 2.75 17.25 2.75H12.1177C11.9017 2.75 11.6905 2.79658 11.4976 2.88417" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      settings: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.2498 2.95194C11.7139 2.68399 12.2857 2.68399 12.7498 2.95194L19.4606 6.8264C19.9247 7.09435 20.2106 7.58954 20.2106 8.12544V15.8744C20.2106 16.4103 19.9247 16.9055 19.4606 17.1734L12.7498 21.0479C12.2857 21.3158 11.7139 21.3158 11.2498 21.0479L4.53906 17.1734C4.07496 16.9055 3.78906 16.4103 3.78906 15.8744V8.12544C3.78906 7.58954 4.07496 7.09435 4.53906 6.8264L11.2498 2.95194Z" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15.0841 11.9999C15.0841 13.7037 13.7029 15.0849 11.9991 15.0849C10.2953 15.0849 8.91406 13.7037 8.91406 11.9999C8.91406 10.2961 10.2953 8.91493 11.9991 8.91493C13.7029 8.91493 15.0841 10.2961 15.0841 11.9999Z" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    }
    return icons[iconName] || null
  }

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="dashboard-sidebar">
        <div className="sidebar-header">
          <div className="logo">
            <svg width="64" height="18" viewBox="0 0 64 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_106_126)">
                <path d="M12.7918 4.5H10.2334C9.66825 4.5 9.21008 4.94772 9.21008 5.5V8C9.21008 8.55228 9.66825 9 10.2334 9H12.7918C13.357 9 13.8151 8.55228 13.8151 8V5.5C13.8151 4.94772 13.357 4.5 12.7918 4.5Z" fill="#FF531D"/>
                <path d="M15.3502 6V8.25C15.3502 9.4925 14.3192 10.5 13.0476 10.5H9.97761C8.70611 10.5 7.67509 9.4925 7.67509 8.25V5.25C7.67509 4.0075 8.70611 3 9.97761 3H12.2801C13.127 3 13.8152 2.3275 13.8152 1.5C13.8152 0.6725 13.127 0 12.2801 0H6.40614C5.25232 0 4.14711 0.4475 3.33099 1.245L1.27406 3.255C0.457947 4.0525 0 5.1325 0 6.26V13.5C0 15.985 2.06204 18 4.60505 18H12.0141C13.1679 18 14.2731 17.5525 15.0892 16.755L17.1461 14.745C17.9623 13.9475 18.4202 12.8675 18.4202 11.74V6C18.4202 5.1725 17.732 4.5 16.8852 4.5C16.0384 4.5 15.3502 5.1725 15.3502 6Z" fill="#1A1A1A"/>
                <path d="M23.0253 10.775C23.0253 8.24751 25.1334 6.45251 28.1369 6.45251C31.1404 6.45251 33.2485 8.25001 33.2485 10.775C33.2485 13.3 31.1404 15.085 28.1369 15.085C25.1334 15.085 23.0253 13.3175 23.0253 10.775ZM28.1369 13.1275C29.81 13.1275 30.9613 12.15 30.9613 10.775C30.9613 9.40001 29.81 8.41001 28.1369 8.41001C26.4637 8.41001 25.2971 9.38751 25.2971 10.775C25.2971 12.1625 26.4791 13.1275 28.1369 13.1275Z" fill="#1A1A1A"/>
                <path d="M35.2389 3.14999H37.4212V14.835H35.2389V3.14999Z" fill="#1A1A1A"/>
                <path d="M41.1743 2.91751C41.9674 2.91751 42.5788 3.48751 42.5788 4.16001C42.5788 4.89001 41.9674 5.46001 41.1743 5.46001C40.3812 5.46001 39.7544 4.89001 39.7544 4.16001C39.7544 3.48751 40.3684 2.91751 41.1743 2.91751ZM40.0691 6.68501H42.2514V14.835H40.0691V6.68501Z" fill="#1A1A1A"/>
                <path d="M43.7147 6.685H46.0914C47.0483 8.6725 47.78 10.38 48.6779 12.425H48.724C49.6655 10.2625 50.3972 8.57 51.2952 6.685H53.613L49.9955 14.835H47.3655L43.7173 6.685H43.7147Z" fill="#1A1A1A"/>
                <path d="M54.2245 10.805C54.2245 8.29252 56.3019 6.45251 59.1877 6.45251C61.5184 6.45251 63.9411 7.79501 63.9411 10.79V11.345H56.4221C56.6012 12.5725 57.8267 13.245 59.3233 13.245C60.5181 13.245 61.4902 12.7925 61.9687 11.945L64.0025 12.72C63.3143 14.05 61.6105 15.085 59.3387 15.085C56.4247 15.085 54.227 13.39 54.227 10.805H54.2245ZM61.7282 9.94251C61.5798 8.68751 60.3825 8.20501 59.1724 8.20501C57.7218 8.20501 56.7956 8.92001 56.527 9.94251H61.7282Z" fill="#1A1A1A"/>
              </g>
              <defs>
                <clipPath id="clip0_106_126">
                  <rect width="64" height="18" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </div>
          <button className="mobile-menu-btn">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.25 5.85C2.25 4.58988 2.25 3.95982 2.49524 3.47852C2.71095 3.05516 3.05516 2.71095 3.47852 2.49524C3.95982 2.25 4.58988 2.25 5.85 2.25H12.15C13.4101 2.25 14.0402 2.25 14.5215 2.49524C14.9448 2.71095 15.289 3.05516 15.5048 3.47852C15.75 3.95982 15.75 4.58988 15.75 5.85V12.15C15.75 13.4101 15.75 14.0402 15.5048 14.5215C15.289 14.9448 14.9448 15.289 14.5215 15.5048C14.0402 15.75 13.4101 15.75 12.15 15.75H5.85C4.58988 15.75 3.95982 15.75 3.47852 15.5048C3.05516 15.289 2.71095 14.9448 2.49524 14.5215C2.25 14.0402 2.25 13.4101 2.25 12.15V5.85Z" stroke="#AEB5B9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M1.5 6.25C1.5 4.04086 3.29086 2.25 5.5 2.25H7.5V15.75H5.5C3.29086 15.75 1.5 13.9591 1.5 11.75V6.25Z" fill="#AEB5B9"/>
              <path d="M12.25 10.5L10.75 9L12.25 7.5" stroke="#AEB5B9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="church-selector">
          <div className="church-icon">
            <img src="/church-logo.png" alt="One Life Center" />
          </div>
          <span className="church-name">One Life Center</span>
          <svg className="dropdown-arrow" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.3125 7.21875L9 11.9063L13.6875 7.21875" stroke="#343637" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <nav className="sidebar-nav">
          {navItems.map(item => (
            <button
              key={item.id}
              className={`nav-item ${activeNav === item.id ? 'active' : ''}`}
              onClick={() => setActiveNav(item.id)}
            >
              {getIcon(item.icon, activeNav === item.id)}
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div className="user-profile">
            <div className="user-avatar">
              <img src="/profile-avatar.png" alt="John Davis" />
            </div>
            <div className="user-info">
              <span className="user-name">John Davis</span>
              <span className="user-role">Admin</span>
            </div>
            <button className="user-menu-btn">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.4081 9.9964L15.4081 10.0042C15.408 10.4239 15.067 10.764 14.6473 10.764C14.2278 10.7638 13.8877 10.4237 13.8876 10.0042L13.8876 9.9964C13.8876 9.57679 14.2278 9.23587 14.6473 9.23566C15.0671 9.23566 15.4081 9.57666 15.4081 9.9964Z" fill="#AEB5B9" stroke="#AEB5B9" strokeWidth="1.28"/>
                <path d="M5.04775 8.59601C5.82095 8.59601 6.44775 9.22281 6.44775 9.99601L6.44775 10.004C6.44775 10.7772 5.82095 11.404 5.04775 11.404C4.27455 11.404 3.64775 10.7772 3.64775 10.004L3.64775 9.99601C3.64775 9.22281 4.27455 8.59601 5.04775 8.59601Z" fill="#AEB5B9"/>
                <path d="M11.2478 9.99601C11.2478 9.22281 10.621 8.59601 9.8478 8.59601C9.0746 8.59601 8.4478 9.22281 8.4478 9.99601L8.4478 10.004C8.4478 10.7772 9.0746 11.404 9.8478 11.404C10.621 11.404 11.2478 10.7772 11.2478 10.004L11.2478 9.99601Z" fill="#AEB5B9"/>
              </svg>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        <header className="dashboard-header">
          <div className="header-left">
            <h1>{navItems.find(item => item.id === activeNav)?.label}</h1>
            {activeNav === 'dashboard' && <p>Welcome back John, here is your overview</p>}
          </div>
          <button className="add-donation-btn">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.41942 8.99992H8.99977M8.99977 8.99992H11.5805M8.99977 8.99992V6.41956M8.99977 8.99992V11.5807M15.9375 9C15.9375 12.8315 12.8315 15.9375 9 15.9375C5.16853 15.9375 2.0625 12.8315 2.0625 9C2.0625 5.16853 5.16853 2.0625 9 2.0625C12.8315 2.0625 15.9375 5.16853 15.9375 9Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Add Donation
          </button>
        </header>

        {activeNav === 'dashboard' ? (
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-header">
                  <span className="stat-label">{stat.label}</span>
                  <span className={`stat-change ${stat.isPositive ? 'positive' : 'negative'}`}>
                    {stat.isPositive ? (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.83331 10.7641L4.95482 6.38494C5.35575 5.82248 6.19137 5.8225 6.59228 6.38496L8.89491 9.6154C9.29578 10.1779 10.1314 10.1779 10.5324 9.6154L13.6537 5.23633M13.6537 5.23633L14.1666 8.0342M13.6537 5.23633L10.8552 5.74722" stroke="#1BAA6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.83325 5.23633L4.95476 9.61547C5.35569 10.1779 6.19131 10.1779 6.59222 9.61547L8.89485 6.38498C9.29572 5.82251 10.1314 5.82252 10.5323 6.38499L13.6537 10.7641M13.6537 10.7641L14.1666 7.966M13.6537 10.7641L10.8551 10.253" stroke="#DF4646" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                    {stat.change}
                  </span>
                </div>
                <div className="stat-value-group">
                  <div className="stat-amount">{stat.amount}</div>
                  <div className="stat-comparison">{stat.comparison}</div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="coming-soon">
            <img src="/coming-soon.png" alt="Coming Soon" />
            <h2>Something great is on the way</h2>
            <p>We're building a giving platform that helps your church raise more with less fees and less hassle.</p>
          </div>
        )}
      </main>
    </div>
  )
}

export default Dashboard
