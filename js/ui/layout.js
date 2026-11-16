import { USE_MOCK } from '../config.js';
import { ico } from '../icons.js';
import { $app, esc, state, setSession, go } from '../utils.js';

export function layout(title, sub, body, active, back) {
  const { session } = state;
  const items = session.role === 'aluno' ? [['','Início']] : [['','Aulas de hoje'],['pauta','Pauta']];
  const links = items.map(([h,l]) => `<button class="nav ${active===h?'on':''}" data-go="${h}">${l}</button>`).join('');
  $app.innerHTML = `<div class="shell">
    <aside class="side"><div class="brand"><div class="pin ok" style="width:40px;height:40px">${ico('chk')}</div><div>Presença Digital<br><small>Chamada automática por proximidade</small></div></div>${links}
      <div style="flex:1"></div><small>${esc(session.nome)}</small><button class="nav" id="out">Sair</button></aside>
    <div class="main">${USE_MOCK ? '<div class="mock">DADOS MOCK — o backend ainda não expõe presença/chamada</div>' : ''}
      <header class="head"><div class="wrap">${back ? `<button class="back" data-go="${back}">← Voltar</button>` : ''}<h1>${esc(title)}</h1><p>${esc(sub)}</p></div></header>
      <div class="wrap">${body}</div>
      <nav class="tabs">${links}<button class="nav" id="out2">Sair</button></nav></div></div>`;
  $app.querySelectorAll('[data-go]').forEach(b => b.onclick = () => go(b.dataset.go));
  const out = () => { clearInterval(state.tick); setSession(null); go(''); window.dispatchEvent(new Event('pd:nav')); };
  $app.querySelector('#out').onclick = out;
  $app.querySelector('#out2').onclick = out;
}
