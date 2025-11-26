import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProductCard from '~/components/ProductCard';
import type { Product } from '~/types/Product';

const consoleLogSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

describe('ProductCard Component Tests', () => {
	const mockInStockProduct: Product = {
		id: 101,
		name: 'Teclado Mecânico RGB',
		price: 349.99,
		description: 'Teclado mecânico com switches blue e iluminação RGB.',
		category: 'Periféricos',
		inStock: true,
		image: 'mock-image-rgb.png',
		rating: { rate: 4.8, count: 500 },
	};

	const mockOutOfStockProduct: Product = {
		id: 102,
		name: 'Webcam 4K',
		price: 899.0,
		description: 'Webcam com resolução 4K e microfone integrado.',
		category: 'Periféricos',
		inStock: false,
		image: 'mock-image-webcam.png',
		rating: { rate: 2.1, count: 10 },
	};

	/**
	 * ⚠️ TAREFA 6: Criar testes básicos
	 */

	it('should render product card with correct information', () => {
		render(<ProductCard product={mockInStockProduct} />);

		expect(
			screen.getByRole('heading', { level: 3, name: mockInStockProduct.name })
		).toBeInTheDocument();
		expect(screen.getByText(mockInStockProduct.description)).toBeInTheDocument();

		expect(screen.getByLabelText('Preço: R$ 349,99')).toBeInTheDocument();

		expect(screen.getByLabelText(`Categoria: ${mockInStockProduct.category}`)).toBeInTheDocument();
		expect(screen.getByText('Em estoque')).toBeInTheDocument();
	});

	it('should display "Esgotado" status and disable the "Add to Cart" button when out of stock', () => {
		render(<ProductCard product={mockOutOfStockProduct} />);

		expect(screen.getByText('Esgotado')).toBeInTheDocument();

		const addButton = screen.getByRole('button', { name: /Produto indisponível/i });
		expect(addButton).toBeInTheDocument();
		expect(addButton).toBeDisabled();
	});

	it('should call handleAddToCart function (via console.log) when "Add to Cart" button is clicked for an in-stock product', async () => {
		const user = userEvent.setup();
		render(<ProductCard product={mockInStockProduct} />);

		const addButton = screen.getByRole('button', {
			name: `Adicionar ao Carrinho ${mockInStockProduct.name}`,
		});

		await user.click(addButton);

		expect(consoleLogSpy).toHaveBeenCalledWith(
			`Produto ${mockInStockProduct.name} (ID: ${mockInStockProduct.id}) adicionado ao carrinho`
		);

		consoleLogSpy.mockClear();
	});
});
