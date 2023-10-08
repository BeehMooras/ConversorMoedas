var valorInserido = 0;

function Converter() {
  var valorInserido = parseInt(document.getElementById("valor").value);

  var moeda = document.getElementsByName("moedaConverter");
  for (var i = 0; i < moeda.length; i++) {
    if (moeda[i].checked) {
      console.log("Escolheu: " + moeda[i].value);
      var valorMoeda = parseInt(moeda[i].value);
      console.log(valorMoeda);
      definirMoeda(valorMoeda);
    }
  }
}
function definirMoeda(valorMoeda) {
  if (valorMoeda == 1) {
    console.log("convirta dolar");
    converterDolar();
  } else if (valorMoeda == 2) {
    console.log("convirta euro");
    converterEuro();
  } else if (valorMoeda == 3) {
    console.log("convirta bitcoin");
    converterBitCoin();
  }
}

function converterDolar() {
  var valorRecebido = parseInt(document.getElementById("valor").value);
  var valorFinal = valorRecebido / 5.51;
  console.log(valorFinal);
  var impressao = document.getElementById("resultado");
  impressao.innerHTML = valorFinal.toFixed(2) + " U$";
}
function converterEuro() {
  var valorRecebido = parseInt(document.getElementById("valor").value);
  var valorFinal = valorRecebido / 6.38;
  console.log(valorFinal);
  var impressao = document.getElementById("resultado");
  impressao.innerHTML = valorFinal.toFixed(2) + " €$";
}
function converterBitCoin() {
  var valorRecebido = parseInt(document.getElementById("valor").value);
  var valorFinal = valorRecebido * 0.0000033;
  console.log(valorFinal);
  var impressao = document.getElementById("resultado");
  impressao.innerHTML = valorFinal + " ₿$";
}