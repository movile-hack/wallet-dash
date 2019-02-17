import React, { Component } from 'react'
import ListProductContainer from '../../../containers/Product/List'
import ProductService from '../../../service/product'

import productMocks from './productsMock'

class List extends Component {
  productService = null
  state = {
    products: productMocks
  }

  componentDidMount() {
    this.productService = new ProductService()
    this.handleProductList()
  }

  async handleProductList() {
    const response = await this.productService.getAllProducts()
    // this.setState({ products })
    console.log(response)
  }
  render() { 
    const { products } = this.state;
    return (
      <ListProductContainer
        products={products}
      />  
    )
  }
}
 
export default List