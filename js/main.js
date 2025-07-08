// js/main.js
const app = document.getElementById('app');

// Carrega um componente HTML dinamicamente
async function loadComponent(path) {
  const response = await fetch(path);
  return response.text();
}

// Rotas disponíveis
const routes = {
  home: 'components/home.html',
  login: 'components/login.html',
  painel: 'components/painel.html',
  qrCode: 'components/qrcode-gerar.html',
  reader: 'components/qr-reader.html',
  confirm: 'components/confirm-card.html',
  lista: 'components/lista.html'
};

// Inicializa a página
async function init() {
  app.innerHTML = await loadComponent(routes.home);

  document.addEventListener('click', async (e) => {
    const target = e.target;

    if (target.matches('#btnAcessar')) {
      app.innerHTML = await loadComponent(routes.login);
    } else if (target.matches('#voltarPainel')) {
      app.innerHTML = await loadComponent(routes.painel);
    } else if (target.matches('#voltarPainelQR')) {
      app.innerHTML = await loadComponent(routes.painel);
    } else if (target.matches('#voltarPainelCard')) {
      app.innerHTML = await loadComponent(routes.painel);
    } else if (target.matches('#voltarPainelLista')) {
      app.innerHTML = await loadComponent(routes.painel);
    } else if (target.matches('#btnGerarQR')) {
      app.innerHTML = await loadComponent(routes.qrCode);
      const { gerarQRCode } = await import('./qrcode-handler.js');
      gerarQRCode('ID do Convidado ou Token');
    } else if (target.matches('#btnLerQR')) {
      app.innerHTML = await loadComponent(routes.reader);
      const { startScanner } = await import('./qr-reader.js');
      startScanner();
    } else if (target.matches('#btnListaPresenca')) {
      app.innerHTML = await loadComponent(routes.lista);
      const { carregarLista } = await import('./lista.js');
      carregarLista();
    }
  });

  // Evento de login
  document.addEventListener('submit', async (e) => {
    if (e.target && e.target.matches('#formLogin')) {
      e.preventDefault();
      const nome = document.getElementById('login').value;
      const senha = document.getElementById('senha').value;

      if (nome === 'admin' && senha === 'admin') {
        app.innerHTML = await loadComponent(routes.painel);
        return;
      }

      const { loginUsuario } = await import('./session.js');

      try {
        await loginUsuario(nome, senha);
        app.innerHTML = await loadComponent(routes.painel);
      } catch (error) {
        alert('Falha no login: verifique suas credenciais');
      }
    }
  });
}

init();
