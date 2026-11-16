import { API_BASE, USE_MOCK } from './config.js';
import { MOCK } from './mock.js';

// Camada de acesso a dados. Só `disciplinas` tem endpoint real no backend.
export const api = {
  async login(email, senha) { // MOCK: sem endpoint de autenticação no backend
    await new Promise(r => setTimeout(r, 250));
    const u = MOCK.usuarios[email.trim().toLowerCase()];
    if (!u || senha.length < 8) throw new Error('E-mail ou senha inválidos.');
    return { email, ...u };
  },
  async disciplinas() {
    if (USE_MOCK) return MOCK.disciplinas;
    // REAL: GET /disciplinas -> Page<DisciplinaShortResponse>; não traz registros de presença
    const r = await fetch(API_BASE + '/disciplinas');
    if (!r.ok) throw new Error('Falha ao carregar disciplinas');
    const j = await r.json();
    return j.content.map(d => ({ id:d.id, codigo:d.codigo, nome:d.nome, cargaHoraria:d.cargaHoraria, aulas:[] }));
  },
  async aulasHoje() { return MOCK.aulasHoje; }, // MOCK
  async pauta() { return MOCK.alunos; }         // MOCK
};
