import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ArrowUpRight,
  Car,
  ChevronRight,
  Compass,
  Heart,
  Home,
  Image,
  Menu,
  MessageCircle,
  Navigation,
  Phone,
  PhoneCall,
  Sparkles,
  X
} from 'lucide-react';
import { contactInfo } from './data';

export function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    setMenuOpen(false);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  }, [location.pathname]);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = menuOpen ? 'hidden' : '';
    }
    return () => {
      if (typeof document !== 'undefined') {
        document.body.style.overflow = '';
      }
    };
  }, [menuOpen]);

  const isDarkHeroPage = location.pathname === '/wedding';

  const navItems = [
    { label: 'Home', path: '/', icon: Home },
    { label: 'Services', path: '/services', icon: Sparkles },
    { label: 'Fleet', path: '/fleet', icon: Car },
    { label: 'Wedding', path: '/wedding', icon: Heart },
    { label: 'Routes', path: '/routes', icon: Compass },
    { label: 'Gallery', path: '/gallery', icon: Image },
    { label: 'Contact', path: '/quote', icon: PhoneCall },
  ];

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchEnd - touchStart;
    if (distance > 50) {
      setMenuOpen(false);
    }
  };

  return (
    <div className="app-shell">
      {/* Dim backdrop when mobile drawer is open */}
      <div
        className={`drawer-backdrop ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      <header className={`site-header ${isDarkHeroPage ? 'light-header' : ''}`}>
        <Link className="brand" to="/" aria-label="Diamond Travels home">
          <span className="brand-mark"><span></span><span></span><span></span></span>
          <span><strong>DIAMOND</strong><small>TRAVELS</small></span>
        </Link>
        <nav
          className={`main-nav ${menuOpen ? 'open' : ''}`}
          aria-label="Main navigation"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Mobile drawer header with brand & single close button */}
          <div className="drawer-header">
            <Link className="brand" to="/" onClick={() => setMenuOpen(false)}>
              <span className="brand-mark"><span></span><span></span><span></span></span>
              <span><strong>DIAMOND</strong><small>TRAVELS</small></span>
            </Link>
            <button
              className="drawer-close-btn"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={18} />
            </button>
          </div>

          <div className="drawer-links">
            {navItems.map((item, index) => {
              const IconComponent = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className={isActive ? 'nav-active' : ''}
                  style={{ '--item-index': index }}
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="drawer-link-left">
                    <span className="drawer-link-icon">
                      <IconComponent size={18} />
                    </span>
                    <span className="drawer-link-label">{item.label}</span>
                  </span>
                  <ChevronRight size={16} className="drawer-link-arrow" />
                </Link>
              );
            })}
          </div>

          <div className="drawer-bottom-card">
            <Link
              className="nav-quote"
              to="/quote"
              onClick={() => setMenuOpen(false)}
            >
              Get a quote <ArrowUpRight size={16} />
            </Link>

            <div className="drawer-contact-strip">
              <a href={`tel:${contactInfo.phoneTel}`} aria-label="Call Diamond Travels">
                <Phone size={14} /> <span>Call Us</span>
              </a>
              <a
                href={`https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(contactInfo.whatsappDefaultMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Diamond Travels"
              >
                <MessageCircle size={14} /> <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </nav>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={menuOpen}
        >
          <Menu size={26} />
        </button>
      </header>

      <main id="top">{children}</main>

      <footer className="site-footer" id="contact">
        <div className="footer-top">
          <div>
            <Link className="brand footer-brand" to="/"><span className="brand-mark"><span></span><span></span><span></span></span><span><strong>DIAMOND</strong><small>TRAVELS</small></span></Link>
            <p>Reliable rides.<br /><em>Thoughtfully arranged.</em></p>
          </div>
          <div className="footer-links">
            <div>
              <strong>Explore</strong>
              <Link to="/services">Services</Link>
              <Link to="/fleet">Fleet</Link>
              <Link to="/wedding">Wedding travel</Link>
              <Link to="/gallery">Gallery</Link>
            </div>
            <div>
              <strong>Plan</strong>
              <Link to="/routes">Popular routes</Link>
              <Link to="/quote">Get a quote</Link>
              <Link to="/quote">Book online</Link>
            </div>
            <div>
              <strong>Contact</strong>
              <a href={`tel:${contactInfo.phoneTel}`}>{contactInfo.phoneDisplay}</a>
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              <a
                href={`https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(contactInfo.whatsappDefaultMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Chat
              </a>
            </div>
            <div>
              <strong>Locations</strong>
              <span>Cuttack, Odisha</span>
              <span>Bhubaneswar, Odisha</span>
              <span>Across Odisha</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Diamond Travels</span>
          <span>{contactInfo.phoneDisplay} · {contactInfo.email}</span>
          <span>Built for better journeys.</span>
        </div>
      </footer>

      {/* Desktop Floating Concierge Pill (Desktop Only) */}
      <div className="desktop-floating-concierge" role="complementary" aria-label="Quick contact concierge">
        <div className="concierge-badge">
          <span className="concierge-pulse" />
          <span className="concierge-status">24/7 Concierge</span>
        </div>
        <div className="concierge-actions">
          <a
            href={`https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(contactInfo.whatsappDefaultMsg)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="concierge-btn whatsapp"
            aria-label="Instant WhatsApp quote"
          >
            <MessageCircle size={15} />
            <span>WhatsApp</span>
          </a>
          <a
            href={`tel:${contactInfo.phoneTel}`}
            className="concierge-btn call"
            aria-label="Call Diamond Travels"
          >
            <Phone size={14} />
            <span>Call</span>
          </a>
        </div>
      </div>

      {/* Mobile Bottom Action Bar (Mobile Only) */}
      <div className={`mobile-action-bar ${menuOpen ? 'menu-is-open' : ''}`}>
        <a href={`tel:${contactInfo.phoneTel}`} aria-label="Call Diamond Travels">
          <Phone size={17} />
          <span>Call</span>
        </a>
        <a
          href={`https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(contactInfo.whatsappDefaultMsg)}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={17} />
          <span>WhatsApp</span>
        </a>
        <Link to="/quote" aria-label="Get a ride quote">
          <Navigation size={17} />
          <span>Get quote</span>
        </Link>
      </div>
    </div>
  );
}
