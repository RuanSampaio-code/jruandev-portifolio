import { ExternalLink, Github, Globe, Code2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: 'Landing Page - ADA',
    type: 'Landing Page',
    status: 'Concluído',
    description: 'Landing page responsiva para empresa júnior de engenharia da computação.',
    technologies: ['HTML', 'CSS'],
    image: '/projects-images/landing-page-ada.png',
    demoUrl: 'https://landing-page-ada-git-main-ruansampaio-codes-projects.vercel.app/',
    githubUrl: 'https://github.com/RuanSampaio-code/Landing-page-ADA',
    category: 'Frontend'
  },
  {
    title: 'The Lus Project',
    type: 'Full-Stack',
    status: 'Concluído',
    description: 'Plataforma full-stack para localização de unidades de saúde com Google Maps.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL'],
    image: '/projects-images/the-lus.png',
    demoUrl: 'https://the-lus-project.vercel.app/auth',
    githubUrl: 'https://github.com/sans-script/the-lus-project',
    category: 'Full-Stack'
  },
  {
    title: 'Ponto CEGO',
    type: 'Web App',
    status: 'Concluído',
    description: 'Solução digital para melhorar acesso a informações de transporte coletivo urbano.',
    technologies: ['React', 'Node.js', 'API Integration'],
    image: '/projects-images/pontocego.png',
    demoUrl: 'https://equipe-9-trilhas-desafio-4-front-end.vercel.app/',
    githubUrl: 'https://github.com/RuanSampaio-code/Equipe-9-trilhas-desafio-4-front-end',
    category: 'Web App'
  },
  {
    title: 'API Node.js - Acopli',
    type: 'Backend API',
    status: 'Concluído',
    description: 'API desenvolvida em Node.js para a empresa Acopli, utilizada em múltiplos setores: área do cliente, formulário de briefing e dashboard de solicitações. A solução trouxe agilidade e integração para os processos internos.',
    technologies: ['Node.js', 'Express', 'MongoDB'],
    image: '/projects-images/placeholder.svg', // Troque por uma imagem real se desejar
    demoUrl: '', // Se houver demo pública, coloque o link aqui
    githubUrl: '', // Se houver repositório público, coloque o link aqui
    category: 'Backend'
  },
];

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <Card className="bg-card-gradient border-glass hover:shadow-glow-primary/50 transition-all duration-300 overflow-hidden group">
      <div className="relative overflow-hidden">
        <div className="aspect-video bg-secondary/50 flex items-center justify-center">
          <img
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <Badge 
            variant={project.status === 'Concluído' ? 'default' : 'secondary'}
            className={project.status === 'Concluído' ? 'bg-success text-success-foreground' : ''}
          >
            {project.status}
          </Badge>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <Badge variant="outline" className="bg-glass border-glass">
            {project.category}
          </Badge>
        </div>
      </div>

      <CardContent className="p-6">
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <span className="text-sm text-primary font-medium">{project.type}</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-2">
            <Button 
              size="sm" 
              className="flex-1" 
              asChild
            >
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Demo
              </a>
            </Button>

            {project.githubUrl && (
              <Button 
                variant="outline" 
                size="sm"
                asChild
              >
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-accent-gradient bg-clip-text text-transparent">
              Projetos
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Projetos desenvolvidos ao longo da minha jornada como desenvolvedor
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="text-center mt-12">
          <Card className="bg-card-gradient border-glass inline-block">
            <CardContent className="p-8">
              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                  <Code2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Mais projetos em breve</h3>
                <p className="text-muted-foreground">
                  Novos projetos estão sendo desenvolvidos e serão adicionados em breve.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}