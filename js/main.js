// js/main.js

const app = document.getElementById('app');

// Função para carregar um componente HTML
async function loadComponent(path) {
  const response = await fetch(path);
  const html = await response.text();
  app.innerHTML = html;
}

// Inicializa com a Home
async function init() {
  await loadComponent('/components/home.html');

  // Listeners após carregar home
  document.getElementById('btnCadastro').addEventListener('click', async () => {
    const { default: goToCadastro } = await import('./routes/cadastro.js');
    goToCadastro();
  });

  document.getElementById('btnQrReader').addEventListener('click', async () => {
    const { default: goToQR } = await import('./routes/qr.js');
    goToQR();
  });
}

init();

// js/main.js
import init from './routes/home.js';

const app = document.getElementById('app');

async function loadComponent(path) {
  const response = await fetch(path);
  return response.text();
}

async function start() {
  app.innerHTML = await loadComponent('/components/home.html');
  init(); // Ativa botões
}

start();
