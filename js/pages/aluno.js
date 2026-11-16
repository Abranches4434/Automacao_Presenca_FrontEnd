import { ico } from '../icons.js';
import { api } from '../api.js';
import { $app, esc, badge, freq, state, go } from '../utils.js';
import { layout } from '../ui/layout.js';

export async function pageAlunoHome() {
  const ds = await api.disciplinas();
  const ok = state.registrado;
  const lista = ds.map(d => { const f = freq(d); return `<div class="card click" data-go="disciplina/${d.id}">
    <div class="row between"><div class="title">${esc(d.nome)}</div><span class="muted">${esc(d.codigo)}</span></div>
    <div class="muted" style="margin-top:4px">Frequência ${f.pct===null?'—':f.pct+'%'} · ${f.p}/${f.t} aulas</div>
    <div class="bar"><i style="width:${f.pct||0}%"></i></div></div>`; }).join('');
  layout('Olá, ' + state.session.nome.split(' ')[0], 'Sua presença de hoje', `
    <div class="card ${ok?'done':''}"><div class="row"><div class="pin ${ok?'ok':''}">${ico(ok?'chk':'out')}</div>
      <div class="grow"><div class="title">${ok?'Presença registrada':'Presença não registrada'}</div>
      <div class="muted" style="${ok?'color:var(--on-primary-soft)':''}">${ok?esc(state.quando):'Aproxime-se da sala para registrar'}</div></div>
      ${ok ? '' : '<button class="btn sm" id="reg">Registrar</button>'}</div></div>
    <h2 class="sec">Minhas disciplinas</h2><div class="grid cols">${lista}</div>`, '');
  const r = $app.querySelector('#reg');
  if (r) r.onclick = () => { // MOCK: registro real depende de endpoint inexistente
    const n = new Date(), p = x => String(x).padStart(2,'0');
    state.registrado = true;
    state.quando = `${p(n.getDate())}/${p(n.getMonth()+1)}/${n.getFullYear()} às ${p(n.getHours())}:${p(n.getMinutes())}:${p(n.getSeconds())}`;
    pageAlunoHome();
  };
  $app.querySelectorAll('.card.click').forEach(c => c.onclick = () => go(c.dataset.go));
}

export async function pageAlunoDisciplina(id) {
  const d = (await api.disciplinas()).find(x => x.id === id);
  if (!d) return go('');
  const f = freq(d);
  const rows = d.aulas.map(a => `<tr><td>${a[0]}</td><td>${a[1]}</td><td>${a[2] || 'Sem registro de presença'}</td><td>${badge(a[3])}</td></tr>`).join('')
    || '<tr><td colspan="4" class="muted">Sem aulas registradas.</td></tr>';
  layout(d.nome, `${d.codigo} · ${d.cargaHoraria} h`, `
    <div class="stats"><div class="card stat"><b>${f.pct===null?'—':f.pct+'%'}</b><span>Frequência</span></div>
    <div class="card stat"><b>${f.p}/${f.t}</b><span>Aulas</span></div><div class="card stat f"><b>${f.f}</b><span>Faltas</span></div></div>
    <h2 class="sec">Histórico de presenças</h2><div class="card tw"><table class="tbl"><thead><tr><th>Dia</th><th>Hora da aula</th><th>Hora do registro</th><th>Status</th></tr></thead><tbody>${rows}</tbody></table></div>`, '', '');
}
