import React from 'react'
import './index.css'

import { Icon } from 'antd'

import notes from '../../assets/icons/notes.svg'
import wallet from '../../assets/icons/wallet.svg'

const transactions = [
  {
    id:1,
    description: 'Pagamento Dinheiro',
    date: '4 de Janeiro',
    value: 500,
    image: notes,
    type: 'paid',
  },
  {
    id: 2,
    description: 'Carteira Pessoal',
    date: '10 de Janeiro',
    value: 200,
    image: wallet,
    type: 'return',
  },
  {
    id: 4,
    description: 'Estorno Dinheiro',
    date: '19 de Janeiro',
    value: 500,
    image: notes,
    type: 'return',
  },
  {
    id: 3,
    description: 'Carteira Pessoal',
    date: '23 de Janeiro',
    value: 125,
    image: wallet,
    type: 'paid',
  },
]

const handleTransaction = transaction => (
  <div key={transaction.id} className="card-history">
    <div className="transactionCard">
      <div className="cardImage">
        <img className="iconHistory" src={transaction.image} alt="cartao" title="visa"/>
      </div>
      <div className="transactionPeriod">
        <h3>{transaction.description}</h3>
        <p>{transaction.date}</p>
      </div>
    </div>
    <div className="transactionValue">
      <h3>
        {
          transaction.type === 'paid' ? 
          <Icon className="iconSuccess" type="arrow-up" /> :
          <Icon className="iconFalied" type="arrow-down" /> 
        }
          R$ {transaction.value},00
        </h3>
    </div>
  </div>
)

const SalesHistory = () => (
  <div className="salesHistoryWrapper">
    <div className="salesHistoryHeader">
      <div className="info bd-right">
        <h3>ITENS VENDIDOS</h3>
        <h1>1000 un</h1>
      </div>
      <div className="info">
        <h3>FATURAMENTO</h3>
        <h1>R$ 25.500,00</h1>
      </div>
    </div>
    <div className="salesHistoryBody">
      <div className="salesHistoryTabs">
        <h4 className="tab">DEZEMBRO 2018</h4>
        <h4 className="tab actived">JANEIRO 2019</h4>
        <h4 className="tab">FEVEREIRO 2019</h4>
      </div>
      <div className="histories">
       {transactions.map(handleTransaction)}
      </div>
    </div>
  </div>
)

export default SalesHistory