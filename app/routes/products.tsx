import { useLoaderData } from "react-router";
import type { Product } from "~/types/Product";
import ProductCard from "~/components/ProductCard";

export { loader } from "./api/products";

interface LoaderData {
  products: Product[];
  error?: string;
}

export default function Products() {
  const data = useLoaderData<LoaderData>();

  // Tratar caso de erro
  if (data.error) {
    return (
      <div className="error-message" role="alert" aria-live="polite">
        <h2>Erro ao carregar produtos</h2>
        <p>{data.error}</p>
      </div>
    );
  }

  // Renderizar lista de produtos usando ProductCard
  return (
    <main className="products-container">
      <h1>Nossos Produtos</h1>

      {data.products.length === 0 ? (
        <p className="empty-state" aria-live="polite">
          Nenhum produto disponível
        </p>
      ) : (
        <ul
          className="products-grid"
          role="list"
          aria-label="Lista de produtos"
        >
          {data.products.map((product) => (
            <li key={product.id} role="listitem">
              <ProductCard {...product} />
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
