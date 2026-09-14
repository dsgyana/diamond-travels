import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { HomePage } from './HomePage';
import { ServicesPage } from './ServicesPage';
import { FleetPage } from './FleetPage';
import { RoutesPage } from './RoutesPage';
import { GalleryPage } from './GalleryPage';
import { WeddingPage } from './WeddingPage';
import { QuoteForm } from './QuoteForm';

export function QuotePage() {
  return (
    <section className="quote-section section-pad" id="quote" style={{ paddingTop: '140px' }}>
      <QuoteForm />
    </section>
  );
}

export function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/fleet" element={<FleetPage />} />
        <Route path="/wedding" element={<WeddingPage />} />
        <Route path="/routes" element={<RoutesPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/quote" element={<QuotePage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Layout>
  );
}
