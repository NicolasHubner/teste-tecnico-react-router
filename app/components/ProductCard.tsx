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

// TODO: Definir interface de props
interface ProductCardProps {
  // Adicione as propriedades necessárias aqui
  // Dica: id, name, price, description, category, inStock
}

export default function ProductCard(/* props aqui */) {
  // TODO: Desestruturar props

  const handleAddToCart = () => {
    // Placeholder para adicionar ao carrinho
    console.log('Produto adicionado ao carrinho')
  }

  return (
    <div className="product-card">
      {/* TODO: Implementar conteúdo do card */}
      {/* Deve exibir: nome, preço, descrição, categoria, status de estoque */}
      <h3 className="product-name">Nome do Produto</h3>
      <p className="product-price">R$ 0,00</p>
      <p className="product-description">Descrição do produto</p>
      <span className="product-category">Categoria</span>
      <div className="product-stock">Em estoque</div>
      <button
        className="add-to-cart-button"
        onClick={handleAddToCart}
      >
        Adicionar ao Carrinho
      </button>
    </div>
  )
}
