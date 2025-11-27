# Solução do Desafio Técnico

**Nome do Candidato:** Juan Evangelista Nascimento
**Data:** 27/11/2025

---

## Como executar o projeto

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Rodar testes
npm test
```

---

## Resolução das Tarefas

### Tarefa 1: Completar a rota server (`app/routes/api/products.ts`)

**Como resolvi:**
[Explique brevemente sua abordagem para implementar o loader da rota server]

Implementei a função fetchProducts em app/services/api.ts para usar o fetchAPI com o VITE_APP_BASE_URL. Reestruturei a tipagem Product para incluir os campos image e rating da API, permitindo o cálculo da lógica de negócio. Criei a função getAllProducts para mapear o campo title da API para name interno e calcular a propriedade inStock (se rating.count > 100). A latência e o erro de 10% foram mantidos antes do fetch por requisito do desafio.

---

### Tarefa 2: Ajustar a rota client (`app/routes/products.tsx`)

**Como resolvi:**
[Explique brevemente como você consumiu os dados e renderizou a lista de produtos]

Implementei a função loader em app/routes/api/products.ts para ser a ponte exclusiva entre o Client e o serviço de dados. Ela invoca o fetchProducts() e retorna o objeto de dados { products, error }, cumprindo a regra de que toda busca de dados deve ocorrer na rota Server (Loader).

---

### Tarefa 3: Implementar estilização

**Como resolvi:**
[Explique brevemente sua abordagem e escolhas de design - Tailwind, CSS puro, etc.]

Eu tutilizei o Tailwind CSS com uma abordagem mobile-first e modular. A estilização foi dividida:

app.css: Contém estilos de layout (.app-container, .products-grid — agora com 3 colunas em telas grandes para cards maiores) e as definições de classes semânticas (.product-card, .button-active) usando @apply.

ProductCard.tsx: Utiliza apenas as classes semânticas e de estado definidas no CSS (ex: .product-category, .stock-in, .button-active), mantendo o componente limpo e desvinculado de utilitários complexos. Animações de hover foram adicionadas ao card e ao botão CTA da Home.

---

### Tarefa 4: Melhorar acessibilidade

**Como resolvi:**
[Explique quais melhorias de acessibilidade você implementou - ARIA, semântica, navegação por teclado]

Para a acessibilidade eu implementei 4 pontos:

Uso extensivo de elementos semânticos Ex: header, main, article, ul.

Definição de landmarks ARIA (ex: role='banner', role='contentinfo' no app/root.tsx).

Adição de etiquetas ARIA nos elementos interativos (ex: aria-label no preço e no botão de carrinho) e estados de status (ex: role='status' e aria-live='polite' para status de estoque).

Estilos de focus:ring foram aplicados em botões e links.

---

### Tarefa 5: Criar testes básicos

**Como resolvi:**
[Explique quais testes você criou e por quê]

Implementei três testes unitários em app tests products.test.tsx utilizando Vitest e @testing-library/react:

Teste de Renderização: Verifica se nome, preço (formatado) e categoria são exibidos corretamente.

Teste de Estado Condicional: Verifica se o botão Add to Cart fica desabilitado (toBeDisabled()) quando inStock: false.

Teste de Comportamento (Interatividade): Simula o clique no botão e verifica se a função (o console.log mockado) é chamada, validando o handleAddToCart.

---

### Tarefa 6: Revisar separação server/client

**Como resolvi:**
[Explique como você garantiu a separação correta entre server e client]:

Para a separação eu segui os padrões SRP (Single Responsibility Principle) e DRY (Don't Repeat Yourself).

Server (api/products.ts): Lógica de I/O, latência, integração e tratamento de erros de rede.

Client (products.tsx): Lógica de UI (useLoaderData), renderização condicional (erro/vazio) e tratamento de eventos (onClick do botão).

---

### Tarefa 7: Tratamento de erro na rota server

**Como resolvi:**
[Explique sua estratégia de tratamento de erros no loader]

O loader (Server) usa try/catch para capturar falhas de API/rede e, em vez de lançar um erro fatal para o ErrorBoundary global, retorna o erro no objeto de dados: { products: [], error: string }. A rota Client (products.tsx) consome e exibe esse error de forma controlada (.error-message).

---

### Tarefa 8: Finalizar componente ProductCard

**Como resolvi:**
[Explique como você completou o componente e quais decisões tomou]

## O componente foi tipado usando o (ProductCardProps), renderizando todos os campos (id, name, price, image, description, category) e implementando a interatividade básica (handleAddToCart com console.log).

## Compreensão sobre Server Routes vs Client Routes

**Minha compreensão:**

[Explique com suas palavras como você entende a relação e diferença entre rotas server e client no React Router v7. Mencione:

- Responsabilidades de cada uma
- Momento de execução (build-time vs runtime)
- Casos de uso apropriados
- Como elas se comunicam (loaders, useLoaderData, etc.)]

No React Router v7, o conceito de Rotas Server e Rotas Client define a separação de preocupações (SRP) para otimizar o desempenho e a experiência de desenvolvimento, garantindo que o código de I/O (Input/Output) nunca seja enviado para o navegador.

As Rotas Server são dedicadas à Lógica de I/O (Input/Output). Sua responsabilidade é lidar com tarefas como busca de dados (loader), mutação (action), integração com API e autenticação. Elas são executadas no servidor (ambiente Node.js) durante o build-time (para Server-Side Rendering - SSR) ou em requisições de navegação (runtime). Este modelo é ideal para buscar dados pesados ou sensíveis de forma eficiente, onde a latência de rede entre cliente e API é alta.

Por outro lado, as Rotas Client são focadas na Lógica de UI e Interatividade. Elas lidam com a renderização do JSX, gestão de estado local e eventos DOM (ex: onClick). Estas rotas executam no browser (client-side) após a hidratação inicial do HTML. A comunicação é feita de maneira clara: o Server Route, por meio do loader, fornece os dados prontos, e o Client Route os consome usando o hook useLoaderData.

---

## Pontos Extras Implementados (Opcional)

- [x] Teste unitário adicional cobrindo regra de negócio específica
- [ ] Teste de integração validando fluxo completo (server fetch → render client)
- [x] Navegação por teclado nos elementos interativos
- [x] Acessibilidade avançada (landmarks completos, labels detalhados, ARIA states)
- [ ] Persistência via cookie integrada ao React Router

**Detalhes:**
[Se implementou algum ponto extra, explique aqui o que fez e como implementou]

1. Adicionei um fluxo do teste validando a interatividade do botão handleAddToCart, garantindo que a ação seja disparada corretamente no clique.
2. Adicionei estilos de focus:outline-none focus:ring-4 foram aplicados em todos os botões e links de navegação (app.css e ProductCard.tsx) para garantir um indicador de foco visível e acessível.
3. Adicionei a marcação ARIA completa no layout (role='main', role='contentinfo') e no ProductCard (aria-label, aria-labelledby, role='status') para otimizar a experiência com leitores de tela.

---

## Observações Gerais

[Adicione quaisquer comentários, decisões técnicas importantes, ou dificuldades encontradas durante a implementação]

Para esse projeto eu adotei o SRP e DRY para garantir que cada arquivo tivesse uma responsabilidade única e que não houvesse repetição de código, e Qualidade de Código. A separação lógica entre o mapeamento de API (api.ts), a orquestração do dado (api/products.ts) e a renderização (products.tsx) demonstra a aplicação focando em um código modular, de fácil manutenção e testável.

---

## Tempo Gasto

**Tempo total:** : 10h

**Distribuição:**

- Análise e planejamento: 30 min
- Implementação: 6h
- Testes: 2h
- Refinamento: 1h30
