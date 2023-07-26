document.getElementById('converterForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nomeMes = document.getElementById('mes').value;
    const numeroMes = obterNumeroMes(nomeMes);
    document.getElementById('resultado').innerText = `O número do mês ${nomeMes} é: ${numeroMes}`;
});

function obterNumeroMes(nomeMes) {
    switch (nomeMes) {
        case 'janeiro':
            return 1;
        case 'fevereiro':
            return 2;
        case 'marco':
            return 3;
        case 'abril':
            return 4;
        case 'maio':
            return 5;
        case 'junho':
            return 6;
        case 'julho':
            return 7;
        case 'agosto':
            return 8;
        case 'setembro':
            return 9;
        case 'outubro':
            return 10;
        case 'novembro':
            return 11;
        case 'dezembro':
            return 12;
        default:
            return 'Mês inválido';
    }
}
