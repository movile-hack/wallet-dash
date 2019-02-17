import axios from 'axios'

const url = 'https://vesica.serveo.net/products'
class ProductService {

  getAllProducts() {
    return axios.get(url)
  }

}

export default ProductService