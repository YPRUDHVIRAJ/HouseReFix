import { useEffect, useState, type FormEvent } from 'react'
import './App.css'

type CleaningService = {
  icon: string
  title: string
  slug: string
  description: string
  image: string
  details: string[]
}

const services: CleaningService[] = [
  { icon: '⌂', title: 'House Cleaning', slug: 'house-cleaning', description: 'Give your entire home a fresh and thorough clean.', image: '/Housecleaning.jpg', details: ['Living areas, bedrooms, and commonly used spaces', 'Dusting, sweeping, mopping, and surface cleaning', 'A practical refresh tailored to your home'] },
  { icon: '▤', title: 'Bathroom Cleaning', slug: 'bathroom-cleaning', description: 'Deep cleaning for bathrooms, toilets, tiles, floors, and hard-to-clean areas.', image: '/Bathroomcleaning.jpg', details: ['Toilets, sinks, taps, and bathroom fittings', 'Tiles, floors, and hard-to-reach corners', 'Attention to soap marks and everyday buildup'] },
  { icon: '◇', title: 'Kitchen Cleaning', slug: 'kitchen-cleaning', description: 'Remove grease, dirt, stains, and buildup from your kitchen.', image: '/kitchencleaning.jpg', details: ['Kitchen counters and frequently used surfaces', 'Grease and grime around cooking areas', 'Floor and exterior appliance surface cleaning'] },
  { icon: '✳', title: 'Deep Cleaning', slug: 'deep-cleaning', description: 'A detailed top-to-bottom cleaning for homes that need extra care.', image: '/housedeepcleaning.jpg', details: ['Detailed cleaning of rooms and high-touch surfaces', 'Corners and areas missed in routine cleaning', 'A thorough refresh for your home'] },
  { icon: '▱', title: 'Sofa Cleaning', slug: 'sofa-cleaning', description: 'Professional cleaning to help keep your sofas fresh and clean.', image: '/sofacleaning.jpg', details: ['Cleaning for sofa seats and accessible surfaces', 'Attention to dust and everyday marks', 'Careful treatment suited to your furniture'] },
  { icon: '▦', title: 'Floor Cleaning', slug: 'floor-cleaning', description: 'Remove dirt, stains, and buildup for cleaner-looking floors.', image: '/floorcleaning.jpg', details: ['Sweeping and mopping across floor areas', 'Attention to visible dirt and everyday marks', 'Cleaning approach suited to the floor surface'] },
  { icon: '▥', title: 'Office Cleaning', slug: 'office-cleaning', description: 'Keep your workplace clean, fresh, and welcoming.', image: '/officecleaning.jpg', details: ['Work areas and shared spaces', 'Dusting and cleaning of accessible surfaces', 'Floors and frequently used areas'] },
  { icon: '↗', title: 'Move-In & Move-Out', slug: 'move-in-move-out-cleaning', description: 'Detailed cleaning before moving into or leaving a property.', image: '/movein.jpg', details: ['A refresh of rooms and commonly used surfaces', 'Cleaning of kitchens, bathrooms, and floors', 'A cleaner space for your move-in or handover'] },
  { icon: '▱', title: 'Bedroom Cleaning', slug: 'bedroom-cleaning', description: 'Make your bedroom feel fresh with careful cleaning of the spaces you use every day.', image: '/bedroom.jpg', details: ['Dusting of accessible surfaces and furniture', 'Floor cleaning and attention to room corners', 'A tidy, refreshed sleeping space'] },
  { icon: '⌂', title: 'Apartment Cleaning', slug: 'apartment-cleaning', description: 'Reliable cleaning for apartments of different sizes, from individual rooms to the whole home.', image: '/Apartment.jpg', details: ['Cleaning planned around your apartment layout', 'Living areas, bedrooms, kitchen, and bathrooms', 'Choose a regular refresh or a more detailed clean'] },
  { icon: '✳', title: 'Balcony Cleaning', slug: 'balcony-cleaning', description: 'Refresh your balcony by clearing away dust and everyday dirt from its surfaces.', image: '/Balcony.jpg', details: ['Balcony floor and accessible surfaces', 'Attention to corners and everyday dust', 'A cleaner outdoor space to enjoy'] },
  { icon: '✳', title: 'Fan Cleaning', slug: 'fan-cleaning', description: 'Remove dust and everyday buildup from accessible ceiling and standing fans.', image: '/fancleaning.jpg', details: ['Cleaning of accessible fan blades and surfaces', 'Attention to dust buildup around the fan', 'Please mention fan height and quantity when booking'] },
  { icon: '⌂', title: 'Pooja Room Cleaning', slug: 'pooja-room-cleaning', description: 'Careful cleaning to help keep your pooja room and its surfaces fresh and tidy.', image: '/poojaroom.jpg', details: ['Dusting of accessible shelves and surfaces', 'Careful cleaning around pooja room fixtures', 'Floor cleaning and attention to corners'] },
  { icon: '▤', title: 'Window Cleaning', slug: 'window-cleaning', description: 'Clean accessible window glass, frames, and sills for a clearer, fresher look.', image: '/windows.jpg', details: ['Cleaning of accessible glass and window surfaces', 'Attention to frames and sills', 'Please mention window quantity and accessibility when booking'] },
  { icon: '▱', title: 'TV Stand Cleaning', slug: 'tv-stand-cleaning', description: 'Dust and clean your TV stand and its accessible surfaces with care.', image: '/tvstand.jpg', details: ['Dusting of accessible stand surfaces and shelves', 'Careful cleaning around stored items and electronics', 'Please switch off and clear delicate items before cleaning'] },
]

