import type { Route } from './+types/home';
import { Link } from 'react-router';

export function meta({}: Route.MetaArgs) {
	return [
		{ title: 'Desafio Técnico - Pontua' },
		{ name: 'description', content: 'Desafio técnico para desenvolvedor front-end React Router' },
	];
}

export default function Home() {
	return (
		<div className='home-container'>
			<section className='hero-section'>
				<h1 className='hero-title'>Bem-vindo ao Gerenciador de Produtos</h1>
				<p className='hero-description'>
					Sistema de gerenciamento de produtos construído com React Router v7
				</p>
				<Link
					to='/products'
					className='cta-button'>
					Ver Produtos
				</Link>
			</section>

			<section className='info-section'>
				<div className='info-card'>
					<h2>Sobre o Projeto</h2>
					<p>
						Este é um projeto base para o desafio técnico de desenvolvedor front-end. O objetivo é
						completar as tarefas pendentes e demonstrar conhecimento em React Router.
					</p>
				</div>

				<div className='info-card'>
					{/* <h2>Tecnologias</h2>
          <ul>
            <li>React 19</li>
            <li>React Router v7</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
            <li>Vitest</li>
          </ul> */}
				</div>

				<div className='info-card'>
					{/* <h2>Recursos</h2>
					<ul>
						<li>Server Routes (loaders)</li>
						<li>Client Routes (componentes)</li>
						<li>Error Boundaries</li>
						<li>TypeScript strict mode</li>
					</ul> */}
				</div>
			</section>
		</div>
	);
}
