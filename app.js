const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head><title>Mi App Docker</title></head>
      <body style="font-family: sans-serif; text-align: center; margin-top: 80px;">
        <h1>¡Hola desde Docker! 🐳</h1>
        <p>Esta aplicación Node.js está corriendo dentro de un contenedor.</p>
        <p>Hora del servidor: ${new Date().toLocaleString()}</p>
      </body>
    </html>
  `);
});

app.get('/salud', (req, res) => {
  res.json({ estado: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
