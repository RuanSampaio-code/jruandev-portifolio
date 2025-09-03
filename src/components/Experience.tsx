import { Calendar, MapPin, Briefcase } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const experiences = [
  {
    title: 'Estagiário de Desenvolvimento de Software',
    company: 'PULSE',
    period: '08/2024 – atual',
    location: 'Remoto',
    type: 'Estágio',
    description: 'Desenvolvimento e manutenção de aplicações Java 8+ com Spring Boot, Hibernate e Maven. Criação de APIs REST, integração com bancos relacionais (PostgreSQL) e noções em bancos não relacionais. Realização de testes unitários e de integração (JUnit, Mockito). Experiência com Git, CI/CD e estudos em mensageria (RabbitMQ), containers (Docker) e monitoramento (Grafana).',
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'RabbitMQ', 'Grafana'],
    highlight: true,
  },
  {
    title: 'Freelancer Backend',
    company: 'Independente',
    period: '2024 – atual',
    location: 'Remoto',
    type: 'Freelancer',
    description: 'Desenvolvimento de APIs REST com Java (Spring Boot) e Node.js. Integração com bancos de dados relacionais e não relacionais. Deploy em Render e Vercel. Atuação em projetos independentes, com foco em soluções escaláveis e modernas.',
    technologies: ['Java', 'Spring Boot', 'Node.js', 'MongoDB', 'PostgreSQL'],
    highlight: true,
  },
  {
    title: 'Software Development Intern',
    company: 'TOTVS',
    period: '06/2022 – 12/2023',
    location: 'Híbrido',
    type: 'Estágio',
    description: 'Desenvolvimento em ADVPL, aplicações Web e Mobile, tratamento de dados, manutenção de sistemas, correções e campanhas de testes. Colaboração com a equipe de entregas para promover inovações.',
    technologies: ['ADVPL', 'Web', 'Mobile'],
  },
  {
    title: 'Desenvolvedor e Assessor de Projetos',
    company: 'ADA Empresa Júnior',
    period: '09/2020 – 11/2023',
    location: 'Presencial',
    type: 'Empresa Júnior',
    description: 'Atuação em UX/UI Design (Figma), desenvolvimento web (HTML5, CSS3), e levantamento de requisitos.',
    technologies: ['HTML5', 'CSS3', 'Figma', 'UX/UI'],
  },
  {
    title: 'Estagiário de Negócios',
    company: 'Cassi',
    period: '02/2021 – 06/2022',
    location: 'Presencial',
    type: 'Estágio',
    description: 'Apoio em classificação de documentos, elaboração de planilhas e bancos de dados, organização de arquivos e controle de estoque.',
    technologies: ['Excel', 'Bancos de Dados'],
  },
];

const programs = [
  {
    title: 'Bolsista – Programa Jovem Tech (Back-End Java)',
    period: '01/2024 – 06/2024',
    description: 'Trilha de Back-End com foco em POO, Spring Boot, Spring Data JPA, Maven, consumo de APIs e integração com bancos de dados. Desenvolvimento de projetos práticos aplicando boas práticas de engenharia de software.',
    technologies: ['Java', 'Spring Boot', 'Spring Data JPA', 'Maven'],
    highlight: true,
  },
  {
    title: 'Bolsista – Programa Trilhas (Back-End) - Tech Lead',
    period: '01/2025 – 06/2025',
    description: 'Atuação como Tech Lead em projeto final com equipe de 5 integrantes. Responsável pela arquitetura e backend em Node.js, além da coordenação de tarefas, revisão de código e suporte técnico.',
    technologies: ['Node.js', 'Liderança Técnica', 'Arquitetura'],
    highlight: true,
    link: 'https://equipe-9-trilhas-desafio-4-front-end.vercel.app/index.html',
  },
];

const events = [
  {
    title: 'Hackathon Programa Trilhas',
    year: '2025',
    description: 'Criação de soluções voltadas à população maranhense, com foco em backend e impacto social.',
  },
  {
    title: 'Hackathon SESI Saúde',
    year: '2025',
    description: 'Desenvolvimento de wearable para monitoramento de sinais vitais de trabalhadores da indústria, integrado a aplicação. Projeto incubado no Hub de Saúde.',
    highlight: true,
  },
];

function ExperienceCard({ experience, isProgram = false }: { experience: any; isProgram?: boolean }) {
  return (
  <Card className={`bg-card-gradient border-glass hover:shadow-glow-primary/50 transition-all duration-300 border border-blue-500 ${
      experience.highlight ? 'ring-1 ring-primary/30' : ''
    }`}>
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2">{experience.title}</h3>
            {!isProgram && (
              <div className="flex items-center gap-2 text-primary font-medium mb-2">
                <Briefcase className="h-4 w-4" />
                {experience.company}
              </div>
            )}
          </div>
          <div className="flex flex-col sm:items-end gap-2">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              {experience.period}
            </div>
            {!isProgram && experience.location && (
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                {experience.location}
              </div>
            )}
            {!isProgram && experience.type && (
              <Badge variant={experience.highlight ? 'default' : 'secondary'}>
                {experience.type}
              </Badge>
            )}
          </div>
        </div>

        <p className="text-muted-foreground mb-4 leading-relaxed">
          {experience.description}
        </p>

        {experience.link && (
          <div className="mb-4">
            <a 
              href={experience.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-accent underline"
            >
              Acessar Projeto
            </a>
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {experience.technologies?.map((tech: string) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-accent-gradient bg-clip-text text-transparent">
              Experiências
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Minha jornada profissional e acadêmica no desenvolvimento de software
          </p>
        </div>

        {/* Experiências Profissionais */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-primary">
            Experiências Profissionais
          </h3>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} experience={exp} />
            ))}
          </div>
        </div>

        {/* Programas de Capacitação */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-primary">
            Programas de Capacitação
          </h3>
          <div className="space-y-6">
            {programs.map((program, index) => (
              <ExperienceCard key={index} experience={program} isProgram />
            ))}
          </div>
        </div>

        {/* Participações em Eventos */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center text-primary">
            Participações em Eventos
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {events.map((event, index) => (
              <Card key={index} className={`bg-card-gradient border-glass hover:shadow-glow-primary/50 transition-all duration-300 ${
                event.highlight ? 'ring-1 ring-primary/30' : ''
              }`}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-lg font-semibold">{event.title}</h4>
                    <Badge variant={event.highlight ? 'default' : 'secondary'}>
                      {event.year}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}