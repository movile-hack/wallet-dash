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
    this.handleGetById()
  }

  handleGetById = async () => {
    const { id } = this.props.match.params
    try {
      const data = await this.productService.getById(id)
      this.setState({ 
        data, 
        priceSelected: data.summary.averageValue,
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

  handleSellConfirmation = async (value) => {
    const { id } = this.props.match.params
    try {
      await this.productService.sell(id, value)
      this.handleModal();
      window.location.reload();
    } catch (error) {
      console.log(error)
    }
  }

  handleSale = () => {
    console.log('venda efetuada com sucesso!')
  }

  handleModal = () => {
    const visible = !this.state.visible
    return this.setState({ visible });
  }

  renderDetail = () => {
    const { data, visible, priceSelected } = this.state
    const { product, report, summary } = data
    const orderedReport = report.sort(
      (a, b) => (a.value > b.value ? 1 : -1)
    )
    return (
      <DetailProductContainer
        product={product}
        priceSelected={priceSelected}
        handleSellConfirmation={this.handleSellConfirmation}
        handleModal={this.handleModal}
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
