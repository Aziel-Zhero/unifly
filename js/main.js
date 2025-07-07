// js/main.js
import initHome from './routes/home.js';

const app = document.getElementById('app');

async function loadComponent(path) {
  const res = await fetch(path);
  return await res.text();
}

async function start() {
  const html = await loadComponent('components/home.html');
  app.innerHTML = html;

  // Importante: só inicializar os eventos DEPOIS do HTML estar no DOM
  await initHome();
}

start();
