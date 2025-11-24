# Desafio Técnico - Desenvolvedor Front-end React Router

**Tempo estimado:** 1h - 1h30

## Contexto

Você recebeu um projeto React incompleto que utiliza **React Router v7** com suporte a **Server Routes** e **Client Routes**. O projeto simula uma aplicação de gerenciamento de produtos, mas várias partes estão inacabadas ou necessitam de ajustes.

Seu objetivo é completar as tarefas listadas abaixo, demonstrando conhecimento técnico, atenção aos detalhes e boas práticas de desenvolvimento.

---

## Estrutura do Projeto

```
app/
├── routes/
│   ├── products.tsx           # Rota principal (client)
│   └── api/
│       └── products.ts        # Rota server (API loader)
├── components/
│   ├── ProductCard.tsx        # Componente incompleto
│   └── ErrorBoundary.tsx      # Tratamento de erros
├── services/
│   └── api.ts                 # Serviço de API mock
├── __tests__/
│   └── products.test.tsx      # Testes a implementar
└── root.tsx
```

---

## Tarefas Obrigatórias

Complete todas as 8 tarefas abaixo:

### 1. Completar a rota server (`app/routes/api/products.ts`)
**🔍 ATENÇÃO:** Há um comentário `TODO` indicando onde implementar a busca de dados.

- Implemente a função loader que busca produtos da API
- Use o serviço já fornecido em `services/api.ts`
- Retorne os dados no formato adequado para o React Router

### 2. Ajustar a rota client (`app/routes/products.tsx`)
**🔍 ATENÇÃO:** Há comentários `TODO` indicando ajustes necessários.

- Consuma os dados fornecidos pelo loader da rota server
- Utilize o hook apropriado do React Router
- Renderize a lista de produtos usando o componente ProductCard

### 3. Implementar estilização simples
**🔍 ATENÇÃO:** Componentes possuem classNames mas faltam estilos.

- Adicione estilos CSS básicos ao projeto (pode usar Tailwind que já está configurado)
- Foque em: layout de grid/lista, cards de produto, responsividade básica
- Pode usar CSS modules, Tailwind ou CSS puro

### 4. Melhorar acessibilidade
**🔍 ATENÇÃO:** Revise elementos interativos e estrutura semântica.

- Utilize elementos HTML semânticos apropriados
- Adicione atributos ARIA onde necessário
- Garanta que leitores de tela consigam navegar adequadamente

### 5. Criar testes básicos
**🔍 ATENÇÃO:** Arquivo de teste está no diretório `__tests__/`.

- Implemente pelo menos 1-2 testes simples
- Teste renderização de componentes ou comportamento básico
- Configure e use a biblioteca de testes (Vitest recomendado)

### 6. Revisar separação server/client
**🔍 ATENÇÃO:** Verifique se as responsabilidades estão corretas.

- Confirme que busca de dados está na rota server (loader)
- Confirme que renderização e interação estão na rota client
- Ajuste se necessário

### 7. Implementar tratamento de erro na rota server
**🔍 ATENÇÃO:** Há comentário `TODO` sobre error handling.

- Adicione try/catch apropriado na função loader
- Retorne erro de forma que o React Router possa lidar
- Use o ErrorBoundary já fornecido

### 8. Finalizar componente ProductCard
**🔍 ATENÇÃO:** O componente `ProductCard.tsx` está incompleto.

- Complete as props e tipagem TypeScript
- Implemente a renderização de todas as informações do produto
- Adicione interatividade básica se aplicável

---

## Restrições

**PROIBIDO:**

1. ❌ Usar bibliotecas de estado global (Redux, Zustand, Jotai, etc.)
2. ❌ Reescrever o projeto do zero
3. ❌ Substituir rotas server por client ou vice-versa
4. ❌ Alterar a estrutura principal do boilerplate fornecido
5. ❌ Usar ferramentas externas não mencionadas neste documento

---

## Entregáveis

Você deve entregar:

1. **Código funcionando** - O projeto deve rodar sem erros
2. **Arquivo SOLUCAO.md** contendo:
   - Breve explicação de como resolveu cada tarefa
   - Comando para rodar o projeto
   - Resumo sobre como compreendeu a relação entre rotas server e client no React Router
3. **Commits organizados** (opcional, mas recomendado)

---

## Como Executar o Projeto

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Rodar testes (após configurar)
npm run test

# Build de produção
npm run build
```

---

## Critérios de Avaliação

Você será avaliado por:

- ✅ **Clareza do raciocínio técnico**
- ✅ **Qualidade e organização do código**
- ✅ **Correção na divisão server/client**
- ✅ **Atenção aos detalhes** (incluindo itens sutis como acessibilidade e testes)
- ✅ **Capacidade de seguir instruções**

---

## Pontos Extras (Opcionais)

Se você quiser demonstrar conhecimento adicional, pode implementar:

1. **Teste unitário adicional** cobrindo regra de negócio específica
2. **Teste de integração** validando fluxo completo (server fetch → render client)
3. **Navegação por teclado** nos elementos interativos
4. **Acessibilidade avançada** (landmarks completos, labels detalhados, ARIA states)
5. **Persistência via cookie** integrada ao React Router (ex: favoritos, preferências)

**Nota:** Pontos extras são opcionais, mas demonstram maturidade técnica.

---

## Dúvidas

Utilize a documentação do [React Router](https://reactrouter.com/home) em caso de dúvidas.

Se encontrar algum bloqueio técnico ou dúvida sobre o escopo, documente no arquivo SOLUCAO.md suas considerações e decisões tomadas.

Boa sorte! 🚀
