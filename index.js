function obterValor() {
    var valorNome = document.getElementById("nome").value;
    var valorAltura = document.getElementById("altura").value;
    var valorPeso = document.getElementById("peso").value;

    var calculo = valorPeso / (valorAltura * valorAltura);
    var IMC_arredondado = Math.ceil(calculo);

    var texto = "Nome: " + valorNome + "\nIMC: " + IMC_arredondado;
    document.getElementById("resultado").value = texto;
}