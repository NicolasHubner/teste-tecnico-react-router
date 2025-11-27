import type { Product } from '~/types/Product'

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { title, price, description, category, image } = product;

  const handleAddToCart = () => {
   alert(`Produto "${title}" adicionado ao carrinho!`);
   
  };

  return (
    <article
      className="
        product-card 
        border rounded-xl p-4 shadow-sm bg-white 
        flex flex-col 
        hover:shadow-lg transition
        h-full
      "
      aria-label={`Produto: ${title}`}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-contain mb-4"
      />
      <h3 className="text-lg font-semibold mb-2 line-clamp-1">
        {title}
      </h3>

      <span className="text-xs text-gray-500 mb-1">
        Categoria: {category}
      </span>

      <p className="text-green-700 font-bold text-lg mt-1">
        R$ {price.toFixed(2)}
      </p>

      <p className="text-sm mt-3 text-gray-700 line-clamp-3">
        {description}
      </p>

      <div className="mt-auto" />


      <button
        className="
          mt-4 px-3 py-2 rounded-lg 
          bg-blue-600 text-white font-medium 
          hover:bg-blue-700 focus:outline-none 
          focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
          w-full
        "
        onClick={handleAddToCart}
      >
        Adicionar ao Carrinho
      </button>
    </article>
  );
}
