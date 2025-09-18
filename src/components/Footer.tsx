import { Heart, Code2 } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 border-t border-glass">
      <div className="container mx-auto px-6 py-8">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <span>Desenvolvido</span>
      
            <span>por Ruan Sampaio</span>
            <Code2 className="h-4 w-4 text-primary" />
          </div>
          
          <div className="text-sm text-muted-foreground">
            <p>© {currentYear} Ruan Sampaio. Todos os direitos reservados.</p>
            <p className="mt-2">
              Desenvolvedor Backend Java | Especialista em Spring Boot e Arquiteturas Escaláveis
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}