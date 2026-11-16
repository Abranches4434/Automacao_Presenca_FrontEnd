import { state, go } from './utils.js';
import { renderLogin } from './pages/login.js';
import { pageAlunoHome, pageAlunoDisciplina } from './pages/aluno.js';
import { pageProfessorHome, pageProfessorPauta } from './pages/professor.js';

// Controle de acesso: cada perfil só enxerga as próprias rotas.
const routes = {
  aluno:     { '': pageAlunoHome, disciplina: pageAlunoDisciplina },
  professor: { '': pageProfessorHome, pauta: pageProfessorPauta }
};

function nav() {
  clearInterval(state.tick);
  if (!state.session) return renderLogin();
  const [name, arg] = (location.hash.slice(1) || '').split('/');
  const page = routes[state.session.role][name];
  if (!page) return location.hash === '' || location.hash === '#' ? null : go('');
  page(arg);
}
window.addEventListener('hashchange', nav);
window.addEventListener('pd:nav', nav);
nav();
