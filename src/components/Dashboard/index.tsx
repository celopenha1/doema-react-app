import { Container } from "./styles";

import { Summary } from "../Summary";
import { TransactionTable } from "../TransactionsTable";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

interface Transaction {
    contaId: number,
    titulo: string,
    valor: number,
    tipo: string,
    categoria: string,
    data: string
  
  }

  interface SummaryValues {
      entradas: number,
      saidas: number,
      saldo: number
  }

export function Dashboard() {

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
            <Summary />
            <TransactionTable />
        </Container>
    )
}