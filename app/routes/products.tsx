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

export { loader } from './api/products'
import React from 'react'
import {Await, useLoaderData, Link } from 'react-router'
import type { Product } from '~/types/Product'
import ProductCard from '~/components/product/ProductCard'
// interface Product {
//   id: number
//   name: string
//   price: number
//   description: string
//   category: string
//   inStock: boolean
// }

export default function Products() {
  // TODO: Use o hook apropriado do React Router aqui
  const { products } = useLoaderData() as {
    products: Product[];
  };

  // TODO: Tratar caso de erro
  // if (data.error) {
  //   return (
  //     <div className="error-message">
  //       <h2>Erro ao carregar produtos</h2>
  //       <p>{data.error}</p>
  //     </div>
  //   )
  // }

  // TODO: Renderizar lista de produtos usando ProductCard
  // Dica: não esqueça de adicionar uma key apropriada

  return (
    <section
    className="products-container p-6 max-w-6xl mx-auto"
    aria-labelledby="products-title">
      <nav aria-label="Breadcrumb" className="mb-4">
    <Link
      to="/"
      className="text-gray-600 hover:text-gray-900 text-lg font-medium flex items-center gap-2"
    >
      <span aria-hidden="true">←</span>
      <span>Voltar para Home</span>
    </Link>
  </nav>

  <h1 id="products-title" className="text-2xl font-bold mb-4">
    Nossos Produtos
  </h1>
   <React.Suspense fallback={<p role="status">Carregando produtos...</p>}>
    <ul
      className="
        products-grid 
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        gap-6"
      role="list"
    >
      <Await resolve={products} errorElement={<p>ola</p>}>
        {(resolvedProducts: Product[]) =>
          resolvedProducts.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))
        }
      </Await>
    </ul>
  </React.Suspense>
</section>
  )
}
