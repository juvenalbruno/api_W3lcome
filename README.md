# API_W3LCOME

### Teste para vaga em desenvolvedor full stack.

## Tecnologias utilizadas

* NodeJS
* Express
* TypeScript
* TypeOrm
* SQLite

## Executando o projeto:

```bash

yarn install # ou npm install para instalar as dependencias necessarias

yarn dev # ou npm dev

```

## Métodos de requisições:

### GET | POST | PUT | DELETE

```bash 

> Listagem de users (GET)

>> http://localhost:3000/user

```

```bash 

> Criação de user (POST)

>> http://localhost:3000/user

{
    "name": "{string}",
	"email": "{string}",
	"picture_url": "{string}"
}


```

```bash 

> Alteração de Email user (PUT)

>> http://localhost:3000/user/email/{:id}

{
	"email": "{string}",
}

```

```bash 

> Alteração de Picture user (PUT)

>> http://localhost:3000/user/picture/{:id}

{
	"picture_url": "{string}"
}

```

```bash 

> Remoção de user (DELETE)

>> http://localhost:3000/user/{:id}

```

