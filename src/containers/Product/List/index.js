import React from 'react'
import PropTypes from 'prop-types'
import { Card, Row, Col } from 'antd'
import { Link } from 'react-router-dom'
import NumberIcon from './NumberIcon'
import './List.css'
const { Meta } = Card

const ListProduct = ({ products }) => {
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <h2>Negócios quentes</h2>
      </div>
      <div style={{ display: 'flex' }}>
        <Row>
          {products.map(product => (
            <Col span={8}>
              <Link to={`/product/${product.id}`}>
                <Card
                  hoverable
                  className="product-card"
                  key={product.id}
                  cover={<img alt={product.name} src={product.image} />}
                  actions={[
                    <NumberIcon icon="user" value={product.customers} />,
                    <NumberIcon
                      icon="dollar"
                      value={product.value}
                      money={true}
                    />,
                    <NumberIcon
                      icon="rise"
                      value={product.average}
                      money={true}
                    />
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
          ))}
        </Row>
      </div>
    </div>
  )
}

ListProduct.propTypes = {
  products: PropTypes.array.isRequired
}

export default ListProduct
