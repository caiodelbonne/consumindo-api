const botaoCep = document.getElementById("btn");
const inputCep = document.getElementById("cep");
const resultado = document.querySelector(".formulario");

botaoCep.addEventListener("click", eventoClick);

function eventoClick(e) {
  e.preventDefault();
  const cep = inputCep.value;
  buscarCep(cep);
}

function buscarCep(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => response.json())
    .then((info) => {
      document.getElementById("rua").value = info.logradouro;
      document.getElementById("bairro").value = info.bairro;
      document.getElementById("cidade").value = info.localidade;
      document.getElementById("uf").value = info.uf;
      document.getElementById("ddd").value = info.ddd;
      //   resultado.innerText = body;
    });
}
