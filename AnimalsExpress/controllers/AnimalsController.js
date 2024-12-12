const express = require('express');
const router = express.Router();
const AnimalsService = require('../services/AnimalsService');

router.get('/', async (req, res) => res.json(await AnimalsService.getAllAnimals()));
router.get('/:id', async (req, res) => res.json(await AnimalsService.getAnimalById(req.params.id)));
router.get('/endangered', async (req, res) => res.json(await AnimalsService.getEndangeredAnimals()));
router.get('/habitat/:habitat', async (req, res) => res.json(await AnimalsService.getAnimalsByHabitat(req.params.habitat)));
router.get('/species', async (req, res) => res.json(await AnimalsService.getAnimalsBySpecies(req.query.species)));
router.post('/', async (req, res) => res.status(201).json(await AnimalsService.addAnimal(req.body)));
router.put('/:id', async (req, res) => res.json(await AnimalsService.updateAnimal(req.params.id, req.body)));
router.delete('/:id', async (req, res) => { await AnimalsService.deleteAnimal(req.params.id); res.status(204).send(); });

module.exports = router;
