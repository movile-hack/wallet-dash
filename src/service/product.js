import axios from 'axios'

const url = 'https://vesica.serveo.net/products'

class ProductService {
  async getById(id) {
    const product = await axios.get(url)
    const summary = await axios.get(`${url}/${id}/orders`)

    return {
      product: product.data.find(product => product.id === id),
      summary: summary.data.summary,
      report: summary.data.report
    }
  }

  async getAllProducts() {
    const response = await axios.get(url)
    return response.data
  }
}

export default ProductService
