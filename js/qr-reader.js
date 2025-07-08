// js/qr-reader.js
import { getToken } from './session.js';

export async function startScanner() {
  const video = document.getElementById('video');
  const resultBox = document.getElementById('qrResult');

  const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
  video.srcObject = stream;
  video.setAttribute('playsinline', true);
  video.play();

  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  function tick() {
    if (video.readyState === video.HAVE_ENOUGH_DATA) {
      canvas.height = video.videoHeight;
      canvas.width = video.videoWidth;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      const imageData = context.getImageData(0, 0, canvas.width, canvas.height);

      import('https://cdn.jsdelivr.net/npm/jsqr/dist/jsQR.js').then(({ default: jsQR }) => {
        const code = jsQR(imageData.data, imageData.width, imageData.height);
        if (code) {
          fetchConvidado(code.data);
          stream.getTracks().forEach((track) => track.stop());
        } else {
          requestAnimationFrame(tick);
        }
      });
    } else {
      requestAnimationFrame(tick);
    }
  }
  requestAnimationFrame(tick);
}

async function fetchConvidado(id) {
  const token = getToken();
  const res = await fetch(`http://192.168.30.26:3333/convidados?id=${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  const { result } = await res.json();

  const app = document.getElementById('app');
  const html = await (await fetch('components/confirm-card.html')).text();
  app.innerHTML = html;

  document.getElementById('nomeConfirmado').innerText = result[1];
  document.getElementById('tipoConfirmado').innerText = result[2];
  document.getElementById('eventoConfirmado').innerText = 'Evento Unifly';

  document.getElementById('voltarPainelCard').addEventListener('click', async () => {
    const painelHtml = await (await fetch('components/painel.html')).text();
    app.innerHTML = painelHtml;
  });
}
