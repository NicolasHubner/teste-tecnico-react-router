export interface Product {
	id: number;
	name: string;
	price: number;
	description: string;
	category: string;
	inStock: boolean;
	image: string;
	rating: { rate: number; count: number };
}
