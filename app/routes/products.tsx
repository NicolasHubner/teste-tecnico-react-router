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

interface Product {
  id: number
  name: string
  price: number
  description: string
  category: string
  inStock: boolean
}

export default function Products() {
  // TODO: Use o hook apropriado do React Router aqui
  const data = { products: [] as Product[], error: undefined as string | undefined }

  // TODO: Tratar caso de erro
  if (data.error) {
    return (
      <div className="error-message">
        <h2>Erro ao carregar produtos</h2>
        <p>{data.error}</p>
      </div>
    )
  }

  // TODO: Renderizar lista de produtos usando ProductCard
  // Dica: não esqueça de adicionar uma key apropriada

  return (
    <div className="products-container">
      <h1>Nossos Produtos</h1>

      {/* TODO: Implementar renderização da lista aqui */}
      <div className="products-grid">
        {/* ProductCard components aqui */}
        <p>Nenhum produto disponível</p>
      </div>
    </div>
  )
}
