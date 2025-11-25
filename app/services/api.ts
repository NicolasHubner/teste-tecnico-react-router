/**
 * Serviço de API simulado
 *
 * Esta função simula uma chamada de API real.
 * Use-a na rota server para buscar produtos.
 */

import type { Product } from '~/types/Product';
import { mockProducts } from '~/utils/mockProducts';

/**
 * ⚠️ TODO - TAREFA 1: Integração com API Externa
 *
 * Complete esta rota client:
 * - Crie um arquivo .env na raiz do projeto baseado no .env.example
 * - Integre a API Pública Faker Store Api (https://fakestoreapi.com)
 * - Implemente a busca de produtos /products
 * - Utilize a fetchAPI para integração
 * - Reescreva a tipagem Product de maneira adequada para o retorno da API
 *
 * Dica: Para acessar a variável de ambiente utilize: import.meta.env.VITE_APP_BASE_URL
 */

/**
 * Simula uma chamada de API que retorna produtos
 * Inclui delay artificial para simular latência de rede
 * Ajuste a função fetchProducts para buscar dados da API externa conforme a tarefa 1
 */

type ApiProductResponse = Omit<Product, 'name' | 'inStock'> & {
	title: string;
};

const BASE_URL = import.meta.env.VITE_APP_BASE_URL || 'https://fakestoreapi.com';

function getAllProducts(apiProducts: ApiProductResponse): Product {
	const inStockProducts = apiProducts.rating.count > 100;

	return {
		id: apiProducts.id,
		name: apiProducts.title,
		price: apiProducts.price,
		description: apiProducts.description,
		category: apiProducts.category,
		inStock: inStockProducts,
		image: apiProducts.image,
		rating: apiProducts.rating,
	} as Product;
}

export async function fetchProducts(): Promise<Product[]> {
	const url = `${BASE_URL}/products`;
	// Simula latência de rede
	await new Promise((resolve) => setTimeout(resolve, 500));

	// Simula possível erro (10% de chance)
	if (Math.random() < 0.1) {
		throw new Error('Falha ao conectar com o servidor');
	}

	try {
		const response = await fetch(url);

		if (!response.ok) {
			throw new Error(`Erro ao buscar produtos: ${response.statusText} - ${response.status}`);
		}

		const data: ApiProductResponse[] = await response.json();
		return data.map((product: ApiProductResponse) => getAllProducts(product));
	} catch (error) {
		const userMessage =
			error instanceof Error && error.message.includes('API Error')
				? `Erro ao se comunicar com a API externa. (${error.message})`
				: 'Falha de conexão com o servidor de produtos. Tente novamente mais tarde.';

		throw new Error(userMessage);
	}
}
