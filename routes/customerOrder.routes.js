const express = require('express');
const CustomerOrder = require('../models/customerOrder');

const customerOrder = express.Router();

customerOrder.get('/', async(req, res) => {
    try{
        const customerOrder = await CustomerOrder.find().populate('order', 'name', 'surname', 'email', 'phoneNumber');
        return res.status(200).json(customerOrder);
    } catch(err) {
        next(err);
    }
})

customerOrder.get('/:id', async (request, response, next) => {
    try {
        const id = request.params.id;
        const allCustomerOrder = await CustomerOrder.findOne({ id: id });
        return response.status(200).json(allCustomerOrder);
    } catch (error) {
        next(error)
    }
 });

customerOrder.post('/', async (req, res, next) => {
    try {
       
       const newCustomerOrder = new CustomerOrder({...req.body });
       const createCustomerOrder = await newCustomerOrder.save();
        
       return res.status(201).json(createCustomerOrder);
    } catch(err) {
       next(err);
    }
 });



module.exports = customerOrder;
