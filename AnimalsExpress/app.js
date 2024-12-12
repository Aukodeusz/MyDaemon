const express = require('express');
const app = express();
const port = 3000;
const AnimalsController = require('./controllers/AnimalsController');

app.use(express.json());
app.use('/animals', AnimalsController);

app.listen(port, () => {
  console.log(`AnimalsExpress API running on http://localhost:${port}`);
});
