import { ico } from '../icons.js';
import { api } from '../api.js';
import { $app, setSession, go } from '../utils.js';

export function renderLogin() {
  $app.innerHTML = `<div class="login"><form class="card" id="f" novalidate>
    <div class="pin ok" style="background:var(--primary-soft);border:0">${ico('chk')}</div>
    <h1>Presença Digital</h1><p class="muted"><i>Chamada automática por proximidade</i></p>
    <label for="e">E-mail</label><input id="e" type="email" autocomplete="username" placeholder="aluno@exemplo.com">
    <label for="s">Senha</label><input id="s" type="password" autocomplete="current-password" placeholder="mínimo 8 caracteres">
    <div class="err" id="err" role="alert"></div>
    <button class="btn" style="width:100%;margin-top:18px">Entrar</button>
    <p class="muted" style="margin-top:14px">Demonstração (mock): aluno@exemplo.com ou professor@exemplo.com, qualquer senha com 8+ caracteres.</p>
  </form></div>`;
  $app.querySelector('#f').onsubmit = async ev => {
    ev.preventDefault();
    const btn = ev.target.querySelector('.btn'); btn.disabled = true;
    try {
      setSession(await api.login($app.querySelector('#e').value, $app.querySelector('#s').value));
      go(''); window.dispatchEvent(new Event('pd:nav'));
    } catch (e) { $app.querySelector('#err').textContent = e.message; btn.disabled = false; }
  };
}
