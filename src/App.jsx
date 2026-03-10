import './App.css'

function App() {
  return (
    <div className="app">
      {/* Navigation Header */}
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <h2>Party AI</h2>
          </div>
          <nav className="nav-menu">
            <a href="#home" className="nav-link active">Home</a>
            <a href="#features" className="nav-link">Features</a>
            <a href="#pricing" className="nav-link">Pricing</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
          <div className="header-actions">
            <span className="phone">📞 (555) 123-4567</span>
            <button className="btn-primary">Get Started</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          {/* Left Column - Content */}
          <div className="hero-left">
            <p className="welcome-label">WELCOME TO PARTY AI</p>
            <h1 className="hero-title">
              Plan Your Perfect
              <span className="highlight"> Event</span>
            </h1>
            <p className="hero-description">
              AI-powered party planning that makes event organization effortless. Let our intelligent system handle the details while you enjoy the celebration.
            </p>

            {/* Quick Setup Form */}
            <div className="quick-setup">
              <h3>🎉 Quick Setup</h3>

              {/* Embedded Google Form */}
              <div className="embedded-form">
                <h4>Join Our Community</h4>
                <p>Get exclusive access to Party AI features</p>
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLScOmsjUwiqiT8TJ1n8SGd4KSANxB5xypOLNodT9dbbgyok1bQ/viewform?embedded=true"
                  width="100%"
                  height="450"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                >
                  Loading…
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="features-container">
          <div className="feature-card">
            <span className="feature-icon">⚡</span>
            <h4>Instant Planning</h4>
            <p>Get event plans in seconds</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🔒</span>
            <h4>Secure & Private</h4>
            <p>Your data is always protected</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">24/7</span>
            <h4>24/7 Support</h4>
            <p>We're here when you need us</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
