import React, { Component } from 'react'
import DetailProductContainer from '../../../containers/Product/Detail'
import ProductService from '../../../service/product'

class Detail extends Component {
  productService = null
  state = {
    product: null,
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
    ],
    priceSelected: 0
  }

  componentWillMount() {
    this.productService = new ProductService()
    const product = this.productService.getById(this.props.match.params.id)
    this.setState({ product })
  }

  onChange = priceSelected => {
    this.setState({ priceSelected })
  }

  handleConfirmation = (type = null) => {
    const visible = !this.state.visible
    if (type === 'sale') {
      return this.setState({ visible }, () => this.handleSale())
    }
    return this.setState({ visible })
  }

  handleSale = () => {
    console.log('venda efetuada com sucesso!')
  }

  render() {
    const { product, priceSelected, visible, summary } = this.state

    const rangeSummary = summary.sort((a, b) => (a.value > b.value ? 1 : -1))

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
