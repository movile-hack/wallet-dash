import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'
import { Switch, Route, Link, Redirect } from 'react-router-dom'
import Product from './pages/Product'

import './App.css'

const { Header, Sider, Content } = Layout

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
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Link to="/product/list">
                <Icon type="dollar" />
                <span>Negócios</span>
              </Link> 
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="bars" />
              <span>Histórico</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
          </Header>
          <Content style={{
            margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
          }}
          >
          <Switch>
            <Route path="/product" component={Product} />
            <Redirect to="/product" />
          </Switch>
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default App
