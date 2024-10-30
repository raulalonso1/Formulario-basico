document.addEventListener("DOMContentLoaded",function(){

    const textoNota = document.getElementById("nuevaNota");
    const botonAgregarNota = document.getElementById("agregarNota")
    const listaNotas = document.getElementById("notas")


    function agregarNota() {
        let textoNuevaNota = textoNota.value.trim();

        if (textoNuevaNota) {
            let elementoNuevaNota = document.createElement("li");
            elementoNuevaNota.className = "nota";
            elementoNuevaNota.innerHTML = `${textoNuevaNota} <button class="eliminarNota">Eliminar</button>`;

            // Añadir la nota a la página
            listaNotas.appendChild(elementoNuevaNota);
            textoNota.value = "";

            // Añadir evento eliminar nota
            let eliminarButton = elementoNuevaNota.querySelector(".eliminarNota");
            eliminarButton.addEventListener("click", function() {
                listaNotas.removeChild(elementoNuevaNota);
            });
        } else {
            alert("Agrega un texto a la nota");
        }
    }


    botonAgregarNota.addEventListener("click", agregarNota);


    // Evento para permitir agregar nota con la tecla Enter
        textoNota.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                agregarNota();
                event.preventDefault();
            }
        });



});

// Hecho por Raul Alonso Gonzalez
