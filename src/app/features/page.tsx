import SplitHero from '../../components/SplitHero';
import FeaturesGrid from '../components/FeaturesGrid';

export default function FeaturesPage() {
  return (
    <main className="min-h-screen">
      <section id="hero" className="scroll-mt-16">
        <SplitHero />
      </section>
          <section id="cards" className="scroll-mt-16">
        <FeaturesGrid />
      </section>
    </main>
  );
}