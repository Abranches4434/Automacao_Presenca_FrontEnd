// Marcadores no estilo Material Design Icons (nunca Bluetooth).
// Para fidelidade total, troque pelos paths oficiais de @mdi/js:
// mdiMapMarkerOutline, mdiMapMarkerRadius, mdiMapMarkerCheck.
const P = {
  out:'M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 2a5 5 0 0 1 5 5c0 2.2-2.2 6-5 9.7C9.2 15 7 11.2 7 9a5 5 0 0 1 5-5zm0 2.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z',
  rad:'M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 2a5 5 0 0 1 5 5c0 2.2-2.2 6-5 9.7C9.2 15 7 11.2 7 9a5 5 0 0 1 5-5zm0 2.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z',
  chk:'M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm-1.2 11L7.5 9.7l1.4-1.4 1.9 1.9 4.3-4.3 1.4 1.4z'
};
export const ico = k => `<svg viewBox="0 0 24 24"><path d="${P[k]}"/></svg>`;
