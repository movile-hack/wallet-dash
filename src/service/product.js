import axios from 'axios'

const url = 'https://vesica.serveo.net'

class ProductService {
  async getById(id) {
    const products = await this.getAllProducts()
    const { data: response } = await axios.get(`${url}/products/${id}/orders`)

    return {
      product: products.find(product => product.id === id),
      summary: response.summary,
      report: response.report
    }
  }

  async getAllProducts() {
    const { data: products } = await axios.get(`${url}/products`)
    return products
  }

  async sell(productId, value) {
    const response = await axios.post(`${url}/sells`, {
      productId,
      value,
      sellerId: '660cb85b93da41cf938a2b97675fba8b'
    })

    return response;
  }
}

export default ProductService
