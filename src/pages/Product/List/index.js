import React, { Component } from 'react'
import ListProductContainer from '../../../containers/Product/List'
import ProductService from '../../../service/product'
import Loading from '../../../components/Loader'

class List extends Component {
  productService = null
  state = {
    products: false
  }

  componentDidMount() {
    this.productService = new ProductService()
    this.handleProductList()
  }

  async handleProductList() {
    try {
      const products = await this.productService.getAllProducts()
      this.setState({ products })
    } catch (error) {
      console.log(error)
    }
  }
  render() {
    const { products } = this.state
    return products ? <ListProductContainer products={products} /> : <Loading />
  }
}

export default List