const bathroomBeforeAfterPhotos = Array.from({ length: 7 }, (_, index) => ({
  src: `/New%20folder/${index + 1}.jpeg`,
  alt: `Bathroom before and after cleaning by the HouseReFix team, example ${index + 1}`,
}))

const recentWorkVideos = [
  '1025 (1).mp4',
  '1021.mp4',
  '1020(1).mp4',
  '1018(1).mp4',
  '1016.mp4',
  '1014(1).mp4',
  '1012(1).mp4',
  '1011.mp4',
  '1007.mp4',
  '1006.mp4',
  '1005.mp4',
  '1004.mp4',
  '0929.mp4',
  '0926.mp4',
  '0923.mp4',
  '0909.mp4',
]

function bookingUrl(service?: string) {
  const query = service ? `?service=${encodeURIComponent(service)}` : ''
  return `/${query}#booking`
}

function SiteHeader() {
  return (
    <>
      <div className="announcement">Professional Cleaning Services <span>•</span> Madanapalle and nearby areas</div>
      <header className="site-header">
        <a className="brand" href="/" aria-label="HouseRefix home">
          <img className="brand-logo" src="/1logo.png" alt="HouseRefix" />
        </a>
        <nav aria-label="Main navigation">
          <a className="nav-home" href="/">Home</a>
          <div className="services-menu">
            <a href="/services" aria-haspopup="true">Our services <span aria-hidden="true">⌄</span></a>
            <div className="services-dropdown">
              {services.map((service) => <a href={`/services/${service.slug}`} key={service.slug}>{service.title}</a>)}
            </div>
          </div>
          <a className="nav-secondary" href="/#promise">Why HouseRefix</a>
          <a className="nav-secondary" href="/#videos">Videos</a>
          <a className="nav-secondary" href="/#booking">Get in touch</a>
        </nav>
        <a className="header-cta" href="/#booking">Book a Cleaning <span aria-hidden="true">↗</span></a>
      </header>
    </>
  )
}

function SiteFooter({ bookingHref }: { bookingHref: string }) {
  return (
    <footer className="site-footer">
      <a className="brand footer-brand" href="/" aria-label="HouseRefix home"><img className="brand-logo" src="/1logo.png" alt="HouseRefix" /></a>
      <span>Professional Cleaning Services in Madanapalle</span>
      <nav className="footer-nav" aria-label="Footer navigation">
        <a href="/">Home</a>
        <a href="/services">Our services</a>
        <a href="/#promise">Why HouseRefix</a>
        <a href="/#videos">Videos</a>
        <a href="/#faqs">FAQs</a>
        <a href="/#booking">Get in touch</a>
      </nav>
      <a className="footer-booking" href={bookingHref}>Book a cleaning <span aria-hidden="true">↗</span></a>
      <small>© 2026 HouseReFix · B K Palle, Munneppa Colony, Madanapalle, Andhra Pradesh 517325</small>
    </footer>
  )
}

