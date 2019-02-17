import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Detail from './Detail'
import List from './List'

const Product = () => (
  <Switch>
    <Route path="/product/list" component={List} />
    <Route exact path="/product/:id" component={Detail} />
  </Switch>
)

export default Product