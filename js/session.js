// js/session.js

const API_URL = 'http://192.168.30.26:3333';

export async function loginUsuario(nome, senha) {
  const response = await fetch(`${API_URL}/session`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: nome, password: senha })
  });

  if (!response.ok) throw new Error('Falha no login');

  const data = await response.json();
  localStorage.setItem('token', data.token);
  return data.token;
}

export function getToken() {
  return localStorage.getItem('token');
}

export function isAutenticado() {
  return !!localStorage.getItem('token');
}

export function logoutUsuario() {
  localStorage.removeItem('token');
}
