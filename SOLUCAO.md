# Solução do Desafio Técnico

**Nome do Candidato:** João Gabriel Sousa da Cruz
**Data:** 2025-11-27

---

## Como executar o projeto

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Rodar testes
npm test

# Build de produção
npm run build
```

---

## Resolução das Tarefas

### Tarefa 1: Integração com API Externa
**Como resolvi:**

Integrei a API pública Faker Store API (https://fakestoreapi.com) no arquivo `app/services/api.ts`. A implementação:

1. **Atualização dos tipos**: Criei a interface `FakerStoreProduct` para representar o formato retornado pela API e mantive a interface `Product` para uso interno, respeitando a estrutura original do boilerplate.

2. **Função fetchProducts**: Reescrevi a função para fazer uma requisição real à API usando `fetch()`, convertendo o formato da API (onde o nome do produto é `title`) para o formato interno (`name`).

3. **Tratamento de erros**: A função lança erros apropriados que são capturados no loader da rota server.

**Arquivos modificados:**
- `app/types/Product.ts`: Adicionada interface `FakerStoreProduct` para representar o formato da API
- `app/services/api.ts`: Implementada integração real com a API externa, convertendo `FakerStoreProduct` para `Product`

---

### Tarefa 2: Completar a rota server (`app/routes/api/products.ts`)
**Como resolvi:**

Implementei a função `loader` que:
1. Chama `fetchProducts()` do serviço de API
2. Retorna os dados no formato `{ products, error }` para o React Router
3. Implementa tratamento de erro com try/catch que captura qualquer erro e retorna um objeto com `error` e `products: []`

A função garante que sempre retorna um objeto válido, mesmo em caso de erro, permitindo que a rota client trate adequadamente os erros sem quebrar a aplicação.

**Arquivos modificados:**
- `app/routes/api/products.ts`: Implementado loader completo com tratamento de erro

---

### Tarefa 3: Ajustar a rota client (`app/routes/products.tsx`)
**Como resolvi:**

Ajustei a rota client para:
1. **Usar `useLoaderData`**: Importei e utilizei o hook `useLoaderData<LoaderData>()` do React Router para obter os dados retornados pelo loader da rota server.

2. **Renderização condicional**: Implementei tratamento para:
   - Casos de erro: exibe mensagem de erro com `role="alert"` e `aria-live="polite"` para acessibilidade
   - Lista vazia: exibe mensagem apropriada
   - Lista com produtos: renderiza cada produto usando o componente `ProductCard`

3. **Estrutura semântica**: Utilizei elementos HTML semânticos (`<main>`, `<ul>`, `<li>`) e adicionei atributos ARIA (`role="list"`, `aria-label`, `aria-live`) para melhorar acessibilidade.

**Arquivos modificados:**
- `app/routes/products.tsx`: Implementado consumo de dados do loader e renderização completa

---

### Tarefa 4: Implementar estilização
**Como resolvi:**

Implementei estilização completa usando CSS customizado no arquivo `app/app.css`, aproveitando que o Tailwind já estava configurado. A abordagem incluiu:

1. **Layout responsivo**: 
   - Grid de produtos com `grid-template-columns: repeat(auto-fill, minmax(300px, 1fr))` que se adapta automaticamente
   - Breakpoints para mobile (768px) e mobile pequeno (480px)

2. **Design moderno**:
   - Cards de produto com sombras, bordas arredondadas e efeitos hover
   - Cores consistentes e hierarquia visual clara
   - Hero section com gradiente na página home

3. **Estados interativos**:
   - Hover effects em cards e botões
   - Estados disabled para botões
   - Focus states para navegação por teclado

4. **Responsividade**:
   - 3 colunas em desktop
   - 2 colunas em tablet
   - 1 coluna em mobile

**Arquivos modificados:**
- `app/app.css`: Implementados todos os estilos necessários

---

### Tarefa 5: Melhorar acessibilidade
**Como resolvi:**

Implementei várias melhorias de acessibilidade:

1. **Elementos semânticos**:
   - Substituí `<div>` por `<main>`, `<article>`, `<ul>`, `<li>` onde apropriado
   - Utilizei `<h1>`, `<h2>`, `<h3>` para hierarquia de títulos

2. **Atributos ARIA**:
   - `role="alert"` e `aria-live="polite"` em mensagens de erro
   - `aria-label` em botões e elementos interativos
   - `aria-disabled` em botões desabilitados
   - `aria-labelledby` para associar elementos
   - `role="list"` e `role="listitem"` para listas

3. **Navegação por teclado**:
   - Focus states visíveis em todos os elementos interativos
   - `outline` adequado para indicar foco
   - Botões desabilitados não recebem foco quando apropriado

4. **Estrutura semântica**:
   - Elementos HTML semânticos apropriados
   - Hierarquia de títulos correta

**Arquivos modificados:**
- `app/routes/products.tsx`: Adicionados atributos ARIA e elementos semânticos
- `app/components/ProductCard.tsx`: Melhorias de acessibilidade completas

---

### Tarefa 6: Criar testes básicos
**Como resolvi:**

Implementei 4 testes no arquivo `app/__tests__/products.test.tsx`:

1. **Teste de renderização**: Verifica se todas as informações do produto são exibidas corretamente
2. **Teste de produto fora de estoque**: Verifica se a mensagem "Fora de estoque" aparece e se o botão está desabilitado
3. **Teste de formatação de preço**: Verifica se o preço está formatado corretamente
4. **Teste de interatividade**: Verifica se o botão de adicionar ao carrinho chama a função correta

Utilizei `@testing-library/react` e `@testing-library/user-event` para simular interações do usuário.

**Arquivos modificados:**
- `app/__tests__/products.test.tsx`: Implementados 4 testes completos

---

### Tarefa 7: Revisar separação server/client
**Como resolvi:**

Revisei a arquitetura e confirmei que a separação está correta:

1. **Rota Server (`app/routes/api/products.ts`)**:
   - Responsável apenas por buscar dados da API
   - Executa no servidor (ou durante o build no SSR)
   - Retorna dados para o React Router

2. **Rota Client (`app/routes/products.tsx`)**:
   - Responsável apenas por renderização e interação
   - Usa `useLoaderData` para obter dados do loader
   - Não faz chamadas de API diretamente

3. **Serviço de API (`app/services/api.ts`)**:
   - Usado exclusivamente pela rota server
   - Não é importado em componentes client

A separação está correta e segue as melhores práticas do React Router v7.

---

### Tarefa 8: Tratamento de erro na rota server
**Como resolvi:**

Implementei tratamento de erro robusto na função `loader`:

1. **Try/catch**: Envolvi a chamada `fetchProducts()` em um bloco try/catch
2. **Retorno consistente**: Sempre retorno um objeto no formato `{ products, error }`, garantindo que a rota client sempre recebe dados válidos
3. **Mensagens de erro descritivas**: Capturo a mensagem de erro original quando disponível, ou uso uma mensagem padrão
4. **Fallback seguro**: Em caso de erro, retorno `products: []` para evitar quebras na renderização

O ErrorBoundary fornecido no `root.tsx` também captura erros não tratados, mas o tratamento no loader previne a maioria dos casos.

**Arquivos modificados:**
- `app/routes/api/products.ts`: Implementado try/catch no loader

---

### Tarefa 9: Finalizar componente ProductCard
**Como resolvi:**

Completei o componente `ProductCard` com:

1. **Props e tipagem**: Defini a interface `ProductCardProps` que estende `Product`, garantindo type safety completo

2. **Renderização completa**:
   - Nome do produto com `id` único para `aria-labelledby`
   - Preço formatado usando função utilitária `formatPrice` para formato de moeda
   - Descrição com truncamento visual (3 linhas)
   - Categoria como badge colorido
   - Status de estoque com cores diferentes (verde para em estoque, vermelho para fora)

3. **Interatividade**:
   - Botão "Adicionar ao Carrinho" funcional com integração ao localStorage
   - Salva produtos no localStorage quando adicionados
   - Exibe alerta com nome do produto e total de itens no carrinho
   - Efeitos hover e focus para melhor UX

4. **Acessibilidade**: Todos os elementos têm labels ARIA apropriados e estrutura semântica

**Arquivos modificados:**
- `app/components/ProductCard.tsx`: Componente completo e funcional

---

## Compreensão sobre Server Routes vs Client Routes

**Minha compreensão:**

No React Router v7, a separação entre Server Routes e Client Routes é fundamental para uma arquitetura eficiente:

### Server Routes (Loaders)
- **Responsabilidade**: Buscar dados, executar lógica no servidor, acessar bancos de dados ou APIs externas
- **Momento de execução**: Executam no servidor durante o request (SSR) ou durante o build (SSG)
- **Comunicação**: Retornam dados que são passados para as Client Routes através do sistema de loaders
- **Vantagens**: 
  - Dados são buscados antes da renderização, melhorando performance
  - Reduz chamadas de API desnecessárias no cliente
  - Melhor SEO pois dados estão disponíveis no HTML inicial

### Client Routes (Componentes)
- **Responsabilidade**: Renderização de UI, interações do usuário, estado local
- **Momento de execução**: Executam no navegador após o carregamento inicial
- **Comunicação**: Usam hooks como `useLoaderData()` para acessar dados do loader
- **Vantagens**:
  - Interatividade rica e responsiva
  - Navegação client-side rápida
  - Experiência de usuário fluida

### Como elas se comunicam:
1. A Server Route exporta uma função `loader` que busca dados
2. A Client Route exporta o mesmo `loader` (re-export) e usa `useLoaderData()` para acessar os dados
3. O React Router gerencia automaticamente a comunicação entre elas
4. Em caso de erro no loader, o ErrorBoundary pode capturar e exibir mensagens apropriadas

Esta arquitetura permite aproveitar o melhor dos dois mundos: performance do servidor para dados e interatividade do cliente para UI.

---

## Pontos Extras Implementados (Opcional)

- [x] Teste unitário adicional cobrindo regra de negócio específica
  - Implementei testes para formatação de preço e interatividade
- [x] Navegação por teclado nos elementos interativos
  - Todos os elementos interativos têm focus states visíveis e navegação por teclado funcional
- [x] Acessibilidade avançada (landmarks completos, labels detalhados, ARIA states)
  - Implementei ARIA labels detalhados, roles apropriados, e estados ARIA em todos os componentes

**Detalhes:**

1. **Testes adicionais**: Além dos testes básicos, implementei testes para:
   - Formatação de preço (verificando se usa a função formatPrice corretamente)
   - Estados de estoque (verificando se botão é desabilitado corretamente)
   - Interatividade (verificando se callbacks são chamados)

2. **Navegação por teclado**: 
   - Todos os links e botões têm `outline` visível no focus
   - Estados `:focus` e `:focus-visible` implementados
   - Navegação por Tab funciona corretamente em toda a aplicação

3. **Acessibilidade avançada**:
   - `aria-live="polite"` em mensagens dinâmicas
   - `aria-label` descritivos em todos os elementos interativos
   - `role` apropriados (alert, list, listitem)
   - `aria-labelledby` para associar elementos relacionados

---

## Observações Gerais

### Decisões Técnicas Importantes:

1. **Formato de preço**: Utilizei uma função utilitária `formatPrice` para formatar os preços. A API retorna preços em dólares. Em produção, seria necessário converter para a moeda local ou usar a moeda retornada pela API.

2. **Tratamento de erros**: Implementei tratamento de erro em dois níveis:
   - No loader (retorna erro de forma controlada)
   - No ErrorBoundary (captura erros não tratados)
   Isso garante que a aplicação nunca quebre completamente, mesmo em caso de falha na API.

4. **Performance**: 
   - O grid responsivo usa `auto-fill` para otimizar o uso de espaço
   - CSS otimizado com transições suaves mas leves
   - Funcionalidade de carrinho usando localStorage para persistência local

5. **TypeScript**: Mantive type safety completo em todo o projeto, utilizando interfaces bem definidas e evitando `any`.

### Dificuldades Encontradas:

1. **Estrutura da API**: A Faker Store API retorna `title` ao invés de `name`, então foi necessário fazer a conversão no serviço de API.

2. **Testes com React Router**: Foi necessário garantir que os mocks do React Router estavam configurados corretamente no setup de testes.

3. **Acessibilidade**: Garantir que todos os elementos interativos tivessem labels ARIA apropriados e que a navegação por teclado funcionasse corretamente em todos os casos.

4. **Funcionalidade de carrinho**: Implementei integração com localStorage para salvar produtos adicionados ao carrinho, com feedback visual através de window.alert mostrando o nome do produto e o total de itens.

---

## Tempo Gasto

**Tempo total:** Aproximadamente 1h 30min

**Distribuição:**
- Análise e planejamento: 15 min
- Implementação das tarefas 1-3 (API e rotas): 25 min
- Implementação da tarefa 4 (estilização): 20 min
- Implementação das tarefas 5 e 9 (acessibilidade e ProductCard): 15 min
- Implementação da tarefa 6 (testes): 10 min
- Revisão e refinamento: 5 min
