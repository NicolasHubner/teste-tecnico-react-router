import type { Route } from "./+types/home";
import { Link } from "react-router";
import Hero from "~/components/ui/Hero";
import InfoCard from "~/components/ui/infoCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Desafio Técnico - Pontua" },
    { name: "description", content: "Desafio técnico para desenvolvedor front-end React Router" },
  ];
}

export default function Home() {
  return (
    <div className="home-container max-w-6xl mx-auto px-6 py-12">
     <Hero
        title="Bem-vindo ao Gerenciador de Produtos"
        description="Sistema de gerenciamento de produtos construído com React Router v7"
        ctaLabel="Ver Produtos"
        ctaTo="/products"
      />

      <section
        className="info-section grid grid-cols-1 md:grid-cols-3 gap-8"
        aria-label="Informações sobre o sistema"
      >
        <InfoCard title="Sobre o Projeto">
          <p>
            Este é um projeto base para o desafio técnico de desenvolvedor
            front-end. O objetivo é completar as tarefas pendentes e demonstrar
            conhecimento em React Router.
          </p>
        </InfoCard>

        <InfoCard title="Tecnologias">
          <ul className="space-y-1">
            <li>React 19</li>
            <li>React Router v7</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
            <li>Vitest</li>
          </ul>
        </InfoCard>

        <InfoCard title="Recursos">
          <ul className="space-y-1">
            <li>Server Routes (loaders)</li>
            <li>Client Routes (componentes)</li>
            <li>Error Boundaries</li>
            <li>TypeScript strict mode</li>
          </ul>
        </InfoCard>
        </section>
    </div>
  );
}
