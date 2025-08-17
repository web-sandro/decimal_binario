function decimalParaBinario() {
  let decimalInput = document.getElementById("decimal");
  let binarioInput = document.getElementById("binario");
  let resultado = document.getElementById("resultado");
  let passos = document.getElementById("passos");

  let decimal = decimalInput.value;

  if (decimal === "" || isNaN(decimal)) {
    binarioInput.value = "";
    resultado.innerHTML = "Digite um valor decimal válido.";
    passos.innerHTML = "";
    return;
  }

  let n = parseInt(decimal);
  let binario = "";
  let etapas = [];

  // Mostrar as divisões sucessivas
  while (n > 0) {
    let resto = n % 2;
    etapas.push(`${n} ÷ 2 = ${Math.floor(n / 2)} (resto ${resto})`);
    binario = resto + binario;
    n = Math.floor(n / 2);
  }

  binarioInput.value = binario || "0";
  resultado.innerHTML = `Decimal: <strong>${decimal}</strong> → Binário: <strong>${binario || "0"}</strong>`;

   // Adiciona linha final com o resultado
  etapas.push(`<br><strong>Resultado final: ( ${decimal} )₁₀ → ( ${binario  || "0"} )₂ </strong>`);

  passos.innerHTML = "<strong>Passos da conversão Decimal → Binário:</strong><br>" +
    etapas.join("<br>");
}


function binarioParaDecimal() {
  let decimalInput = document.getElementById("decimal");
  let binarioInput = document.getElementById("binario");
  let resultado = document.getElementById("resultado");
  let passos = document.getElementById("passos");

  let binario = binarioInput.value.trim();

  if (binario === "" || !/^[0-1]+$/.test(binario)) {
    decimalInput.value = "";
    resultado.innerHTML = "Digite um valor binário válido (0 ou 1).";
    passos.innerHTML = "";
    return;
  }

  let decimal = 0;
  let etapas = [];

  let binarioReverso = binario.split("").reverse();

  binarioReverso.forEach((bit, index) => {
    let valor = parseInt(bit) * Math.pow(2, index);
    etapas.push(`${bit} × 2^${index} = ${valor}`);
    decimal += valor;
  });

  decimalInput.value = decimal;
  resultado.innerHTML = `Binário: <strong>${binario}</strong> → Decimal: <strong>${decimal}</strong>`;

   // Adiciona linha final com o resultado
  etapas.push(`<br><strong>Resultado final: ( ${binario} )₂ → ( ${decimal} )₁₀</strong>`);

  passos.innerHTML = "<strong>Passos da conversão Binário → Decimal:</strong><br>" +
    etapas.join("<br>");
}

