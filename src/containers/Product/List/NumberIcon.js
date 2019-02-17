import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'antd'

const NumberIcon = ({ icon, value, money, style }) => {
  return (
    <div style={{ ...style }}>
      <Icon type={icon} style={{ marginRight: '5px' }} />
      {money ? <span>R${value.toFixed(2)}</span> : <span>{value}</span>}
    </div>
  )
}

NumberIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  money: PropTypes.bool.isRequired,
  style: PropTypes.object
}

NumberIcon.defaultProps = {
  money: false,
  style: {}
}

export default NumberIcon
