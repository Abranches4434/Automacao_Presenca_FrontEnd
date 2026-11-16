# Presença Digital — Frontend Web

Frontend estático (HTML + CSS + JS modular, sem build). Segue o `FRONTEND_DESIGN.md`.

## Como rodar
1. Abra esta pasta no VS Code (`File > Open Folder`).
2. Instale a extensão **Live Server** (Ritwick Dey).
3. Clique com o botão direito em `index.html` > **Open with Live Server**.
   (Precisa ser via servidor: módulos ES não funcionam abrindo o arquivo com duplo clique.)

Login de demonstração (mock): `aluno@exemplo.com` ou `professor@exemplo.com`, senha com 8+ caracteres.

## Estrutura
- `css/styles.css` — tokens e componentes do design system
- `js/config.js` — `API_BASE` e `USE_MOCK`
- `js/api.js` — camada de dados (real onde existe endpoint, mock no resto)
- `js/mock.js` — dados fictícios (tudo que o backend ainda não tem)
- `js/ui/layout.js` — cabeçalho, menu lateral, abas mobile
- `js/pages/` — login, aluno, professor
- `js/main.js` — rotas por perfil

## Backend (somente leitura)
Existem: `/usuarios`, `/estudantes`, `/professores`, `/cursos`, `/disciplinas`, `/periodos-letivos` (CRUD paginado).
NÃO existem: login, aulas, chamada, token, registro de presença, matrícula por disciplina — por isso são MOCK.
O backend não configura CORS; ao usar `USE_MOCK = false` as chamadas do navegador serão bloqueadas
até haver CORS no backend ou um proxy.
