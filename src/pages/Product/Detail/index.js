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
    quantityClients: 3,
    productPriceOff: 0,
    visible: false,
  }

  onChange = (productPriceOff) => {
    this.setState({ productPriceOff })
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
      quantityClients,
      productPriceOff,
      visible,
    } = this.state
    return (
      <DetailProductContainer
        product={product}
        onClick={this.handleConfirmation}
        quantityClients={quantityClients}
        productPriceOff={productPriceOff}
        onChange={this.onChange}
        visible={visible}
      />
    )
  }
}
 
export default Detail