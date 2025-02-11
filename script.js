const universidades = {
    "pontificia universidad católica del perú": "Cato",
    "universidad científica del sur": "Ucsur",
    "universidad esan": "Esan",
    "universidad señor de sipán": "Uss",
    "universidad de lima": "Ulima",
    "universidad peruana de ciencias aplicadas": "UPC",
    "universidad privada del norte": "Upn",
    "universidad césar vallejo": "Ucv",
    "universidad de ingeniería y tecnología": "Utec",
    "universidad tecnológica del perú": "Utp",
    "universidad de piura": "Upiura",
    "universidad de san martín de porres": "Usmp",
    "universidad nacional tecnológica de lima sur": "Untels"
};
function normalizarTexto(texto) {
    return texto
        .toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Elimina tildes
        .replace(/\buniversidad\b/g, "") // Elimina la palabra "universidad"
        .trim();
}
// Función para mostrar sugerencias mientras el usuario escribe
function mostrarSugerencias() {
    let input = document.getElementById("buscadorUniversidad").value.toLowerCase();
    let sugerenciasDiv = document.getElementById("sugerencias");

    // Limpiar sugerencias anteriores
    sugerenciasDiv.innerHTML = "";

    // Si el input está vacío, no mostrar nada
    if (input === "") return;

    let coincidencias = Object.keys(universidades).filter(uni => uni.includes(input));

    if (coincidencias.length > 0) {
        coincidencias.forEach(uni => {
            let boton = document.createElement("button");
            boton.className = "list-group-item list-group-item-action";
            boton.textContent = uni;
            boton.onclick = () => abrirModal(universidades[uni]);
            sugerenciasDiv.appendChild(boton);
        });
    } else {
        let mensaje = document.createElement("div");
        mensaje.className = "list-group-item text-muted";
        mensaje.textContent = "No encontramos esta universidad.";
        sugerenciasDiv.appendChild(mensaje);
    }
}

// Función para abrir el modal de la universidad seleccionada
function abrirModal(modalID) {
    let modal = new bootstrap.Modal(document.getElementById(modalID));
    modal.show();
}


