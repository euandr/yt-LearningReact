# Backend 

Projeto criado para consolidar conhecimentos em FastAPI.

Resumo rápido

- API construída com FastAPI
- Banco de dados: SQLite (arquivo `taskAPI/tasks.db`)
- Funcionalidade: CRUD completo para tarefas (criar, listar, obter por id, atualizar, marcar concluída e deletar)

Principais ferramentas

- Python 3
- FastAPI — framework web rápido e moderno
- Uvicorn — servidor ASGI para executar a aplicação
- Pydantic — validação e modelagem de dados
- SQLite — banco de dados leve, usado localmente como arquivo (`taskAPI/tasks.db`)
- python-dotenv — carregamento de variáveis de ambiente a partir de `.env`

Como rodar (Linux)

1. Entre na pasta do backend:

   ```bash
   cd backend/taskAPI
   ```
2. Crie e ative um ambiente virtual:

   ```bash
   python -m venv .venv
   source .venv/bin/activate
   ```
3. Instale dependências:

   ```bash
   pip install -r requirements.txt
   ```
4. Inicie a API:

   ```bash
   uvicorn main:app --reload
   ```
   #### notas

   O projeto contem alguns arquivos .md usados como anotações enquanto estive estudando.
