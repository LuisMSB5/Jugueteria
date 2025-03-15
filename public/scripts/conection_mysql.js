const formulario = document.querySelector('#form');

//agregando las variables de los botones del formulario

const eliminar_cliente = getElementById('eliminar_cliente');
const agregar_cliente = document.querySelector('#agregar_cliente');

//funciones de los botones

eliminar_cliente.addEventListener('click', () => {

    submitData('/eliminar_cliente');

});


function submitData(url){

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    fetch(url, {

        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(data),

    })
    .then(response => response.json())
    .then(data => {

        console.log("Exito: ", data);
        alert('datos guardados');

    })
    .catch((error) => {

        console.error('Error', error);

    })

}

