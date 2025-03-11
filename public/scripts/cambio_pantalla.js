//Declarando las variables

const clientes = document.querySelector(".clientes");
const productos = document.querySelector(".productos");
const categorias = document.querySelector(".categorias");
const ventas = document.querySelector(".ventas");

clientes.style.backgroundColor = "#005af7";
productos.style.backgroundColor = "#00bf63";
categorias.style.backgroundColor = "#d559ff";
ventas.style.backgroundColor = "#ff3131";

const cv = document.querySelector(".clientes_visualizar");
const cm = document.querySelector(".clientes_modificar");

cv.style.display = "block"; 
cm.style.display = "none"; 

const pv = document.querySelector(".productos_visualizar");
const pm = document.querySelector(".productos_modificar");

pv.style.display = "none"; 
pm.style.display = "none";

const ctv = document.querySelector(".categoria_visualizar");
const ctm = document.querySelector(".categoria_modificar");

ctv.style.display = "none";
ctm.style.display = "none";


const vv = document.querySelector(".ventas_visualizar");
const vm = document.querySelector(".ventas_modificar");

vv.style.display = "none";
vm.style.display = "none";

//contadores para los 4 elementos para poder acceder al modo de modificacion
var m1 = 0;
var m2 = 0;
var m3 = 0;
var m4 = 0;

//añadiendo funciones de click que hara aparecer y desaparecer los elementos cuando se pulse en el nav

clientes.addEventListener("click", () =>{

    cv.style.display = "block";
    pv.style.display = "none";
    ctv.style.display = "none";
    vv.style.display = "none";

    //desapareciendo los elementos de modificacion
    cm.style.display = "none";
    pm.style.display = "none";
    ctm.style.display = "none";
    vm.style.display = "none";

    //sumando el contador para poder acceder al modo modificador
    m1++;
    m2 = 0;
    m3 = 0;
    m4 = 0;

    
    //cambio de colores para mejor estetica
    clientes.style.backgroundColor = "#005af7";
    productos.style.backgroundColor = "#00bf63";
    categorias.style.backgroundColor = "#d559ff";
    ventas.style.backgroundColor = "#ff3131";

    //condicion para invocar el modo de modificacion
    if (m1 == 2){

        modificacion_clientes();

    }

})



productos.addEventListener("click", () =>{

    cv.style.display = "none";
    pv.style.display = "block";
    ctv.style.display = "none";
    vv.style.display = "none";

    //desapareciendo los elementos de modificacion
    cm.style.display = "none";
    pm.style.display = "none";
    ctm.style.display = "none";
    vm.style.display = "none";

    //contador para acceder al modo de modificador
    m1 = 0;
    m2++;
    m3 = 0;
    m4 = 0;

    //cambio de colores para mejor estetica
    clientes.style.backgroundColor = "#38b6ff";
    productos.style.backgroundColor = "#006f1f";
    categorias.style.backgroundColor = "#d559ff";
    ventas.style.backgroundColor = "#ff3131";

    //condicion para invocar el modo de modificacion
    if (m2 == 2){

        modificacion_productos();

    }

})


categorias.addEventListener("click", () =>{

    cv.style.display = "none";
    pv.style.display = "none";
    ctv.style.display = "block";
    vv.style.display = "none";
    
    //desapareciendo los elementos de modificacion
    cm.style.display = "none";
    pm.style.display = "none";
    ctm.style.display = "none";
    vm.style.display = "none";

    //contador ppara acceder al modo de modificador
    m1 = 0;
    m2 = 0;
    m3++;
    m4 = 0;
    
    //cambio de colores para mejor estetica
    clientes.style.backgroundColor = "#38b6ff";
    productos.style.backgroundColor = "#00bf63";
    categorias.style.backgroundColor = "#7a00a2";
    ventas.style.backgroundColor = "#ff3131";

    //condicion para invocar el modo de modificacion
    if (m3 == 2){

        modificacion_categorias();

    }

})


ventas.addEventListener("click", () =>{

    cv.style.display = "none";
    pv.style.display = "none";
    ctv.style.display = "none";
    vv.style.display = "block";

    //desapareciendo los elementos de modificacion
    cm.style.display = "none";
    pm.style.display = "none";
    ctm.style.display = "none";
    vm.style.display = "none";

    //contador para acceder al modo de modificador
    m1 = 0;
    m2 = 0;
    m3 = 0;
    m4++;

    //cambio de colores para mejor estetica
    clientes.style.backgroundColor = "#38b6ff";
    productos.style.backgroundColor = "#00bf63";
    categorias.style.backgroundColor = "#d559ff";
    ventas.style.backgroundColor = "#b21a1a";

    //condicion para invocar el modo de modificacion
    if (m4 == 2){

        modificacion_ventas();

    }

})



//esta funciones permite que cuando en el nav se presione 2 veces el botn de manera consecutiva, este en vez de mostrar la pantalla de visualizar, cambia a modificar

//clientes modificar

function modificacion_clientes(){

    cv.style.display = "none";
    cm.style.display = "block";

}


//productos modificar
function modificacion_productos(){

    pv.style.display = "none";
    pm.style.display = "block";
   
}


function modificacion_categorias(){

    ctv.style.display = "none";
    ctm.style.display = "block";

}

function modificacion_ventas(){

    vv.style.display = "none";
    vm.style.display = "block";

}

