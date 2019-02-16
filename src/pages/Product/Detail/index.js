import React, { Component } from 'react'
import DetailProductContainer from '../../../containers/Product/Detail'

class Detail extends Component {
  state = { 
    product: {
      id: 1,
      price: 1440,
      name: 'PlayStation 4 Sony 2 console',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, natus delectus sit reiciendis amet commodi ab dignissimos placeat explicabo sed!",
      imagePath: 'ps4',
    },
    priceSelected: 0,
    visible: false,
    summary: [
      {
        value: 2400,
        customers: 1
      },
      {
        value: 1980,
        customers: 2
      },
      {
        value: 1650,
        customers: 3
      }
    ]
  }

  onChange = (priceSelected) => {
    this.setState({ priceSelected })
  }

  handleConfirmation = (type = null) => {
    const visible = !this.state.visible
    if(type === 'sale') {
      return this.setState(
        { visible },
        () => this.handleSale()
      )
    }
    return this.setState({ visible })
  }

  handleSale = () => {
    console.log('venda efetuada com sucesso!')
  }

  render() {
    const {
      product,
      
      priceSelected,
      visible,
      summary,
    } = this.state
    
    const rangeSummary = summary.sort(
      (a, b) => a.value > b.value ? 1 : -1
    )

    return (
      <DetailProductContainer
        product={product}
        priceSelected={priceSelected}
        onClick={this.handleConfirmation}
        onChange={this.onChange}
        visible={visible}
        rangeSummary={rangeSummary}
      />
    )
  }
}
 
export default Detail