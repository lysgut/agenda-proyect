const Evento = require("../models/Evento");

// Controlador para renderizar la vista inicial y mostrar todos los eventos
exports.inicio = (req, res) => {
    Evento.find({}, (err, eventos) => {
    if (err) {
        console.error("Error al obtener los eventos:");
        res.status(500).json({ error: "Error al obtener los eventos" });
    } else {
        res.render("index", { eventos: eventos }); // Pasar los eventos a la vista
    }
    });
};

  // Obtener todos los eventos y renderizar la vista 'index'
exports.getEventos = (req, res) => {
    Evento.find({}, (err, eventos) => {
    if (err) {
        console.error("Error al obtener los eventos:");
        res.status(500).json({ error: "Error al obtener los eventos" });
    } else {
        res.render("index", { eventos: eventos }); // Renderizar la vista 'index' con los eventos
    }
    });
};


    // Crear un nuevo evento a partir de los datos proporcionados en el cuerpo de la solicitud
    exports.createEvento = (req, res) => {
    const nuevoEvento = new Evento(req.body);
    nuevoEvento.save((err, evento) => {
        if (err) {
        console.error("Error al crear el evento:");
        res.status(500).json({ error: "Error al crear el evento" });
        } else {
        // Redirigir al usuario a la página principal
        res.redirect("/eventos");
        }
    });
    };

    // Obtener un evento por su ID y devolverlo como respuesta JSON
    exports.getEventoById = (req, res) => {
    const eventoId = req.params.id;
    Evento.findById(eventoId, (err, evento) => {
        if (err) {
        console.error("Error al obtener el evento:");
        res.status(500).json({ error: "Error al obtener el evento" });
        } else {
        res.status(200).json(evento);
        }
    });
    };

    // Renderizar la vista de edición de un evento
    exports.renderEditarEvento = (req, res) => {
    const eventoId = req.params.id;
    Evento.findById(eventoId, (err, evento) => {
        if (err) {
        console.error("Error al obtener el evento:");
        res.status(500).json({ error: "Error al obtener el evento" });
        } else {
        res.render("editarEvento", { evento: evento }); // Renderizar la vista 'editarEvento' con el evento
        }
    });
    };

    // Actualizar un evento existente por su ID con los datos proporcionados en el cuerpo de la solicitud
    exports.updateEvento = (req, res) => {
    const eventoId = req.params.id;
    Evento.findByIdAndUpdate(
        eventoId,
        req.body,
        { new: true },
        (err, evento) => {
        if (err) {
            console.error("Error al actualizar el evento:");
            res.status(500).json({ error: "Error al actualizar el evento" });
        } else {
            // Redirigir al usuario a la página principal
            res.redirect("/eventos");
        }
        }
    );
    };

    // Eliminar un evento existente por su ID
    exports.deleteEvento = (req, res) => {
    const eventoId = req.params.id;
    Evento.findByIdAndRemove(eventoId, (err, evento) => {
        if (err) {
        console.error("Error al eliminar el evento:");
        res.status(500).json({ error: "Error al eliminar el evento" });
        } else {
        // Redirigir al usuario a la página principal
        res.redirect("/eventos");
        }
    });
    };