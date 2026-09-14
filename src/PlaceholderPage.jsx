import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { QuoteForm } from './QuoteForm';

export function PlaceholderPage({ title, eyebrow, lede }) {
  return (
    <>
      <section className="page-hero section-pad">
        <div className="page-hero-content">
          <p className="eyebrow"><span className="eyebrow-dot"></span> {eyebrow}</p>
          <h1>{title}</h1>
          <p className="page-hero-lede">{lede}</p>
          <Link className="button primary" to="/quote">Get a quote <ArrowRight size={18} /></Link>
        </div>
      </section>
      <section className="quote-section section-pad" id="quote"><QuoteForm /></section>
    </>
  );
}
