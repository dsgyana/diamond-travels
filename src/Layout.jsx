import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, MessageCircle, Navigation, Phone, X } from 'lucide-react';

export function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { label: 'Services', path: '/services' },
    { label: 'Fleet', path: '/fleet' },
    { label: 'Wedding', path: '/wedding' },
    { label: 'Routes', path: '/routes' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact', path: '/quote' },
  ];

  return (
    <div className="app-shell">
      <header className="site-header">
        <Link className="brand" to="/" aria-label="Diamond Travels home">
          <span className="brand-mark"><span></span><span></span><span></span></span>
          <span><strong>DIAMOND</strong><small>TRAVELS</small></span>
        </Link>
        <nav className={menuOpen ? 'main-nav open' : 'main-nav'} aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.label} to={item.path} className={location.pathname === item.path ? 'nav-active' : ''}>{item.label}</Link>
          ))}
          <Link className="nav-quote" to="/quote">Get a quote <ArrowUpRight size={16} /></Link>
          <button className="menu-close" onClick={() => setMenuOpen(false)} aria-label="Close menu"><X size={22} /></button>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
      </header>
      <main id="top">{children}</main>
      <footer className="site-footer" id="contact">
        <div className="footer-top">
          <div>
            <Link className="brand footer-brand" to="/"><span className="brand-mark"><span></span><span></span><span></span></span><span><strong>DIAMOND</strong><small>TRAVELS</small></span></Link>
            <p>Reliable rides.<br /><em>Thoughtfully arranged.</em></p>
          </div>
          <div className="footer-links">
            <div><strong>Explore</strong><Link to="/services">Services</Link><Link to="/fleet">Fleet</Link><Link to="/wedding">Wedding travel</Link><Link to="/gallery">Gallery</Link></div>
            <div><strong>Plan</strong><Link to="/routes">Popular routes</Link><Link to="/quote">Get a quote</Link><Link to="/quote">Contact</Link></div>
            <div><strong>Based in</strong><span>Cuttack, Odisha</span><span>Serving Bhubaneswar</span><span>Across Odisha</span></div>
          </div>
        </div>
        <div className="footer-bottom"><span>© 2026 Diamond Travels</span><span>Built for better journeys.</span></div>
      </footer>
      <div className="mobile-action-bar">
        <button onClick={() => setMenuOpen(false)}><Phone size={17} /><span>Call</span></button>
        <button onClick={() => setMenuOpen(false)}><MessageCircle size={17} /><span>WhatsApp</span></button>
        <Link to="/quote"><Navigation size={17} /><span>Get quote</span></Link>
      </div>
    </div>
  );
}
