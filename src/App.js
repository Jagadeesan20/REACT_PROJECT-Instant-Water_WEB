import React from "react";
import "./app.css";
import Home from "./components/home/Home";
import SignIn from "./components/SignIn/SignIn";
import Products from "./components/products/Product";
import Orders from "./components/Orders/Orders";
import Transaction from "./components/transactions/Transaction";
import DeliveryBoy from "./components/Deliveryboy/DeliveryBoy";
import FeedBack from "./components/FeedBack/FeedBack";
import TopBar from "./components/topbar/TopBar";
import SideBar from "./components/sidebar/SideBar";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";

const App = () => {
  return (
    <div>
      <TopBar />
      <SideBar />
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/orders" component={Orders} />
        <Route path="/transactions" component={Transaction} />
        <Route path="/delivery-boy" component={DeliveryBoy} />
        <Route path="/feedback" component={FeedBack} />
      </Switch>
    </div>
  );
};

export default withRouter(App);
