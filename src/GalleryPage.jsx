import { useState, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { galleryDetail, images } from './data';
import { QuoteForm } from './QuoteForm';

const categories = ['All', 'Weddings', 'Premium', 'Family', 'Journeys', 'Airport'];

export function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return galleryDetail;
    return galleryDetail.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const nextImage = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % filtered.length));
  }, [filtered.length]);

  const prevImage = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev - 1 + filtered.length) % filtered.length));
  }, [filtered.length]);

  return (
    <>
      <section className="page-hero section-pad">
        <div className="page-hero-content">
          <p className="eyebrow"><span className="eyebrow-dot"></span> Real moments, real journeys</p>
          <h1>A look at <em>the road.</em></h1>
          <p className="page-hero-lede">Weddings, airport runs, family trips and everyday travel. These are the moments that make Diamond Travels — the cars, the people and the journeys across Odisha.</p>
        </div>
        <div className="page-hero-visual">
          <img src={images.wedding} alt="Decorated wedding car at an Indian wedding venue" />
        </div>
      </section>

      <section className="section-pad gallery-page-section">
        {/* Category pills — horizontal scroll on mobile */}
        <div className="gallery-categories">
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

        {/* Mobile: horizontal scroll cards */}
        <div className="gallery-mobile-scroll">
          {filtered.map((item, index) => (
            <figure className="gallery-mobile-item" key={`${item.label}-${index}`} onClick={() => openLightbox(index)}>
              <img src={item.src} alt={item.alt} loading={index < 3 ? 'eager' : 'lazy'} />
              <figcaption>
                <span className="gallery-item-label">{item.label}</span>
                <span className="gallery-item-cat">{item.category}</span>
              </figcaption>
              <span className="gallery-mobile-zoom"><ZoomIn size={18} /></span>
            </figure>
          ))}
        </div>

        {/* Desktop: masonry grid */}
        <div className="gallery-desktop-grid">
          {filtered.map((item, index) => (
            <figure
              className={`gallery-desktop-item ${index % 5 === 0 ? 'tall' : index % 3 === 0 ? 'wide' : ''}`}
              key={`desktop-${item.label}-${index}`}
              onClick={() => openLightbox(index)}
            >
              <img src={item.src} alt={item.alt} loading={index < 4 ? 'eager' : 'lazy'} />
              <figcaption>
                <div>
                  <span className="gallery-item-label">{item.label}</span>
                  <span className="gallery-item-cat">{item.category}</span>
                </div>
                <span className="gallery-desktop-zoom"><ZoomIn size={16} /></span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && filtered[lightboxIndex] && (
        <div className="gallery-lightbox" onClick={closeLightbox}>
          <button className="gallery-lightbox-close" onClick={closeLightbox} aria-label="Close"><X size={24} /></button>
          <button className="gallery-lightbox-nav prev" onClick={(e) => { e.stopPropagation(); prevImage(); }} aria-label="Previous"><ChevronLeft size={28} /></button>
          <figure className="gallery-lightbox-figure" onClick={(e) => e.stopPropagation()}>
            <img src={filtered[lightboxIndex].src} alt={filtered[lightboxIndex].alt} />
            <figcaption>
              <strong>{filtered[lightboxIndex].label}</strong>
              <span>{filtered[lightboxIndex].caption}</span>
              <small>{lightboxIndex + 1} / {filtered.length}</small>
            </figcaption>
          </figure>
          <button className="gallery-lightbox-nav next" onClick={(e) => { e.stopPropagation(); nextImage(); }} aria-label="Next"><ChevronRight size={28} /></button>
        </div>
      )}

      <section className="final-cta-section">
        <div className="final-cta-inner">
          <h2>Have a journey <em>in mind?</em></h2>
          <div className="final-cta-actions">
            <Link className="button primary" to="/quote">Get a quote <ArrowRight size={16} /></Link>
            <Link className="button ghost-light" to="/fleet">View our fleet <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
