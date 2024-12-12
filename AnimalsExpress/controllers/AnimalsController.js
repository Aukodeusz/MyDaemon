const express = require('express');
const router = express.Router();
const AnimalsService = require('../services/AnimalsService');

router.get('/', async (req, res) => {
    const animals = await AnimalsService.getAllAnimals();
    res.json(animals);
});

router.get('/:id', async (req, res) => {
    const animal = await AnimalsService.getAnimalById(req.params.id);
    res.json(animal);
});

router.get('/endangered', async (req, res) => {
    const animals = await AnimalsService.getEndangeredAnimals();
    res.json(animals);
});

router.get('/habitat/:habitat', async (req, res) => {
    const animals = await AnimalsService.getAnimalsByHabitat(req.params.habitat);
    res.json(animals);
});

router.get('/species', async (req, res) => {
    const animals = await AnimalsService.getAnimalsBySpecies(req.query.species);
    res.json(animals);
});

router.post('/', async (req, res) => {
    const newAnimal = await AnimalsService.addAnimal(req.body);
    res.status(201).json(newAnimal);
});

router.put('/:id', async (req, res) => {
    const updatedAnimal = await AnimalsService.updateAnimal(req.params.id, req.body);
    res.json(updatedAnimal);
});

router.delete('/:id', async (req, res) => {
    await AnimalsService.deleteAnimal(req.params.id);
    res.status(204).send();
});

module.exports = router;
