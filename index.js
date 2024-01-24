const express = require('express');
const app = express();

app.use((req, res, next) => {
  const clientIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log('IP do Cliente:', clientIP);
  // Aqui você poderia tomar decisões com base no IP ou armazená-lo de acordo com as leis de privacidade aplicáveis.

  next();
});

app.get('/', (req, res) => {
  res.send('Olá, mundo!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
