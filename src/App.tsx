import { SiteHeader } from './components/SiteHeader';
import { Hero } from './components/Hero';
import { AboutSection, BeforeAfterSection, ContactSection, FaqSection, SiteFooter, TreatmentsSection } from './components/PageSections';

export default function App() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <AboutSection />
        <BeforeAfterSection />
        <TreatmentsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}