import React, { Component } from 'react'
import { Icon, Slider, Button } from 'antd'
import PropTypes from 'prop-types'

import ModalCustom from '../../../components/Modal'

import './index.css'

import ps4 from '../../../assets/products/ps4.jpg'
class DetailProduct extends Component {

  productsImage = {
    ps4,
  }
  onChange = (value) => {
    this.props.onChange(value)
  }

  render() { 
    const { 
      product,
      productPriceOff,
      quantityClients,
      visible,
      onClick,
    } = this.props
    const {
      name,
      description,
      price,
      imagePath,
    } = product
    return (
      <div className="wrapperProductDetail">
        <div className="productInfo">
          <h1>{name}</h1>
          <p>{description}</p>
          <div className="informationClients">
            <h3><Icon type="user" /> {quantityClients} x Pessoas</h3>
            <h3 className="price">
              R$ {quantityClients * (price-productPriceOff)},00
              <span className="offPrice">
              <br />
                Desconto de
                { 
                  productPriceOff === 0 ? ' R$ 0,00' : 
                  <strong> -R$ {quantityClients*productPriceOff},00</strong>
                }
              </span>
            </h3>
          </div>
          <Slider 
            tooltipVisible={false}
            type="primary"
            defaultValue={productPriceOff}
            max={(price/4)}
            onChange={this.onChange}
          />
          <div className="wrapperButton">
            <Button size='large' onClick={onClick}>
              Vender
            </Button>
            {/* <Button 
              size='large' 
              type="primary"
            >
              Simular
            </Button> */}
          </div>
        </div>
        <div className="wrapperImage">
          <img 
            className="productImage" 
            src={this.productsImage[imagePath]} 
            alt="game" 
            title="ps4"
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
  quantityClients: PropTypes.number.isRequired,
  productPriceOff: PropTypes.number.isRequired,
  visible: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default DetailProduct