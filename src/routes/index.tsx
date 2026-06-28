import { createFileRoute } from '@tanstack/react-router'
import {
  ArrowRight,
  Check,
  Clock,
  MapPin,
  Phone,
  Scissors,
  Shirt,
  Sparkles,
  Star,
  Train,
} from 'lucide-react'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const tailoringServices = [
  'Suit & blazer resizing',
  'Wedding & prom dress alterations',
  'Pants hemming & tapering',
  'Zipper & button replacement',
  'Custom made-to-measure',
]

const cleaningServices = [
  'Eco-friendly dry cleaning',
  'Wedding dress preservation',
  'Wash, fold & press',
  'Drapery & specialty fabrics',
  'Same-day and quick turnaround',
]

const reviews = [
  {
    quote:
      'Quality work, premium service, and reasonably priced. The work feels like a scene straight out of a movie.',
    name: 'Kaief S.',
  },
  {
    quote:
      'They did an excellent job hemming my jeans, quick and professional!',
    name: 'Linh D.',
  },
  {
    quote:
      'The best local place for alterations. They handle any request quickly with a reasonable price.',
    name: 'Verified Customer',
  },
]

function HomePage() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="brand-mark" href="#top" aria-label="Joyce Station Tailors home">
          <span className="brand-icon">
            <Scissors size={20} strokeWidth={2.2} />
          </span>
          <span>
            Joyce Station
            <small>Tailors & Dry Cleaners</small>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#about">About Us</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-call" href="tel:+16044380025">
          <Phone size={17} />
          <span>(604) 438-0025</span>
        </a>
      </header>

      <section id="top" className="hero-section">
        <div className="hero-media" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1600&q=85"
            alt=""
          />
        </div>
        <div className="hero-content">
          <p className="eyebrow">Expert Craftsmanship. Reasonable Prices. Local Heart.</p>
          <h1>Vancouver's Trusted Experts in Tailoring & Dry Cleaning.</h1>
          <p className="hero-copy">
            Family-owned for over 20 years. From wedding dress alterations to
            eco-friendly dry cleaning, we ensure you look your absolute best.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#services">
              View Our Services
              <ArrowRight size={18} />
            </a>
            <a
              className="secondary-button"
              href="https://www.google.com/maps?q=5030+Joyce+St,+Vancouver,+BC+V5R+4G6"
              target="_blank"
              rel="noreferrer"
            >
              <MapPin size={18} />
              Get Directions
            </a>
          </div>
        </div>
        <div className="hero-panel" aria-label="Business highlights">
          <div>
            <span>20+</span>
            <p>years serving Collingwood</p>
          </div>
          <div>
            <span>Cash + Debit</span>
            <p>accepted in store</p>
          </div>
          <div>
            <span>Steps away</span>
            <p>from Joyce-Collingwood Station</p>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Highlights">
        <div>
          <Sparkles size={19} />
          <span>Premium garment care</span>
        </div>
        <div>
          <Train size={19} />
          <span>Near Joyce SkyTrain</span>
        </div>
        <div>
          <Star size={19} />
          <span>Reasonably priced local service</span>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="section-label">About Us</div>
        <div className="about-copy">
          <h2>20 Years of Quality in Collingwood</h2>
          <p>
            At Joyce Station Tailors, we treat every garment as if it were our
            own. As a women-owned local business, we take pride in our precision
            and care. Whether it's a simple hem or a complex suit resize, our
            in-house experts from Hong Kong and Vietnam bring decades of
            sartorial skill to the Joyce-Collingwood neighborhood.
          </p>
        </div>
      </section>

      <section id="services" className="services-section">
        <div className="section-heading">
          <div className="section-label">Services</div>
          <h2>Crafted fit. Fresh finish.</h2>
        </div>
        <div className="service-grid">
          <article className="service-card tailoring-card">
            <div className="card-heading">
              <span>
                <Scissors size={24} />
              </span>
              <h3>Professional Tailoring</h3>
            </div>
            <ul>
              {tailoringServices.map((service) => (
                <li key={service}>
                  <Check size={17} />
                  {service}
                </li>
              ))}
            </ul>
          </article>
          <article className="service-card cleaning-card">
            <div className="card-heading">
              <span>
                <Shirt size={24} />
              </span>
              <h3>Premium Dry Cleaning</h3>
            </div>
            <ul>
              {cleaningServices.map((service) => (
                <li key={service}>
                  <Check size={17} />
                  {service}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section id="reviews" className="reviews-section">
        <div className="section-heading">
          <div className="section-label">Customer Reviews</div>
          <h2>Local customers come back for careful work.</h2>
        </div>
        <div className="review-grid">
          {reviews.map((review) => (
            <figure key={review.name} className="review-card">
              <div className="stars" aria-label="Five star review">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <blockquote>"{review.quote}"</blockquote>
              <figcaption>{review.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-card">
          <div className="section-label">Contact & Location</div>
          <h2>Visit us on Joyce Street.</h2>
          <address>
            5030 Joyce St, Vancouver, BC V5R 4G6
            <span>Conveniently located next to Joyce-Collingwood SkyTrain Station.</span>
          </address>
          <div className="contact-actions">
            <a href="tel:+16044380025">
              <Phone size={18} />
              (604) 438-0025
            </a>
            <a href="mailto:Joycetailor11@yahoo.com">
              Joycetailor11@yahoo.com
            </a>
          </div>
          <p className="payment-note">We proudly accept Cash and Debit.</p>
        </div>
        <div className="hours-card">
          <div className="hours-heading">
            <Clock size={21} />
            <h3>Hours</h3>
          </div>
          <dl>
            <div>
              <dt>Mon - Fri</dt>
              <dd>10:00 AM - 6:00 PM</dd>
            </div>
            <div>
              <dt>Saturday</dt>
              <dd>10:00 AM - 5:00 PM</dd>
            </div>
            <div>
              <dt>Sunday</dt>
              <dd>Closed</dd>
            </div>
          </dl>
          <a
            className="map-link"
            href="https://www.google.com/maps?q=5030+Joyce+St,+Vancouver,+BC+V5R+4G6"
            target="_blank"
            rel="noreferrer"
          >
            Open in Maps
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <footer>
        <p>Joyce Station Tailors & Dry Cleaners</p>
        <span>Expert garment care in Vancouver, BC.</span>
      </footer>
    </main>
  )
}
