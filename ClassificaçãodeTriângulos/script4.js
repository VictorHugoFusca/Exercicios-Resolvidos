document.getElementById('trianguloForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const lado1 = parseFloat(document.getElementById('lado1').value);
    const lado2 = parseFloat(document.getElementById('lado2').value);
    const lado3 = parseFloat(document.getElementById('lado3').value);

    if (isNaN(lado1) || isNaN(lado2) || isNaN(lado3) || lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
        document.getElementById('resultado').innerText = "Por favor, digite valores válidos para os lados do triângulo!";
    } else {
        const tipoTriangulo = classificarTriangulo(lado1, lado2, lado3);
        document.getElementById('resultado').innerText = `O triângulo é classificado como: ${tipoTriangulo}`;
    }
});

function classificarTriangulo(lado1, lado2, lado3) {
    if (lado1 === lado2 && lado2 === lado3) {
        return "Triângulo Equilátero";
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        return "Triângulo Isósceles";
    } else {
        return "Triângulo Escaleno";
    }
}
