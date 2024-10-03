function appendToDisplay(value) {
    let display = document.getElementById("display");
    let currentValue = display.value;

    if (value === ".") {
        let parts = currentValue.split(/[\+\-\*\/]/);
        let lastPart = parts[parts.length - 1];
        if (lastPart.includes(".")) {
            return;
        }
    }
    display.value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLast() {
    let current = document.getElementById("display").value;
    document.getElementById("display").value = current.slice(0, -1);
}

function calculate() {
    try {
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}
