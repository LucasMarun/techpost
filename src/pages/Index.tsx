import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Solutions from '@/components/Solutions';
import TargetAudience from '@/components/TargetAudience';
import Benefits from '@/components/Benefits';
import Differentials from '@/components/Differentials';
import ImpactNumbers from '@/components/ImpactNumbers';
import Sustainability from '@/components/Sustainability';
import Media from '@/components/Media';
import SocialMedia from '@/components/SocialMedia';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Solutions />
      <TargetAudience />
      <Benefits />
      <Differentials />
      <ImpactNumbers />
      <Sustainability />
      <Media />
      <SocialMedia />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
