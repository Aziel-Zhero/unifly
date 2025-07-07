// js/routes/cadastro.js

export default async function goToCadastro() {
  const app = document.getElementById('app');
  const response = await fetch('components/form.html');
  const html = await response.text();
  app.innerHTML = html;

  // Depois de carregar, adiciona eventos do formulário
  document.getElementById('cadastroForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const rg = document.getElementById('rg').value;
    const nascimento = document.getElementById('nascimento').value;

    const res = await fetch('components/confirm-card.html');
    const confirmHtml = await res.text();
    app.innerHTML = confirmHtml;

    document.getElementById('nomeConfirmado').innerText = nome;
    document.getElementById('rgConfirmado').innerText = `RG: ${rg}`;
    document.getElementById('dataConfirmado').innerText = `Nascimento: ${nascimento}`;

    const { gerarQRCode } = await import('../qrcode-handler.js');
    gerarQRCode(`Unifly | ${nome} | RG: ${rg} | Nasc: ${nascimento}`);

    import { animateConfirmCard } from '../gsapAnimations.js';
animateConfirmCard();

    document.getElementById('voltarHomeCard').addEventListener('click', async () => {
      const home = await fetch('components/home.html');
      app.innerHTML = await home.text();
      const { default: initHome } = await import('./home.js');
      initHome();
    });
  });

  // Botão voltar
  document.getElementById('voltarHome').addEventListener('click', async () => {
    const home = await fetch('components/home.html');
    app.innerHTML = await home.text();
    const { default: initHome } = await import('./home.js');
    initHome();
  });
}
