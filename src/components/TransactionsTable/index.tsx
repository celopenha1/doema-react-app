import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface Transaction {
  contaId: number,
  titulo: string,
  valor: number,
  tipo: string,
  categoria: string,
  data: string

}




export function TransactionTable() {

  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoaded, setIsloaded] = useState(true);

  const [saldo, setSaldo] = useState(0);

  // const [summaryValues, setSummaryValues] = useState<SummaryValues>();

  useEffect(() => {

      // coletando apenas o saldo da conta
    api.get("/saldo").then(response => response.data).then(data => setSaldo(data.saldo));
      // coletando informações de entrada e saida baseadas no tipo de transacao
    api.get("/transaction").then(response => response.data).then(data => {

      setTransactions(data);   
      console.log(data, 'transactions')


    });


  }, [setTransactions, saldo]);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction['contaId']}>
              <td>{transaction['titulo']}</td>
              <td className={transaction['tipo']}>

                {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(transaction['valor'])}
              </td>
              <td> {transaction['categoria']}</td>
              {/* os dados vem direto da api já formatados */}
              {/* porém, fica como eeestudo futuro a classe nativa Intl */}
              {/* <td>{new Intl.DateTimeFormat('pt-BR',{ dateStyle: 'short', timeStyle: 'short' }).format(new Date(transaction['createdAt']))}</td> */}
              <td>{transaction['data']}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </Container>
  )
}