import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'
import { Switch, Route, Link, Redirect } from 'react-router-dom'
import Product from './pages/Product'
import SalesHistory from './pages/History'

import './App.css'

const { Sider, Content } = Layout

class App extends Component {
  state = {
    collapsed: false,
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <h1 style={{ color: 'white' }}>
            <span className="firstNameLogo">Boa</span>
            <span className="secondNameLogo">Compra</span>
          </h1>
          <Menu theme="dark" mode="inline" >
            <Menu.Item key="1">
              <Link to="/product/list">
                <Icon type="dollar" />
                <span>Negócios</span>
              </Link> 
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/sales-history">
                <Icon type="bars" />
                <span>Histórico</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{
            margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
          }}
          >
          <Switch>
            <Route exact path="/sales-history" component={SalesHistory} />
            <Route path="/product" component={Product} />
            <Redirect to="/sales-history" />
          </Switch>
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default App
