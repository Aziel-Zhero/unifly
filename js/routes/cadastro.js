import { animateConfirmCard } from '../gsapTransitions.js';


export default async function goToCadastro() {
  const app = document.getElementById('app');

  // Carrega o formulário da página de cadastro
  const response = await fetch('components/form.html');
  const html = await response.text();
  app.innerHTML = html;

  // Após injetar, adiciona os eventos no formulário
  const form = document.getElementById('cadastroForm');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const rg = document.getElementById('rg').value.trim();
    const nascimento = document.getElementById('nascimento').value;

    if (!nome || !rg || !nascimento) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    // Carrega o cartão de confirmação
    const res = await fetch('components/confirm-card.html');
    const confirmHtml = await res.text();
    app.innerHTML = confirmHtml;

    // Preenche os dados no cartão
    document.getElementById('nomeConfirmado').innerText = nome;
    document.getElementById('rgConfirmado').innerText = `RG: ${rg}`;
    document.getElementById('dataConfirmado').innerText = `Nascimento: ${nascimento}`;

    // Gera QRCode
    const { gerarQRCode } = await import('../qrcode-handler.js');
    gerarQRCode(`Unifly | ${nome} | RG: ${rg} | Nasc: ${nascimento}`);

    // Executa animação do cartão
    animateConfirmCard();

    // Botão voltar para home no cartão
    const btnVoltar = document.getElementById('voltarHomeCard');
    btnVoltar.addEventListener('click', async () => {
      const homeResp = await fetch('components/home.html');
      app.innerHTML = await homeResp.text();
      const { default: initHome } = await import('./home.js');
      initHome();
    });
  });

  // Botão voltar para home na página do formulário
  const btnVoltarForm = document.getElementById('voltarHome');
  btnVoltarForm.addEventListener('click', async () => {
    const homeResp = await fetch('components/home.html');
    app.innerHTML = await homeResp.text();
    const { default: initHome } = await import('./home.js');
    initHome();
  });
}
