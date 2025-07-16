import { ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-electrical-panel.jpg';
import { AnimatedSection, AnimatedButton, AnimatedIcon } from '@/components/animations';
import { TypewriterTitle } from '@/components/animations/TypewriterTitle';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-[60vh] sm:min-h-[80vh] lg:min-h-screen flex items-center justify-center bg-gray-dark py-8 sm:py-0">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Profissional trabalhando em painel elétrico"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-dark/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection 
          className="max-w-5xl mx-auto text-center text-white"
          direction="up"
          distance={60}
          duration={1}
        >
          <TypewriterTitle delay={0.5} stagger={0.02}>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight px-2 sm:px-4">
              Eletroposto e estação de recarga livre de franquia e taxas mensal, com manutenção preventiva e corretiva incluso, sendo monitorada 24h.
            </h1>
          </TypewriterTitle>
          
          <AnimatedSection
            direction="up"
            distance={40}
            delay={1}
            duration={0.8}
          >
            <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 lg:mb-10 text-gray-300 max-w-4xl mx-auto px-2 sm:px-4 leading-relaxed">
              Especializados em soluções completas de infraestrutura elétrica para 
              carregadores de veículos elétricos. Da análise de demanda à instalação 
              e manutenção.
            </p>
          </AnimatedSection>

          <AnimatedSection
            direction="up"
            distance={30}
            delay={1.5}
            duration={0.6}
          >
            <div className="flex justify-center w-full px-4 sm:px-6">
              <a 
                href="https://wa.me/558186506056" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full max-w-sm sm:max-w-xs"
              >
                <AnimatedButton 
                  size="lg" 
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-green text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 flex items-center justify-center min-h-[44px] sm:min-h-[56px]"
                >
                  Solicitar agora
                  <AnimatedIcon className="ml-2" hoverRotation={15}>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </AnimatedIcon>
                </AnimatedButton>
              </a>
            </div>
          </AnimatedSection>
        </AnimatedSection>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-1 h-6 sm:h-8 bg-secondary rounded-full opacity-75"></div>
      </div>
    </section>
  );
};

export default Hero;