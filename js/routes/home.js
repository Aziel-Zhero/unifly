// js/routes/home.js

export default async function initHome() {
  // Captura os botões APÓS o HTML ter sido injetado no DOM
  const btnCadastro = document.getElementById('btnCadastro');
  const btnQrReader = document.getElementById('btnQrReader');

  if (!btnCadastro || !btnQrReader) {
    console.error('Botões da home não encontrados no DOM!');
    return;
  }

  btnCadastro.addEventListener('click', async () => {
    // Importa o módulo da tela cadastro e executa a função
    const { default: goToCadastro } = await import('./cadastro.js');
    goToCadastro();
  });

  btnQrReader.addEventListener('click', async () => {
    const { default: goToQR } = await import('./qr.js');
    goToQR();
  });
}
