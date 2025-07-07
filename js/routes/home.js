// js/routes/home.js
export default async function init() {
  document.getElementById('btnCadastro').addEventListener('click', async () => {
    const { default: goToCadastro } = await import('./cadastro.js');
    goToCadastro();
  });

  document.getElementById('btnQrReader').addEventListener('click', async () => {
    const { default: goToQR } = await import('./qr.js');
    goToQR();
  });
}
