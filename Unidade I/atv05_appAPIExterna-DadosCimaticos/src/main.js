import "./style.css";
import HgBrasil from "./assets/hgbrasil.png";
import IBGELogo from "./assets/logo_mobile.png";
import heroImg from "./assets/hero.png";

document.querySelector("#app").innerHTML = /*html*/ `
<section id="center">
  <div class="hero">
    <img src="${heroImg}" class="base" width="170" height="179">
    <img src="${HgBrasil}" class="hgbrasil" alt="HG Brasil logo"/>
    <img src="${IBGELogo}" class="ibge" alt="IBGE logo" />
  </div>
  <div>
    <h1>API HG Brasil para Dados Climáticos</h1>
    <p>Obtenha dados de previsão do tempo para uma cidade ou região específica</p>
  </div>

  <div>
    <label for="UF">Insira o nome da Unidade Federativa:</label>
    <select name="uf" id="UF">
      <option value="">Carregando...</option>
    </select>
  </div>

  <div>
    <label for="cidade">Insira o nome da Cidade:</label>
    <select name="cidade" id="cidade">
      <option value="">Selecione um estado primeiro</option>
    </select>
  </div>

  <button id="btn-buscar" type="button" class="btn-class">BUSCAR</button>
  <div id="resultado"></div>
</section>
`;

async function carregarUF() {
  try {
    let resposta = await fetch(
      "https://servicodados.ibge.gov.br/api/v1/localidades/estados",
    );
    let dados = await resposta.json();

    dados.sort((a, b) => a.nome.localeCompare(b.nome));

    let selectUF = document.getElementById("UF");
    selectUF.innerHTML = '<option value="">Selecione um estado...</option>';

    dados.forEach((estado) => {
      let option = document.createElement("option");
      option.value = estado.sigla;
      option.textContent = estado.nome;
      selectUF.appendChild(option);
    });
  } catch (err) {
    console.error(err);
  }
}

carregarUF();

document.getElementById("UF").addEventListener("change", (evento) => {
  let ufSelecionada = evento.target.value;

  document.getElementById("resultado").innerHTML = "";

  if (ufSelecionada) {
    carregarCidades(ufSelecionada);
  } else {
    document.getElementById("cidade").innerHTML =
      '<option value="">Selecione um estado primeiro</option>';
  }
});

document.getElementById("cidade").addEventListener("change", () => {
  document.getElementById("resultado").innerHTML = "";
});

async function carregarCidades(uf) {
  try {
    let selectCidade = document.getElementById("cidade");
    selectCidade.innerHTML = '<option value="">Carregando...</option>';

    let resposta = await fetch(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`,
    );
    let dados = await resposta.json();

    dados.sort((a, b) => a.nome.localeCompare(b.nome));
    selectCidade.innerHTML =
      '<option value="">Selecione uma cidade...</option>';

    dados.forEach((cidade) => {
      let option = document.createElement("option");
      option.value = cidade.nome;
      option.textContent = cidade.nome;
      selectCidade.appendChild(option);
    });
  } catch (err) {
    console.error(err);
  }
}

document
  .getElementById("btn-buscar")
  .addEventListener("click", buscarDadosCimaticos);

async function buscarDadosCimaticos() {
  let uf = document.getElementById("UF").value;
  let cidade = document.getElementById("cidade").value;

  if (!uf || !cidade) {
    window.alert("Por favor, selecione um estado e uma cidade primeiro.");
    return;
  }

  let divResultado = document.getElementById("resultado");
  divResultado.innerHTML = "<p>Carregando...</p>";

  try {
    let url = `https://api.hgbrasil.com/weather?format=json-cors&key=d824e320&city_name=${encodeURIComponent(cidade)},${uf}`;
    let resposta = await fetch(url);
    let dados = await resposta.json();

    let clima = dados.results;
    let previsaoHoje = clima.forecast[0];

    let city = clima.city;
    let temp = clima.temp;
    let date = clima.date;
    let weekday = previsaoHoje.weekday;
    let humidity = clima.humidity;
    let max = previsaoHoje.max;
    let min = previsaoHoje.min;
    let rain = previsaoHoje.rain;
    let rain_probability = previsaoHoje.rain_probability;

    let hero = document.querySelector(".hero");
    hero.style.marginTop = "30px"; // Só essa mudança já melhorou meu dia

    divResultado.innerHTML = /*html*/ `
      <div style="margin-bottom: 40px; padding: 15px; border: 1px solid #ccc; border-radius: 8px; text-align: left;">
        <h2>${city}</h2>
        <p><strong>Data:</strong> ${date} (${weekday})</p>
        <p><strong>Temperatura Atual:</strong> ${temp}°C</p>
        <p><strong>Mínima:</strong> ${min}°C | <strong>Máxima:</strong> ${max}°C</p>
        <p><strong>Umidade:</strong> ${humidity}%</p>
        <p><strong>Volume de Chuva:</strong> ${rain} mm</p>
        <p><strong>Probabilidade de Chuva:</strong> ${rain_probability}%</p>
      </div>
    `;
  } catch (err) {
    console.error("Erro ao buscar os dados climáticos:", err);
    divResultado.innerHTML = "";
    window.alert(
      "Não foi possível obter os dados do clima. Verifique o console para mais detalhes.",
    );
  }
}
