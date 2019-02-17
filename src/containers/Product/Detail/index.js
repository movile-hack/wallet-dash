import React, { Component } from 'react'
import { Slider, Button } from 'antd'
import PropTypes from 'prop-types'
import { 
  PlaystationImg, 
  IphoneImg, 
  MacbookImg,
} from '../../../assets/products'


import ModalCustom from '../../../components/Modal'

import './index.css'

class DetailProduct extends Component {

  productsImage = {
    PlaystationImg, 
    IphoneImg, 
    MacbookImg,
  }
  onChange = (value) => {
    this.props.onChange(value)
  }

  render() { 
    const { 
      product,
      visible,
      onClick,
      rangeSummary,
      priceSelected,
    } = this.props
    const {
      name,
      description,
      imagePath,
    } = product
    const filterRange = range => range.value >= priceSelected
    const quantityProducts = rangeSummary.find(filterRange)
    return (
      <div className="wrapperProductDetail">
        <div className="productInfo">
          <h1>{name}</h1>
          <p>{description}</p>
          <div className="informationClients">
            <h3>{quantityProducts.customers} x un</h3>
            <h3 className="price">
              R$ {
                  quantityProducts.customers * 
                  (
                    priceSelected === 0 ? 
                    rangeSummary[0].value : 
                    priceSelected
                  )
                },00
            </h3>
          </div>
          <Slider 
            type="primary"
            min={rangeSummary[0].value}
            max={rangeSummary[rangeSummary.length -1].value}
            onChange={this.onChange}
          />
          <div className="wrapperButton">
            <Button size='large' onClick={onClick}>
              Vender
            </Button>
          </div>
        </div>
        <div className="wrapperImage">
          <img 
            className="productImage" 
            src={this.productsImage['MacbookImg']} 
            alt="game" 
            title={name}
          />
        </div>
        <ModalCustom 
          title="Confirmar venda"
          content="Essa operação é irreversivel, deseja continuar?"
          visible={visible}
          handleConfirmation={onClick}
        />
      </div>
    )
  }
}

DetailProduct.propTypes = {
  onChange: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
  visible: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  rangeSummary: PropTypes.array.isRequired,
  priceSelected: PropTypes.number.isRequired,
}

export default DetailProduct