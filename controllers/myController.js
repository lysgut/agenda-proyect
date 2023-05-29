

const OneModel = require("../models/Evento");
const moment = require('moment');
const Eventos = require("../server.js")
//const Eventos = require("../server.js")
//Ejemplo de respuesta a una petición de tipo GET
exports.inicio = (req, res) => {
    res.status(200).render('index', {Eventos});
    };