import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import ProductCard from '~/components/ProductCard'

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

describe('Products Tests', () => {
  // TODO: Implementar testes

  it.skip('should render product card with correct information', () => {
    // TODO: Criar um produto mock
    // const mockProduct = { id: 1, name: 'Teste', ... }

    // TODO: Renderizar o ProductCard
    // render(<ProductCard {...mockProduct} />)

    // TODO: Verificar se as informações aparecem na tela
    // expect(screen.getByText('Teste')).toBeInTheDocument()

    expect(true).toBe(true) // Placeholder - remover
  })

  // TODO: Adicionar mais 1-2 testes
  // Exemplos:
  // - Testar se produtos fora de estoque mostram mensagem apropriada
  // - Testar se o botão de adicionar ao carrinho funciona
  // - Testar formatação de preço
})
