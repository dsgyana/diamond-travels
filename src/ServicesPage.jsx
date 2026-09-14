import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Check, Clock3, Navigation, ShieldCheck } from 'lucide-react';
import { servicesDetail, images } from './data';
import { QuoteForm } from './QuoteForm';

export function ServicesPage() {
  return (
    <>
      <section className="page-hero section-pad">
        <div className="page-hero-content">
          <p className="eyebrow"><span className="eyebrow-dot"></span> What we offer</p>
          <h1>Travel for every kind <em>of journey.</em></h1>
          <p className="page-hero-lede">From a quick city ride to a full wedding fleet, Diamond Travels arranges the right car, the right driver and the right timing for where you need to go.</p>
        </div>
        <div className="page-hero-visual">
          <img src={images.airport} alt="Clean sedan ready for a transfer in Cuttack" />
        </div>
      </section>

      <section className="confidence-strip"><div><Clock3 size={18} /><span><strong>24/7</strong> service</span></div><div><ShieldCheck size={18} /><span>Verified drivers</span></div><div><Check size={18} /><span>Clean, cared-for cars</span></div><div><Navigation size={18} /><span>Cuttack & Bhubaneswar</span></div></section>

      <section className="section-pad services-detail-section">
        <div className="services-detail-list">
          {servicesDetail.map((service, index) => (
            <article className={`service-detail-card ${service.accent}`} key={service.label} id={service.label.toLowerCase().replace(/\s+/g, '-')}>
              <div className="service-detail-image">
                <img src={service.image} alt={service.label} loading={index === 0 ? 'eager' : 'lazy'} />
                <span className="card-number">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <div className="service-detail-body">
                <p className="card-label">{service.label}</p>
                <h2>{service.title}</h2>
                <p className="service-detail-intro">{service.intro}</p>
                <ul className="service-detail-points">
                  {service.points.map((point) => <li key={point}><Check size={16} /><span>{point}</span></li>)}
                </ul>
                <div className="service-detail-footer">
                  <div className="service-detail-ideal">
                    <span className="card-label">Best for</span>
                    <p>{service.ideal}</p>
                  </div>
                  <div className="service-detail-price">
                    <span className="card-label">Pricing</span>
                    <p>{service.priceNote}</p>
                  </div>
                </div>
                <Link className="button primary" to="/quote">Get a quote <ArrowRight size={16} /></Link>
              </div>
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
