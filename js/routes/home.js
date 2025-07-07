// js/routes/home.js
export default async function initHome() {
  const btnCadastro = document.getElementById('btnCadastro');
  const btnQrReader = document.getElementById('btnQrReader');

  if (!btnCadastro || !btnQrReader) {
    console.error("❌ Botões não encontrados na Home. Verifique os IDs.");
    return;
  }

  btnCadastro.addEventListener('click', async () => {
    const { default: goToCadastro } = await import('./cadastro.js');
    goToCadastro();
  });

  btnQrReader.addEventListener('click', async () => {
    const { default: goToQR } = await import('./qr.js');
    goToQR();
  });
}
