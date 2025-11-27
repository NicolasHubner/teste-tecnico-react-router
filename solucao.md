# Solução do Desafio Técnico

**Nome do Candidato:** [Gustavo Marques]
**Data:** [27/11/2025]

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

Implementei na função loader, responsável por buscar dados para servir ao client. Um fetch para retornar o array de products na response, também trabalhei o error no tipo new Response para trabalhar com o React Router.

---

### Tarefa 2: Ajustar a rota client (`app/routes/products.tsx`)
**Como resolvi:**
Utilizei o hook useLoaderData fornecido pelo react router. 
Ele trabalha buscando os dados no server e servindo ao client da aplicação.

---

### Tarefa 3: Implementar estilização
**Como resolvi:**

Utilizei Tailwind para agilizar o processo de entrega. 
Com o Tailwind fui capaz de trabalhar com estilização e também com grids
e outras partes essenciais na construção de um layout uniforme.

---

### Tarefa 4: Melhorar acessibilidade
**Como resolvi:**
Implementei tags como aria e arial label para gerar acessibilidade perceptível aos que navegam pela tela.

---

### Tarefa 5: Criar testes básicos
**Como resolvi:**
Criei o teste principal que é a renderização da listagem de products. 
validei a existência de cada campo, seguindo a tipagem exigida pela api. 
Criei um bloco describe e busque testar as principais funcionalidades do product que é adicionar no carrinho e aparecer na tela.

---

### Tarefa 6: Revisar separação server/client
**Como resolvi:**
O uso do loader e o useLoaderData integrados já configura uma separação do server e client. O client já recebe os dados prontos e o server é responsável somente por buscá-los.

---

### Tarefa 7: Tratamento de erro na rota server
**Como resolvi:**

Utilizei a doc do react router para ter uma ideia de como poderia retornar esses erros.
Tentei ao máximo extrair da documentação alguma forma de seguir o caminho, server, depois client e cada um com o seu tipo de error.

---

### Tarefa 8: Finalizar componente ProductCard
**Como resolvi:**
Implementei de acordo com os campos que viriam da Api, utilizei a mesma tipagem e criei o layout de acordo com oque eu tenho experiencia em exibir produto em um 'ecommerce'. Passei todas as propriedades por props para não utilizar nenhuma biblioteca externa e optei por fazer o layout utilizando Tailwind com classes e modelos já pre criados da própria documentação.

---

## Compreensão sobre Server Routes vs Client Routes

**Minha compreensão:**

[Explique com suas palavras como você entende a relação e diferença entre rotas server e client no React Router v7. Mencione:
- Responsabilidades de cada uma
- Momento de execução (build-time vs runtime)
- Casos de uso apropriados
- Como elas se comunicam (loaders, useLoaderData, etc.)]


Basicamente foi implementado o SSR, que assim o React Router trabalha com rotas que rodam no server e outras no client. O server e os loaders, são responsáveis pela primeira renderização e também por entregar o HTML pronto.
Isso melhora a performance, porque o React só hidrata e não precisamos mais carregar o javascript no client para então executar as chamadas de API.


---

## Pontos Extras Implementados (Opcional)

- [ ] Teste unitário adicional cobrindo regra de negócio específica
- [ ] Teste de integração validando fluxo completo (server fetch → render client)
- [ ] Navegação por teclado nos elementos interativos
- [ ] Acessibilidade avançada (landmarks completos, labels detalhados, ARIA states)
- [ ] Persistência via cookie integrada ao React Router

**Detalhes:**
[Se implementou algum ponto extra, explique aqui o que fez e como implementou]

---

## Observações Gerais

[Adicione quaisquer comentários, decisões técnicas importantes, ou dificuldades encontradas durante a implementação]

Gostei bastante de realizar o teste, foi muito bem eleborado. o teste e abordagem das tarefas.
Obrigado.

---

## Tempo Gasto

**Tempo total:** [Ex: 14 horas]

**Distribuição:**
- Análise e planejamento: [5 horas]
- Implementação: [7 horas]
- Testes: [1 horas]
- Refinamento: [1 horas]
