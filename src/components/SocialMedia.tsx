import { Card, CardContent } from '@/components/ui/card';
import { Instagram, Linkedin, ExternalLink } from 'lucide-react';

const SocialMedia = () => {
  const socialItems = [
    {
      platform: 'Instagram',
      handle: '@enov_infraestruturaeletrica',
      icon: Instagram,
      url: 'https://instagram.com/enov_infraestruturaeletrica',
      color: 'bg-gradient-to-r from-purple-600 to-pink-600'
    },
    {
      platform: 'LinkedIn',
      handle: '/enov-infraestrutura-eletrica',
      icon: Linkedin,
      url: 'https://linkedin.com/company/enov-infraestrutura-eletrica',
      color: 'bg-blue-600'
    }
  ];

  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Redes Sociais
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Siga-nos nas redes sociais e fique por dentro das novidades
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {socialItems.map((item, index) => (
            <Card key={index} className="bg-background shadow-card hover:shadow-elevated transition-all duration-300 hover:scale-105 overflow-hidden group cursor-pointer">
              <CardContent className="p-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mr-4 ${item.color}`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {item.platform}
                      </h3>
                      <p className="text-muted-foreground">
                        {item.handle}
                      </p>
                    </div>
                  </div>
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;