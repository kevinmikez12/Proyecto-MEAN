//rutas para reservacion
const express = require('express');
const router = express.Router();
const reservacionController = require('../controllers/reservacionControllers');
//api/reservacion
router.post('/',reservacionController.crearReservacion);
router.get('/',reservacionController.obtenerReservaciones);
router.put('/:id',reservacionController.actualizarReservacion);
router.get('/:id',reservacionController.obtenerReservacion);
router.delete('/:id',reservacionController.eliminarReservacion);


module.exports = router
