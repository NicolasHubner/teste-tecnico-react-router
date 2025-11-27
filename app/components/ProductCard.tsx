import type { Product } from "~/types/Product";
import { formatPrice } from "~/utils/formattedPrice";

/**
 * Componente ProductCard
 * Exibe informações de um produto em formato de card
 */
interface ProductCardProps extends Product {}

export default function ProductCard({
  id,
  name,
  price,
  description,
  category,
  inStock,
}: ProductCardProps) {
  const handleAddToCart = () => {
    try {
      // Recupera o carrinho do localStorage ou cria um array vazio
      const cartJson = localStorage.getItem("cart");
      const cart: Product[] = cartJson ? JSON.parse(cartJson) : [];

      // Adiciona o produto atual ao carrinho
      cart.push({
        id,
        name,
        price,
        description,
        category,
        inStock,
      });

      // Salva o carrinho atualizado no localStorage
      localStorage.setItem("cart", JSON.stringify(cart));

      // Exibe alerta com o nome do produto e total de itens
      window.alert(
        `${name} foi adicionado ao carrinho!\nTotal de itens no carrinho: ${cart.length}`
      );
    } catch (error) {
      console.error("Erro ao adicionar produto ao carrinho:", error);
      window.alert("Erro ao adicionar produto ao carrinho. Tente novamente.");
    }
  };

  const formattedPrice = formatPrice(price);

  return (
    <article className="product-card" aria-labelledby={`product-name-${id}`}>
      <div className="product-content">
        <h3 id={`product-name-${id}`} className="product-name">
          {name}
        </h3>

        <p className="product-price" aria-label={`Preço: ${formattedPrice}`}>
          {formattedPrice}
        </p>

        <p className="product-description">{description}</p>

        <div className="product-meta">
          <span
            className="product-category"
            aria-label={`Categoria: ${category}`}
          >
            {category}
          </span>

          <div
            className={`product-stock ${inStock ? "in-stock" : "out-of-stock"}`}
            aria-label={
              inStock ? "Produto em estoque" : "Produto fora de estoque"
            }
            role="status"
          >
            {inStock ? "Em estoque" : "Fora de estoque"}
          </div>
        </div>

        <button
          className="add-to-cart-button"
          onClick={handleAddToCart}
          disabled={!inStock}
          aria-label={`Adicionar ${name} ao carrinho`}
          aria-disabled={!inStock}
        >
          {inStock ? "Adicionar ao Carrinho" : "Indisponível"}
        </button>
      </div>
    </article>
  );
}
