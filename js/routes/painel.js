// js/routes/painel.js
export default async function goPainel() {
  const app = document.getElementById('app');
  const res = await fetch('components/painel.html');
  const html = await res.text();
  app.innerHTML = html;

  // Botões e rotas
  document.getElementById('btnGerarQR').addEventListener('click', async () => {
    const { default: goQR } = await import('./qrcode.js');
    goQR();
  });

  document.getElementById('btnVerCredencial').addEventListener('click', async () => {
    const { default: goCard } = await import('./card.js');
    goCard();
  });

  document.getElementById('btnLerQR').addEventListener('click', async () => {
    const { default: goReader } = await import('./qr-reader.js');
    goReader();
  });

  document.getElementById('btnListaPresenca').addEventListener('click', async () => {
    const { default: goLista } = await import('./lista.js');
    goLista();
  });
}
