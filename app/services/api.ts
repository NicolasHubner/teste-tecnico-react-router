/**
 * Serviço de API para integração com Faker Store API
 *
 * Esta função busca produtos da API pública Faker Store API.
 * Use-a na rota server para buscar produtos.
 */

import type { Product, FakerStoreProduct } from "~/types/Product";

const API_BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/products`);

    if (!response.ok) {
      throw new Error(
        `Erro ao buscar produtos: ${response.status} ${response.statusText}`
      );
    }

    const data: FakerStoreProduct[] = await response.json();

    // Converte o formato da API (FakerStoreProduct) para o formato interno (Product)
    const products: Product[] = data.map((product) => ({
      id: product.id,
      name: product.title,
      price: product.price,
      description: product.description,
      category: product.category,
      // A API não fornece informação de estoque, então foi adicionado um random para simular a disponibilidade do produto
      inStock: Math.random() > 0.3,
    }));

    return products;
  } catch (error) {
    // Re-lança o erro para ser tratado no loader
    throw error instanceof Error
      ? error
      : new Error("Erro desconhecido ao buscar produtos");
  }
}
