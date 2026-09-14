import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, Check, Clock3, Navigation, ShieldCheck, Users } from 'lucide-react';
import { fleetDetail, images } from './data';
import { QuoteForm } from './QuoteForm';

export function FleetPage() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [expandedMobile, setExpandedMobile] = useState(null);
  const active = fleetDetail[activeIndex];

  const toggleMobile = (i) => setExpandedMobile(expandedMobile === i ? null : i);

  return (
    <>
      <section className="page-hero section-pad">
        <div className="page-hero-content">
          <p className="eyebrow"><span className="eyebrow-dot"></span> Our vehicles</p>
          <h1>A car for the way <em>you travel.</em></h1>
          <p className="page-hero-lede">From small cars to premium sedans and Tempo Travellers, every vehicle is clean, air-conditioned and ready with a driver who knows the road.</p>
        </div>
        <div className="page-hero-visual">
          <img src={images.innova} alt="Family travel vehicle ready for an outstation journey" />
        </div>
      </section>

      <section className="confidence-strip"><div><Clock3 size={18} /><span><strong>24/7</strong> service</span></div><div><ShieldCheck size={18} /><span>Verified drivers</span></div><div><Check size={18} /><span>Clean, cared-for cars</span></div><div><Navigation size={18} /><span>Cuttack & Bhubaneswar</span></div></section>

      {/* Desktop/tablet: side-by-side selector */}
      <section className="section-pad fleet-page-desktop">
        <div className="section-heading"><div><p className="eyebrow">Choose what fits</p><h2>Find the right <em>car.</em></h2></div><p>Tap a vehicle to see details. Each one comes with a driver, fuel and the peace of mind of a human-confirmed booking.</p></div>
        <div className="fleet-page-layout">
          <div className="fleet-page-selector">
            {fleetDetail.map((car, index) => (
              <button key={car.name} className={activeIndex === index ? 'fleet-page-tab active' : 'fleet-page-tab'} onClick={() => setActiveIndex(index)}>
                <span className="fleet-page-tab-index">{String(index + 1).padStart(2, '0')}</span>
                <span className="fleet-page-tab-info"><strong>{car.name}</strong><small>{car.note}</small></span>
                <span className="fleet-page-tab-seats"><Users size={14} /> {car.seats.split(' ')[0]}</span>
              </button>
            ))}
          </div>
          <div className="fleet-page-detail">
            <div className="fleet-page-detail-image">
              <img src={active.image} alt={`${active.name} — ${active.model}`} />
              <span className={`fleet-page-badge ${active.accent}`}>{active.tagline}</span>
            </div>
            <div className="fleet-page-detail-body">
              <p className="card-label">{active.name}</p>
              <h2>{active.model}</h2>
              <p className="fleet-page-desc">{active.description}</p>
              <div className="fleet-page-specs">
                {active.specs.map((spec) => (
                  <div className="fleet-page-spec" key={spec.label}>
                    <span className="fleet-page-spec-label">{spec.label}</span>
                    <span className="fleet-page-spec-value">{spec.value}</span>
                  </div>
                ))}
              </div>
              <div className="fleet-page-ideal">
                <span className="card-label">Best for</span>
                <div className="fleet-page-ideal-tags">{active.idealFor.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
              <div className="fleet-page-price-row">
                <div className="fleet-page-price"><strong>{active.priceFrom}</strong><small>{active.priceUnit}</small></div>
                <Link className="button primary" to="/quote">Get a quote <ArrowRight size={16} /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile: tappable expanding cards */}
      <section className="section-pad fleet-page-mobile">
        <div className="section-heading"><div><p className="eyebrow">Choose what fits</p><h2>Find the right <em>car.</em></h2></div><p>Tap a vehicle to see more. Each one comes with a driver, fuel and a human-confirmed booking.</p></div>
        <div className="fleet-mobile-list">
          {fleetDetail.map((car, index) => (
            <article className={expandedMobile === index ? 'fleet-mobile-card open' : 'fleet-mobile-card'} key={car.name} onClick={() => toggleMobile(index)}>
              <div className="fleet-mobile-card-header">
                <span className="fleet-mobile-index">{String(index + 1).padStart(2, '0')}</span>
                <div className="fleet-mobile-card-info">
                  <strong>{car.name}</strong>
                  <small>{car.model}</small>
                  <div className="fleet-mobile-meta">
                    <span><Users size={13} /> {car.seats}</span>
                    <span><Briefcase size={13} /> {car.bags}</span>
                  </div>
                </div>
                <span className={`fleet-mobile-chevron ${car.accent}`}>{expandedMobile === index ? '−' : '+'}</span>
              </div>
              <div className="fleet-mobile-card-image">
                <img src={car.image} alt={`${car.name} — ${car.model}`} loading="lazy" />
                <span className={`fleet-page-badge ${car.accent}`}>{car.tagline}</span>
              </div>
              {expandedMobile === index && (
                <div className="fleet-mobile-card-body">
                  <p className="fleet-page-desc">{car.description}</p>
                  <div className="fleet-page-ideal">
                    <span className="card-label">Best for</span>
                    <div className="fleet-page-ideal-tags">{car.idealFor.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  </div>
                  <div className="fleet-mobile-price-row">
                    <div className="fleet-page-price"><strong>{car.priceFrom}</strong><small>{car.priceUnit}</small></div>
                    <Link className="button primary" to="/quote" onClick={(e) => e.stopPropagation()}>Get a quote <ArrowRight size={15} /></Link>
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad process-section">
        <div className="section-heading"><div><p className="eyebrow">No complicated booking engine</p><h2>Three steps to a <em>better ride.</em></h2></div><p>You can call or message us directly. Or share a few details first — whichever feels easier.</p></div>
        <div className="process-grid"><div><span>01</span><h3>Tell us your trip</h3><p>Pickup, destination, date and the kind of car that feels right.</p></div><div><span>02</span><h3>We confirm the details</h3><p>We'll check the car, explain the estimate and answer your questions.</p></div><div><span>03</span><h3>Your ride is arranged</h3><p>Once everything feels clear, your journey is taken care of.</p></div></div>
      </section>

      <section className="quote-section section-pad" id="quote"><QuoteForm /></section>
    </>
  );
}
