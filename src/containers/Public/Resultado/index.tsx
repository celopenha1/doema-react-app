import { Fragment, useState } from 'react';
import { useLocation } from 'react-router-dom';

export function Resultado() {


  return (
    <Fragment>
      <section className="bg-dark text-light text-center text-sm-start">
        <div className="container-sm">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 d-none d-md-block d-sm-block">
              <img src="/img/search.svg" alt="" className="img-fluid" />
            </div>
            <div className="col-lg-8 col-md-8 col-sm-8 my-auto mx-auto">
              <h1 className=" display-1 lh-1">RESULTADO </h1>
              <h3>Termo pesquisado: <span className="badge bg-primary"> resultado </span> </h3>
              <a href="/inicio" className="btn btn-lg btn-outline-warning"> Pesquisar Novamente </a>
            </div>
          </div>
        </div>
      </section>
      <section className=" bg-dark d-flex align-items-center">
        <div className="container">
          <div className="row ">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="card  shadow-lg  rounded">
                <div className="card-body ">
                  <table id="example" className="row-border hover table table-striped" >
                    <thead>
                      <tr>
                        <th>Título</th>
                        <th>Resultado </th>
                        <th>Página</th>
                        <th>Visualizar</th>
                        <th>Download</th>
                      </tr>
                    </thead>

                    <tbody>


                      <tr>
                        <td>
                          titulo
                        </td>
                        <td className="fragmento">
                          fragmento
                        </td>
                        <td>
                          página
                        </td>
                        <td> <a><i className="fas fa-2x fa-eye"></i></a> </td>
                        <td> <a><i className="fas fa-2x fa-file-pdf"> </i> </a></td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <th>Título</th>
                        <th>Resultado </th>
                        <th>Página</th>
                        <th>Visualizar</th>
                        <th>Download</th>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Fragment>

  )
}


{/* href="javascript:viewPage('<%-resultado[i].path%>', <%=resultado[i].pagina%>, '<%=resultado[i].titulo%>');" */ }
{/* href="http://localhost:8080/api/jornal/download?path=<%=resultado[i].path%>" */ }