import { useEffect, useState, type FormEvent } from 'react'
import './App.css'

function App() {
  const [showIntro, setShowIntro] = useState(true)
  const [submitted, setSubmitted] = useState(false)
  const services = [
    { icon: '⌂', title: 'House Cleaning', description: 'Give your entire home a fresh and thorough clean.', image: '/Housecleaning.jpg' },
    { icon: '▤', title: 'Bathroom Cleaning', description: 'Deep cleaning for bathrooms, toilets, tiles, floors, and hard-to-clean areas.', image: '/Bathroomcleaning.jpg' },
    { icon: '◇', title: 'Kitchen Cleaning', description: 'Remove grease, dirt, stains, and buildup from your kitchen.', image: '/kitchencleaning.jpg' },
    { icon: '✳', title: 'Deep Cleaning', description: 'A detailed top-to-bottom cleaning for homes that need extra care.', image: '/housedeepcleaning.jpg' },
    { icon: '▱', title: 'Sofa Cleaning', description: 'Professional cleaning to help keep your sofas fresh and clean.', image: '/sofacleaning.jpg' },
    { icon: '▦', title: 'Floor Cleaning', description: 'Remove dirt, stains, and buildup for cleaner-looking floors.', image: '/floorcleaning.jpg' },
    { icon: '▥', title: 'Office Cleaning', description: 'Keep your workplace clean, fresh, and welcoming.', image: '/officecleaning.jpg' },
    { icon: '↗', title: 'Move-In & Move-Out ', description: 'Detailed cleaning before moving into or leaving a property.', image: '/movein.jpg' },
  ]

  useEffect(() => {
    const introTimer = window.setTimeout(() => setShowIntro(false), 300)
    return () => window.clearTimeout(introTimer)
  }, [])

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const booking = Object.fromEntries(new FormData(form).entries())
    const message = [
      'HouseReFix cleaning booking request',
      `Name: ${booking.name}`,
      `Email: ${booking.email}`,
      `Phone: ${booking.phone}`,
      `Service: ${booking.service}`,
      `Preferred date: ${booking.date || 'Not specified'}`,
      `Notes: ${booking.message || 'None'}`,
    ].join('\n')
    const whatsappUrl = `https://wa.me/919492507909?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    setSubmitted(true)
  }

  return (
    <>
      {showIntro && <div className="intro-screen" role="status" aria-label="HouseRefix website opening screen"><img src="/front.png" alt="HouseRefix" /></div>}
      <div className="site-shell" inert={showIntro}>
      <div className="announcement">Professional Cleaning Services <span>•</span> Madanapalle and nearby areas</div>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="HouseRefix home">
          <img className="brand-logo" src="/1logo.png" alt="HouseRefix" />
        </a>
        <nav aria-label="Main navigation">
          <a href="#services">Our services</a>
          <a href="#promise">Why HouseRefix</a>
          <a href="#booking">Get in touch</a>
        </nav>
        <a className="header-cta" href="#booking">Book a Cleaning <span aria-hidden="true">↗</span></a>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot" /> PROFESSIONAL CLEANING IN MADANAPALLE</div>
            <h1>A Cleaner Home.<br /><em>A Happier You.</em></h1>
            <p className="hero-description">Professional cleaning services for homes, bathrooms, kitchens, offices, and more in Madanapalle. From everyday cleaning to deep cleaning, HouseReFix helps you enjoy a cleaner, fresher, more comfortable space without the hassle.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#booking">Book a Cleaning <span aria-hidden="true">↗</span></a>
              <a className="text-link" href="#services">Explore our services <span aria-hidden="true">↓</span></a>
            </div>
            <div className="hero-proof">
              <div className="avatar-stack" aria-hidden="true"><span>⌂</span><span>✓</span><span>✳</span></div>
              <p><strong>Local & trusted</strong><br /><span>Serving Madanapalle and surrounding areas</span></p>
            </div>
          </div>
          <div className="hero-gallery" aria-label="HouseRefix cleaning service photos">
            {Array.from({ length: 12 }, (_, index) => <img key={index + 1} src={`/${index + 1}.jpeg`} alt={`HouseRefix cleaning service ${index + 1}`} />)}
          </div>
          <div className="hero-bottom"><span>HOUSE REPAIR, CLEANING & HOME CARE</span><span>LOCAL SERVICE IN MADANAPALLE <b aria-hidden="true">↓</b></span></div>
        </section>

        <section className="service-section" id="services">
          <div className="section-heading">
            <div><div className="eyebrow">PROFESSIONAL CLEANING. DONE RIGHT.</div><h2>Our Cleaning Services</h2></div>
            <p>Reliable cleaning for your home, workplace, and the spaces you use every day. Choose the service that suits you.</p>
          </div>
          <div className="service-grid">
            {services.map((service, index) => <article className="service-item" key={service.title}><div className={`service-image${index < 8 ? ' service-image-square' : ''}`}><img src={service.image} alt={`${service.title} service`} onError={(event) => { event.currentTarget.hidden = true }} /></div><span className="service-number">{String(index + 1).padStart(2, '0')}</span><span className="service-icon" aria-hidden="true">{service.icon}</span><h3>{service.title}</h3><p>{service.description}</p><a href="#booking">Book this service <span aria-hidden="true">↗</span></a></article>)}
          </div>
        </section>

        <section className="reviews-section" id="reviews" aria-labelledby="reviews-title">
          <div className="reviews-heading">
            <div className="eyebrow">HOUSEREFIX GOOGLE REVIEWS</div>
            <h2 id="reviews-title">What Our Customers Say</h2>
            <p>Real Reviews. Real Customers. Real Experiences.<br />See what customers are saying about HouseReFix.</p>
          </div>
          <div className="reviews-layout">
            <div className="google-summary">
              <div className="google-brand"><span className="google-g" aria-hidden="true">G</span><span>Google Reviews</span></div>
              <div className="google-total">9 <span>Google Reviews</span></div>
              <div className="google-stars" role="img" aria-label="Five stars">★★★★★</div>
              <p>See what our customers have to say about their HouseReFix cleaning experience.</p>
              <a className="reviews-link" href="https://maps.app.goo.gl/39FYJU8vivQg23fYA" target="_blank" rel="noreferrer">Read All Reviews on Google <span aria-hidden="true">↗</span></a>
            </div>
            <div className="recent-reviews">
              <div className="recent-heading"><h3>Recently Reviewed</h3><span>GOOGLE</span></div>
              <div className="reviews-empty" role="status">
                <span className="empty-stars" aria-hidden="true">★★★★★</span>
                <p>Live customer reviews will appear here once the HouseReFix Google Business Profile is connected.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="promise-section" id="promise">
          <div className="promise-copy">
            <div className="eyebrow">WHY CHOOSE HOUSEREFIX?</div>
            <h2>Professional Cleaning.<br /><em>Done Right.</em></h2>
            <p>Your home deserves more than a quick clean. We provide reliable, professional cleaning designed to make your space fresh, hygienic, and comfortable. We focus on the areas that need proper attention, not just a quick surface clean.</p>
            <ul>
              <li><span aria-hidden="true">✓</span> Reliable service that values your time</li>
              <li><span aria-hidden="true">✓</span> Attention to detail, from corners to floors</li>
              <li><span aria-hidden="true">✓</span> Professional cleaning for a fresher space</li>
              <li><span aria-hidden="true">✓</span> Local service in Madanapalle and nearby</li>
            </ul>
            <a className="text-link" href="#booking">Book your cleaning <span aria-hidden="true">↗</span></a>
          </div>
          <aside className="promise-owner" aria-label="HouseReFix proprietor">
            <div className="owner-details">
              <img className="owner-photo" src="/Prop.png" alt="Y Shankaraiah Garu, proprietor of HouseReFix" />
              <div className="owner-details-copy">
                <span className="owner-label">COMPANY PROPRIETOR</span>
                <h3>Y Shankaraiah Garu</h3>
                <p>HouseReFix Service Owner · Madanapalle</p>
                <a href="tel:+919492507909">Call 9492507909 <span aria-hidden="true">↗</span></a>
              </div>
            </div>
          </aside>
        </section>

        <section className="booking-section" id="booking">
          <div className="booking-intro"><div className="eyebrow">YOUR HOME DESERVES A FRESH START</div><h2>Enjoy more time<br /><em>for what matters.</em></h2><p>Don't spend your valuable time scrubbing, washing, and cleaning. Let HouseReFix take care of it while you enjoy more time for the things that matter.</p><div className="contact-note"><span aria-hidden="true">⌖</span> B K Palle, Munneppa Colony, Madanapalle, Andhra Pradesh 517325</div></div>
          <form className="booking-form" onSubmit={handleSubmit}>
            {submitted ? <div className="form-success" role="status"><span aria-hidden="true">✓</span><h3>WhatsApp opened</h3><p>Your booking details are prefilled in WhatsApp. Tap Send there to deliver your request to HouseReFix.</p><button type="button" className="text-link" onClick={() => setSubmitted(false)}>Edit booking details</button></div> : <>
              <div className="form-heading"><span>BOOK YOUR CLEANING</span><span>HOUSEREFIX · MADANAPALLE</span></div>
              <label>Your name<input name="name" autoComplete="name" placeholder="Enter your name" required /></label>
              <div className="form-row"><label>Email address<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></label><label>Phone number<input name="phone" type="tel" autoComplete="tel" placeholder="Your phone number" required /></label></div>
              <div className="form-row"><label>Choose a service<select name="service" defaultValue="" required><option value="" disabled>Select a cleaning service</option>{services.map((service) => <option key={service.title}>{service.title}</option>)}</select></label><label>Preferred date<input name="date" type="date" /></label></div>
              <label>Anything else we should know?<textarea name="message" rows={3} placeholder="Rooms, priorities, questions — whatever’s on your mind." /></label>
              <button className="button button-primary form-submit" type="submit">Continue in WhatsApp <span aria-hidden="true">↗</span></button>
              <p className="form-footnote">Professional Cleaning Services in Madanapalle</p>
            </>}
          </form>
        </section>
      </main>
      <footer className="site-footer"><a className="brand footer-brand" href="#home" aria-label="HouseRefix home"><img className="brand-logo" src="/1logo.png" alt="HouseRefix" /></a><span>Professional Cleaning Services in Madanapalle</span><a href="#booking">Book a cleaning ↗</a><small>© 2026 HouseReFix · B K Palle, Munneppa Colony, Madanapalle, Andhra Pradesh 517325</small></footer>
      </div>
    </>
  )
}

export default App
