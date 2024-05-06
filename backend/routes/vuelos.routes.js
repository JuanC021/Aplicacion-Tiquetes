const express = require('express');
const router = express.Router();
const ticketsControl = require('../controllers/vuelosControllers');

router

.get('/paises', ticketsControl.obtenerPaises)
.post('/boletos', ticketsControl.guardarVuelo);

module.exports = router;
