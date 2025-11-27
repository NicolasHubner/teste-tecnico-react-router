import { describe, it, expect } from 'vitest'
import { render, screen, act, fireEvent } from '@testing-library/react'
import ProductCard from '~/components/product/ProductCard'
import type { Product } from '~/types/Product';
/**
 * ⚠️ TODO - TAREFA 6: Criar testes básicos (descrição sutil)
 *
 * Implemente pelo menos 1-2 testes simples aqui:
 * - Teste de renderização do ProductCard
 * - Teste de comportamento básico
 *
 * Nota: Este item é mencionado de forma branda no README para avaliar
 * se o candidato presta atenção aos detalhes e às partes menos óbvias.
 */

const mockProduct: Product = {
  id: 1,
  title: "Produto Teste",
  price: 99.9,
  description: "Descrição de teste",
  category: "Categoria X",
  image: "https://example.com/img.png",
};

describe("Products Tests", () => {

  it("should render product card with correct information", () => {
    render(<ProductCard product={mockProduct} />);

    expect(screen.getByText("Produto Teste")).toBeInTheDocument();
    expect(screen.getByText("R$ 99.90")).toBeInTheDocument();
    expect(screen.getByText("Descrição de teste")).toBeInTheDocument();
    expect(screen.getByText(/Categoria X/)).toBeInTheDocument();
  });

 
});

