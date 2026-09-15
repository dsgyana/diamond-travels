import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, CarFront, Check, Clock3, HeartHandshake, MessageCircle, Navigation, Phone, Quote, ShieldCheck, Sparkles, Star, Users } from 'lucide-react';
import { images, galleryItems, testimonials, serviceCards, fleet, routes, contactInfo } from './data';
import { QuoteForm } from './QuoteForm';

function ArrowDownIcon() { return <span className="down-arrow">↓</span>; }

export function HomePage() {
  const [fleetIndex, setFleetIndex] = useState(1);
  const selectedFleet = fleet[fleetIndex];

  return (
    <>
      <section className="hero section-pad">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot"></span> Cuttack · Bhubaneswar · Odisha</p>
          <h1>Every journey deserves <em>care.</em></h1>
          <p className="hero-lede">Driver-included car rental for everyday travel, airport runs, long roads and the occasions you will remember.</p>
          <div className="hero-actions"><Link className="button primary" to="/quote">Plan your ride <ArrowRight size={18} /></Link><Link className="button text-button" to="/services">Explore services <ArrowDownIcon /></Link></div>
          <div className="hero-note"><span className="note-icon"><ShieldCheck size={17} /></span><span><strong>Human help, 24/7</strong><br />Tell us where you are going. We'll help arrange the right car.</span></div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-wrap"><img src={images.airport} alt="Clean sedan ready for an airport transfer" /></div>
          <div className="hero-float-card"><span className="float-icon"><Navigation size={16} /></span><div><small>Most requested</small><strong>Cuttack → Airport</strong></div><span className="float-price">from ₹1,200</span></div>
          <div className="hero-stamp"><Sparkles size={15} /><span>Thoughtfully<br />arranged</span></div>
        </div>
      </section>

      <section className="confidence-strip"><div><Clock3 size={18} /><span><strong>24/7</strong> service</span></div><div><ShieldCheck size={18} /><span>Verified drivers</span></div><div><CarFront size={18} /><span>Clean, cared-for cars</span></div><div><Navigation size={18} /><span>Cuttack & Bhubaneswar</span></div></section>

      <section className="section-pad services-section" id="services">
        <div className="section-heading"><div><p className="eyebrow">Made for real life</p><h2>Where are you <em>headed?</em></h2></div><p>From a quick city ride to a full wedding fleet, a dependable car is one less thing to think about.</p></div>
        <div className="service-grid">{serviceCards.map((service, index) => <article className={`service-card ${service.accent}`} key={service.label}><div className="service-image"><img src={service.image} alt="" /><span className="card-number">0{index + 1}</span></div><div className="service-content"><p className="card-label">{service.label}</p><h3>{service.title}</h3><p>{service.text}</p><Link to={service.label === 'Wedding travel' ? '/wedding' : '/services'}>Explore <ArrowUpRight size={15} /></Link></div></article>)}</div>
        <div className="section-link-row"><Link to="/services" className="section-link">See all services <ArrowRight size={16} /></Link></div>
      </section>

      <section className="section-pad fleet-section" id="fleet">
        <div className="section-heading fleet-heading"><div><p className="eyebrow">Choose what fits</p><h2>A car for the way <em>you travel.</em></h2></div><p>No complicated categories. Just clear choices for people, luggage, distance and the moment.</p></div>
        <div className="fleet-layout"><div className="fleet-menu">{fleet.map((car, index) => <button className={fleetIndex === index ? 'fleet-tab active' : 'fleet-tab'} key={car.name} onClick={() => setFleetIndex(index)}><span className="fleet-tab-index">0{index + 1}</span><span><strong>{car.name}</strong><small>{car.note}</small></span><ArrowRight size={17} /></button>)}<Link className="fleet-link" to="/quote">Need help choosing? <span>Ask us</span><ArrowUpRight size={15} /></Link></div><div className="fleet-preview"><img src={selectedFleet.image} alt={`${selectedFleet.name} for ${selectedFleet.note.toLowerCase()}`} /><div className="fleet-overlay"><div><p>{selectedFleet.name}</p><h3>{selectedFleet.model}</h3></div><span>{selectedFleet.seats}</span></div><div className="fleet-caption"><span>{selectedFleet.tone}</span><Link to="/fleet">See full fleet <ArrowRight size={16} /></Link></div></div></div>
      </section>

      <section className="route-section section-pad" id="routes">
        <div className="route-intro"><p className="eyebrow eyebrow-light">Clear routes, straightforward rates</p><h2>Popular roads.<br /><em>Clear starting points.</em></h2><p>Every trip is calculated based on exact distance, vehicle choice, tolls and time. No hidden extras.</p><Link className="button light-button" to="/routes">See all routes <ArrowRight size={18} /></Link></div>
        <div className="route-list">{routes.map((route) => <div className="route-row" key={`${route.from}-${route.to}`}><span className="route-dot"></span><div className="route-line"><span>{route.from}</span><ArrowRight size={14} /><span>{route.to}</span></div><strong>{route.price}</strong><ArrowUpRight className="route-arrow" size={16} /></div>)}<p className="route-footnote">Rates include driver allowance. Tolls, parking & state taxes extra as applicable.</p></div>
      </section>

      <section className="value-section section-pad">
        <div className="value-image"><img src={images.innova} alt="Innova ready for long road trip" /><div className="image-caption"><span>Odisha journeys</span><span>Driver-assisted</span></div></div>
        <div className="value-copy">
          <p className="eyebrow">Quiet confidence</p>
          <h2>Good travel is felt in the <em>small things.</em></h2>
          <p className="large-copy">A clean cabin. A driver who knows the road and respects your time. Clear communication from first message to drop-off.</p>
          <div className="value-points">
            <div><Check size={19} /><div><strong>Punctual pickups</strong><small>We factor in route timing so you are never rushed.</small></div></div>
            <div><Check size={19} /><div><strong>Clean, maintained fleet</strong><small>Every car is checked, washed and prepared before departure.</small></div></div>
            <div><Check size={19} /><div><strong>Experienced local drivers</strong><small>Courteous, route-smart drivers focused on your safety.</small></div></div>
          </div>
        </div>
      </section>

      <section className="wedding-section section-pad">
        <div className="wedding-copy">
          <p className="eyebrow">Special occasions</p>
          <h2>Arrive with a little more <em>feeling.</em></h2>
          <p>Decorated wedding sedans, luxury arrivals, and coordinated fleet travel for family and guests across Odisha.</p>
          <div className="wedding-tags"><span>Groom arrival</span><span>Bride family transport</span><span>Guest shuttle fleets</span><span>Outstation wedding travel</span></div>
          <Link className="button primary" to="/wedding">Explore wedding travel <ArrowRight size={18} /></Link>
        </div>
        <div className="wedding-gallery">
          <img className="wedding-main" src={images.wedding} alt="Decorated car for wedding arrival" />
          <img className="wedding-small" src={fleet[3].image} alt="Luxury sedan for special occasion" />
          <div className="wedding-note"><div><Sparkles size={18} /><span><em>Weddings</em><br />in Odisha</span></div></div>
        </div>
      </section>

      <section className="process-section section-pad">
        <div className="section-heading"><div><p className="eyebrow">How it works</p><h2>Three steps to a <em>clearer ride.</em></h2></div><p>We keep the booking process simple and direct so you can plan with confidence.</p></div>
        <div className="process-grid">
          <div><span>01</span><h3>Tell us your trip</h3><p>Share your route, dates, passenger count and vehicle preference.</p></div>
          <div><span>02</span><h3>Get clear pricing</h3><p>We provide a complete estimate with vehicle options and driver details.</p></div>
          <div><span>03</span><h3>Ride with ease</h3><p>Your car arrives clean, on time, with a professional driver ready.</p></div>
        </div>
      </section>

      <section className="gallery-section section-pad">
        <div className="section-heading"><div><p className="eyebrow">Real journeys</p><h2>A look at the <em>road.</em></h2></div><p>A peek at our vehicles on real routes, events and airport runs across Odisha.</p></div>
        <div className="gallery-grid">
          {galleryItems.slice(0, 5).map((item, idx) => (
            <figure key={item.caption} className={`gallery-item ${idx === 0 ? 'gallery-tall' : idx === 3 ? 'gallery-wide' : 'gallery-square'}`}>
              <img src={item.image} alt={item.caption} />
              <figcaption><span>{item.caption}</span></figcaption>
            </figure>
          ))}
        </div>
        <div className="section-link-row"><Link to="/gallery" className="section-link">View full gallery <ArrowRight size={16} /></Link></div>
      </section>

      <section className="testimonials-section section-pad">
        <div className="section-heading"><div><p className="eyebrow">Word of mouth</p><h2>What travellers <em>say.</em></h2></div><p>Real feedback from families, business travellers and event hosts.</p></div>
        <div className="testimonial-grid">
          {testimonials.map((t) => (
            <div className="testimonial-card" key={t.name}>
              <Quote className="testimonial-quote-icon" size={24} />
              <p className="testimonial-text">"{t.quote}"</p>
              <div className="testimonial-meta">
                <div><strong>{t.name}</strong><small>{t.location}</small></div>
                <div className="testimonial-stars">{[...Array(t.stars)].map((_, i) => <Star key={i} size={13} fill="currentColor" />)}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="final-cta-section">
        <div className="final-cta-inner">
          <p className="eyebrow eyebrow-light">Ready when you are</p>
          <h2>Tell us where you are going.<br /><em>We will help arrange the right car.</em></h2>
          <div className="final-cta-actions">
            <Link className="button light-button" to="/quote">Get a quote <ArrowRight size={18} /></Link>
            <a
              className="button ghost-light"
              href={`tel:${contactInfo.phoneTel}`}
              aria-label={`Call Diamond Travels at ${contactInfo.phoneDisplay}`}
            >
              <Phone size={18} /> Call us
            </a>
            <a
              className="button ghost-light"
              href={`https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(contactInfo.whatsappDefaultMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Message Diamond Travels on WhatsApp"
            >
              <MessageCircle size={18} /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="quote-section section-pad" id="quote"><QuoteForm /></section>
    </>
  );
}
