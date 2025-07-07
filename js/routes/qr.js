// js/routes/qr.js
export default async function goToQR() {
  const app = document.getElementById('app');
  const html = await fetch('/components/qr-reader.html');
  app.innerHTML = await html.text();

  document.getElementById('btnVoltarMain').addEventListener('click', async () => {
    const home = await fetch('/components/home.html');
    app.innerHTML = await home.text();
    const { default: init } = await import('./home.js');
    init(); // reativa botões
  });
}
