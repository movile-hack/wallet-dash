import React, { Component } from 'react'
import SalesHistoryContainer from '../../containers/SalesHistory'
import TransactionSellService from '../../service/transactionsSell'

class SalesHistory extends Component {
  transactionSellService = null
  state = {
    transactions: [],
  }

  componentDidMount() {
    this.transactionSellService = new TransactionSellService()
    this.handleGetAllTransaction()
  }

  parseItemsTransaction = ({ items }) => {
    let array = []
    for(let key in items) {
      array = [...array, ...items[key].items]
    }

    const transactions = array.map(item => ({
        id: item.id,
        description: item.description,
        date: item.date,
        value: item.amount.split(''),
        image: 'notes',
        type: item.type,
      })
    ).filter(
      item => item.type === "transfer"
    )

    return this.setState({ transactions })
  }

  handleGetAllTransaction = async () => {
    try {
      const transactions = await this.transactionSellService.getAll()
      this.parseItemsTransaction(transactions)
    } catch (error) {
      
    }
  }

  render() {
    const { transactions } = this.state
    return (
      <SalesHistoryContainer 
        transactions={transactions}
      />
    )
  }
}
 
export default SalesHistory