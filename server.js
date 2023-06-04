const mongoose = require("mongoose");
const app = require("./app");
const dotenv = require("dotenv");
const Evento = require("./models/Evento");

dotenv.config({ path: "./config.env" });

// Obtener la URL de la base de datos de las variables de entorno
const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD);

mongoose.set('strictQuery', false);

// Conectar a la base de datos utilizando Mongoose
mongoose.connect(DB, {
    useNewUrlParser: true,
})
.then(() => {
    console.log("Conectado a la base de datos correctamente");
})
.catch(() => {
    console.log("No se pudo conectar a la base de datos");
});

// Obtener todos los eventos al iniciar la aplicación
Evento.find({}, (err, eventos) => {
    if (err) {
        console.error("Error al obtener los eventos:", err);
        return;
    } else {
        console.log("Eventos:", eventos);

        // Agrega esta línea para pasar los eventos al contexto de la vista
        app.locals.eventos = eventos;
    }
});

const port = 1221;
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port} correctamente`);
});