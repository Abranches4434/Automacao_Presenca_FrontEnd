import { api } from '../api.js';
import { $app, esc, badge, state, newToken, go } from '../utils.js';
import { layout } from '../ui/layout.js';

export async function pageProfessorHome() {
  const aulas = await api.aulasHoje();
  const cards = aulas.map(a => { const open = state.chamadas[a.id]; return `<div class="card"><div class="row between"><div><div class="title">${esc(a.disciplina)}</div>
    <div class="muted">${a.hora} · ${esc(a.sala)}</div></div>${open ? '<span class="badge b-p">Chamada aberta</span>' : ''}</div>
    ${open ? `<div class="token" data-token="${a.id}">${open}</div><p class="muted" style="text-align:center">Token ao vivo (renova a cada 30 s)</p>` : ''}
    <div class="row" style="margin-top:12px">${open
      ? `<button class="btn danger grow" data-close="${a.id}">Fechar chamada</button>`
      : `<button class="btn grow" data-open="${a.id}">Abrir chamada</button>`}
      <button class="btn outline" data-go="pauta">Pauta</button></div></div>`; }).join('');
  layout('Aulas de hoje', '16/11/2026', `<div class="grid cols">${cards}</div>`, '');
  $app.querySelectorAll('[data-go]').forEach(b => b.onclick = () => go(b.dataset.go));
  $app.querySelectorAll('[data-open]').forEach(b => b.onclick = () => { state.chamadas[b.dataset.open] = newToken(); pageProfessorHome(); }); // MOCK
  $app.querySelectorAll('[data-close]').forEach(b => b.onclick = () => { delete state.chamadas[b.dataset.close]; pageProfessorHome(); });
  clearInterval(state.tick);
  state.tick = setInterval(() => {
    for (const id in state.chamadas) {
      state.chamadas[id] = newToken();
      const el = $app.querySelector(`[data-token="${id}"]`); if (el) el.textContent = state.chamadas[id];
    }
  }, 30000);
}

export async function pageProfessorPauta() {
  const al = await api.pauta();
  const pres = al.filter(a => a[2] !== 'F').length;
  const rows = al.map(a => `<tr><td>${esc(a[0])}</td><td>${a[1] || 'Sem registro de presença'}</td><td>${badge(a[2])}</td></tr>`).join('');
  layout('Pauta', 'Engenharia de Software · 16/11/2026 · 19:00', `
    <div class="stats"><div class="card stat"><b>${pres}</b><span>Presentes</span></div><div class="card stat f"><b>${al.length-pres}</b><span>Ausentes</span></div><div class="card stat"><b>${al.length}</b><span>Matriculados</span></div></div>
    <h2 class="sec">Alunos</h2><div class="card tw"><table class="tbl"><thead><tr><th>Aluno</th><th>Hora do registro</th><th>Status</th></tr></thead><tbody>${rows}</tbody></table></div>`, 'pauta');
}
