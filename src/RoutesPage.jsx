import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock3, MapPin, Navigation, Search } from 'lucide-react';
import { routeDetail, images } from './data';
import { QuoteForm } from './QuoteForm';

const categories = ['All', 'Airport', 'City', 'Outstation', 'Local'];

export function RoutesPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    return routeDetail.filter((route) => {
      const matchesCategory = activeCategory === 'All' || route.category === activeCategory;
      const q = query.toLowerCase().trim();
      const matchesQuery = !q || route.to.toLowerCase().includes(q) || route.from.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  return (
    <>
      <section className="page-hero section-pad">
        <div className="page-hero-content">
          <p className="eyebrow"><span className="eyebrow-dot"></span> Popular roads</p>
          <h1>Popular routes.<br /><em>Clearer starting points.</em></h1>
          <p className="page-hero-lede">Estimated fares for common trips from Cuttack and Bhubaneswar to destinations across Odisha. Every price is a starting point — we confirm the exact fare when you book.</p>
        </div>
        <div className="page-hero-visual">
          <img src={images.highway} alt="Highway road trip at sunset in Odisha" />
        </div>
      </section>

      <section className="section-pad routes-page-section">
        {/* Search bar — mobile-first, prominent */}
        <div className="routes-search-wrap">
          <div className="routes-search">
            <Search size={18} />
            <input
              type="text"
              placeholder="Search a destination..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          {/* Category pills — horizontal scroll on mobile */}
          <div className="routes-categories">
            {categories.map((cat) => (
              <button
                key={cat}
                className={activeCategory === cat ? 'route-pill active' : 'route-pill'}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Route cards */}
        {filtered.length > 0 ? (
          <div className="routes-grid">
            {filtered.map((route, index) => (
              <article className="route-card" key={`${route.from}-${route.to}-${index}`}>
                <div className="route-card-top">
                  <span className={`route-card-cat ${route.category.toLowerCase()}`}>{route.category}</span>
                  <span className="route-card-price">{route.price}</span>
                </div>
                <div className="route-card-path">
                  <div className="route-card-from">
                    <MapPin size={15} />
                    <span>{route.from}</span>
                  </div>
                  <div className="route-card-connector">
                    <Navigation size={14} />
                  </div>
                  <div className="route-card-to">
                    <MapPin size={15} />
                    <strong>{route.to}</strong>
                  </div>
                </div>
                <div className="route-card-meta">
                  <span><Navigation size={13} /> {route.distance}</span>
                  <span><Clock3 size={13} /> {route.time}</span>
                </div>
                <p className="route-card-note">{route.note}</p>
                <div className="route-card-cars">
                  {route.cars.map((car) => <span key={car}>{car}</span>)}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="routes-empty">
            <p>No routes found for "{query}".</p>
            <button className="route-pill active" onClick={() => { setQuery(''); setActiveCategory('All'); }}>Clear search</button>
          </div>
        )}
      </section>

      <section className="section-pad process-section">
        <div className="section-heading"><div><p className="eyebrow">Every price is a starting point</p><h2>Final fare <em>depends on your trip.</em></h2></div><p>The prices here are estimates for standard sedan bookings. Final fare depends on vehicle choice, timing, waiting time, tolls and whether it's one-way or round trip.</p></div>
        <div className="routes-factors">
          <div className="route-factor"><span>Vehicle choice</span><p>Sedan, Innova or premium car — each has a different rate.</p></div>
          <div className="route-factor"><span>One-way or round trip</span><p>Round trips include driver waiting time at your destination.</p></div>
          <div className="route-factor"><span>Timing</span><p>Early morning or late night trips may have a small additional charge.</p></div>
          <div className="route-factor"><span>Tolls and parking</span><p>Actual toll and parking charges are added to the final fare.</p></div>
        </div>
      </section>

      <section className="quote-section section-pad" id="quote"><QuoteForm /></section>
    </>
  );
}
