import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Clock3, Heart, MapPin, Sparkles, Star } from 'lucide-react';
import { images } from './data';
import { QuoteForm } from './QuoteForm';

const weddingImages = {
  groomCar: 'https://images.pexels.com/photos/38381766/pexels-photo-38381766.jpeg?auto=compress&cs=tinysrgb&w=1200',
  barat: 'https://images.pexels.com/photos/36818415/pexels-photo-36818415.jpeg?auto=compress&cs=tinysrgb&w=1200',
  decoratedAudi: 'https://images.pexels.com/photos/32878565/pexels-photo-32878565.jpeg?auto=compress&cs=tinysrgb&w=1200',
  groomHorse: 'https://images.pexels.com/photos/35457634/pexels-photo-35457634.jpeg?auto=compress&cs=tinysrgb&w=1200',
  coupleCar: 'https://images.pexels.com/photos/6023737/pexels-photo-6023737.jpeg?auto=compress&cs=tinysrgb&w=800',
  marigold: 'https://images.pexels.com/photos/29215357/pexels-photo-29215357.jpeg?auto=compress&cs=tinysrgb&w=1200',
  baratNight: 'https://images.pexels.com/photos/24334592/pexels-photo-24334592.jpeg?auto=compress&cs=tinysrgb&w=1200',
  brideGroom: 'https://images.pexels.com/photos/20058080/pexels-photo-20058080.jpeg?auto=compress&cs=tinysrgb&w=1200',
};

const weddingPackages = [
  {
    name: 'Groom Car',
    vehicles: 'Decorated Verna or City',
    seats: '4 seats',
    includes: ['Flower decoration', 'Ribbon and accessories', 'Clean, AC vehicle', 'Experienced driver'],
    priceNote: 'Custom quote',
    accent: 'saffron',
  },
  {
    name: 'Premium Arrival',
    vehicles: 'Audi or similar luxury car',
    seats: '4 seats',
    includes: ['Premium flower decoration', 'Luxury vehicle', 'Chauffeur in formal attire', 'Flexible timing'],
    priceNote: 'Custom quote',
    accent: 'premium',
  },
  {
    name: 'Family Transport',
    vehicles: 'Innova or Tempo Traveller',
    seats: '6–17 seats',
    includes: ['Multiple vehicles coordinated', 'Guest pickup and drop', 'Luggage space', 'Driver waits through the event'],
    priceNote: 'Custom quote',
    accent: 'evergreen',
  },
];

const weddingFeatures = [
  { icon: 'Heart', title: 'Decorated groom cars', text: 'Flowers, ribbons and accessories — arranged the way you want them.' },
  { icon: 'Sparkles', title: 'Premium options', text: 'Audi, Verna and luxury sedans for the arrival that matters.' },
  { icon: 'MapPin', title: 'Guest transport', text: 'Innova and Tempo Travellers to move family and friends together.' },
  { icon: 'Clock3', title: 'Coordinated timing', text: 'We work with your wedding timeline — early morning to late night.' },
];

const weddingGallery = [
  { src: weddingImages.groomCar, alt: 'Groom posing with decorated car at a colorful Indian wedding', label: 'The groom arrives' },
  { src: weddingImages.decoratedAudi, alt: 'White Audi with floral decoration parked before a wedding', label: 'Premium decoration' },
  { src: weddingImages.brideGroom, alt: 'Indian groom with family during a nighttime wedding procession', label: 'Baraat night' },
  { src: weddingImages.coupleCar, alt: 'Indian bride and groom sharing a moment on their wedding day', label: 'A happy moment' },
];

