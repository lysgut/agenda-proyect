const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventoSchema = new Schema({
  asunto: {
    type: String,
    required: true
 },
  prioridad: {
    type: Number,
    required: true
  },
  color: {
    type: [
      {
        type: Number,
        required: true
      }
    ],
    validate: {
      validator: function(arr) {
        return arr.length === 3;
      },
    },
    required: true
  },
  descript: {
    type: String,
    required: true
  },
  fecha_hora: {
    type: Date,
    required: true
  }
});

const Evento = mongoose.model('Evento', eventoSchema);

module.exports = Evento;
