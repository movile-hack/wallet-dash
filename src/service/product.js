import axios from 'axios'

const url = 'https://vesica.serveo.net/products'

class ProductService {
  async getById(id) {
    const { data: product } = await this.getAllProducts()
    const { data: response } = await axios.get(`${url}/${id}/orders`)

    return {
      product: product.find(product => product.id === id),
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
