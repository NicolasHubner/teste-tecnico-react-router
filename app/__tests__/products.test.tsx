import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductCard from "~/components/ProductCard";
import type { Product } from "~/types/Product";

/**
 * Testes básicos para o componente ProductCard
 */
describe("Products Tests", () => {
  const mockProduct: Product = {
    id: 1,
    name: "Notebook Gamer",
    price: 4599.99,
    description: "Notebook de alta performance para jogos e trabalho",
    category: "Eletrônicos",
    inStock: true,
  };

  it("should render product card with correct information", () => {
    render(<ProductCard {...mockProduct} />);

    // Verificar se as informações aparecem na tela
    expect(screen.getByText("Notebook Gamer")).toBeInTheDocument();
    expect(
      screen.getByText(/Notebook de alta performance/)
    ).toBeInTheDocument();
    expect(screen.getByText("Eletrônicos")).toBeInTheDocument();
    expect(screen.getByText("Em estoque")).toBeInTheDocument();
    expect(screen.getByText("Adicionar ao Carrinho")).toBeInTheDocument();
  });

  it("should show out of stock message and disable button when product is out of stock", () => {
    const outOfStockProduct: Product = {
      ...mockProduct,
      inStock: false,
    };

    render(<ProductCard {...outOfStockProduct} />);

    expect(screen.getByText("Fora de estoque")).toBeInTheDocument();
    const button = screen.getByText("Indisponível");
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("aria-disabled", "true");
  });

  it("should format price correctly", () => {
    render(<ProductCard {...mockProduct} />);

    // Verificar se o preço está formatado (deve conter $ ou símbolo de moeda)
    const priceElement = screen.getByLabelText(/Preço:/i);
    expect(priceElement).toBeInTheDocument();
    expect(priceElement.textContent).toContain("$");
  });

  it("should call handleAddToCart when button is clicked", async () => {
    const user = userEvent.setup();
    // Limpa localStorage antes do teste
    localStorage.clear();
    
    // Mock do window.alert
    const alertSpy = vi.spyOn(window, "alert").mockImplementation(() => {});

    render(<ProductCard {...mockProduct} />);

    const button = screen.getByText("Adicionar ao Carrinho");
    await user.click(button);

    // Verifica se o produto foi adicionado ao localStorage
    const cartJson = localStorage.getItem("cart");
    expect(cartJson).toBeTruthy();
    const cart = JSON.parse(cartJson!);
    expect(cart).toHaveLength(1);
    expect(cart[0]).toMatchObject({
      id: mockProduct.id,
      name: mockProduct.name,
      price: mockProduct.price,
    });

    // Verifica se o alert foi chamado com a mensagem correta
    expect(alertSpy).toHaveBeenCalledWith(
      expect.stringContaining(mockProduct.name)
    );
    expect(alertSpy).toHaveBeenCalledWith(
      expect.stringContaining("Total de itens no carrinho: 1")
    );

    alertSpy.mockRestore();
  });
});
