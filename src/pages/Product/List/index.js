import React, { Component } from 'react'
import ListProductContainer from '../../../containers/Product/List'
import ProductService from '../../../service/product'

class List extends Component {
  productService = null
  state = {
    products: []
  }

  componentDidMount() {
    this.productService = new ProductService()
    this.handleProductList()
  }

  async handleProductList() {
   try {
    // const { data: products } = await this.productService.getAllProducts()
    const products =  this.productService.getAllProducts()
    this.setState({ products })
   } catch (error) {
     console.log(error)
   }
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