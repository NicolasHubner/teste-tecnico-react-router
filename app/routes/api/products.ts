import type { LoaderFunctionArgs } from "react-router";
import { fetchProducts } from "~/services/api";

/**
 * Loader da rota server que busca produtos da API
 * Implementa tratamento de erro adequado para o React Router
 */
export async function loader({ request }: LoaderFunctionArgs) {
  try {
    const products = await fetchProducts();
    return { products, error: undefined };
  } catch (error) {
    // Retorna erro de forma que o React Router possa lidar
    const errorMessage =
      error instanceof Error
        ? error.message
        : "Erro desconhecido ao carregar produtos";

    return {
      products: [],
      error: errorMessage,
    };
  }
}
