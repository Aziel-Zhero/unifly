# Unifly 🎟️

**Unifly** é uma plataforma leve e elegante para controle de presença em eventos Unimed, substituindo soluções como Sympla de forma responsiva e eficiente.

---

## 🚀 Funcionalidades

### Para Administradores
- Login via credenciais fixas (ex: `admin` / `admin`)
- Leitor de QR Code com câmera
- Lista de convidados em tempo real (GET `/convidados`)
- Controle de presença com leitura de códigos

### Para Convidados
- Login com credenciais (POST `/session`)
- Geração de QR Code pessoal
- Visualização de credencial com nome, tipo e evento

---

## 🌐 Tecnologias
- HTML5 + TailwindCSS + JavaScript
- GSAP para animações suaves
- Leitura de QR Code com `html5-qrcode`
- API Backend via `192.168.30.26:3333`

---

## 📁 Estrutura de Pastas

```
├── index.html
├── js/
│   ├── main.js
│   ├── session.js
│   ├── qrcode-handler.js
│   ├── qr-reader.js
│   ├── lista.js
│   ├── gsapTransitions.js
│   └── routes/
│       ├── home.js
│       ├── login.js
│       └── cadastro.js
├── components/
    ├── home.html
    ├── login.html
    ├── painel.html
    ├── confirm-card.html
    ├── qrcode-gerar.html
    ├── qr-reader.html
    └── lista.html
```

---

## 🗒️ Comandos Git Bash

```bash
git init
git remote add origin https://github.com/Aziel-Zhero/unifly.git
git add .
git commit -m "Iniciando projeto Unifly"
git branch -M main
git push -u origin main
```

---

## 🌐 URL da API (ambiente local)
- Login: `POST http://192.168.30.26:3333/session`
- Lista de convidados: `GET http://192.168.30.26:3333/convidados?id=1`

---

Desenvolvido com honra por **Lord Zhero** 👑
