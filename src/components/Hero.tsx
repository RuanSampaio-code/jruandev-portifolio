import { Download, Linkedin, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpg';
import cvFile from '@/assets/CV-Jose-Ruan-Rodrigues-Sampaio-Dev.pdf'; // Adicione esta linha

export function Hero() {
  return (
  <section id="home" className="min-h-screen flex items-center justify-center px-6 bg-hero-gradient mt-10 sm:mt-0">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-glow-primary border-4 border-primary/20">
                <img 
                  src={profilePhoto}
                  alt="Ruan Sampaio - Desenvolvedor Backend Java"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-2 bg-accent-gradient rounded-full blur-xl opacity-20 -z-10"></div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold">
                <span className="bg-accent-gradient bg-clip-text text-transparent">
                  Ruan Sampaio
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-muted-foreground">
                Desenvolvedor Backend Java
              </h2>
            </div>

            <div className="max-w-2xl mx-auto lg:mx-0">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Desenvolvedor Backend Java especializado em aplicações distribuídas de alta performance e escalabilidade. 
                Atualmente atuando com <span className="text-primary font-medium">Java + Spring Boot</span>, 
                <span className="text-primary font-medium"> Azure Cloud</span> e 
                <span className="text-primary font-medium"> Apache Kafka</span>.
              </p>
            </div>

            {/* Social Links and CV */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <div className="flex gap-4 justify-center">
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                >
                  <a 
                    href="https://www.linkedin.com/in/ruan-sampaio-dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                >
                  <a
                    href="https://wa.me/5598984665582"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle className="h-5 w-5" />
                  </a>
                </Button>
              </div>

              <Button
              size="lg"
              className="bg-accent-gradient hover:shadow-glow-accent transition-all duration-300"
              asChild
            >
              <a href={cvFile} download="CV-Jose-Ruan-Rodrigues-Sampaio-Dev.pdf">
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}