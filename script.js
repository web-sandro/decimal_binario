function decimalParaBinario() {
  let decimalInput = document.getElementById("decimal");
  let binarioInput = document.getElementById("binario");
  let resultado = document.getElementById("resultado");

  let decimal = decimalInput.value;

  if (decimal === "" || isNaN(decimal)) {
    binarioInput.value = "";
    resultado.innerHTML = "Digite um valor decimal válido.";
    return;
  }

  let binario = parseInt(decimal).toString(2);
  binarioInput.value = binario;
  resultado.innerHTML = `Decimal: <strong>${decimal}</strong> → Binário: <strong>${binario}</strong>`;
}

function binarioParaDecimal() {
  let decimalInput = document.getElementById("decimal");
  let binarioInput = document.getElementById("binario");
  let resultado = document.getElementById("resultado");

  let binario = binarioInput.value.trim();

  if (binario === "" || !/^[0-1]+$/.test(binario)) {
    decimalInput.value = "";
    resultado.innerHTML = "Digite um valor binário válido (0 ou 1).";
    return;
  }

  let decimal = parseInt(binario, 2);
  decimalInput.value = decimal;
  resultado.innerHTML = `Binário: <strong>${binario}</strong> → Decimal: <strong>${decimal}</strong>`;
}
