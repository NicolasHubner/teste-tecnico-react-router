import type { Route } from "./+types/home";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Desafio Técnico - Pontua" },
    { name: "description", content: "Desafio técnico para desenvolvedor front-end React Router" },
  ];
}

export default function Home() {
  return (
    <main className="home-container">
      <section className="hero-section" aria-labelledby="hero-title">
        <h1 id="hero-title" className="hero-title">Bem-vindo ao Gerenciador de Produtos</h1>
        <p className="hero-description">
          Sistema de gerenciamento de produtos construído com React Router v7
        </p>
        <Link to="/products" className="cta-button" aria-label="Navegar para página de produtos">
          Ver Produtos
        </Link>
      </section>

      <section className="info-section" aria-labelledby="info-section-title">
        <h2 id="info-section-title" className="sr-only">Informações sobre o projeto</h2>
        <article className="info-card">
          <h3>Sobre o Projeto</h3>
          <p>
            Este é um projeto base para o desafio técnico de desenvolvedor front-end.
            O objetivo é completar as tarefas pendentes e demonstrar conhecimento em React Router.
          </p>
        </article>

        <article className="info-card">
          <h3>Tecnologias</h3>
          <ul>
            <li>React 19</li>
            <li>React Router v7</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
            <li>Vitest</li>
          </ul>
        </article>

        <article className="info-card">
          <h3>Recursos</h3>
          <ul>
            <li>Server Routes (loaders)</li>
            <li>Client Routes (componentes)</li>
            <li>Error Boundaries</li>
            <li>TypeScript strict mode</li>
          </ul>
        </article>
      </section>
    </main>
  );
}
