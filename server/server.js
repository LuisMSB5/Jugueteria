const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

//enviar la direccion de el documento html
app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req,res) => {

    res.sendFile(path.join(__dirname, "../public", "index.html"));

});

//inicializar el servidor 
app.listen(port, () => {

    console.log("Servidor Activo");

});