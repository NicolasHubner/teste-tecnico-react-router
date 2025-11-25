/**
 * ⚠️ TODO - TAREFA 3: Ajustar a rota client
 *
 * Complete esta rota client:
 * - Use o hook correto do React Router para obter dados do loader
 * - Renderize a lista de produtos usando o componente ProductCard
 * - Trate o caso de lista vazia
 *
 * ⚠️ TODO - TAREFA 5: Melhorar acessibilidade (sutil)
 * - Verifique se está usando elementos semânticos corretos
 * - Adicione ARIA labels onde apropriado
 * - Pense em navegação por teclado
 */
import { useLoaderData } from 'react-router';
import ProductCard from '~/components/ProductCard';
import type { Product } from '~/types/Product';
export { loader } from './api/products';

interface ProductsLoaderData {
	products: Product[];
	error: string | undefined;
}

export default function Products() {
	// TODO: Use o hook apropriado do React Router aqui
	const { products, error } = useLoaderData() as ProductsLoaderData;

	// TODO: Tratar caso de erro
	if (error) {
		return (
			<div
				className='error-message'
				role='alert'
				aria-live='assertive'>
				<h1 className='text-2xl font-bold'>Erro ao carregar produtos</h1>
				<p>{error}</p>
			</div>
		);
	}

	// TODO: Renderizar lista de produtos usando ProductCard
	// Dica: não esqueça de adicionar uma key apropriada

	return (
		<section className='products-container'>
			<h1>Nossos Produtos</h1>

			{/* TODO: Implementar renderização da lista aqui */}
			{products.length === 0 ? (
				<div
					role='status'
					className='empty-list-message'>
					<p>Nenhum produto disponível</p>
				</div>
			) : (
				<ul
					className='products-grid'
					role='list'>
					{products.map((product) => (
						<li key={product.id}>
							<ProductCard product={product} />
						</li>
					))}
				</ul>
			)}
		</section>
	);
}
