function notasValidas(n1, n2) {
  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    return { valida: false, mensagem: "Preencha as duas notas." };
  }

  if (n1 < 0 || n1 > 10 || n2 < 0 || n2 > 10) {
    return { valida: false, mensagem: "Digite notas entre 0 e 10." };
  }

  return { valida: true, mensagem: "" };
}

function calcularMedia() {
  const n1 = parseFloat(document.getElementById("nota1").value);
  const n2 = parseFloat(document.getElementById("nota2").value);
  const resultado = document.getElementById("resultado");

  const verificacao = notasValidas(n1, n2);
  if (!verificacao.valida) {
    resultado.textContent = verificacao.mensagem;
    resultado.style.color = "#dc2626";
    return;
  }

  const media = (n1 + n2) / 2;
  const aprovado = media >= 6;
  const status = aprovado ? "Aprovado" : "Em recuperação";

  resultado.textContent = `Média: ${media.toFixed(1)} — ${status}`;
  resultado.style.color = aprovado ? "#16a34a" : "#d97706";
}