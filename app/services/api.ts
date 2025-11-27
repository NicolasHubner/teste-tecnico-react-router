/**
 * Serviço de API simulado
 *
 * Esta função simula uma chamada de API real.
 * Use-a na rota server para buscar produtos.
 */

import type { Product } from "~/types/Product"

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

export async function fetchProducts(): Promise<Product[]> {
  const baseUrl = import.meta.env.VITE_APP_BASE_URL

  const response = await fetch(`${baseUrl}/products`)

  if (!response.ok) {
    throw new Error("Falha ao buscar produtos")
  }

  const data = await response.json()
  return data
}

