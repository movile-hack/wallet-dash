import axios from 'axios'

const url = 'https://vesica.serveo.net/products'

class ProductService {
  async getById(id) {
    const products = await this.getAllProducts()
    const { data: response } = await axios.get(`${url}/${id}/orders`)

    return {
      product: products.find(product => product.id === id),
      summary: response.summary,
      report: response.report
    }
  }

  async getAllProducts() {
    const { data: products } = await axios.get(url)
    return products
  }
}

export default ProductService
