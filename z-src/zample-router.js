import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from './components/zample-Login/Login';
import Shop from './components/zample-Shop/Shop';
import Checkout from './components/zample-Checkout/Checkout';

export default (
  <Switch>
    <Route component={ Login } path="/" exact />
    <Route component={ Shop } path="/shop" />
    <Route component={ Checkout } path="/checkout" />
  </Switch>
)
