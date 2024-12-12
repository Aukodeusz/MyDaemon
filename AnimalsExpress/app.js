// Importowanie wymaganych modułów
const express = require('express');
const app = express();
const AnimalsController = require('./controllers/AnimalsController');

// Middleware ustawiający aplikację do parsowania JSON
app.use(express.json());

// Ustawienie tras dla endpointu /animals
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

// Eksportowanie aplikacji dla innych modułów, np. bin/www
module.exports = app;
