import { useForm } from "react-hook-form";
import { api } from "../../../../services/api";

import { useHistory } from "react-router-dom";
import { useState } from "react";

// antiga action do form
// id="pesquisa-doema" method="GET" action="/app/jornal/pesquisar/submit"
// COMO APRENDI A ENVIAR OS DADOS PARA A PI 
// https://mattboldt.com/2020/05/02/formdata-with-react-hooks-and-fetch/
export function FormPesquisa() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  let history = useHistory();
  const onSubmit = (data: any) => {
    try {
      api.post("jornal/enviar", data).then(res => {
        
        if (res.data.length > 0) {

          const resultados = res.data;
          
          history.push({
            pathname: "/resultado",
            state: {
              resultados
            }
          });
        }else{
          reset();
          history.push("/");
          console.log('oi')
        }
      });
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} >
      <div className="card-body">
        <div className="row">
          <div className="col-lg-6 ">
            <div className="input-group  input-group-lg mb-3 ">
              <input {...register('dataInicial', { required: true, maxLength: 10 })} id="dataInicial" name="dataInicial" type="text" className="form-control"
                placeholder="Data Inicial" aria-label="Data Inicial" />
              <span className="input-group-text"><i className="far fa-calendar-alt"></i></span>
              <input {...register('dataFinal', { required: true, maxLength: 10 })} id="dataFinal" name="dataFinal" type="text" className="form-control"
                placeholder="Data Final" aria-label="Data Final" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="input-group input-group-lg mb-3">
              <label className="input-group-text" htmlFor="inputGroupSelect01"><i className="fas fa-book"></i></label>
              <select defaultValue={'ex'} {...register('subject', { required: true, maxLength: 10 })} id="subject" name="subject" className="form-select">
                <option value="ex">EXECUTIVO</option>
                <option value="te" selected>TERCEIROS</option>
                <option value="ju">JUDICIÁRIO</option>
                <option value="exe">EXTRA EXECUTIVO</option>
                <option value="exte">EXTRA TERCEIROS</option>
                <option value="SX">SUPLEMENTO EXECUTIVO</option>
                <option value="st">SUPLEMENTO TERCEIROS</option>
                <option value="sj">SUPLEMENTO JUDICIÁRIO</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="input-group input-group-lg">
              <input {...register('termo', { required: true, maxLength: 400 })} id="termo" name="termo" type="text" className="form-control" placeholder="Termo de Busca"
                aria-label="Termo de Busca" aria-describedby="Termo de Busca" />
              <button type="button" className="  btn btn-lg btn-outline-primary" data-bs-toggle="modal"
                data-bs-target="#exampleModal">Avançado</button>
              <button className="btn btn-primary" type="submit" id="PesquisaSimplesDOEMA"><i
                className="fas fa-search"></i></button>
            </div>
          </div>

        </div>
      </div>
    </form>
  )
}