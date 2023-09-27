# Projeto de Gestão de Produtos

Este projeto tem como objetivo a implementação de um sistema de gestão de produtos para a empresa fictícia "Bom Nome".

## Descrição do Problema

A empresa "Bom Nome" necessita de um sistema eficiente para gerenciar seu amplo catálogo de produtos. Esse sistema deve permitir o cadastro, atualização, exclusão e consulta dos produtos de forma intuitiva e organizada. Além disso, é essencial que o sistema forneça métricas e relatórios relevantes para auxiliar na tomada de decisões estratégicas.

## Justificativa para o uso do NestJS e MySQL

### NestJS

O NestJS foi escolhido para este projeto devido às suas características que favorecem a criação de aplicações escaláveis, robustas e bem estruturadas. Algumas razões para a escolha do NestJS incluem:

* **Arquitetura Modular:** Permite organizar a aplicação de forma modular, facilitando a manutenção e expansão do código.
* **Injeção de Dependências:** Facilita a gestão de dependências e testabilidade do código.
* **Uso de TypeScript:** O NestJS é baseado em TypeScript, o que oferece tipos estáticos e, consequentemente, melhor segurança e manutenibilidade do código.
* **Suporte a WebSockets:** Em um cenário futuro, caso a aplicação precise de funcionalidades em tempo real, o NestJS oferece suporte a WebSockets de forma nativa.

### MySQL

O MySQL foi escolhido como banco de dados principal devido às suas características e desempenho, alinhados às necessidades do projeto:

* **Confiabilidade e Estabilidade:** O MySQL é amplamente reconhecido por sua estabilidade e confiabilidade em ambientes de produção.
* **Suporte à Transações:** O MySQL suporta transações ACID (Atomicidade, Consistência, Isolamento, Durabilidade), essenciais para operações seguras e consistentes.
* **Desempenho:** Com o devido tuning e otimização, o MySQL pode fornecer alta performance, fundamental para uma aplicação de gestão de produtos que pode envolver grande volume de dados.

## Tecnologias Utilizadas

* NestJS: Um framework Node.js que fornece uma arquitetura robusta para o desenvolvimento de aplicativos server-side escaláveis.
* MySQL: Um sistema de gerenciamento de banco de dados relacional amplamente utilizado.
* TypeScript: Um superset para JavaScript que adiciona tipagem estática opcional ao código, trazendo mais robustez e clareza.

## Execução do Projeto

Para executar o projeto, siga os passos abaixo:

1. Clone este repositório
2. Instale as dependências: `npm install`
3. Inicie o servidor: `npm start`
4. Acesse a aplicação em [http://localhost:3000](http://localhost:3000/)
