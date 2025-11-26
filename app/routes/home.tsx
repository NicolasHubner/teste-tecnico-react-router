import type { Route } from './+types/home';
import { Link } from 'react-router';
import ProductCard from '~/components/ProductCard';
import { mockProducts } from '~/utils/mockProducts';

export function meta({}: Route.MetaArgs) {
	return [
		{ title: 'Desafio Técnico - Pontua' },
		{ name: 'description', content: 'Desafio técnico para desenvolvedor front-end React Router' },
	];
}

export default function Home() {
	const featuredProducts = mockProducts.slice(0, 3);

	return (
		<section
			className='home-container'
			role='region'
			aria-labelledby='hero-title'>
			<section className='hero-section'>
				<h1
					id='hero-title'
					className='hero-title'>
					Bem-vindo ao Gerenciador de Produtos
				</h1>
				<p className='hero-description'>Sistema de gerenciamento de produtos.</p>
				<Link
					to='/products'
					className='cta-button'>
					Ver Produtos
				</Link>
			</section>

			<section
				className='pt-8'
				aria-label='Produtos em Destaque'>
				<h2 className='text-3xl font-bold mb-6 text-gray-900 dark:text-white text-center'>
					Produtos em Destaque
				</h2>

				<div className='products-grid max-w-4xl mx-auto'>
					{featuredProducts.map((product) => (
						<ProductCard
							key={product.id}
							product={product}
						/>
					))}
				</div>

				<div className='mt-12 text-center'>
					<Link
						to='/products'
						className='text-blue-600 hover:underline dark:text-blue-400 font-semibold text-lg'>
						Ver todo o Catálogo ({mockProducts.length} itens) →
					</Link>
				</div>
			</section>
		</section>
	);
}
