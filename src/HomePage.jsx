import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, CarFront, Check, Clock3, HeartHandshake, MessageCircle, Navigation, Phone, Quote, ShieldCheck, Sparkles, Star, Users } from 'lucide-react';
import { images, galleryItems, testimonials, serviceCards, fleet, routes } from './data';
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

      <section className="route-section section-pad" id="routes"><div className="route-intro"><p className="eyebrow eyebrow-light">Simple, useful estimates</p><h2>Popular roads.<br /><em>Clearer starting points.</em></h2><p>Public estimates help you plan. Your exact quote is always confirmed by a real person, based on your car and trip details.</p><Link className="button light-button" to="/routes">See all routes <ArrowRight size={17} /></Link></div><div className="route-list">{routes.map(([from, to, price]) => <Link className="route-row" key={to} to="/quote"><span className="route-line"><span className="route-dot"></span><span>{from}</span><ArrowRight size={14} /><span>{to}</span></span><strong>{price}</strong><ArrowUpRight className="route-arrow" size={17} /></Link>)}<p className="route-footnote">Estimates shown for design preview · tolls and trip details may change the final quote.</p></div></section>

      <section className="section-pad value-section"><div className="value-image"><img src={images.innova} alt="Family-ready vehicle on an outstation journey" /><div className="image-caption"><span>Ready for the road ahead</span><span>01 / 03</span></div></div><div className="value-copy"><p className="eyebrow">More than a car</p><h2>Good travel is felt in the <em>small things.</em></h2><p className="large-copy">A clean vehicle. A driver who knows the way. A quick reply when plans change. Diamond Travels brings a little more thoughtfulness to the journeys that fill your days.</p><div className="value-points"><div><HeartHandshake size={20} /><span><strong>Easy to talk to</strong><small>Real people before every ride</small></span></div><div><Users size={20} /><span><strong>Right-sized travel</strong><small>From one car to a whole family</small></span></div><div><Check size={20} /><span><strong>Clearer from the start</strong><small>Simple estimates, human confirmation</small></span></div></div></div></section>

      <section className="wedding-section section-pad" id="wedding"><div className="wedding-copy"><p className="eyebrow">For the moments that matter</p><h2>Arrive with a little more <em>feeling.</em></h2><p>Wedding transport that feels considered from the first message to the final arrival. Decorated cars, groom transfers, premium arrivals and family movement — arranged around your day.</p><div className="wedding-tags"><span>Groom car</span><span>Decorated cars</span><span>Family vehicles</span><span>Premium arrivals</span></div><Link className="button primary" to="/wedding">Plan wedding travel <ArrowRight size={18} /></Link></div><div className="wedding-gallery"><img className="wedding-main" src={images.wedding} alt="Decorated wedding car at a warm Indian wedding venue" /><img className="wedding-small" src={images.audi} alt="Premium Audi arrival" /><span className="wedding-note">For your<br /><em>big day</em> <Sparkles size={14} /></span></div></section>

      <section className="process-section section-pad"><div className="section-heading"><div><p className="eyebrow">No complicated booking engine</p><h2>Three steps to a <em>better ride.</em></h2></div><p>You can call or message us directly. Or share a few details first — whichever feels easier.</p></div><div className="process-grid"><div><span>01</span><h3>Tell us your trip</h3><p>Pickup, destination, date and the kind of car that feels right.</p></div><div><span>02</span><h3>We confirm the details</h3><p>We'll check the car, explain the estimate and answer your questions.</p></div><div><span>03</span><h3>Your ride is arranged</h3><p>Once everything feels clear, your journey is taken care of.</p></div></div></section>

      <section className="gallery-section section-pad" id="gallery">
        <div className="section-heading"><div><p className="eyebrow">Real moments, real journeys</p><h2>A look at the <em>road.</em></h2></div><p>Weddings, airport runs, family trips and the everyday travel that fills the week.</p></div>
        <div className="gallery-grid">{galleryItems.map((item, i) => <figure key={i} className={`gallery-item gallery-${item.size}`}><img src={item.src} alt={item.alt} loading="lazy" /><figcaption><span>{item.label}</span></figcaption></figure>)}</div>
        <div className="section-link-row"><Link to="/gallery" className="section-link">View full gallery <ArrowRight size={16} /></Link></div>
      </section>

      <section className="section-pad testimonials-section">
        <div className="section-heading"><div><p className="eyebrow">Kind words from the road</p><h2>What travellers <em>say.</em></h2></div><p>Placeholder reviews for design preview — replace with genuine feedback before launch.</p></div>
        <div className="testimonial-grid">{testimonials.map((t, i) => <article className="testimonial-card" key={i}><Quote className="testimonial-quote-icon" size={24} /><p className="testimonial-text">{t.quote}</p><div className="testimonial-meta"><div><strong>{t.name}</strong><small>{t.trip}</small></div><div className="testimonial-stars">{[0,1,2,3,4].map(s => <Star key={s} size={13} fill="currentColor" />)}</div></div></article>)}</div>
      </section>

      <section className="final-cta-section">
        <div className="final-cta-inner">
          <p className="eyebrow eyebrow-light">Ready when you are</p>
          <h2>Tell us where you are going.<br /><em>We will help arrange the right car.</em></h2>
          <div className="final-cta-actions"><Link className="button light-button" to="/quote">Get a quote <ArrowRight size={18} /></Link><Link className="button ghost-light" to="/quote"><Phone size={18} /> Call us</Link><Link className="button ghost-light" to="/quote"><MessageCircle size={18} /> WhatsApp</Link></div>
        </div>
      </section>

      <section className="quote-section section-pad" id="quote"><QuoteForm /></section>
    </>
  );
}
