import { Mail, Phone, Linkedin, MapPin, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const contactInfo = [
  {
    icon: Phone,
    label: 'WhatsApp',
    value: '+55 (98) 9 8466-5582',
    href: 'https://wa.me/5598984665582',
    description: 'Entre em contato via WhatsApp'
  },
  {
    icon: Mail,
    label: 'E-mail',
    value: 'jruansampaiodev@gmail.com',
    href: 'mailto:jruansampaiodev@gmail.com',
    description: 'Envie um e-mail diretamente'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'https://www.linkedin.com/in/ruan-sampaio-dev/',
    href: 'https://www.linkedin.com/in/ruan-sampaio-dev/',
    description: 'Conecte-se no LinkedIn'
  },
  {
    icon: MapPin,
    label: 'Localização',
    value: 'São Luís, MA - Brasil',
    href: '#',
    description: 'Disponível para trabalho remoto'
  },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-accent-gradient bg-clip-text text-transparent">
              Entre em Contato
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Vamos conversar sobre seus projetos e como posso ajudar a transformar suas ideias em realidade
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">
                <span className="text-primary">Informações de Contato</span>
              </h3>
              <p className="text-muted-foreground">
                Estou sempre aberto a discutir novas oportunidades, projetos interessantes ou apenas trocar ideias sobre tecnologia.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <Card key={info.label} className="bg-card-gradient border-glass hover:shadow-glow-primary/50 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/20 text-primary">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">{info.label}</h4>
                          <p className="text-muted-foreground text-sm mb-2">
                            {info.description}
                          </p>
                          {info.href === '#' ? (
                            <span className="text-primary font-medium">{info.value}</span>
                          ) : (
                            <a 
                              href={info.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:text-accent underline font-medium"
                            >
                              {info.value}
                            </a>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="bg-card-gradient border-glass">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold mb-2">
                    <span className="text-primary">Envie uma Mensagem</span>
                  </h3>
                  <p className="text-muted-foreground">
                    Preencha o formulário abaixo e entrarei em contato em breve.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Nome completo
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-secondary/50 border-glass"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        E-mail
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-secondary/50 border-glass"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Mensagem
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-secondary/50 border-glass resize-none"
                      placeholder="Conte-me sobre seu projeto ou ideia..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-accent-gradient hover:shadow-glow-accent transition-all duration-300"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}