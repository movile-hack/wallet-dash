import axios from 'axios'

class ProductService {

  getAllProducts() {
    return axios.get('/products')
  }

}

export default ProductService