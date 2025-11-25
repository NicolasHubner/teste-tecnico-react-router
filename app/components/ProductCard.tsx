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

// TODO: Definir interface de props
interface ProductCardProps {
	// Adicione as propriedades necessárias aqui
	// Dica: id, name, price, description, category, inStock
	product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
	// TODO: Desestruturar props

	const { id, name, price, description, category, inStock } = product;

	const handleAddToCart = () => {
		// Placeholder para adicionar ao carrinho
		console.log(`Produto ${name} (ID: ${id}) adicionado ao carrinho`);
	};

	const stockStatus = inStock ? 'Em estoque' : 'Fora de estoque';
	const buttonLabel = inStock ? 'Adicionar ao Carrinho' : 'Produto indisponível';
	const buttonDisabled = !inStock;
	const stockButtonClass = inStock ? 'in-stock' : 'out-of-stock';

	return (
		<article
			className='product-card'
			aria-labelledby={`product-name-${id}`}
			aria-describedby={`product-description-${id}`}
			aria-disabled={buttonDisabled}
			role='article'>
			{/* TODO: Implementar conteúdo do card */}
			{/* Deve exibir: nome, preço, descrição, categoria, status de estoque */}
			<header>
				<h3 className='product-name'>Nome do Produto</h3>
			</header>
			<p className='product-price'>R$ 0,00</p>
			<p className='product-description'>Descrição do produto</p>
			<span className='product-category'>Categoria</span>
			<div className='product-stock'>Em estoque</div>
			<button
				className='add-to-cart-button'
				onClick={handleAddToCart}>
				Adicionar ao Carrinho
			</button>
		</article>
	);
}
