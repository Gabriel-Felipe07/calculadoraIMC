function obterValor() {
    var valorNome = document.getElementById("nome").value;
    var valorAltura = document.getElementById("altura").value;
    var valorPeso = document.getElementById("peso").value;

    var calculo = valorPeso / (valorAltura * valorAltura);
    var IMC_arredondado = Math.ceil(calculo);
    var resultado = "";

    if(document.getElementById('sexoM').checked){
        if(IMC_arredondado < 20){
            resultado = "Abaixo do Normal";
        }else if(IMC_arredondado >= 20 && IMC_arredondado <= 24.9){
            resultado = "Normal";
        }else if(IMC_arredondado >= 25 && IMC_arredondado <= 29.9){
            resultado = "Obesidade Leve";
        }else if(IMC_arredondado >= 30 && IMC_arredondado <= 39.9){
            resultado = "Obesidade Moderada";
        }else if(IMC_arredondado > 39.9){
            resultado = "Obesidade Mórbida";
        }
    }
    if(document.getElementById('sexoF').checked){
        if(IMC_arredondado < 19){
            resultado = "Abaixo do Normal";
        }else if(IMC_arredondado >= 19 && IMC_arredondado <= 23.9){
            resultado = "Normal";
        }else if(IMC_arredondado >= 24 && IMC_arredondado <= 28.9){
            resultado = "Obesidade Leve";
        }else if(IMC_arredondado >= 29 && IMC_arredondado <= 38.9){
            resultado = "Obesidade Moderada";
        }else if(IMC_arredondado > 38.9){
            resultado = "Obesidade Mórbida";
        }
    }

    var texto = "Nome: " + valorNome + "\nIMC: " + IMC_arredondado + "\nResultado: " + resultado;
    document.getElementById("resultado").value = texto;
}