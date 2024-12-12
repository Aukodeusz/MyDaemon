const express = require('express');
const app = express();
const AnimalsController = require('./controllers/AnimalsController');

app.use(express.json());
app.use('/animals', AnimalsController);

// Trasa dla root "/"
app.get('/', (req, res) => {
  res.send(`
    <h1>Witamy w AnimalsExpress API!</h1>
    <p>Możesz wyszukać informacje o zwierzętach, korzystając z następujących endpointów:</p>
    <ul>
      <li><strong>GET /animals</strong> - Pobierz wszystkie zwierzęta</li>
      <li><strong>GET /animals/:id</strong> - Pobierz zwierzę według ID</li>
      <li><strong>GET /animals/endangered</strong> - Pobierz zagrożone zwierzęta</li>
      <li><strong>GET /animals/habitat/:habitat</strong> - Pobierz zwierzęta według środowiska naturalnego</li>
      <li><strong>GET /animals/species?species=speciesName</strong> - Pobierz zwierzęta według gatunku</li>
    </ul>
  `);
});

const port = 3001;
app.listen(port, () => {
  console.log(`AnimalsExpress API running on http://localhost:${port}`);
});

module.exports = app;
