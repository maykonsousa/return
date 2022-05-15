<div align="center">
  <img src="./web/src/assets/nlw.svg" height="100px" alt="Next Controll"/>
</div>

<div align="center">

  # RETURN
  Trata- se uma aplicação que foi desenvolvida na Edição 8 da NLW promovida pela escola de desenvolvimento [Rocketseat](https://www.rocketseat.com.br/). Nesta Edição foi contruído um backend em NodeJS, uma Aplicação Web em ReactJs e um app mobile em React Native.

  No final do treinamento foi proposto uma Milha Extra, onde fomos desafiados a imcrementar esse projeto com features novas.

  Nesse sentido optei por construir uma plataforma de cursos online onde o aluno pode se cadastrar, logar e uma vez logado tem acesso às aulas e também pode fazer solicitações que são enviadas para o email mas são acessíveis e gerenciáveis pelo próprio aluno através da plataforma.



  ![](https://img.shields.io/badge/autor-Maykon%20Sousa-brightgreen)
  ![](https://img.shields.io/badge/Language-Typescript-brightgreen)
  ![](https://img.shields.io/badge/Front--End-ReactJS-brightgreen)
   ![](https://img.shields.io/badge/Back--End-NodeJs-brightgreen)
    ![](https://img.shields.io/badge/Mobile-ReactNative-brightgreen)
  
</div> 

## O que fiz a mais

### Back-End

- **Organização do Código** — O projeeto terminou com muita regra de negócio dentro das Rotas que foram abstraídas para Controllers específicos cada um com sua responsabilidade.  
- **Inclusão da Entidade Users** - Foi Criada uma tabela de usuários para recebeer cadastros na plataforma
- **Autenticação JWT** — Foi implementada uma rota de login que verifica os dados cadastrados e só permite o acesso de rotas privadas caso o usuário esteja autenticado com um Token válido
- **CRUDs Completos** — Foram implenetados mais alguns USE CASES para gerenciar o nosso banco com criação, update, reemoção e busca de registros tanto para a entidade de Solicitação (troque o nome que no curso era Feedback) e Usuários



### Front-End

- **Criação de Novas Páginas** — O Projeto web consitiar na criação de um Widget de envio de mensagem que pudesse ser adionado em outras aplicações e com isso optei por criar uma Plataforma de Cursos online onde o aluno pode se cadastrar na plataforma, Logar, acessar as aulas, enviar novas solicitações, excluir solicitações abertas e fazer o logout para isso, foram criadas as rotas Login(index), SignUp, Dashboad e Requests .  
- **ContextAPI** - O Hook foi utilizado para que as informações oriundas da API fossem compartilhadas e gerenciadas a partir de qualquer ponto da aplicação
- **Rotas privadas** — Algumas rotas sá são acessiveis a partir da verificação de um tokeen válido e se esse token se perder, ou expirar o usuário é redirecionado para a tela de login

### Mobile

Na aplicação mobile não tivemos tempo de implementar nada novo mas vai ficar no radar para atualizarmos no futuro

## Check List

- [x] [BACK-END] - Implementar controllers
- [x] [BACK-END] - Criar model de Usuários
- [x] [BACK-END] - Implementar novos métodos nos repositorios
- [x] [BACK-END] - Implementar autenticação JWT
- [x] [BACK-END] - Injeção de dependências
- [x] [BACK-END] - Criação do Middleware de autenticação
- [ ] [BACK-END] - Implementar testes automatizados
  
***

- [x] [FRONT-END] - Criar página de Login
- [x] [FRONT-END] - Criar página de Cadatro
- [x] [FRONT-END] - Criar Dashboard das aulas
- [x] [FRONT-END] - Criar pagina de solicitações
- [x] [FRONT-END] - Implementar barra de navegação
- [x] [FRONT-END] - Implementar perfil
- [x] [FRONT-END] - Resposividade
- [x] [FRONT-END] - ContextAPI
- [x] [FRONT-END] - Funcionalidade de remover solicitação
- [ ] [FRONT-END] - Funcionalidade de atualizar conta
  


## Regras de negócio

- O cadastro só pode ser feito por usuários do Github
- Dados como Nome email e avatar são recuperados diretamente do github
- Não pode cadastrar usuários com o mesmo email
- Ações como pesquisa, remoção e atualização de requisições só podem ser feitas por usuários logados
- Usuários que não são ADMIN só podem visualizar e remover suas própias solicitações

***

## Links

**website**:[https://return-maykonsousa.vercel.app/](https://return-maykonsousa.vercel.app/) 


***
## CONTATOS

**Portifolio**:[http://maykonsousa.github.io](http://maykonsousa.github.io/)  
**LinkedIn**: [https://www.linkedin.com/in/maykonsousa](https://www.linkedin.com/in/maykonsousa/)  
**Whatsapp**: 61 992943297