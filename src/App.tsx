import React, { useEffect, useState } from 'react';
import { Footer } from './components/Public/Footer';
import { Navbar } from './components/Public/Navbar';
import { Home } from './containers/Public/Home';
import { api } from './services/api';
import logoDoemaSVG from './assets/img/doema-logo-white.svg';



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Biblioteca } from './containers/Public/Bilioteca';
import MaterialDatePicker from './containers/MaterialDatepicker';
import { Resultado } from './containers/Public/Resultado';
import { Edicoes } from './containers/Public/Edicoes';


function App() {

  const [noticiaImg, setNoticiaImg] = useState('');
  async function getUltimaMensagem() {
    try {
      const mensagemResponse = await api.get('mensagem/ultima-mensagem');

      const mensagemImg64 = mensagemResponse.data;

      setNoticiaImg(mensagemImg64);
    } catch (error) {
      throw error
    }
  }
  useEffect(() => {
    getUltimaMensagem();
    console.log(noticiaImg)
  }, []);
  return (
    <body>
      {/* <MaterialDatePicker/> */}
      <div id="myModal" className="animate__bounceIn modal" >
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">

              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {/* <img className="img-fluid" src="data:image/png;base64, <%-mensagem.base64Img%> " alt="" /> */}
            </div>
          </div>
        </div>
      </div>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#"><img src={logoDoemaSVG} width="150" alt="" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                <li className="nav-item">
                  <Link to="/" className="nav-link active" aria-current="page" >Início</Link>
                </li>
                {/* PUBLICAÇÕES DROPDOWN */}
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
                {/* INFORMATIVO DROPDOWN */}
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
                {/* BIBLIOTECA DROPDOWN */}
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="drop-biblioteca" role="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    Biblioteca
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="drop-biblioteca">
                    <li><Link to="/biblioteca" className="dropdown-item" href="/testando">Consulta no acervo</Link></li>
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

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/biblioteca"  >
            <Biblioteca />
          </Route>

          <Route exact path="/resultado">
            <Resultado />
          </Route>

          <Route exact path="/edicoes">
            <Edicoes />
          </Route>


        </Switch>

      </Router>
      <Footer />
    </body>

  )
}

export default App;
