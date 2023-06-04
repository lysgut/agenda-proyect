const express = require('express');
const router = express.Router();
const eventosController = require('../controllers/myController');

// Ruta para leer todos los eventos
router.get('/eventos', eventosController.getEventos);

// Ruta para obtener un evento por su ID
router.get('/eventos/:id', eventosController.getEventoById);

// Ruta para crear un nuevo evento
router.post('/eventos', eventosController.createEvento);

// Ruta para renderizar la vista de edición de un evento
router.get('/eventos/:id/editar', eventosController.renderEditarEvento);

// Ruta para actualizar un evento existente
router.post('/eventos/:id/editar', eventosController.updateEvento);

// Ruta para eliminar un evento
router.post('/eventos/:id/eliminar', eventosController.deleteEvento);

module.exports = router;