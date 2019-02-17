import { 
  PlaystationImg, 
  IphoneImg, 
  MacbookImg,
} from '../../../assets/products'

const productMocks = [
  {
    id: "hash1",
    name: 'Playstation 4',
    description: 'PlayStation 4 Slim de 500 GB preto',
    image: PlaystationImg,
    value: 1231,
    customers: 200,
    average: 1500
  },
  {
    id: "hash2",
    name: 'Iphone',
    description: 'Iphone X de 64GB',
    image: IphoneImg,
    value: 320,
    customers: 50,
    average: 900
  },
  {
    id: "hash3",
    name: 'Macbook',
    description: 'Macbook Pro 126GB SSD',
    image: MacbookImg,
    value: 132,
    customers: 10,
    average: 300
  }
]

export default productMocks