export function WeddingPage() {
  const [expandedPkg, setExpandedPkg] = useState(0);

  return (
    <>
      {/* Hero — warm, desi feel */}
      <section className="wedding-page-hero">
        <div className="wedding-hero-overlay" />
        <img src={weddingImages.brideGroom} alt="Indian wedding procession at night" className="wedding-hero-bg" />
        <div className="wedding-hero-content section-pad">
          <p className="eyebrow eyebrow-light"><span className="eyebrow-dot"></span> For the moments that matter</p>
          <h1>Arrive with a little <em>more feeling.</em></h1>
          <p className="wedding-hero-lede">Decorated groom cars, premium arrivals and thoughtful family transport for your wedding day — arranged with the care that Odisha weddings deserve.</p>
          <div className="wedding-hero-actions">
            <Link className="button primary" to="/quote">Plan your wedding transport <ArrowRight size={16} /></Link>
            <a className="button ghost-light" href="#packages">View packages</a>
          </div>
        </div>
      </section>

      {/* Marigold strip — visual divider with desi character */}
      <div className="marigold-strip">
        <img src={weddingImages.marigold} alt="Marigold flowers and diyas" loading="lazy" />
      </div>

      {/* Features — mobile: stacked cards, desktop: 4-column */}
      <section className="section-pad wedding-features-section">
        <div className="section-heading">
          <div><p className="eyebrow">Every detail, looked after</p><h2>Wedding transport, <em>arranged with care.</em></h2></div>
          <p>From the groom's decorated car to moving all your guests — we handle the transport so you can focus on the day.</p>
        </div>
        <div className="wedding-features-grid">
          {weddingFeatures.map((feature) => (
            <div className="wedding-feature" key={feature.title}>
              <span className="wedding-feature-icon">
                {feature.icon === 'Heart' && <Heart size={20} />}
                {feature.icon === 'Sparkles' && <Sparkles size={20} />}
                {feature.icon === 'MapPin' && <MapPin size={20} />}
                {feature.icon === 'Clock3' && <Clock3 size={20} />}
              </span>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Photo showcase — mobile: swipeable, desktop: side-by-side */}
      <section className="section-pad wedding-showcase-section">
        <div className="wedding-showcase-intro">
          <p className="eyebrow">Real moments</p>
          <h2>The arrival <em>matters.</em></h2>
          <p className="wedding-showcase-text">Every wedding is different. Whether it's a decorated Verna for the groom, an Audi for a premium arrival, or an Innova for the whole family — we arrange it with attention to the day.</p>
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="wedding-showcase-mobile">
          {weddingGallery.map((item) => (
            <figure className="wedding-showcase-item" key={item.label}>
              <img src={item.src} alt={item.alt} loading="lazy" />
              <figcaption><span>{item.label}</span></figcaption>
            </figure>
          ))}
        </div>

        {/* Desktop: arranged grid */}
        <div className="wedding-showcase-desktop">
          <div className="wedding-showcase-main">
            <img src={weddingImages.groomCar} alt="Groom with decorated car at an Indian wedding" />
            <span className="wedding-showcase-label">The groom arrives</span>
          </div>
          <div className="wedding-showcase-side">
            <div className="wedding-showcase-tile">
              <img src={weddingImages.decoratedAudi} alt="Decorated Audi before a wedding" />
              <span className="wedding-showcase-label">Premium decoration</span>
            </div>
            <div className="wedding-showcase-tile">
              <img src={weddingImages.brideGroom} alt="Nighttime wedding procession" />
              <span className="wedding-showcase-label">Baraat night</span>
            </div>
          </div>
          <div className="wedding-showcase-wide">
            <img src={weddingImages.coupleCar} alt="Bride and groom on their wedding day" />
            <span className="wedding-showcase-label">A happy moment</span>
          </div>
        </div>
      </section>

      {/* Packages — mobile: tappable expandable cards, desktop: 3-column */}
      <section className="section-pad wedding-packages-section" id="packages">
        <div className="section-heading">
          <div><p className="eyebrow">Choose what fits your day</p><h2>Wedding <em>packages.</em></h2></div>
          <p>Every wedding is unique, so every package is tailored. These are starting points — tell us about your day and we'll arrange the rest.</p>
        </div>

        {/* Mobile: expandable cards */}
        <div className="wedding-packages-mobile">
          {weddingPackages.map((pkg, index) => (
            <article
              className={expandedPkg === index ? 'wedding-pkg-card open' : 'wedding-pkg-card'}
              key={pkg.name}
              onClick={() => setExpandedPkg(expandedPkg === index ? null : index)}
            >
              <div className="wedding-pkg-header">
                <div>
                  <strong>{pkg.name}</strong>
                  <small>{pkg.vehicles}</small>
                  <span className="wedding-pkg-seats">{pkg.seats}</span>
                </div>
                <span className="wedding-pkg-chevron">{expandedPkg === index ? '−' : '+'}</span>
              </div>
              {expandedPkg === index && (
                <div className="wedding-pkg-body">
                  <ul className="wedding-pkg-includes">
                    {pkg.includes.map((item) => <li key={item}><Check size={15} /><span>{item}</span></li>)}
                  </ul>
                  <div className="wedding-pkg-footer">
                    <span className="wedding-pkg-price">{pkg.priceNote}</span>
                    <Link className="button primary" to="/quote" onClick={(e) => e.stopPropagation()}>Enquire <ArrowRight size={15} /></Link>
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Desktop: 3-column */}
        <div className="wedding-packages-desktop">
          {weddingPackages.map((pkg) => (
            <article className={`wedding-pkg-column ${pkg.accent}`} key={pkg.name}>
              <span className="card-label">{pkg.name}</span>
              <h3>{pkg.vehicles}</h3>
              <p className="wedding-pkg-seats-text">{pkg.seats}</p>
              <ul className="wedding-pkg-includes">
                {pkg.includes.map((item) => <li key={item}><Check size={15} /><span>{item}</span></li>)}
              </ul>
              <div className="wedding-pkg-footer-desktop">
                <span className="wedding-pkg-price">{pkg.priceNote}</span>
                <Link className="button primary" to="/quote">Enquire <ArrowRight size={15} /></Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Testimonial quote — big, warm */}
      <section className="wedding-quote-section">
        <div className="section-pad wedding-quote-inner">
          <Star size={22} className="wedding-quote-star" />
          <blockquote>
            <p>"They arranged a decorated Verna for the groom and an Innova for the family. Everything felt looked after — the cars were on time, the decoration was beautiful, and we didn't have to worry about a single pickup."</p>
            <footer><strong>Priya Pattnaik</strong><span>Wedding transport, Cuttack</span></footer>
          </blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="quote-section section-pad" id="quote">
        <div className="section-heading" style={{ marginBottom: '32px' }}>
          <div><p className="eyebrow">Tell us about your day</p><h2>Let's plan your <em>wedding transport.</em></h2></div>
        </div>
        <QuoteForm />
      </section>
    </>
  );
}
