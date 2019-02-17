import React from 'react'
import PropTypes from 'prop-types'
import { Card, Row, Col } from 'antd'
import { Link } from 'react-router-dom'
import NumberIcon from './NumberIcon'
import './List.css'
const { Meta } = Card

const renderProduct = product => (
  <Col key={product.id} span={8} style={{ marginBottom: '20px' }}>
    <Link to={`/product/${product.id}`}>
      <Card
        hoverable
        className="product-card"
        cover={
          <img
            alt={product.name}
            src={product.image}
            style={{ marginTop: '20px' }}
          />
        }
        actions={[
          <NumberIcon icon="user" value={product.customers} />,
          <NumberIcon icon="dollar" value={product.value} money={true} />,
          <NumberIcon icon="rise" value={product.average} money={true} />
        ]}
      >
        <Meta
          title={product.name}
          description={product.description}
          style={{ height: '70px' }}
        />
      </Card>
    </Link>
  </Col>
)

const ListProduct = ({ products }) => {
  return (
    <Row>
      <Col span={24}>
        <h1>Negócios quentes</h1>
      </Col>
      {products.map(renderProduct)}
    </Row>
  )
}

ListProduct.propTypes = {
  products: PropTypes.array.isRequired
}

export default ListProduct
