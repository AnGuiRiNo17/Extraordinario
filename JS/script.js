// Función para calcular el área o el perímetro de un cuadrado
function calculateSquare(type) {
    // Obtiene el valor ingresado para el lado del cuadrado
    const side = parseFloat(document.getElementById('square-side').value);

    // Verifica si el valor ingresado es válido (positivo y numérico)
    if (!side || side <= 0) {
        alert('Por favor, ingresa una longitud de lado válida.');
        return;
    }

    // Calcula el resultado según el tipo (área o perímetro)
    const result = type === 'area' ? side * side : 4 * side;

    // Muestra el resultado en un mensaje emergente
    alert(`El ${type} del cuadrado es: ${result}`);
}

// Función para calcular el área o el perímetro de un círculo
function calculateCircle(type) {
    // Obtiene el valor ingresado para el radio del círculo
    const radius = parseFloat(document.getElementById('circle-radius').value);

    // Verifica si el valor ingresado es válido (positivo y numérico)
    if (!radius || radius <= 0) {
        alert('Por favor, ingresa un radio válido.');
        return;
    }

    // Calcula el resultado según el tipo (área o perímetro)
    const result = type === 'area' ? Math.PI * radius * radius : 2 * Math.PI * radius;

    // Muestra el resultado en un mensaje emergente
    alert(`El ${type} del círculo es: ${result}`);
}

// Función para calcular el área o el perímetro de un triángulo
function calculateTriangle(type) {
    // Obtiene los valores ingresados para los lados y la base del triángulo
    const side1 = parseFloat(document.getElementById('triangle-side1').value);
    const side2 = parseFloat(document.getElementById('triangle-side2').value);
    const base = parseFloat(document.getElementById('triangle-base').value);
    const height = parseFloat(document.getElementById('triangle-height').value);

    // Si el cálculo es del perímetro
    if (type === 'perimeter') {
        // Verifica si los valores ingresados son válidos
        if (!side1 || !side2 || !base || side1 <= 0 || side2 <= 0 || base <= 0) {
            alert('Por favor, ingresa longitudes válidas para los lados.');
            return;
        }

        // Calcula el perímetro sumando los tres lados
        const perimeter = side1 + side2 + base;

        // Muestra el resultado en un mensaje emergente
        alert(`El perímetro del triángulo es: ${perimeter}`);
    } else {
        // Si el cálculo es del área
        // Verifica si la base y la altura son válidas
        if (!base || !height || base <= 0 || height <= 0) {
            alert('Por favor, ingresa valores válidos para la base y la altura.');
            return;
        }

        // Calcula el área como base * altura / 2
        const area = 0.5 * base * height;

        // Muestra el resultado en un mensaje emergente
        alert(`El área del triángulo es: ${area}`);
    }
}

// Función para reiniciar los campos de entrada
function resetFields(...fields) {
    // Recorre cada ID de campo y lo limpia (establece el valor en vacío)
    fields.forEach(field => document.getElementById(field).value = '');
}
