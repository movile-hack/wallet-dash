import React, { Component } from 'react'
import { Slider, Button, Col, Row } from 'antd'
import PropTypes from 'prop-types'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import ModalCustom from '../../../components/Modal'
import NumberIcon from '../List/NumberIcon'

import './index.css'

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <NumberIcon icon="dollar" value={label} money={true} />
        <NumberIcon icon="shopping-cart" value={payload[0].value} />
      </div>
    )
  }

  return null
}
class DetailProduct extends Component {
  onChange = value => {
    this.props.onChange(value)
  }

  formattedData = () => {
    const { report } = this.props
    return report.map(item => ({ name: item.value, produtos: item.customers }))
  }

  renderChart = () => {
    return (
      <AreaChart
        width={450}
        height={250}
        data={this.formattedData()}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Area
          type="monotone"
          dataKey="produtos"
          stroke="#8884d8"
          fill="#8884d8"
        />
      </AreaChart>
    )
  }

  renderSlider = () => {
    const { report, priceSelected } = this.props
    const minValue = report[0].value
    const maxValue = report[report.length - 1].value

    const marks = {
      [minValue]: minValue,
      [maxValue]: maxValue
    }

    return (
      <Slider
        type="primary"
        value={priceSelected}
        min={minValue}
        max={maxValue}
        onChange={this.onChange}
        marks={marks}
      />
    )
  }

  render() {
    const { product, visible, onClick, report, priceSelected } = this.props
    const Chart = this.renderChart
    const Slider = this.renderSlider
    const { name, description, image } = product
    const filterRange = range => range.value >= priceSelected
    const quantityProducts = report.find(filterRange)
    return (
      <Row>
        <Col span={10} style={{ paddingRight: '20px' }}>
          <div style={{ marginBottom: "20px" }}>
            <h1>{name}</h1>
            <p>{description}</p>
          </div>
          <div className="wrapperImage">
            <img className="productImage" src={image} alt="game" title={name} />
          </div>
        </Col>
        <Col span={12}>
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
                value={quantityProducts.customers * priceSelected}
                money={true}
              />
            </div>
            <div>
              <Button type="primary" size="large" onClick={onClick}>
                Vender
              </Button>
            </div>
          </div>
          <ModalCustom
            title="Confirmar venda"
            content={`Você vai vender ${quantityProducts.customers} ${
              product.name
            } por R$ ${priceSelected.toFixed(
              2
            )} cada. Essa operação é irreversivel, deseja continuar?`}
            visible={visible}
            handleConfirmation={onClick}
          />
        </Col>
      </Row>
    )
  }
}

DetailProduct.propTypes = {
  onChange: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
  visible: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  report: PropTypes.array.isRequired,
  priceSelected: PropTypes.number.isRequired
}

export default DetailProduct
