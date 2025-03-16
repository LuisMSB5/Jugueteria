
//accion de varios botones
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mysql = require('mysql2');

const app = express();
const PORT = 3000;

// Middleware para parsear el cuerpo de las solicitudes
app.use(bodyParser.urlencoded({ extended: true }));

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, '../public')));

// Manejar la solicitud POST del formulario
app.post('/submit', (req, res) => {

    //datos del formulario de clientes
    const { codigo_cliente, nombre_cliente, apellido_cliente, email_cliente, telefono_cliente, clientes } = req.body;

    //condicion de clientes
    switch (clientes) {
        case 'guardar':
            //res.send(`<h1 class = 'mensaje_exito'> Enviado con exito </h1>`);
            const agregar = connection.execute(`insert into clientes_datos(codigo_cliente, nombre_cliente, apellido_cliente, telefono_cliente, email_cliente) value ("${codigo_cliente}", "${nombre_cliente}", "${apellido_cliente}", "${email_cliente}", "${telefono_cliente}");`);
            break;
     
     
        case 'eliminar':
            //res.send(`<h1>Datos eliminados</h1><p>Nombre: ${codigo_cliente}</p>`);
            const eliminar = connection.execute(`DELETE FROM clientes_datos WHERE codigo_cliente = '${codigo_cliente}';`);
            console.log("eliminado con exito");
            break;
    }

    //mostrar un mensaje de la base de datos a la web
    const query = "SELECT * FROM clientes_datos";
    connection.query(query, (err, result) => {

        if (err){

            console.error("Error en la muestra de la base de datos");

        }

        console.log(result);

        res.send(`<h1 class = 'mensaje_exito'> ${result[2].nombre_cliente} </h1>`);

    });
    
    //datos del formulario de productos
    const { codigo_productos, nombre_productos, categoria_productos, cantidad_productos, precio_productos, productos } = req.body;

    //condicion de productos
    switch (productos) {
        case 'guardar':
            res.send(`<h1>Datos guardados</h1><p>Nombre: ${codigo_productos}</p>`);
            const agregar = connection.execute(`insert into productos (codigo_producto, nombre_producto, codigo_categoria, cantidad_producto, precio_producto) value ( '${codigo_productos}', '${nombre_productos}', '${categoria_productos}', ${cantidad_productos}, ${precio_productos} );`);
            break;

        case 'eliminar':
            res.send(`<h1>Datos eliminados</h1><p>Nombre: ${nombre_productos}</p>`);
            const eliminar = connection.execute(`DELETE FROM productos WHERE codigo_producto = '${codigo_productos}';`);
            break;
    }


    //datos de categorias

    const { codigo_categoria, nombre_categoria, descripcion_categoria, categorias } = req.body;

    //condicion de categorias
    switch(categorias){
        case "guardar":
            res.send(`<h1>Datos guardados</h1><p>Nombre: ${codigo_categoria}</p>`);
            const agregar = connection.execute(`insert into categorias (codigo_categoria, nombre_categoria, descripcion_categoria) value ('${codigo_categoria}', '${nombre_categoria}', '${descripcion_categoria}');`);
            break;

        case 'eliminar':
            res.send(`<h1>Datos eliminados</h1><p>Nombre: ${nombre_categoria}</p>`);
            const eliminar = connection.execute(`DELETE FROM categorias WHERE codigo_categoria = '${codigo_categoria}';`);
            break;

    }


    //datos de el formulario de ventas
    const { fecha_venta, cliente_venta, producto_venta, cantidad_venta, costo_venta, ventas } = req.body;

    //condiciones de ventas
    switch(ventas){
        case "guardar":
            res.send(`<h1>Datos guardados</h1><p>Nombre: ${fecha_venta}</p>`)
            const query = connection.execute(`insert into venta (codigo_cliente, codigo_producto, cantidad_venta, fecha_venta, total_venta) value ('${cliente_venta}', '${producto_venta}', ${cantidad_venta}, '${fecha_venta}', ${costo_venta});`);
            break;

        case 'eliminar':
            res.send(`<h1>Datos eliminados</h1><p>Nombre: ${costo_venta}</p>`);
            break;

    }

});


//conectar a la base de datos mysql

const connection = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "",
    database: "jugueteria"

});

connection.connect(error => {

    if (error){

        console.log("Error en la conexion de la base de datos");
        return;

    }

    console.log("Conexion a la base de datos de manera exitosa");

});

function mostrar(){

    

}


// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});





//funciones para el funcionamiento de la web

