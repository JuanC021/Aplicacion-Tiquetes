
const mongoose = require('mongoose');
require("dotenv").config(); 


const paisSchema = new mongoose.Schema({
    name: String, 
    code: String
});

const Pais = mongoose.model('pais', paisSchema);



module.exports = Pais;
