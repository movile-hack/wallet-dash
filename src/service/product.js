import axios from 'axios'

const url = 'https://vesica.serveo.net/products'
class ProductService {

  getAllProducts() {
    // return axios.get(url)
    return [{"id":"12365419","name":"Macbook","description":"Macbook Pro 126GB SSD","image":"https:\/\/store.storeimages.cdn-apple.com\/4982\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/m\/bp\/mbp15touch\/space\/mbp15touch-space-select-201807?wid=1808\u0026hei=1680\u0026fmt=jpeg\u0026qlt=95\u0026.v=1529520056969","value":0,"customers":0,"average":0},{"id":"52967376","name":"Iphone","description":"Iphone X","image":"https:\/\/imagens.canaltech.com.br\/produto\/1540320629-3958-principal-m.png","value":0,"customers":0,"average":0},{"id":"52901919","name":"Playstation 4","description":"Playstation 4 500GB","image":"https:\/\/http2.mlstatic.com\/playstation-4-ps4-jogo-12x-sem-juros-D_NQ_NP_954234-MLB28095681537_092018-F.jpg","value":8010,"customers":4,"average":2002.5}]
  }

}

export default ProductService