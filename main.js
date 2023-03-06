    let writing = document.getElementsByClassName(".miNombre") = str => {
        let arrFromStr = str.split('');
        let i = 0;
        let printStr = setInterval(function() {
            document.body.innerHTML += arrFromStr[i];
            i++;
            if (i === arrFromStr.length) {
                clearInterval(printStr);
            }
        }, 400);
    };
    writing("Gabriel Marzioli");

    function mostrarForm() {

        let formu = document.getElementById("contacto");

        formu.classList.replace('containerForm', 'mostrarForm');
    }
    let cambiarClase = document.querySelectorAll('.cambiarClase');
    for (const i of cambiarClase) {
        i.addEventListener('click', function() {
            mostrarForm();
        });
    }