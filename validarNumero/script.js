function validarNumero(){
    let numero = document.getElementById("numeroInput").value;
    let textoDeSaida;
    if(numero > 0){
        textoDeSaida = "O número é maior que zero"
        document.getElementById("saidaValidacao").innerText = textoDeSaida;
    } else if(numero < 0){
        textoDeSaida = "O número é menor que zero"
        document.getElementById("saidaValidacao").innerText = textoDeSaida;
    } else{
        textoDeSaida = "O número é igual a zero"
        document.getElementById("saidaValidacao").innerText = textoDeSaida;
    }
}