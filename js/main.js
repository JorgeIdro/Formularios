/* guardamos las clases e id en una variable */
const select = document.querySelector('#select');
const opciones = document.querySelector('#opciones');
const selectContenido = document.querySelector('#select .select-contenido')
const hiddenInput = document.querySelector('#tipoViajero');

// creamos una función tipo flecha para que reaccione a un click y ponga la clase .active
select.addEventListener('click', () => {
    select.classList.toggle('active'); //clase .select
    opciones.classList.toggle('active'); //clase .opciones
})

//para reemplazar el texto y mostrar la opción escogida del usuario
document.querySelectorAll('#opciones > .select-opcion').forEach((opcion) => {
    opcion.addEventListener('click', (e) => {
        e.preventDefault(); //evita que se recargue la pagina
        selectContenido.innerHTML = e.currentTarget.innerHTML // reemplaza el texto
        select.classList.toggle('active'); //quita la clase .active
        opciones.classList.toggle('active');
        hiddenInput.value = e.currentTarget.querySelector('.select-contenido__titulo').innerText; //guarda la opción elegida por el usuario
    }); //la opción que recibe un click va a obtener el evento
}) //cada una de la opciones va a tener su evento