function mudarTema() {
  document.body.classList.toggle("escuro");

  const botao = document.getElementById("botaoTema");

  if (document.body.classList.contains("escuro")) {
    botao.textContent = "☀️ Tema";
  } else {
    botao.textContent = "🌙 Tema";
  }
}
function saudacao() {
  const nome = document.getElementById("nome").value;
  const agora = new Date();

  const dataHora = agora.toLocaleString("pt-BR");
  const hora = agora.getHours();

  if (nome == "") {
    return false;
  }
  if (hora >= 6 && hora < 12) {
    alert("Bom dia " + nome + "!\nData e horário: " + dataHora);
  } else if (hora >= 12 && hora < 18) {
    alert("Boa tarde " + nome + "!\nData e horário: " + dataHora);
  } else {
    alert("Boa noite " + nome + "!\nData e horário: " + dataHora);
  }
}
function validarFormulario() {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const dataNascimento = document.getElementById("dataNascimento").value;
  const uf = document.getElementById("selecaoUF").value;
  const sexo = document.querySelector('input[name="sexo"]:checked');

  if (
    nome === "" ||
    email === "" ||
    senha === "" ||
    dataNascimento === "" ||
    uf === "" ||
    !sexo
  ) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  alert("Formulário enviado com sucesso!");
  window.location.href = "inicio.html";
}
