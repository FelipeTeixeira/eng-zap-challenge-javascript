# eng-zap-challenge-javascript
Dado o desafio em (https://olxbr.github.io/cultura/challenges/frontend.html), foi desenvolvido uma SSR com Angular Universal


## Pré-requisitos
https://nodejs.org/en/

https://angular.io/cli


## Install dependencies
`npm install` 


## Produção
Link para acessar aplicação em produção 
http://eng-zap-challenge-javascript.herokuapp.com **ou** https://eng-zap-challenge-javascript.herokuapp.com.
Como a imagem do imóvel está sem HTTPS, o primeiro link está melhor para visualizar.
Para subir as alterações para produção:
`git push heroku  master` (não vai funcionar pois precisa estar com usuário configurado no heroku, apenas o meu está por agora)


## Testes
Para rodar os testes basta executar o seguinte comando:
`npm run test-coverage`


## Development server
Execute `npm run dev:ssr` para rodar o dev server. Navegue até `http://localhost:4200/`. O aplicativo será recarregado automaticamente se você alterar qualquer um dos arquivos de origem.

## Code scaffolding

Execute `ng generate component component-name` para gerar um novo componente. Você também pode usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build
Execute `npm run build:ssr` para buildar o projeto. Os artefatos de construção serão armazenados no diretório `dist/`. Use `--prod` para deploy em produção.
