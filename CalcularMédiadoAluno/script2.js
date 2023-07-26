document.getElementById('calcularMediaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        document.getElementById('resultado').innerText = "Por favor, digite notas válidas!";
    } else {
        const media = (nota1 + nota2 + nota3) / 3;
        document.getElementById('resultado').innerText = `A média do aluno é: ${media.toFixed(2)}`;
    }
});
