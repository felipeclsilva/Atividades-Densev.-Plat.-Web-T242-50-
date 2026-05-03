import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./style.css";
import imgTodoList from "./assets/to-do List_react.png";
import imgApiHgBrasil from "./assets/imgApiHgBrasil.png";

document.querySelector("#app").innerHTML = /*html*/ ` 
  <header id="header">
    <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#header">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#apresentacao">Apresentação</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Projetos
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#projects">To-Do List React</a></li>
                <li><a class="dropdown-item" href="#projects">App de Previsão do Tempo</a></li>
                <li><a class="dropdown-item" href="#projects">Site Android</a></li>
              </ul>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
            <button class="btn btn-outline-success" type="submit">Buscar</button>
          </form>
        </div>
      </div>
    </nav>
  </header>

  <main>
    <div class="descriptive">
      <h1>Felipe Clemente da Silva</h1>
      <h2>Front End Developer</h2>
      <p class="apresentacao" id="apresentacao">Eu desenvolvo aplicações web com foco na experiência do usuário. Persisto aprimorando minhas habilidades com <br> tecnologias modernas, segurança e performance.</p>
      <div class="links">
        <a href="https://www.linkedin.com/in/felipe-clemente-3523762a9/" target="_blank" class="link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Linkedin</a>
        <a href="https://github.com/felipeclsilva" target="_blank" class="link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Github</a>
      </div>
    </div>

    <section class="projects" id="projects">
      <h2>Projetos</h2>
    </section>
  </main>

  <footer class="bg-dark text-light mt-auto">
  <p>© 2026 Meu Portfólio. Todos os direitos reservados.</p>
  <p>Email: <span style="text-decoration: underline;">felipeclementej2@gmail.com</span></p>
  <ul class="nav justify-content-center">
    <li class="nav-item">
      <a class="nav-link" href="https://www.instagram.com/felipecl_sillva/" target="_blank">Instagram</a>
    </li>
    <li class="nav-item"> 
      <a class="nav-link" href="https://github.com/felipeclsilva" target="_blank">GitHub</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="https://www.linkedin.com/in/felipe-clemente-3523762a9/" target="_blank">LinkedIn</a>
    </li>
  </ul>
  </footer>
`;

const projetos = [
  {
    titulo: "To-Do List React",
    descricao: "Lista de tarefas dinâmica construída com React.",
    imagem: imgTodoList,
    link: "https://github.com/felipeclsilva/Atividades-Densev.-Plat.-Web-T242-50-/tree/main/Unidade%20II/atv07_react-ToDoList",
  },
  {
    titulo: "App de Previsão do Tempo",
    descricao:
      "Aplicação que consome uma API pública para mostrar a previsão climática.",
    imagem: imgApiHgBrasil,
    link: "https://github.com/felipeclsilva/Atividades-Densev.-Plat.-Web-T242-50-/tree/main/Unidade%20I/atv05_appAPIExterna-DadosCimaticos",
  },
  {
    titulo: "Site Android",
    descricao:
      "Página única e completa, um blog sobre desenvolvimento Android.",
    imagem:
      "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/android.png",
    link: "https://github.com/felipeclsilva/html-css/tree/main/modulo2/desafios/d010_projetoSiteAndroid",
  },
];

const sectionProjetos = document.querySelector(".projects");

const gridRow = document.createElement("div");
gridRow.className = "row justify-content-center gap-4 mt-4";

projetos.forEach((projeto) => {
  const cardDiv = document.createElement("div");
  cardDiv.className = "col-auto";

  cardDiv.innerHTML = `
    <div class="card text-start" style="width: 18rem;">
      <img src="${projeto.imagem}" class="card-img-top" alt="Imagem do ${projeto.titulo}">
      <div class="card-body">
        <h5 class="card-title">${projeto.titulo}</h5>
        <p class="card-text">${projeto.descricao}</p>
        <a href="${projeto.link}" class="btn btn-primary" target="_blank">Acessar Projeto</a>
      </div>
    </div>
  `;
  gridRow.appendChild(cardDiv);
});

sectionProjetos.appendChild(gridRow);
