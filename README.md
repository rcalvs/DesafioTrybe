# Desafio Trybe - FullStack

Esse desafio proposto pela equipe de Carreira da [Trybe](www.betrybe.com) para aperfeiçoar o aprendizado e simular uma entrevista técnica.

O desafio é fullStack, dessa forma, nesse repositório há dois diretórios, um para o FrontEnd e outro para o BackEnd, ambos possuem README proprios para auxilia-lo a rodar o projeto, então inicialmente, basta clonar esse repositório e, dentro de cada pasta, seguir as orientações propostas.

###

## Contexto:
A empresa Ebytr está passando por problemas de produtividade/controle porque as pessoas colaboradoras vêm tendo dificuldade na organização de suas tarefas individuais. Por esse motivo, a diretora de produto Carolina Bigonha decidiu implantar uma nova forma de organizar as tarefas.

Você foi a pessoa contratada para desenvolver um sistema capaz de auxiliar as pessoas colaboradoras a se organizar e ter mais produtividade.

Na Ebytr o time de desenvolvimento utiliza a Stack MERN para criar suas aplicações. Foi combinado com a Ebytr que você utilizará essa mesma Stack para resolver o problema de organização e produtividade da empresa.

## Requisitos técnicos:
- Front-End em React;
- Back-End em NodeJS, com MongoDB;
- Arquitetura em camadas;

## Funcionalidades:
- Visualizar a lista de tarefas;
- Esta lista deve ser ordenável por ordem alfabética, data de criação ou por status;
- Inserir uma nova tarefa na lista;
- Remover uma tarefa da lista;
- Atualizar uma tarefa da lista;
- A tarefa deve possuir um status editável: pendente, em andamento ou pronto;

## Dificuldades encontradas no Desenvolvimento
- Atualizar a ordenação na tela, segundo os logs, ela funciona corretamente porém falta passar a ordem para o visual;
- Inicialmente salvei a Task como um Objeto no MongoDB, isso dificultou na hora da validação;
- A existência de duas chaves únicas para cada Task, a 'key', gerada no FrontEnd e a 'id' criada no BackEnd como retorno do banco, precisaria criar um 'retrabalho' onde atualizaria o valor da key para a id;
- A data, atributo da Task é uma string complexa, faltou formatar para ser mais aprasível e melhor utilizada, principalmente para ser corretamente filtrada;

## Futuras implementações
- Botão de Clear All;
- Opção de editar o 'texto' da Task, atualmente apenas o 'status' é editável