import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Globe, Download, Moon, Sun, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Projeto A",
    description: "Landing page responsiva com animações sutis e SEO básico.",
    tags: ["React", "Tailwind", "Framer Motion"],
    link: "#",
    repo: "#",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop"
  },
  {
    title: "Projeto B",
    description: "Dashboard com filtros, gráficos e dark mode.",
    tags: ["Next.js", "Shadcn", "Recharts"],
    link: "#",
    repo: "#",
    image: "https://images.unsplash.com/photo-1551281044-8d8d0d8d2f90?q=80&w=1400&auto=format&fit=crop"
  },
  {
    title: "Projeto C",
    description: "E-commerce minimalista com checkout simulado.",
    tags: ["Vite", "TypeScript", "Stripe (mock)"],
    link: "#",
    repo: "#",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1400&auto=format&fit=crop"
  }
];

const skills = [
  "JavaScript/TypeScript",
  "React/Next.js",
  "Tailwind CSS",
  "Node.js/Express",
  "PostgreSQL/Prisma",
  "UI/UX & Acessibilidade",
  "Git & CI/CD",
  "Testes (Vitest/Jest)"
];

export default function Portfolio() {
  // Theme toggle (Tailwind 'dark' class)
  const [dark, setDark] = useState(true);
  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark"); else root.classList.remove("dark");
  }, [dark]);

  const scrollToId = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/70 text-foreground">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-primary" />
            <span className="font-semibold tracking-tight">Daniel Parron</span>
          </div>
          <nav className="hidden md:flex items-center gap-4 text-sm">
            {[
              ["Início", "hero"],
              ["Projetos", "projects"],
              ["Sobre", "about"],
              ["Contato", "contact"],
            ].map(([label, id]) => (
              <button key={id} onClick={() => scrollToId(id)} className="hover:underline underline-offset-4">
                {label}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" onClick={() => setDark(!dark)} aria-label="Alternar tema">
              {dark ? <Sun className="h-4 w-4"/> : <Moon className="h-4 w-4"/>}
            </Button>
            <a href="#" className="hidden sm:inline-flex">
              <Button>
                <Download className="h-4 w-4 mr-2"/>
                Currículo
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="hero" className="max-w-6xl mx-auto px-4 pt-16 md:pt-24 pb-12">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Badge className="rounded-full">Disponível para freelas</Badge>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Eu construo <span className="text-primary">experiências web</span> rápidas, acessíveis e bonitas.
            </h1>
            <p className="text-muted-foreground text-lg">
              Desenvolvedor Front-end focado em interfaces limpas, performance e DX. Baseado no Brasil.
            </p>
            <div className="flex gap-3">
              <Button onClick={() => scrollToId("projects")}>Ver projetos</Button>
              <Button variant="outline" onClick={() => scrollToId("contact")}>Fale comigo</Button>
            </div>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" aria-label="GitHub" className="hover:opacity-80"><Github/></a>
              <a href="#" aria-label="LinkedIn" className="hover:opacity-80"><Linkedin/></a>
              <a href="mailto:seuemail@exemplo.com" aria-label="Email" className="hover:opacity-80"><Mail/></a>
              <a href="#" aria-label="Site" className="hover:opacity-80"><Globe/></a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&w=1200&auto=format&fit=crop"
              alt="Mockup"
              className="rounded-2xl shadow-2xl w-full aspect-[4/3] object-cover"
            />
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs shadow">
              +5 anos de experiência
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Projetos em destaque</h2>
            <p className="text-muted-foreground">Seleção de trabalhos recentes.</p>
          </div>
          <Button variant="outline" className="hidden sm:inline-flex" onClick={() => window.open('#', '_blank')}>
            Todos os projetos <ExternalLink className="h-4 w-4 ml-2"/>
          </Button>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }}>
              <Card className="overflow-hidden hover:shadow-lg transition">
                <img src={p.image} alt={p.title} className="w-full h-40 object-cover"/>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {p.title}
                    <div className="flex gap-2">
                      {p.repo !== '#' && (
                        <a href={p.repo} className="text-sm underline-offset-4 hover:underline">Código</a>
                      )}
                      {p.link !== '#' && (
                        <a href={p.link} className="text-sm underline-offset-4 hover:underline">Demo</a>
                      )}
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">{p.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map(t => <Badge key={t} variant="secondary" className="rounded-full">{t}</Badge>)}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button asChild size="sm" variant="secondary"><a href={p.link}>Visitar</a></Button>
                  <Button asChild size="sm" variant="outline"><a href={p.repo}>Repositório</a></Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">Sobre mim</h2>
            <p className="text-muted-foreground">
              Sou desenvolvedor front-end apaixonado por criar produtos funcionais e intuitivos. Valorizo acessibilidade, performance e uma boa experiência de desenvolvedor.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {skills.map(s => <Badge key={s} variant="outline" className="rounded-full">{s}</Badge>)}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-2xl border border-border p-6 bg-card">
            <h3 className="font-semibold mb-4">Destaques</h3>
            <ul className="space-y-3 text-sm text-muted-foreground list-disc pl-5">
              <li>Entrega de projetos com Lighthouse 95+.</li>
              <li>Design system próprio com shadcn/ui.</li>
              <li>Boas práticas: testes, code review, CI/CD.</li>
              <li>Foco em DX: documentação e tooling.</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-16">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold">Contato</h2>
          <p className="text-muted-foreground mb-6">Vamos construir algo juntos? Envie uma mensagem:</p>
          <form onSubmit={(e) => { e.preventDefault(); alert("Obrigado! Entrarei em contato em breve."); }} className="grid gap-4">
            <div className="grid md:grid-cols-2 gap-4">
              <Input required placeholder="Seu nome" />
              <Input required type="email" placeholder="Seu email" />
            </div>
            <Input placeholder="Assunto" />
            <Textarea required rows={5} placeholder="Sua mensagem" />
            <Button type="submit" className="w-fit">Enviar</Button>
          </form>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Daniel Parron — Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:underline underline-offset-4">Política de Privacidade</a>
            <a href="#" className="hover:underline underline-offset-4">Termos</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
