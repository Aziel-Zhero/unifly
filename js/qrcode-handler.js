// js/qrcode-handler.js
import QRCode from 'https://cdn.skypack.dev/qrcode';

export function gerarQRCode(dado) {
  const canvas = document.getElementById('qrcode');
  QRCode.toCanvas(canvas, dado, { width: 250 }, function (error) {
    if (error) console.error(error);
  });
}
