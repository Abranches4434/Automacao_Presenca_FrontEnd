# Guia de Design — Presença Digital (Mobile e Web)

> Documento para quem faz o front. **Mobile e Web devem seguir exatamente este guia** para parecerem o mesmo produto.
> Fonte da verdade no mobile: `src/theme.ts` e `src/components/ui.tsx`.

## 1. Identidade
- Nome do produto: **Presença Digital** · Slogan: *Chamada automática por proximidade*
- Estilo: limpo, cartões brancos sobre fundo azul-acinzentado claro, cantos bem arredondados, azul institucional.

## 2. Cores (use só estas)
| Nome | Hex | Onde usar |
|---|---|---|
| **primary** | `#0061a1` | Botões principais, ícone "marcado", barras, números de destaque |
| **primaryDark** | `#174d78` | Cabeçalhos, tela de login (fundo) |
| **accent** | `#4295d1` | Detalhes: ícones, barra de progresso, setas, borda tracejada |
| primarySoft | `#E8F2FA` | Fundos suaves (ícones, etiqueta "Presente", trilha da barra) |
| onPrimarySoft | `#BFDDF2` | Texto secundário sobre fundo azul |
| bg | `#F4F8FB` | Fundo das telas |
| card | `#FFFFFF` | Cartões |
| text | `#10283B` | Texto principal |
| muted | `#5F7385` | Texto secundário |
| border | `#DCE6EE` | Bordas de campos |

**Cores de status (só para etiquetas e alertas):**
| Status | Fundo | Texto |
|---|---|---|
| Presente | `#E8F2FA` | `#0061a1` |
| Falta | `#FDE8E8` | `#C62828` |
| Manual | `#FFF1D6` | `#B26A00` |

Não inventar outras cores. Verde não é usado.

## 3. Tipografia
- Mobile usa a fonte padrão do sistema. Na web use `font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;`
| Uso | Tamanho | Peso |
|---|---|---|
| Título de tela / nome do usuário | 22–24 px | 800 |
| Título do login | 30 px | 800 |
| Seção ("Minhas disciplinas") | 18 px | 700 |
| Título de cartão | 15–16 px | 700 |
| Texto comum | 15 px | 400 |
| Texto secundário / legenda | 12–13 px | 400–600 |

## 4. Formas e espaços
- Raios: pequeno **10 px** (campos) · médio **16 px** (cartões, botões) · grande **24 px** (cartão do login) · cabeçalho: cantos de baixo **28 px**.
- Sombra do cartão: `0 4px 10px rgba(23, 77, 120, 0.12)`.
- Espaço: margem lateral das telas **16 px** · padding do cartão **16 px** · espaço entre cartões **10–12 px**.

## 5. Ícone de presença (marcador de check-in)
Usar o conjunto **Material Design Icons**. Nunca usar Bluetooth na interface.
| Estado | Ícone | Aparência |
|---|---|---|
| Presença **não registrada** | `map-marker-outline` | Círculo `#E8F2FA` com borda tracejada `#4295d1`, ícone `#4295d1` |
| Procurando a sala | `map-marker-radius` | Igual ao não registrado |
| Presença **registrada** | `map-marker-check` | Cartão azul `#0061a1`, círculo branco, ícone `#0061a1` |
Em listas: círculo azul (`#0061a1`) com ícone branco = presente · círculo `#E8F2FA` com ícone cinza = falta.

## 6. Componentes
| Componente | Regra |
|---|---|
| **Card** | Fundo branco, raio 16, padding 16, sombra padrão |
| **Botão primary** | Fundo `#0061a1`, texto branco, raio 16, altura ~48, texto 16/700 |
| **Botão outline** | Transparente, borda 1.5 px `#0061a1`, texto `#0061a1` |
| **Botão danger** | Fundo `#FDE8E8`, texto `#C62828` (ex.: "Fechar chamada") |
| **Campo (input)** | Fundo branco, borda 1 px `#DCE6EE`, raio 10, label acima (13/600, `muted`) |
| **Badge (etiqueta)** | Pílula (raio total), texto 12/700, cores da tabela de status |
| **Cabeçalho** | Fundo `#174d78`, texto branco, subtítulo `#BFDDF2`, cantos de baixo 28 px |
| **Barra de frequência** | Altura 8, trilha `#E8F2FA`, preenchimento `#4295d1` |
| **Cartão de estatística** | Número 22/800 em `#0061a1` + legenda 12 `muted` (faltas em `#C62828`) |

## 7. Regras de exibição
- **Todo registro de presença mostra o dia e a hora exata (com segundos).** Formato: `05/11/2026` e `19:03:12`. Hora da aula: `19:00`.
- Falta = sem registro: mostrar "Sem registro de presença".
- Frequência em %, com "X/Y aulas".
- Vocabulário fixo: **Presença, Chamada, Pauta, Frequência, Falta, Disciplina, Aula, Matriculados.**

## 8. Telas existentes no mobile (referência para a web)
| Tela | Conteúdo |
|---|---|
| Login | Logo (marcador), título, e-mail, senha, botão Entrar |
| Aluno — início | Cartão de presença (marcada/desmarcada) + lista de disciplinas com frequência |
| Aluno — disciplina | Estatísticas + todos os registros (dia, hora da aula, hora do registro, status) |
| Professor — início | Aulas de hoje, abrir/fechar chamada, token ao vivo |
| Professor — pauta | Presentes/ausentes/matriculados + lista completa de alunos com status e hora |

## 9. Tokens prontos para a web (copiar e colar)
```css
:root {
  --primary: #0061a1;  --primary-dark: #174d78;  --accent: #4295d1;
  --primary-soft: #E8F2FA;  --on-primary-soft: #BFDDF2;
  --bg: #F4F8FB;  --card: #FFFFFF;  --text: #10283B;  --muted: #5F7385;  --border: #DCE6EE;
  --danger: #C62828;  --danger-soft: #FDE8E8;  --warning: #B26A00;  --warning-soft: #FFF1D6;
  --radius-sm: 10px;  --radius-md: 16px;  --radius-lg: 24px;
  --shadow: 0 4px 10px rgba(23, 77, 120, 0.12);
  --font: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
}
```

## 10. Checklist antes de entregar uma tela
- [ ] Só usa as cores deste guia
- [ ] Cartões com raio 16 e sombra padrão
- [ ] Ícone de presença é o marcador (nunca Bluetooth)
- [ ] Todo registro mostra dia **e** hora exata
- [ ] Mesmos nomes (Presença, Pauta, Frequência…)
