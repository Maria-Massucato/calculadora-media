function calcularMedia() {
  const n1 = parseFloat(document.getElementById("nota1").value);
  const n2 = parseFloat(document.getElementById("nota2").value);
  const resultado = document.getElementById("resultado");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    resultado.textContent = "Preencha as duas notas.";
    return;
  }

  const media = (n1 + n2) / 2;
  const status = media >= 6 ? "Aprovado" : "Em recuperação";
  resultado.textContent = `Média: ${media.toFixed(1)} — ${status}`;
}