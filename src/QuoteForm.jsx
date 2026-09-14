import { useState } from 'react';
import { ArrowRight, ArrowUpRight, MessageCircle, Phone, CheckCircle } from 'lucide-react';
import { contactInfo } from './data';

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickup: '',
    destination: '',
    date: '',
    vehicle: 'Sedan',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submitQuote = (event) => {
    event.preventDefault();

    const formattedMessage =
      `*New Ride Enquiry - Diamond Travels*\n` +
      `━━━━━━━━━━━━━━━━━━\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📞 *Phone:* ${formData.phone}\n` +
      `📍 *Pickup:* ${formData.pickup}\n` +
      `🏁 *Destination:* ${formData.destination}\n` +
      `📅 *Date:* ${formData.date || 'To be confirmed'}\n` +
      `🚗 *Vehicle:* ${formData.vehicle}\n` +
      (formData.message ? `📝 *Notes:* ${formData.message}\n` : '') +
      `━━━━━━━━━━━━━━━━━━\n` +
      `Please let me know availability and estimated fare.`;

    const whatsappUrl = `https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(formattedMessage)}`;

    // Open WhatsApp in new tab
    if (typeof window !== 'undefined') {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }
    setSubmitted(true);
  };

  return (
    <div className="quote-panel">
      <div className="quote-intro">
        <p className="eyebrow">Start with a conversation</p>
        <h2>Where can we take <em>you?</em></h2>
        <p>Share the basics and we'll help you take the next step. Fast responses directly on WhatsApp or call.</p>
        <div className="direct-actions">
          <a
            href={`tel:${contactInfo.phoneTel}`}
            className="direct-action-link"
            aria-label={`Call Diamond Travels at ${contactInfo.phoneDisplay}`}
          >
            <Phone size={18} />
            <span>Call directly<small>{contactInfo.phoneDisplay}</small></span>
            <ArrowUpRight size={16} />
          </a>
          <a
            href={`https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(contactInfo.whatsappDefaultMsg)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="direct-action-link"
            aria-label="Message Diamond Travels on WhatsApp"
          >
            <MessageCircle size={18} />
            <span>Message on WhatsApp<small>{contactInfo.phoneDisplay}</small></span>
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
      <form onSubmit={submitQuote}>
        <div className="form-row">
          <label>
            Your name
            <input
              required
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="What should we call you?"
            />
          </label>
          <label>
            Phone number
            <input
              required
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your 10-digit mobile number"
            />
          </label>
        </div>
        <div className="form-row">
          <label>
            Pickup location
            <input
              required
              name="pickup"
              value={formData.pickup}
              onChange={handleChange}
              placeholder="e.g. Cuttack railway station / Airport"
            />
          </label>
          <label>
            Destination
            <input
              required
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              placeholder="Where are you going?"
            />
          </label>
        </div>
        <div className="form-row">
          <label>
            Date
            <input
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
            />
          </label>
          <label>
            Vehicle category
            <select
              name="vehicle"
              value={formData.vehicle}
              onChange={handleChange}
            >
              <option value="Sedan">Sedan (Dzire / Etios / Verna)</option>
              <option value="Small Car">Small Car (WagonR / Tiago)</option>
              <option value="Innova / SUV">Innova / SUV (Crysta / Ertiga)</option>
              <option value="Premium Car">Premium Car (Audi / Luxury)</option>
              <option value="Tempo Traveller">Tempo Traveller (9–17 Seater)</option>
            </select>
          </label>
        </div>
        <label>
          Anything else we should know?
          <textarea
            name="message"
            rows="3"
            value={formData.message}
            onChange={handleChange}
            placeholder="Return trip, luggage, wedding details, pickup timing..."
          />
        </label>
        <button className="button primary form-button" type="submit">
          Send enquiry on WhatsApp <ArrowRight size={18} />
        </button>
        {submitted && (
          <p className="form-notice" role="status" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <CheckCircle size={16} /> Opening WhatsApp with your trip details. You can also call us directly at {contactInfo.phoneDisplay}.
          </p>
        )}
      </form>
    </div>
  );
}
