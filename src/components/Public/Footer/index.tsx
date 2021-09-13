import logoDoemaSVG from "../../../assets/img/doema-logo-white.svg";

export function Footer() {

  const googleMapsURL = "https://maps.google.com/maps?q=Di%C3%A1rio%20Oficial%20Ma&t=&z=15&ie=UTF8&iwloc=&output=embed";

  return (
    <footer className="bd-footer  bg-dark ">
      <div className="container py-5 text-light">
        <div className=" mb-5 row d-flex justify-content-center">
          <div className="col-md-4 col-lg-4">
            <img src={logoDoemaSVG} alt="" />

          </div>
        </div>
        <div className="row">

          <div className="col-lg-4 mb-4">
            <h3>Informações</h3>

            <ul className="list-unstyled small text-muted">
              <li className="my-2 text-light"><i className="fas fa-map-marker-alt"></i> Av. Sen. Vitorino Freire, 1969 - Centro, São
                Luís - MA, 65030-015, Brasil</li>
              <li className="mb-2 text-light"><i className="fas fa-phone-square-alt"></i> (98) 3222-5624 / (98) 3222 8122</li>
              <li className="mb-2 text-light"><i className="fas fa-envelope-open-text"></i> suporte@diariooficial.ma.gov.br</li>

            </ul>
          </div>

          <div className="col-lg-4 mb-4">
            <h3>Links Úteis</h3>
            <ul className="list-unstyled">
              <li className="mb-2"><a className="link-light" href="https://www.in.gov.br/inicio">Sistema E-DOEMA</a></li>
              <li className="mb-2"><a className="link-light" href="https://github.com/twbs/bootstrap/issues">Governo do Maranhão</a></li>
              <li className="mb-2"><a className="link-light" href="https://github.com/twbs/bootstrap/discussions">Porta da Transparência</a></li>
              <li className="mb-2"><a className="link-light" href="https://www.in.gov.br/inicio">Diário Oficial da União</a></li>
            </ul>
          </div>

          <div className="col-lg-4 mb-4">
            <div className="card shadow">
              <div className="card-body">
                <div className="mapouter">
                  <div className="gmap_canvas">
                    <iframe width={"100%"}
                      height={"220"}
                      id="gmap_canvas"
                      src={googleMapsURL}
                      frameBorder={0}
                      scrolling="no"
                      marginHeight={0}
                      marginWidth={0}>

                    </iframe>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer >
  )
}