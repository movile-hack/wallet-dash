import React, { Component } from 'react'
import { Modal } from 'antd'
import PropTypes from 'prop-types'
import './index.css'

import warning from '../../assets/icons/warning.svg'

class ModalCustom extends Component {
  render() {
    const {
      title,
      content,
      visible,
      handleConfirmation,
    } = this.props 
    return (
      <Modal
        visible={visible}
        onOk={() => handleConfirmation('sale')}
        onCancel={handleConfirmation}
        okText="Sim"
        cancelText="Não"
      >
        <div className="modalContentWrapper">
          <img className="iconImage" src={warning} alt="alert" title="warning" />
          <h1>{title}</h1>
          <p>{content}</p>
        </div>
      </Modal>
    )
  }
}

ModalCustom.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  handleConfirmation: PropTypes.func.isRequired,
}

export default ModalCustom