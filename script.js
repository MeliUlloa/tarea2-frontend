const boton = document.getElementById("boton");
const spinner = document.getElementById("spinner");
let girando = false;


boton.addEventListener('click', function() {
    if (girando) {
       
        spinner.classList.remove('spinnerVisible');
        spinner.classList.add('spinnerOculto');
        boton.textContent = 'Girar';
    } else {
        
        spinner.classList.remove('spinnerOculto');
        spinner.classList.add('spinnerVisible');
        boton.textContent = 'Parar';
    }
    girando = !girando;
});

