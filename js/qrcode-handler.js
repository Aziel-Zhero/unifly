// js/qrcode-handler.js
export function gerarQRCode(conteudo) {
  const div = document.getElementById('qrcode');
  div.innerHTML = "";

  new QRCode(div, {
    text: conteudo,
    width: 128,
    height: 128,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });
}
