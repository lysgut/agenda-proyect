const mongoose = require("mongoose");
const app = require("./app");
const dotenv = require("dotenv");


dotenv.config({ path: "./config.env" });
const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD);


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

const port = 3000;
//Corremos el servidor en el puerto seleccionado
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port} correctamente`);
});
