import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'

import { Switch, Route, Link, Redirect } from 'react-router-dom'
import Product from './pages/Product'

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
          {/* <div className="logo" /> */}
          <h1 style={{ color: 'white' }}>Boa compra</h1>
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
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
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
