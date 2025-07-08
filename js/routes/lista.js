// js/routes/lista.js
export default async function goToLista() {
  const app = document.getElementById('app');
  const res = await fetch('components/lista.html');
  const html = await res.text();
  app.innerHTML = html;

  try {
    const token = sessionStorage.getItem('token');
    if (!token) throw new Error('Token não encontrado');

    const response = await fetch('http://192.168.30.26:3333/convidados', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    const listaEl = document.getElementById('listaPresenca');
    listaEl.innerHTML = '';

    data.result.forEach((convidado) => {
      const item = document.createElement('li');
      item.className = 'bg-white p-4 rounded shadow';
      item.innerText = `#${convidado[0]} - ${convidado[1]} (${convidado[2]})`;
      listaEl.appendChild(item);
    });
  } catch (err) {
    alert('Erro ao carregar convidados: ' + err.message);
  }

  document.getElementById('voltarPainelLista').addEventListener('click', async () => {
    const res = await fetch('components/painel.html');
    app.innerHTML = await res.text();
    const { default: goPainel } = await import('./painel.js');
    goPainel();
  });
}
