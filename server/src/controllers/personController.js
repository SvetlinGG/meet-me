import { Router } from "express";
import personService from "../services/personService.js";

const personController = Router();

personController.get('/', async (req, res) => {

    const query = req.query
    const person = await personService.getAll();


    res.json(person);
});

personController.post('/', async (req, res) => {

    const userId = req.user._id;
    const personData = req.body;
    const person = await personService.create(personData, userId);

    res.json(person);
});

personController.get('/:personId',async  (req, res) => {
    const person = personService.getOne(req.params.personId);

    res.json(person)
});

personController.delete('/:personId', async (req, res) => {
    await personService.delete(req.params.personId);

    res.status(204).end();
});

personController.put('/:personId', async (req, res) => {

    const personData = req.body;
    const personId = req.params.personId;
    const updatePerson = await personService.update(personId, personData);

    res.json(updatePerson);
})

export default personController;