import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

const Product = () => (
  <Switch>
    <Route path="/product" component={Product} />
    <Route exact path="/product/:id" component={Product} />
  </Switch>
)

export default Product