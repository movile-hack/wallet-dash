import axios from 'axios'

const url = 'http://1b2e65ad.ngrok.io/products'
class ProductService {

  getAllProducts() {
    return axios.get(url)
  }

}

export default ProductService