function ServicePages() {
  const pathname = window.location.pathname.replace(/\/+$/, '')
  const slug = pathname.startsWith('/services/') ? pathname.slice('/services/'.length) : ''
  const service = services.find((item) => item.slug === slug)

  useEffect(() => {
    const title = service ? `${service.title} in Madanapalle | HouseReFix` : 'Our Cleaning Services in Madanapalle | HouseReFix'
    document.title = title
    return () => { document.title = 'HouseReFix | Cleaning Services in Madanapalle' }
  }, [service])

  return (
    <div className="site-shell service-pages">
      <SiteHeader />
      <main>
        {service ? (
          <section className="service-detail" aria-labelledby="service-title">
            <div className="service-detail-copy">
              <a className="service-breadcrumb" href="/services">Our services <span aria-hidden="true">/</span> {service.title}</a>
              <div className="eyebrow">PROFESSIONAL CLEANING IN MADANAPALLE</div>
              <h1 id="service-title">{service.title}</h1>
              <p className="service-detail-description">{service.description}</p>
              <h2>What this service includes</h2>
              <ul>{service.details.map((detail) => <li key={detail}><span aria-hidden="true">✓</span>{detail}</li>)}</ul>
              <a className="button button-primary" href={bookingUrl(service.title)}>Book this service <span aria-hidden="true">↗</span></a>
            </div>
            <img className="service-detail-image" src={service.image} alt={`${service.title} by HouseReFix`} />
          </section>
        ) : (
          <section className="service-section service-directory" aria-labelledby="services-title">
            <div className="section-heading">
              <div><div className="eyebrow">PROFESSIONAL CLEANING. DONE RIGHT.</div><h1 id="services-title">Our Cleaning Services</h1></div>
              <p>Reliable cleaning for your home, workplace, and the spaces you use every day. Choose the service that suits you.</p>
            </div>
            <div className="service-grid">
              {services.map((item, index) => (
                <article className="service-item" key={item.slug}>
                  <a className="service-card-link" href={`/services/${item.slug}`} aria-label={`Learn more about ${item.title}`}>
                    <div className="service-image service-image-square"><img src={item.image} alt={`${item.title} service`} /></div>
                    <span className="service-number">{String(index + 1).padStart(2, '0')}</span>
                    <span className="service-icon" aria-hidden="true">{item.icon}</span>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <span className="service-item-link">View service <span aria-hidden="true">↗</span></span>
                  </a>
                </article>
              ))}
            </div>
          </section>
        )}
      </main>
      <SiteFooter bookingHref={bookingUrl(service?.title)} />
    </div>
  )
}

