const mongoose = require('mongoose');

const customerOrderSchema = new mongoose.Schema(
    {
        order: {type: mongoose.Types.ObjectId, ref: 'Order', require: true},
        name: {type: mongoose.Types.ObjectId, ref: 'UserData', require: true},
        surname: {type: mongoose.Types.ObjectId, ref: 'UserData', require: true},
        email: {type: mongoose.Types.ObjectId, ref: 'UserData', require: true},
        phoneNumber: {type: mongoose.Types.ObjectId, ref: 'UserData', require: true},
        shippingAddress: {type: String},
        storePickud: {type: mongoose.Types.ObjectId, ref: 'PizzeriaStore'}
    },
    {
        timestamps: true
    }
);

const CustomerOrder = mongoose.model('CustomerOrder', customerOrderSchema);

module.exports = CustomerOrder;