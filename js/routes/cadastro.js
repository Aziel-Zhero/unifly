// js/routes/cadastro.js
export default async function goToCadastro() {
  const app = document.getElementById('app');
  const res = await fetch('/components/form.html');
  app.innerHTML = await res.text();

  document.getElementById('cadastroForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const rg = document.getElementById('rg').value;
    const nascimento = document.getElementById('nascimento').value;

    const card = await fetch('/components/confirm-card.html');
    const html = await card.text();
    app.innerHTML = html;

    document.getElementById('nomeConfirmado').innerText = nome;
    document.getElementById('rgConfirmado').innerText = `RG: ${rg}`;
    document.getElementById('dataConfirmado').innerText = `Nascimento: ${nascimento}`;

    const { gerarQRCode } = await import('../qrcode-handler.js');
    gerarQRCode(`Unifly | ${nome} | RG: ${rg} | Nasc: ${nascimento}`);

    document.getElementById('voltarHomeCard').addEventListener('click', async () => {
      const home = await fetch('/components/home.html');
      app.innerHTML = await home.text();
      const { default: init } = await import('./home.js');
      init(); // reativa eventos
    });
  });

  document.getElementById('voltarHome').addEventListener('click', async () => {
    const home = await fetch('/components/home.html');
    app.innerHTML = await home.text();
    const { default: init } = await import('./home.js');
    init(); // reativa eventos
  });
}
