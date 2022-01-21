import React from "react";
import "./sidebar.css";
import { Link, withRouter } from "react-router-dom";
import {
  MenuSharp,
  ShoppingCartSharp,
  AccountBalanceWalletSharp,
  LocalHospitalSharp,
  ExitToAppSharp,
  ForumSharp,
  BusinessCenterSharp,
  BarChartSharp,
} from "@material-ui/icons";

// import dashboard from '../../img/dashboard/dashboard.png'
const SideBar = (props) => {
  if (props.location.pathname === "/signin") return null;
  return (
    <div className="sidebar">
      <div className="head-icon">
        <MenuSharp style={{ color: "rgba(255, 255, 255, 0.822)" }} />
      </div>
      <div className="head-details">
        <Link to="/">
          <div className="side-icons">
            <BarChartSharp className="icons-one" />
            <p>Dashboard</p>
          </div>
        </Link>
        <Link to="/products">
          <div className="side-icons">
            <BusinessCenterSharp className="icons-one" />
            <p>Products</p>
          </div>
        </Link>
        <Link to="/orders">
          <div className="side-icons">
            <ShoppingCartSharp className="icons-one" />
            <p>Orders</p>
          </div>
        </Link>
        <Link to="/transactions">
          <div className="side-icons">
            <AccountBalanceWalletSharp className="icons-one" />
            <p>Transactions</p>
          </div>
        </Link>
        <Link to="/delivery-boy">
          <div className="side-icons">
            <LocalHospitalSharp className="icons-one" />
            <p>Delivery boy</p>
          </div>
        </Link>

        <Link to="/feedback">
          <div className="side-icons">
            <ForumSharp className="icons-one" />
            <p>FeedBack</p>
          </div>
        </Link>
        <Link to="/signin">
          <div className="side-icons">
            <ExitToAppSharp className="icons-one" />
            <p>Logout</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default withRouter(SideBar);
