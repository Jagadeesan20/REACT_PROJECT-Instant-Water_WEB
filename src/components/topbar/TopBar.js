import React from "react";
import "./TopBar.css";
import { withRouter } from "react-router-dom";
import { NotificationsActive, KeyboardArrowDown } from "@material-ui/icons";

const Topbar = (props) => {
  if (props.location.pathname === "/signin") return null;
  return (
    <div className="topbar">
      <div className="topbarIconContainer">
        <NotificationsActive className="notify" />
        <p>Notifications</p>
      </div>
      <div className="topbarIconContainer">
        <p>Jagadeesan</p>
        <KeyboardArrowDown className="notify-dropdown" />
      </div>
    </div>
  );
};

export default withRouter(Topbar);
