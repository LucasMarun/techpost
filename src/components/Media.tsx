import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

const Media = () => {
  const mediaItems = [
    {
      id: 1,
      type: 'news',
      title: 'Energy Tech Post se destaca no avanço da mobilidade elétrica',
      excerpt: 'Empresa brasileira lidera setor com soluções inovadoras em infraestrutura elétrica para veículos elétricos.',
      date: '15 de Nov, 2024',
      source: 'Portal da Mobilidade',
      image: 'https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=400&h=250&fit=crop&crop=center'
    },
    {
      id: 2,
      type: 'award',
      description: 'Energy Tech Post apresenta soluções inovadoras em congresso de sustentabilidade e energia limpa.',
      date: '8 de Nov, 2024',
      source: 'Congresso Nacional de Energia',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop&crop=center'
    },
    {
      id: 3,
      type: 'case-study',
      description: 'Projeto da Energy Tech Post em centro comercial serve como modelo para eletromobilidade urbana.',
      date: '2 de Nov, 2024',
      source: 'Revista Infraestrutura',
      image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=400&h=250&fit=crop&crop=center'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Na Mídia
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Acompanhe nossa trajetória e conquistas através da mídia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mediaItems.map((item, index) => (
            <Card key={index} className="bg-background shadow-card hover:shadow-elevated transition-all duration-300 hover:scale-105 overflow-hidden group cursor-pointer">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>
              <CardHeader>
                <div className="text-sm text-primary font-medium mb-2">
                  {item.date}
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Media;