function HomePage() {
  const [showIntro, setShowIntro] = useState(true)
  const [submitted, setSubmitted] = useState(false)

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
      `Phone: ${booking.phone}`,
      `Service: ${booking.service}`,
      `Area / locality: ${booking.area || 'Not specified'}`,
      `Preferred date: ${booking.date || 'Flexible'}`,
      `Preferred time: ${booking.time || 'Flexible'}`,
      `Service details: ${booking.message || 'None provided'}`,
      `Email: ${booking.email || 'Not provided'}`,
    ].join('\n')
    const whatsappUrl = `https://wa.me/919492507909?text=${encodeURIComponent(message)}`
    const whatsappWindow = window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    if (!whatsappWindow) {
      window.location.assign(whatsappUrl)
      return
    }
    setSubmitted(true)
  }

  return (
    <>
      {showIntro && <div className="intro-screen" role="status" aria-label="HouseRefix website opening screen"><img src="/front.png" alt="HouseRefix" /></div>}
      <div className="site-shell" inert={showIntro}>
      <SiteHeader />

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
            {services.map((service, index) => <article className="service-item" key={service.slug}><div className="service-image service-image-square"><img src={service.image} alt={`${service.title} service`} /></div><span className="service-number">{String(index + 1).padStart(2, '0')}</span><span className="service-icon" aria-hidden="true">{service.icon}</span><h3>{service.title}</h3><p>{service.description}</p><a href={`/services/${service.slug}`}>View service <span aria-hidden="true">↗</span></a></article>)}
          </div>
        </section>

        <section className="work-videos-section" id="videos" aria-labelledby="work-videos-title">
          <div className="bathroom-gallery-heading">
            <div>
              <div className="eyebrow">RECENT WORK BY OUR TEAM</div>
              <h2 id="work-videos-title">HouseReFix Videos</h2>
            </div>
            <div className="work-videos-intro">
              <p>Watch videos of our recent cleaning work and follow HouseReFix on Instagram.</p>
              <a className="work-instagram-link" href="https://www.instagram.com/houserefix_madanapalle?obrf=MXVia2UyYzhmbnpyZw==" target="_blank" rel="noopener noreferrer">Visit our Instagram <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <div className="work-video-viewport" role="region" aria-label="Recent HouseReFix cleaning videos" tabIndex={0}>
            <div className="work-video-track">
              {recentWorkVideos.map((filename, index) => (
                <figure className="work-video-card" key={filename}>
                  <video
                    controls
                    playsInline
                    preload="none"
                    poster={`/ads%20video/posters/${encodeURIComponent(filename.replace(/\.mp4$/i, '.jpg'))}`}
                    aria-label={`HouseReFix recent cleaning work video ${index + 1}`}
                  >
                    <source src={`/ads%20video/${encodeURIComponent(filename)}`} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <figcaption>Recent work · {String(index + 1).padStart(2, '0')}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="bathroom-gallery-section" aria-labelledby="bathroom-gallery-title">
          <div className="bathroom-gallery-heading">
            <div>
              <div className="eyebrow">REAL RESULTS FROM OUR TEAM</div>
              <h2 id="bathroom-gallery-title">Bathroom Cleaning Before &amp; After</h2>
            </div>
            <p>See the difference HouseReFix makes with real bathroom cleaning results from our team.</p>
          </div>
          <div className="bathroom-gallery-viewport">
            <div className="bathroom-gallery-track">
              {[0, 1].map((copy) => (
                <div className="bathroom-gallery-set" key={copy} aria-hidden={copy === 1}>
                  {bathroomBeforeAfterPhotos.map((photo) => (
                    <figure className="bathroom-gallery-card" key={`${copy}-${photo.src}`}>
                      <img src={photo.src} alt={copy === 0 ? photo.alt : ''} loading="lazy" />
                    </figure>
                  ))}
                </div>
              ))}
            </div>
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
              <div className="google-total">4.9 <span>Average rating · 29 Google Reviews</span></div>
              <div className="google-stars" role="img" aria-label="4.9 out of 5 stars">★★★★★</div>
              <p>See what our customers have to say about their HouseReFix cleaning experience.</p>
              <a className="reviews-link" href="https://maps.app.goo.gl/39FYJU8vivQg23fYA" target="_blank" rel="noreferrer">Read All Reviews on Google <span aria-hidden="true">↗</span></a>
            </div>
            <div className="recent-reviews">
              <div className="recent-heading"><h3>Recent Customer Reviews</h3><span>GOOGLE</span></div>
              <div className="review-card-list">
                <article className="review-card">
                  <div className="review-card-meta"><strong>Satyann Rohith</strong><span className="review-card-stars" role="img" aria-label="5 out of 5 stars">★★★★★</span></div>
                  <p>“Really good service, people are very patient and make sure the work is done properly. Would totally recommend taking the service”</p>
                </article>
                <article className="review-card">
                  <div className="review-card-meta"><strong>Bharathi S P</strong><span className="review-card-stars" role="img" aria-label="5 out of 5 stars">★★★★★</span></div>
                  <p>“Good, clean work and very satisfied with work”</p>
                </article>
                <article className="review-card">
                  <div className="review-card-meta"><strong>Srideep Reddy</strong><span className="review-card-stars" role="img" aria-label="5 out of 5 stars">★★★★★</span></div>
                  <p>“Great work for good price !!”</p>
                </article>
              </div>
              <a className="reviews-map-link" href="https://maps.app.goo.gl/39FYJU8vivQg23fYA" target="_blank" rel="noopener noreferrer">See more customer reviews <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <div className="google-map-card">
            <div className="recent-heading"><h3>Find HouseReFix</h3><span>GOOGLE MAPS</span></div>
              <iframe
                className="google-map-embed"
                title="HouseReFix location on Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4714.12260149973!2d78.50408370369028!3d13.574030703844947!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb2679d796d77f3%3A0x93ff438185cf51c5!2sHouseReFix!5e1!3m2!1sen!2sin!4v1793007049743!5m2!1sen!2sin"
                loading="lazy"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            <a className="reviews-map-link" href="https://maps.app.goo.gl/39FYJU8vivQg23fYA" target="_blank" rel="noopener noreferrer">Open Google Maps and read all reviews <span aria-hidden="true">↗</span></a>
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

        <section className="faq-section" id="faqs" aria-labelledby="faq-title">
          <div className="faq-heading">
            <div className="eyebrow">HERE TO HELP</div>
            <h2 id="faq-title">Frequently Asked Questions</h2>
            <p>Need more information? Call us or send your question on WhatsApp.</p>
          </div>
          <div className="faq-list">
            <details className="faq-item">
              <summary>Which areas do you serve?</summary>
              <p>HouseReFix is based in Madanapalle. Share your area or locality when you call or message us, and we’ll confirm whether we can serve your location.</p>
            </details>
            <details className="faq-item">
              <summary>What is included in a cleaning service?</summary>
              <p>Each service page describes its usual scope. The exact work can depend on your space and priorities, so please include details in your request and confirm the scope with us before booking.</p>
            </details>
            <details className="faq-item">
              <summary>How should I prepare for the cleaning?</summary>
              <p>Please make the areas to be cleaned accessible and move away valuables or delicate items. If you have special instructions, mention them when you contact us.</p>
            </details>
            <details className="faq-item">
              <summary>How do I book a cleaning?</summary>
              <p>Call us at <a href="tel:+919492507909">9492507909</a>, or fill in the form below and continue in WhatsApp. Your request opens as a draft message; review it and tap Send to contact us.</p>
            </details>
            <details className="faq-item">
              <summary>How much does a cleaning cost, and how can I pay?</summary>
              <p>Price depends on the service and work required. Share your service, area, and requirements so we can discuss the estimate and confirm payment details before the appointment.</p>
            </details>
          </div>
        </section>

        <section className="booking-section" id="booking">
          <div className="booking-intro">
            <div className="eyebrow">CALL US OR MESSAGE US ON WHATSAPP</div>
            <h2>Tell us what<br /><em>needs cleaning.</em></h2>
            <p>Call HouseReFix at <a className="booking-phone-link" href="tel:+919492507909">9492507909</a>, or share your details using the form. We’ll follow up to discuss your request.</p>
            <div className="booking-contact-actions">
              <a className="button button-primary" href="tel:+919492507909">Call us <span aria-hidden="true">↗</span></a>
              <a className="text-link" href="https://wa.me/919492507909?text=Hello%20HouseReFix%2C%20I%27d%20like%20to%20ask%20about%20a%20cleaning%20service." target="_blank" rel="noopener noreferrer">WhatsApp us <span aria-hidden="true">↗</span></a>
            </div>
            <div className="contact-note"><span aria-hidden="true">⌖</span> B K Palle, Munneppa Colony, Madanapalle, Andhra Pradesh 517325</div>
          </div>
          <form className="booking-form" onSubmit={handleSubmit}>
            {submitted ? <div className="form-success" role="status"><span aria-hidden="true">✓</span><h3>WhatsApp opened</h3><p>Your booking details are prefilled in WhatsApp. Tap Send there to deliver your request to HouseReFix.</p><button type="button" className="text-link" onClick={() => setSubmitted(false)}>Edit booking details</button></div> : <>
              <div className="form-heading"><span>SHARE YOUR DETAILS</span><span>WE’LL FOLLOW UP ON WHATSAPP</span></div>
              <label>Your name<input name="name" autoComplete="name" placeholder="Enter your name" required /></label>
              <div className="form-row"><label>Phone number<input name="phone" type="tel" autoComplete="tel" placeholder="Your phone number" required /></label><label>Email address <span className="optional-label">(optional)</span><input name="email" type="email" autoComplete="email" placeholder="you@example.com" /></label></div>
              <div className="form-row"><label>Choose a service<select name="service" defaultValue={new URLSearchParams(window.location.search).get('service') || ''} required><option value="" disabled>Select a cleaning service</option>{services.map((service) => <option key={service.slug}>{service.title}</option>)}</select></label><label>Area / locality<input name="area" autoComplete="address-level2" placeholder="Your area or locality" /></label></div>
              <div className="form-row"><label>Preferred date<input name="date" type="date" /></label><label>Preferred time<select name="time" defaultValue=""><option value="">Flexible</option><option>Morning</option><option>Afternoon</option><option>Evening</option></select></label></div>
              <label>Tell us about the work<textarea name="message" rows={3} placeholder="Rooms, size, priorities, or any special requests." /></label>
              <button className="button button-primary form-submit" type="submit">Share details on WhatsApp <span aria-hidden="true">↗</span></button>
              <p className="form-footnote">WhatsApp opens with a draft message. Review it and tap Send to contact HouseReFix.</p>
            </>}
          </form>
        </section>
      </main>
      <SiteFooter bookingHref="/#booking" />
      </div>
    </>
  )
}

function App() {
  return window.location.pathname.startsWith('/services') ? <ServicePages /> : <HomePage />
}

export default App
