export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><img src="/img/doema-logo-white.svg" width="150" alt="" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Início</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="" id="drop-publicacoes" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                Publicações
              </a>
              <ul className="dropdown-menu" aria-labelledby="drop-publicacoes">
                <li><a className="dropdown-item" href="/informativo/normas-publicacao">Normas de publicação</a></li>
                <li><a className="dropdown-item" href="#">Modelo de publicação</a></li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li><a className="dropdown-item" href="#">Prazo de publicação</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="drop-informativo" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                Informativo
              </a>
              <ul className="dropdown-menu" aria-labelledby="drop-informativo">
                <li><a className="dropdown-item" href="#">História do Diário</a></li>
                <li><a className="dropdown-item" href="#">Perguntas Frequêntes</a></li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li><a className="dropdown-item" href="#">Como pesquisar</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="drop-biblioteca" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                Biblioteca
              </a>
              <ul className="dropdown-menu" aria-labelledby="drop-biblioteca">
                <li><a className="dropdown-item" href="/testando">Consulta no acervo</a></li>
                <li><a className="dropdown-item" href="#">Livros Publicados</a></li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li><a className="dropdown-item" href="#">Consulta de Ementários</a></li>
              </ul>
            </li>
          </ul>
          <button className="mx-1 text-light btn-dark btn ">
            Credenciamento
          </button>
        </div>
      </div>
    </nav>

  )
}