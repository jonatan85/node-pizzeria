const mongoose = require('mongoose');

const pizzasSchema = new mongoose.Schema(
    {
        name: { type: String, unique: true},
        masa: { type: [String], enum: ["fina", "normal"] },
        tamaño: { type: [String], enum: ["pequeña", "mediana", "familiar"]},
        salsa: {type: [String], enum: ["barbacoa", "carbonara", "tomate", "napolitana"]},
        ingredientes: {type: String},
        price: { type: Number, required: true},
        account: {type: Number},
        picture: String,
    },
    {
        timestamps: true
    }
)

const Pizzas = mongoose.model('Pizzas', pizzasSchema);

module.exports = Pizzas;
