function appendToDisplay(value) {
    const display = document.getElementById('display');
    
    // Verifica si el display muestra "Error", en cuyo caso limpia el display
    if (display.value === "Error") {
        clearDisplay();
    }

    // Evita agregar múltiples puntos decimales en el mismo número
    if (value === '.' && display.value.slice(-1) === '.') {
        return; // Evita añadir otro punto si ya hay uno al final
    }

    // Verifica si ya hay un punto en el número actual
    const lastNumber = display.value.split(/[\+\-\*\/]/).pop(); // Obtiene el último número ingresado
    if (value === '.' && lastNumber.includes('.')) {
        return; // Evita añadir otro punto si ya hay uno en el número actual
    }

    // Agrega el valor al final del contenido actual del display
    display.value += value;
}

function clearDisplay() {
    // Limpia el contenido del display
    document.getElementById('display').value = '';
}

function deleteLast() {
    const display = document.getElementById('display');
    // Elimina el último carácter del display
    display.value = display.value.slice(0, -1);
}

function calculate() {
    const display = document.getElementById('display');
    try {
        // Evalúa la expresión matemática
        display.value = eval(display.value);
    } catch (error) {
        // Si ocurre un error en la evaluación, muestra "Error"
        display.value = 'Error';
    }
}
