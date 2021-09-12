
import { Container } from './styles';
import incomeImg from "../../assets/income.svg";
import outComeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { useEffect, useState } from 'react';
import { api } from '../../services/api';



export function Summary() {

  const [isLoaded, setIsloaded] = useState(true);

  const [saldo, setSaldo] = useState(0);

  // const [summaryValues, setSummaryValues] = useState<SummaryValues>();

  useEffect(() => {

      // coletando apenas o saldo da conta
    api.get("/saldo").then(response => response.data).then(data => setSaldo(data.saldo));
      // coletando informações de entrada e saida baseadas no tipo de transacao
    api.get("/transaction").then(response => response.data).then(data => {

      console.log(data, 'transactions')


    });


  }, [saldo]);



  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Income Img" />
        </header>
        <strong>R$ </strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outComeImg} alt="Income Img" />
        </header>
        <strong>R$ 0,00</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Income Img" />
        </header>
        <strong>R$ {saldo}</strong>
      </div>

    </Container>
  )
}