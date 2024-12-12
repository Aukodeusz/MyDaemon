const fs = require('fs').promises;
const path = require('path');
const dataFilePath = path.join(__dirname, '../data/zoo.json');

async function readData() {
    const data = await fs.readFile(dataFilePath, 'utf-8');
    return JSON.parse(data);
}

async function writeData(data) {
    await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2));
}

class AnimalsService {
    static async getAllAnimals() {
        return await readData();
    }

    static async getAnimalById(id) {
        const animals = await readData();
        return animals.find(animal => animal.id === parseInt(id));
    }

    static async getEndangeredAnimals() {
        const animals = await readData();
        return animals.filter(animal => animal.isEndangered);
    }

    static async getAnimalsByHabitat(habitat) {
        const animals = await readData();
        return animals.filter(animal => animal.habitat.toLowerCase() === habitat.toLowerCase());
    }

    static async getAnimalsBySpecies(species) {
        const animals = await readData();
        return animals.filter(animal => animal.species.toLowerCase() === species.toLowerCase());
    }

    static async addAnimal(newAnimal) {
        const animals = await readData();
        newAnimal.id = animals.length ? animals[animals.length - 1].id + 1 : 1;
        animals.push(newAnimal);
        await writeData(animals);
        return newAnimal;
    }

    static async updateAnimal(id, updatedInfo) {
        const animals = await readData();
        const index = animals.findIndex(animal => animal.id === parseInt(id));
        if (index === -1) return null;
        animals[index] = { ...animals[index], ...updatedInfo };
        await writeData(animals);
        return animals[index];
    }

    static async deleteAnimal(id) {
        let animals = await readData();
        animals = animals.filter(animal => animal.id !== parseInt(id));
        await writeData(animals);
    }
}

module.exports = AnimalsService;
