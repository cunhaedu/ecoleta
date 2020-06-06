<p align="center">
   <img src=".github/logo.svg"/>
</p>

# Ecoleta

> Projeto desenvolvido durante a nextLevelWeek 1.0

## :construction_worker: Installação

**Você vai precisar ter o [Node.js](https://nodejs.org/en/download/) e [Yarn](https://yarnpkg.com/) instalados no seu computador. Feito isso, você pode clonar o projeto via HTTPS, rodando este comando:** 

```
git clone https://github.com/cunhaedu/nlw.git
```

## :computer: Sobre o Projeto

Ecoleta é uma aplicação que visa ajudar pessoas a encontrarem os pontos de coleta de lixo reciclável mais próximo possível.

<p align="center">
   <img src=".github/ecoleta.svg"/>
</p>

## :runner: Como usar

### Backend

```
# Clone este repositório
$ git clone https://github.com/cunhaedu/nlw.git

# Entre na pasta backend
$ cd backend

# Instale as dependências
$ yarn install

# Rode as migrations
$ yarn knex:migrate

# Rode os seeds
$ yarn knex:seed

# Inicie o servidor
$ yarn dev

# Com isso, a aplicação deverá rodar na porta 3333
```



### Web

```
# Clone este repositório
$ git clone https://github.com/cunhaedu/nlw.git

# Entre na pasta backend
$ cd backend

# Instale as dependências
$ yarn install

# Rode 
$ yarn start

# Com isso a versão web estará rodando na porta 3000
```



### Mobile

```
# Clone este repositório
$ git clone https://github.com/cunhaedu/nlw.git

# Entre na pasta backend
$ cd backend

# Instale as dependências
$ yarn install

# Rode 
$ yarn start

# Feito isso, o Expo vai abrir na porta 19000
# Escaneie o código QR através do aplicativo expo no celular
```



## :rocket:  Tecnologias



Este projeto foi desenvolvido com as seguintes tecnologias:



* [Node.js](https://nodejs.org/en/download/)

* [React](https://pt-br.reactjs.org/)

* [ReactNative]([React Native · A framework for building native apps using React](https://reactnative.dev/))

* [Expo](https://expo.io/)



## :postbox: Faq



**Questão:** O que fazer caso tenha problemas com as fontes no mobile?

**Resposta:** Tente executar o seguinte comando:

```
$ expo install expo-font @expo-google-fonts/ubuntu @expo-google-fonts/roboto
```



## :closed_book: Licença

Released in 2020.

Este projeto está sobre a [Licença MIT](https://github.com/cunhaedu/nlw/tree/master/LICENSE).

Made by [Eduardo Assunção](https://github.com/cunhaedu)
