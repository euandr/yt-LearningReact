# Sistema de Gerenciamento de Tarefas

## Etapa 1

Desenvolva uma API para gerenciamento de tarefas pessoais utilizando FastAPI.

A aplicação deve permitir que usuários **criem**, consultem, **atualizem** e **removam** tarefas. Cada tarefa deve possuir um identificador único, um título, descrição e um status indicando se ela foi concluída ou não.

O sistema deve oferecer funcionalidades para:

- [X]  Cadastrar novas tarefas.

* [X]  Listar todas as tarefas cadastradas.
* [X]  Consultar uma tarefa específica pelo seu identificador.

  * [X]  implementar cod na mensagem de erro. como 404.
* [X]  Atualizar as informações de uma tarefa existente.
* [X]  Marcar uma tarefa como concluída ou pendente.
* [X]  Excluir tarefas do sistema.

Além das operações básicas de CRUD, a API deve retornar códigos HTTP apropriados para cada situação. Por exemplo, ao criar uma tarefa com sucesso, deve retornar um código de criação; ao tentar acessar uma tarefa inexistente, deve retornar um código informando que o recurso não foi encontrado.


| Código | Nome                  | Quando usar                                      |
| ------- | --------------------- | ------------------------------------------------ |
| **200** | OK                    | Requisição deu certo                           |
| **201** | Created               | Recurso foi criado                               |
| **202** | Accepted              | Requisição aceita para processamento posterior |
| **204** | No Content            | Deu certo, mas sem retornar conteúdo<br />      |
| **400** | Bad Request           | Dados da requisição inválidos                 |
| **401** | Unauthorized          | Usuário não autenticado                        |
| **403** | Forbidden             | Usuário autenticado, mas sem permissão         |
| **404** | Not Found             | Recurso não encontrado                          |
| **405** | Method Not Allowed    | Método HTTP não permitido                      |
| **409** | Conflict              | Conflito de dados (ex.: e-mail já cadastrado)   |
| **422** | Unprocessable Entity  | Erro de validação dos dados enviados           |
| **429** | Too Many Requests     | Muitas requisições em pouco tempo              |
| **500** | Internal Server Error | Erro interno da API                              |
| **502** | Bad Gateway           | Erro em servidor intermediário                  |
| **503** | Service Unavailable   | Serviço indisponível                           |

Como funcionalidade opcional, implemente filtros para listar apenas tarefas concluídas ou apenas tarefas pendentes, utilizando parâmetros de consulta na URL.

- [X]  is_completed

> O objetivo deste projeto é praticar os conceitos fundamentais do FastAPI, incluindo definição de rotas, uso de métodos HTTP, validação de dados com Pydantic, tratamento de respostas e organização básica de uma API REST.

## Etapa 2

### Persistência de Dados com SQLite

Atualmente, as tarefas são armazenadas em uma lista Python. Isso faz com que todos os dados sejam perdidos sempre que a aplicação for reiniciada.

Nesta etapa, substitua o armazenamento em memória por um banco de dados SQLite, permitindo que as tarefas permaneçam salvas mesmo após o encerramento da API.

O sistema deve:

* Criar um banco de dados SQLite para armazenar as tarefas.
* Criar uma tabela `tasks` contendo:
  * `id`
  * `title`
  * `description`
  * `is_done`
* Salvar novas tarefas diretamente no banco.
* Buscar tarefas diretamente do banco.
* Atualizar tarefas armazenadas no banco.
* Alterar o status de conclusão de uma tarefa.
* Remover tarefas do banco.
* Manter os mesmos endpoints desenvolvidos na etapa anterior.

### Requisitos

* [X]  Aprender o básico de SQLite.
* [X]  Criar o arquivo do banco de dados.
* [X]  Criar a tabela `tasks`.
* [X]  Conectar o FastAPI ao SQLite.
* [X]  Implementar o endpoint de criação utilizando o banco.
* [X]  Implementar o endpoint de listagem utilizando o banco.
* [X]  Implementar o endpoint de consulta por ID utilizando o banco.
* [X]  Implementar o endpoint de atualização utilizando o banco.
* [X]  Implementar o endpoint de alteração de status utilizando o banco.
* [X]  Implementar o endpoint de exclusão utilizando o banco.
* [X]  Remover a lista `tasks = []`.
* [X]  Remover a variável `proximo_id`.

### Desafio Extra

* [ ]  Impedir títulos vazios.
* [ ]  Adicionar campo `created_at`.
* [ ]  Ordenar tarefas da mais recente para a mais antiga.
* [ ]  Implementar busca por título utilizando query string.

### Objetivo

Praticar a integração entre FastAPI e banco de dados, compreendendo conceitos como:

* Conexão com banco de dados.
* Persistência de dados.
* Operações SQL (`INSERT`, `SELECT`, `UPDATE`, `DELETE`).
* Separação entre API e camada de armazenamento.

> Ao finalizar esta etapa, suas tarefas deixarão de existir apenas na memória da aplicação e passarão a ser armazenadas permanentemente em um banco de dados SQLite. 🚀

## Etapa 3

### Implementação do frontend
