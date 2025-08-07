# Angular RxJS Operators Demo

Este projeto Angular demonstra o uso de diversos operadores RxJS de forma simples e didática.

## Operadores Implementados

Atualmente, os seguintes operadores estão disponíveis para visualização através das rotas da aplicação:

- [`/observable`](./src/app/observable): Criação e uso básico de `Observable`.
- [`/of-operator`](./src/app/of-operator): Demonstração do operador `of`.
- [`/map-operator`](./src/app/map-operator): Transformação de valores com `map`.
- [`/tap-operator`](./src/app/tap-operator): Uso de `tap` para efeitos colaterais (debug).
- [`/switch-map-operator`](./src/app/switch-map-operator): Substituição de fluxos com `switchMap`.
- [`/first-operator`](./src/app/first-operator): Substituição de fluxos com `first-operator`.

## Como executar o projeto

1. Instale as dependências:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
ng serve
```

3. Acesse no navegador:

```
http://localhost:4200
```

## Estrutura preparada para novos operadores

O projeto já está estruturado para facilitar a adição de novos operadores. Basta:

1. Criar um novo componente na pasta `app`.
2. Adicionar a rota no `app-routes.ts`.
3. Adicionar o link no menu (caso necessário).

## Objetivo

Este projeto serve como material de estudo para desenvolvedores que desejam aprender e praticar os conceitos fundamentais do RxJS no Angular.

---

Sinta-se à vontade para contribuir!
