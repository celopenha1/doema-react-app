import Modal from 'react-modal';
import closeImg from "../../assets/close.svg";
import { Container, RadioBox, TransactionTypeContainer } from './styles';
import incomeImg from "../../assets/income.svg";
import outComeImg from "../../assets/outcome.svg";
import { FormEvent, useState } from 'react';

import { api } from '../../services/api';

interface NewTransactionModalProps {
  isOpen: boolean,
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {


  const [type, setType] = useState('');
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');

  const handleCreateNewTransaction = (event: FormEvent) => {
    event.preventDefault();

    const data = {title, value, category, type}
    api.post("/api/transactions", data)
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content">

      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close" >
        <img src={closeImg} alt="Close modal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction} >
        <h2>Cadastrar Transação</h2>

        <input
          placeholder="Título"
          value={title}
          onChange={event => setTitle(event.target.value)}

        />
        <input
          placeholder="Valor"
          type="number"
          value={value}
          onChange={event => setValue(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox activeColor='green' isActive={type === "income"} onClick={() => { setType("income") }} type="button" >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox activeColor='red' isActive={type === "outcome"} onClick={() => { setType("outcome") }} type="button" >
            <img src={outComeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder="Categoria"
          value={category}
          onChange={event => setCategory(event.target.value)}
        />


        <button type="submit">Cadastrar</button>
      </Container>


    </Modal>
  )
}