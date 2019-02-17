import React, { Component } from 'react'
import DetailProductContainer from '../../../containers/Product/Detail'
import ProductService from '../../../service/product'
import Loading from '../../../components/Loader'
import { message } from 'antd'
import { Redirect } from 'react-router'

class Detail extends Component {
  productService = null
  state = {
    data: null,
    visible: false,
    priceSelected: 0,
    redirect: false
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
        priceSelected: data.summary.averageValue
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

  handleSellConfirmation = async value => {
    const { id } = this.props.match.params
    try {
      await this.productService.sell(id, value)
      this.handleModal()
      this.handleSale()
    } catch (error) {
      console.log(error)
    }
  }

  handleSale = () => {
    message.info('Venda efetuada!', 2, () => this.setState({ redirect: true }))
  }

  handleModal = () => {
    const visible = !this.state.visible
    return this.setState({ visible })
  }

  renderDetail = () => {
    const { data, visible, priceSelected, redirect } = this.state
    const { product, report, summary } = data
    const orderedReport = report.sort((a, b) => (a.value > b.value ? 1 : -1))
    return (
      <div>
        {redirect ? (
          <Redirect to="/sales-history" />
        ) : (
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
        )}
      </div>
    )
  }

  render() {
    const { data } = this.state
    return data ? this.renderDetail() : <Loading />
  }
}

export default Detail
