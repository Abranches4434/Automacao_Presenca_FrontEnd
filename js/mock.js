// MOCK: o backend NÃO possui login, aulas, chamada, token, registros de presença nem matrícula→disciplina.
// Formato das aulas: [dia, hora da aula, hora do registro (com segundos) | null, status P|F|M]
export const MOCK = {
  usuarios: {
    'aluno@exemplo.com': { role:'aluno', nome:'Ana Souza' },
    'professor@exemplo.com': { role:'professor', nome:'Prof. Carlos Lima' }
  },
  disciplinas: [
    { id:'d1', codigo:'ADS101', nome:'Engenharia de Software', cargaHoraria:80, aulas:[
      ['29/10/2026','19:00','19:03:12','P'],['05/11/2026','19:00','19:01:48','P'],['12/11/2026','19:00',null,'F']] },
    { id:'d2', codigo:'ADS102', nome:'Banco de Dados', cargaHoraria:60, aulas:[
      ['30/10/2026','21:00','21:02:05','P'],['06/11/2026','21:00','21:09:40','M'],['13/11/2026','21:00','21:00:57','P']] },
    { id:'d3', codigo:'ADS103', nome:'Redes de Computadores', cargaHoraria:60, aulas:[
      ['02/11/2026','19:00','19:04:31','P'],['09/11/2026','19:00',null,'F'],['16/11/2026','19:00',null,'F']] }
  ],
  aulasHoje: [
    { id:'a1', disciplina:'Engenharia de Software', hora:'19:00', sala:'Sala 204' },
    { id:'a2', disciplina:'Banco de Dados', hora:'21:00', sala:'Sala 108' }
  ],
  alunos: [['Ana Souza','19:03:12','P'],['Bruno Alves','19:01:05','P'],['Carla Dias',null,'F'],['Diego Reis','19:12:40','M'],['Elisa Prado','19:00:22','P']]
};
