import React, { Component } from 'react'
import DetailProductContainer from '../../../containers/Product/Detail'
import ProductService from '../../../service/product'
import Loading from '../../../components/Loader'

class Detail extends Component {
  productService = null
  state = {
    data: null,
    visible: false,
    priceSelected: 0
  }

  componentWillMount() {
    this.productService = new ProductService()
    try {
      this.productService.getById(this.props.match.params.id).then(data => {
        this.setState({ data, priceSelected: data.summary.averageValue })
      })
    } catch (error) {
      console.log(error)
    }
  }

  onChange = priceSelected => {
    this.setState({
      priceSelected
    })
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

  renderDetail = () => {
    const { data, visible, priceSelected } = this.state
    const { product, report, summary } = data
    console.log(data)
    const orderedReport = report.sort((a, b) => (a.value > b.value ? 1 : -1))
    return (
      <DetailProductContainer
        product={product}
        priceSelected={priceSelected}
        onClick={this.handleConfirmation}
        onChange={this.onChange}
        visible={visible}
        summary={summary}
        report={orderedReport}
      />
    )
  }

  render() {
    const { data } = this.state
    return data ? this.renderDetail() : <Loading />
  }
}

export default Detail
