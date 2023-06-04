const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Definir el esquema de mongoose para el modelo de evento
const EventoSchema = new Schema({
    asunto: {
        type: String, 
        require :true
    },
    prioridad: {
        type: Number,
        require :true
    },
    descript: {
        type: String,
        require :true
    },
    fecha_hora: {
        type: Date,
        require :true
    }
});

const Evento = mongoose.model('Evento', EventoSchema);

module.exports = Evento;
