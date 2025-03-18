// Crear un array para almacenar los nombres de los amigos ingresados
const amigos = [];

function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); // Eliminar espacios en blanco antes y después

    // Validar la entrada: No permitir nombres vacíos
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Verificar si el nombre ya está en la lista
    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return; // No agregar el nombre si ya existe
    }

    // Agregar el nombre al array de amigos
    amigos.push(nombre);

    // Limpiar el campo de entrada
    input.value = "";

    // Mostrar la lista actualizada en la interfaz
    mostrarAmigos();
}

function mostrarAmigos() {
    // Obtener la lista HTML
    const lista = document.getElementById("listaAmigos");

    // Limpiar la lista para evitar duplicados en la interfaz
    lista.innerHTML = "";

    // Recorrer el array y agregar cada nombre como un <li>
    for (let i = 0; i < amigos.length; i++) {
        const item = document.createElement("li"); // Crear <li>
        item.textContent = amigos[i]; // Asignar el nombre
        lista.appendChild(item); // Agregar a la lista
    }
}

function sortearAmigo() {
    // Validar que haya amigos en el array
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    // Generar un índice aleatorio dentro del rango del array
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar SOLO el amigo sorteado en la lista
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista
    const item = document.createElement("li");
    item.textContent = `🎉 ${amigoSorteado}`;
    lista.appendChild(item);

    // También mostrar el resultado en un párrafo
    document.getElementById("resultado").innerHTML = `🎉 El amigo sorteado es: <strong>${amigoSorteado}</strong>`;
}
