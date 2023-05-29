const mongoose = require("mongoose");
const app = require("./app");
const dotenv = require("dotenv");
const Evento = require("./models/Evento.js")

dotenv.config({ path: "./config.env" });
const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD);

mongoose.set('strictQuery', false);
mongoose.connect(DB, {
useNewUrlParser: true,

})
.then(() => {
//console.log(con.connections);
console.log("Conectado a la base de datos correctamente");
})
.catch(() => {
console.log("no se pudo conectar a la base de datos")

});


var Eventos;

Evento.find({}, (err, eventos) => {
    Eventos = eventos;
if (err) {
console.error("Error al obtener los eventos:", err);
return;
}
else {console.log("Eventos:", eventos);
}
});
module.exports = Eventos;




const port = 1225
app.listen(port, () => {
console.log(`Servidor corriendo en el puerto ${port} correctamente`);
});






