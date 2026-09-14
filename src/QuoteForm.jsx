import { useState } from 'react';
import { ArrowRight, ArrowUpRight, MessageCircle, Phone } from 'lucide-react';

export function QuoteForm() {
  const [notice, setNotice] = useState('');

  const submitQuote = (event) => {
    event.preventDefault();
    setNotice('Your trip details are ready. Connect the real WhatsApp number before launch to send this enquiry directly.');
  };

  const showContactNotice = (type) => {
    setNotice(type === 'phone' ? 'Connect your real phone number here before launch.' : 'Connect your real WhatsApp number here before launch.');
  };

  return (
    <div className="quote-panel">
      <div className="quote-intro">
        <p className="eyebrow">Start with a conversation</p>
        <h2>Where can we take <em>you?</em></h2>
        <p>Share the basics and we'll help you take the next step. No pressure, no complicated booking process.</p>
        <div className="direct-actions">
          <button onClick={() => showContactNotice('phone')}><Phone size={18} /><span>Call directly<small>Phone number to be added</small></span><ArrowUpRight size={16} /></button>
          <button onClick={() => showContactNotice('whatsapp')}><MessageCircle size={18} /><span>Message on WhatsApp<small>WhatsApp number to be added</small></span><ArrowUpRight size={16} /></button>
        </div>
      </div>
      <form onSubmit={submitQuote}>
        <div className="form-row"><label>Your name<input required name="name" placeholder="What should we call you?" /></label><label>Phone number<input required name="phone" type="tel" placeholder="Your best number" /></label></div>
        <div className="form-row"><label>Pickup location<input required name="pickup" placeholder="e.g. Cuttack railway station" /></label><label>Destination<input required name="destination" placeholder="Where are you going?" /></label></div>
        <div className="form-row"><label>Date<input name="date" type="date" /></label><label>Vehicle category<select name="vehicle"><option>Sedan</option><option>Small Car</option><option>Innova / SUV</option><option>Premium Car</option><option>Tempo Traveller</option></select></label></div>
        <label>Anything else we should know? <textarea name="message" rows="3" placeholder="Return trip, luggage, wedding details, timing..." /></label>
        <button className="button primary form-button" type="submit">Prepare my enquiry <ArrowRight size={18} /></button>
        {notice && <p className="form-notice" role="status">{notice}</p>}
      </form>
    </div>
  );
}
