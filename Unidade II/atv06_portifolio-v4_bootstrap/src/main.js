import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css'; 

document.querySelector('#app').innerHTML = /*html*/ ` 
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Apresentação</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Projetos
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
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
      <h3>Front End Developer</h3>
      <p>Eu desenvolvo aplicações web com foco na experiência do usuário. Persisto aprimorando minhas habilidades com <br> tecnologias modernas, segurança e performance.</p>
      <div class="links">
        <a href="#" target="_blank" class="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Linkedin</a>
        <a href="#" target="_blank" class="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Github</a>
      </div>
    </div>
  </main>

  <footer class="bg-dark text-light">
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
`
