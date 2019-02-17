import React from 'react'
import './index.css'

import PropTypes from 'prop-types'


import { Icon } from 'antd'
import notes from '../../assets/icons/notes.svg'

const monthYear = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
]

const parseDate = date => {
  const dateFormatted = {
    dd: new Date(date).getDate(),
    MM: new Date(date).getMonth(),
    YYYY: new Date(date).getFullYear(),
  }
  return `${dateFormatted.dd} de ${monthYear[dateFormatted.MM + 1]} ${dateFormatted.YYYY}`
}
const handleTransaction = transaction => (
  <div key={transaction.id} className="card-history">
    <div className="transactionCard">
      <div className="cardImage">
        <img className="iconHistory" src={notes} alt="cartao" title="visa"/>
      </div>
      <div className="transactionPeriod">
        <h3>{transaction.description}</h3>
        <p>{parseDate(transaction.date)}</p>
      </div>
    </div>
    <div className="transactionValue">
      <h3>
        {
          transaction.type === 'transfer' && Number(transaction.value) < 0 ? 
          <Icon className="iconFalied" type="arrow-down" /> :
          <Icon className="iconSuccess" type="arrow-up" /> 
        }
          R$ {transaction.value}
        </h3>
    </div>
  </div>
)

const SalesHistory = ({ transactions }) => (
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

SalesHistory.propTypes = {
  transactions: PropTypes.array.isRequired,
}

export default SalesHistory