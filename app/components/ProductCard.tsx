/**
 * ⚠️ TODO - TAREFA 9: Finalizar componente ProductCard
 *
 * Complete este componente:
 * - Defina a interface de props corretamente (use o tipo Product)
 * - Implemente a renderização de todas as informações do produto
 * - Adicione interatividade básica (ex: botão de adicionar ao carrinho)
 *
 * ⚠️ TODO - TAREFA 4: Implementar estilização
 * - As classes CSS já estão definidas, mas faltam os estilos
 * - Adicione estilos usando Tailwind ou CSS customizado
 *
 * ⚠️ TODO - TAREFA 5: Melhorar acessibilidade (sutil)
 * - Use elementos semânticos
 * - Adicione ARIA labels em botões e elementos interativos
 */

import type { Product } from '~/types/Product';

interface ProductCardProps {
	product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
	const { id, name, price, description, category, inStock, image } = product;
	const handleAddToCart = () => {
		console.log(`Produto ${name} (ID: ${id}) adicionado ao carrinho`);
	};

	const formattedPrice = new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	}).format(price);

	const stockStatus = inStock ? 'Em estoque' : 'Esgotado';
	const buttonLabel = inStock ? 'Adicionar ao Carrinho' : 'Produto indisponível';

	const stockStateClass = inStock ? 'stock-in' : 'stock-out';
	const buttonStateClass = inStock ? 'button-active' : 'button-disabled';

	return (
		<article
			className='product-card'
			aria-labelledby={`product-name-${id}`}
			aria-describedby={`product-description-${id}`}>
			{image && (
				<div className='product-image-container'>
					<img
						src={image}
						alt={`Imagem de ${name}`}
						className='product-image'
						loading='lazy'
					/>
				</div>
			)}

			<header className='product-header'>
				<span
					className='product-category'
					aria-label={`Categoria: ${category}`}>
					{category}
				</span>

				<h3
					id={`product-name-${id}`}
					className='product-name'>
					{name}
				</h3>
			</header>

			<p
				className='product-price'
				aria-label={`Preço: ${formattedPrice}`}>
				{formattedPrice}
			</p>

			<p
				id={`product-description-${id}`}
				className='product-description'>
				{description}
			</p>

			<div className='product-actions'>
				<div
					className={`product-stock ${stockStateClass}`}
					role='status'
					aria-live='polite'>
					{stockStatus}
				</div>
				<button
					className={`add-to-cart-button ${buttonStateClass}`}
					onClick={handleAddToCart}
					disabled={!inStock}
					aria-label={buttonLabel + (inStock ? ` ${name}` : '')}>
					{buttonLabel}
				</button>
			</div>
		</article>
	);
}
