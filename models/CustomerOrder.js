const mongoose = require('mongoose');

const customerOrderSchema = new mongoose.Schema(
    {
        order: {type: mongoose.Types.ObjectId, ref: 'Order', require: true},
        name: {type: String, require: true},
        surname: {type: String, require: true},
        email: {type: String, require: true},
        phoneNumber: {type: Number, require: true},
        shippingAddress: {type: String, require: true}
    },
    {
        timestamps: true
    }
);

const CustomerOrder = mongoose.model('CustomerOrder', customerOrderSchema);

module.exports = CustomerOrder;