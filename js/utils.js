export const $app = document.getElementById('app');
export const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
export const badge = s => s==='P' ? '<span class="badge b-p">Presente</span>'
  : s==='M' ? '<span class="badge b-m">Manual</span>' : '<span class="badge b-f">Falta</span>';
export const freq = d => {
  const t = d.aulas.length, p = d.aulas.filter(a => a[3] !== 'F').length;
  return { t, p, f:t-p, pct: t ? Math.round(p/t*100) : null };
};
export const newToken = () => String(Math.floor(100000 + Math.random()*900000));
export const go = h => { location.hash = h; };

// Estado compartilhado
export const state = { session: JSON.parse(sessionStorage.getItem('pd_session') || 'null'), chamadas:{}, registrado:false, quando:'', tick:null };
export const setSession = s => {
  state.session = s;
  s ? sessionStorage.setItem('pd_session', JSON.stringify(s)) : sessionStorage.removeItem('pd_session');
};
