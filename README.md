# MndShelf API

API REST para fornecer dados de livros, suporte a favoritos, avaliações e comentários para o frontend **MindShelf**.

## Tecnologias
- Node.js + Fastify (ou framework similar)
- PostgreSQL (para persistência de dados)
- CORS habilitado para integração com frontend
- JSON como formato de troca de dados
- Docker

## Como Usar (Localmente)
1. Clone o repositório
````bash
  git clone https://github.com/tatyanepgoncalves/api_mindshelf.git
  cd api_mindshelf
````

2. Instale as dependências: 
````bash
  npm install
````

3. Configurar variáveis de ambiente
````bash
  cp .env.example .env
````

4. Rodar no servidor
````bash
  npm run dev
````


A API estará disponível em``htpp://localhost:3333`` (ou porta definida no .env).

## Estrutura de EndPoints
### 1. Livros
  - ``GET /books`` – Lista todos os livros
  - ``GET /books/:id`` – Retorna detalhes de um livro
  - ``GET /books`/search?q=:query` – Busca por título, autor ou gênero

Exemplo de resposta (GET /books):
````json
[
  {
    "id": "1",
    "title": "O Pequeno Príncipe",
    "author": "Antoine de Saint-Exupéry",
    "genre": "Infantil",
    "cover": "https://link-da-capa.jpg",
    "description": "Sinopse do livro..."
  }
]
````

### 2. Favoritos

- ``GET /users/:userId/favorites`` – Lista livros favoritos do usuário
- ``POST /users/:userId/favorites`` – Adiciona livro aos favoritos
- ``DELETE /users/:userId/favorites/:bookId`` – Remove livro dos favoritos

### 3. Avaliações

- ``GET /books/:id/ratings`` – Lista todas as avaliações de um livro
- ``POST /books/:id/ratings`` – Adiciona avaliação (1 a 5)

Exemplo POST body:
````json
{
  "userId": "123",
  "rating": 5,
  "comment": "Livro incrível!"
}
````

### 4. Comentários
- ``GET /books/:id/comments`` – Lista comentários de um livro
- ``POST /books/:id/comments`` – Adiciona comentário

Exemplo POST body:
```json
{
  "userId": "123",
  "comment": "Muito inspirador!"
}
```

## Autenticação
- JWT (JSON Web Tokens) para proteger endpoints que requerem usuário logado
- **POST /auth/login** – Faz login e retorna token
- **POST /auth/register** – Cria usuário

Exemplo Header para endpoints protegidos:
````json
  Authorization: Bearer <token>
````

## Testes
- Utilizar **Postman** ou **Insomnia** ou **REST Client** para testar endpoints
- Rotas de teste: ``/books``, ``/users/:userId/favorites``
- Endpoints de ``criação/atualização/remover`` podem ser testados com métodos ``POST/PUT/DELETE``