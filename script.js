function decimalParaBinario() {
  let decimalInput = document.getElementById("decimal");
  let binarioInput = document.getElementById("binario");
  let resultado = document.getElementById("resultado");
  let passos = document.getElementById("passos");

  let decimalStr = decimalInput.value.trim();

  if (decimalStr === "" || isNaN(decimalStr)) {
    binarioInput.value = "";
    resultado.innerHTML = "Digite um valor decimal válido.";
    passos.innerHTML = "";
    return;
  }

  let [parteInteiraStr, parteFracionariaStr] = decimalStr.split(".");
  let parteInteira = parseInt(parteInteiraStr, 10);
  let parteFracionaria = parteFracionariaStr ? parseFloat("0." + parteFracionariaStr) : 0;

  let etapas = [];

  // ---- Parte inteira ----
  let binInt = "";
  let n = parteInteira;
  while (n > 0) {
    let resto = n % 2;
    etapas.push(`${n} ÷ 2 = ${Math.floor(n / 2)} (resto ${resto})`);
    binInt = resto + binInt;
    n = Math.floor(n / 2);
  }
  if (binInt === "") binInt = "0";

  // ---- Parte fracionária ----
  let binFrac = "";
  let limiteCasas = 8; // até 8 casas no máximo
  let count = 0;
  while (parteFracionaria > 0 && count < limiteCasas) {
    parteFracionaria *= 2;
    let bit = Math.floor(parteFracionaria);
    binFrac += bit;
    etapas.push(`×2 = ${parteFracionaria.toFixed(6)} → bit ${bit}`);
    parteFracionaria -= bit;
    count++;
  }

  let resultadoFinal = binInt + (binFrac ? "." + binFrac : "");
  binarioInput.value = resultadoFinal;

  resultado.innerHTML = `Decimal: <strong>${decimalStr}</strong> → Binário: <strong>${resultadoFinal}</strong>`;
  etapas.push(`<br><strong>Resultado final: ( ${decimalStr} )₁₀ → ( ${resultadoFinal} )₂</strong>`);

  passos.innerHTML = "<strong>Passos da conversão Decimal → Binário:</strong><br>" + etapas.join("<br>");
}

function binarioParaDecimal() {
  let decimalInput = document.getElementById("decimal");
  let binarioInput = document.getElementById("binario");
  let resultado = document.getElementById("resultado");
  let passos = document.getElementById("passos");

  let binario = binarioInput.value.trim();

  if (binario === "" || !/^[01.]+$/.test(binario) || (binario.split('.').length > 2)) {
    decimalInput.value = "";
    resultado.innerHTML = "Digite um valor binário válido (0 e 1, com no máximo um ponto).";
    passos.innerHTML = "";
    return;
  }

  let [parteInteira, parteFracionaria] = binario.split(".");
  parteFracionaria = parteFracionaria || "";

  let etapas = [];
  let decimal = 0;

  // ---- Parte inteira ----
  let binReverso = parteInteira.split("").reverse();
  binReverso.forEach((bit, index) => {
    let valor = parseInt(bit) * Math.pow(2, index);
    etapas.push(`${bit} × 2^${index} = ${valor}`);
    decimal += valor;
  });

  // ---- Parte fracionária ----
  for (let i = 0; i < parteFracionaria.length; i++) {
    let bit = parseInt(parteFracionaria[i]);
    let valor = bit * Math.pow(2, -(i + 1));
    etapas.push(`${bit} × 2^-${i + 1} = ${valor}`);
    decimal += valor;
  }

  let resultadoFinal = decimal.toString();
  decimalInput.value = resultadoFinal;

  resultado.innerHTML = `Binário: <strong>${binario}</strong> → Decimal: <strong>${resultadoFinal}</strong>`;
  etapas.push(`<br><strong>Resultado final: ( ${binario} )₂ → ( ${resultadoFinal} )₁₀</strong>`);

  passos.innerHTML = "<strong>Passos da conversão Binário → Decimal:</strong><br>" + etapas.join("<br>");
}
