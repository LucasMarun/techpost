import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const offices = [
    {
      title: 'Unidade Brasil',
      address: 'Boa vista, rua do bom Jesus, 125',
      city: 'Recife - PE',
      cep: '01234-567',
      phone: '+55 (81) 86506056',
      email: 'contato@energytechpost.vercel.com'
    },
  ];

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Entre em contato conosco para saber mais sobre nossas soluções
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-background shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">
                Envie sua mensagem
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground">Nome</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-2"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-foreground">E-mail</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-2"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-foreground">Telefone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="mt-2"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-foreground">Mensagem</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-2"
                    rows={4}
                    placeholder="Descreva seu projeto ou dúvida..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-green"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Enviar
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Office Information */}
          <div className="space-y-6">
            {offices.map((office, index) => (
              <Card key={index} className="bg-background shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-primary" />
                    {office.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-muted-foreground">
                      {office.address}
                    </p>
                    <p className="text-muted-foreground">
                      {office.city}
                    </p>
                    <p className="text-muted-foreground">
                      CEP: {office.cep}
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center text-muted-foreground">
                      <Phone className="w-4 h-4 mr-2 text-primary" />
                      {office.phone}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Mail className="w-4 h-4 mr-2 text-primary" />
                      {office.email}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;