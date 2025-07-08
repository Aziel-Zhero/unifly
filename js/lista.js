// js/lista.js
import { getToken } from './session.js';

export async function carregarLista() {
  const token = getToken();
  const ul = document.getElementById('listaPresenca');
  ul.innerHTML = '<li class="text-center text-gray-500">Carregando...</li>';

  try {
    const response = await fetch('http://192.168.30.26:3333/convidados', {
      headers: { Authorization: `Bearer ${token}` }
    });
    const data = await response.json();

    ul.innerHTML = '';
    data.result.forEach((convidado) => {
      const li = document.createElement('li');
      li.className = 'bg-white p-4 rounded shadow';
      li.innerHTML = `
        <p class="font-bold text-[#007F3E]">${convidado[1]}</p>
        <p class="text-sm text-gray-700">Tipo: ${convidado[2]}</p>
        <p class="text-xs text-gray-400">ID: ${convidado[0]}</p>
      `;
      ul.appendChild(li);
    });
  } catch (error) {
    ul.innerHTML = '<li class="text-center text-red-500">Erro ao carregar lista.</li>';
  }
}
