const express = require('express');
const PizzeriaStore = require('../models/PizzeriaStore.js');
const createError = require('../utils/errors/create-error.js');
const pizzeriaStoreRouter = express.Router();



pizzeriaStoreRouter.get('/', async(req, res, next) => {
    try {
        const pizzeriaStore = await PizzeriaStore.find();
        return res.status(200).json(pizzeriaStore);
    } catch(err) {
        next(err);
    }
});

pizzeriaStoreRouter.get('/:id', async (req, res, next) => {
    const id = req.params.id;
    try {
        const pizzeriaStore = await PizzeriaStore.findById(id);
        if (pizzeriaStore) {
            return res.status(200).json(pizzeriaStore);
        } else {
            next(createError('La pizzeria no existe.', 404));
        }
    } catch (err) {
        next(err);
    }
 });

 pizzeriaStoreRouter.post('/', async(req, res, next) => {
    try{
        const newPizzeriaStore = new PizzeriaStore({ ...req.body});
        const createPizzeriaStore = await newPizzeriaStore.save();
        return res.status(201).json(createPizzeriaStore);
    } catch(err) {
        next(err);
    }
});

pizzeriaStoreRouter.put('/:id', async (req, res, next) => {
    try {
       const id = req.params.id;
       const modifiedPizzeriaStore = new PizzeriaStore({...req.body});
       modifiedPizzeriaStore._id = id;
       const pizzeriaStoreUpdate = await PizzeriaStore.findByIdAndUpdate(
          id,
          modifiedPizzeriaStore,
          {new: true}
       );
       return res.status(200).json(pizzeriaStoreUpdate);
    }catch (err) {
       next(err);
    }
  });

  pizzeriaStoreRouter.delete('/:id', async (req, res, next) => {
    try{  
       const id = req.params.id;
       await PizzeriaStore.findByIdAndDelete(id);
       return res.status(200).json('La pizzeria se ha eliminado correctamente.')
    } catch(err) {
       next(err);
    }
  });



module.exports = pizzeriaStoreRouter;