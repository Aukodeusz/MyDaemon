const express = require('express');
const router = express.Router();
const AnimalsService = require('../services/AnimalsService');

// Pobierz wszystkie zwierzęta
router.get('/', async (req, res) => {
    try {
        const animals = await AnimalsService.getAllAnimals();
        res.json(animals);
    } catch (error) {
        res.status(500).json({ message: 'Wystąpił błąd podczas pobierania zwierząt.' });
    }
});

// Pobierz zwierzę według ID
router.get('/:id', async (req, res) => {
    try {
        const animal = await AnimalsService.getAnimalById(req.params.id);
        res.json(animal);
    } catch (error) {
        res.status(500).json({ message: 'Wystąpił błąd podczas pobierania zwierzęcia.' });
    }
});

// Pobierz zagrożone zwierzęta
router.get('/endangered', async (req, res) => {
    try {
        const animals = await AnimalsService.getEndangeredAnimals();
        res.json(animals);
    } catch (error) {
        res.status(500).json({ message: 'Wystąpił błąd podczas pobierania zagrożonych zwierząt.' });
    }
});

// Pobierz zwierzęta według środowiska naturalnego
router.get('/habitat/:habitat', async (req, res) => {
    try {
        const animals = await AnimalsService.getAnimalsByHabitat(req.params.habitat);
        res.json(animals);
    } catch (error) {
        res.status(500).json({ message: 'Wystąpił błąd podczas pobierania zwierząt według środowiska.' });
    }
});

// Pobierz zwierzęta według gatunku
router.get('/species', async (req, res) => {
    try {
        const animals = await AnimalsService.getAnimalsBySpecies(req.query.species);
        res.json(animals);
    } catch (error) {
        res.status(500).json({ message: 'Wystąpił błąd podczas pobierania zwierząt według gatunku.' });
    }
});

// Dodaj nowe zwierzę
router.post('/', async (req, res) => {
    try {
        const newAnimal = await AnimalsService.addAnimal(req.body);
        res.status(201).json(newAnimal);
    } catch (error) {
        res.status(500).json({ message: 'Wystąpił błąd podczas dodawania zwierzęcia.' });
    }
});

// Aktualizuj zwierzę według ID
router.put('/:id', async (req, res) => {
    try {
        const updatedAnimal = await AnimalsService.updateAnimal(req.params.id, req.body);
        res.json(updatedAnimal);
    } catch (error) {
        res.status(500).json({ message: 'Wystąpił błąd podczas aktualizacji zwierzęcia.' });
    }
});

// Usuń zwierzę według ID
router.delete('/:id', async (req, res) => {
    try {
        await AnimalsService.deleteAnimal(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Wystąpił błąd podczas usuwania zwierzęcia.' });
    }
});

module.exports = router;
