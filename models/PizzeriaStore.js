const mongoose = require('mongoose');

const pizzeriaStoreSchema = new mongoose.Schema(
    {
        name: { type: String, unique: true},
        address: { type: String, require: true },
        picture: String,
    },
    {
        timestamps: true
    }
)

const PizzeriaStore = mongoose.model('PizzeriaStore', pizzeriaStoreSchema);

module.exports = PizzeriaStore;