import React, { Component } from 'react'
import { Slider, Button } from 'antd'
import PropTypes from 'prop-types'
import { AreaChart, Area } from 'recharts'
import ModalCustom from '../../../components/Modal'
import NumberIcon from '../List/NumberIcon'

import './index.css'

const data = [
  {
    name: 'Page A',
    uv: 4000
  },
  {
    name: 'Page B',
    uv: 3000
  },
  {
    name: 'Page C',
    uv: 2000
  },
  {
    name: 'Page D',
    uv: 1000
  },
  {
    name: 'Page E',
    uv: 500
  }
]

class DetailProduct extends Component {
  onChange = value => {
    this.props.onChange(value)
  }

  renderChart = () => {
    return (
      <AreaChart
        width={460}
        height={60}
        data={data}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5
        }}
      >
        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    )
  }

  renderSlider = () => {
    const { rangeSummary } = this.props
    const minValue = rangeSummary[0].value
    const maxValue = rangeSummary[rangeSummary.length - 1].value

    const marks = {
      [minValue]: minValue,
      [maxValue]: maxValue
    }

    return (
      <Slider
        type="primary"
        min={minValue}
        max={maxValue}
        onChange={this.onChange}
        marks={marks}
      />
    )
  }

  render() {
    const {
      product,
      visible,
      onClick,
      rangeSummary,
      priceSelected
    } = this.props
    const Chart = this.renderChart
    const Slider = this.renderSlider
    const { name, description, image } = product
    const filterRange = range => range.value >= priceSelected
    const quantityProducts = rangeSummary.find(filterRange)
    return (
      <div className="wrapperProductDetail">
        <div className="productInfo">
          <h1>{name}</h1>
          <p>{description}</p>
          <Chart />
          <Slider />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '70px',
              alignItems: 'baseline'
            }}
          >
            <div className="informationClients">
              <NumberIcon
                icon="shopping-cart"
                value={quantityProducts.customers}
                style={{ marginRight: '20px' }}
              />
              <NumberIcon
                icon="dollar"
                value={
                  quantityProducts.customers *
                  (priceSelected === 0 ? rangeSummary[0].value : priceSelected)
                }
                money={true}
              />
            </div>
            <div>
              <Button size="large" onClick={onClick}>
                Vender
              </Button>
            </div>
          </div>
        </div>
        <div className="wrapperImage">
          <img className="productImage" src={image} alt="game" title={name} />
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
  priceSelected: PropTypes.number.isRequired
}

export default DetailProduct
