import type { Product } from "~/types/Product";

export const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Notebook Gamer',
    price: 4599.99,
    description: 'Notebook de alta performance para jogos e trabalho',
    category: 'Eletrônicos',
    inStock: true,
  },
  {
    id: 2,
    name: 'Mouse Ergonômico',
    price: 89.90,
    description: 'Mouse com design ergonômico e precisão óptica',
    category: 'Periféricos',
    inStock: true,
  },
  {
    id: 3,
    name: 'Teclado Mecânico',
    price: 349.99,
    description: 'Teclado mecânico RGB com switches blue',
    category: 'Periféricos',
    inStock: false,
  },
  {
    id: 4,
    name: 'Monitor 27"',
    price: 1299.00,
    description: 'Monitor LED Full HD 27 polegadas',
    category: 'Eletrônicos',
    inStock: true,
  },
  {
    id: 5,
    name: 'Webcam HD',
    price: 279.90,
    description: 'Webcam 1080p com microfone embutido',
    category: 'Periféricos',
    inStock: true,
  },
  {
    id: 6,
    name: 'Headset Gamer',
    price: 199.99,
    description: 'Headset com som surround 7.1 e LED RGB',
    category: 'Áudio',
    inStock: false,
  },
]
