import React from "react";
import "./dashboard.css";
import BarChart from "../charts/BarChart";
import Doughnut from "../charts/Donut";

import { KeyboardArrowDown } from "@material-ui/icons";

const Dashboard = () => {
  return (
    <div className="others">
      <div className="dashboard">
        <h3>Dashboard</h3>
        <div className="select-dash">
          <h5>Sales Activity</h5>
          <select>
            <option>today</option>
            <option>tomorrow</option>
          </select>
        </div>

        {/* Top Box */}
        <div className="box">
          <div className="box-size orange">
            <p>PENDING</p>
            <p style={{ fontWeight: "bolder", fontSize: "24px" }}>12</p>
          </div>
          <div className="box-size blue">
            <p>PACKED</p>
            <p style={{ fontWeight: "bolder", fontSize: "24px" }}>42</p>
          </div>
          <div className="box-size green">
            <p>DELIVERED</p>
            <p style={{ fontWeight: "bolder", fontSize: "24px" }}>27</p>
          </div>
          <div className="box-size pink">
            <p>CANCELLED</p>
            <p style={{ fontWeight: "bolder", fontSize: "24px" }}>9</p>
          </div>
        </div>

        {/* Graphs */}
        <div className="graphs">
          <div className="select-dashs">
            <h5>Sales Activity</h5>
            <BarChart />
          </div>
          <div className="select-circle-dashes">
            <h5>Transactions</h5>
            <Doughnut />
          </div>
        </div>

        {/* Details box */}
        <div className="boxes">
          <div className="box-sizes">
            <h4>Product Details</h4>
            <div className="detail-box">
              <p>Availibility</p>
              <p>07</p>
            </div>
            <div className="detail-box">
              <p>High Stocked Items</p>
              <p>02</p>
            </div>
            <div className="detail-box">
              <p>Low Stocked Items</p>
              <p>03</p>
            </div>
          </div>
          <div className="box-sizes">
            <h4>Transactions Details</h4>
            <div className="detail-box">
              <p>Due</p>
              <p>₹160</p>
            </div>
            <div className="detail-box">
              <p>Paid</p>
              <p>₹5200</p>
            </div>
            <div className="detail-box">
              <p>Details</p>
              <p>₹5360</p>
            </div>
          </div>
          <div className="box-sizes">
            <h4>Inventory Details</h4>
            <div className="detail-box">
              <p>In Stock</p>
              <p>67</p>
            </div>
            <div className="detail-box">
              <p>Ordered & Approved</p>
              <p>23</p>
            </div>
            <div className="detail-box">
              <p>Empty canes</p>
              <p>35</p>
            </div>
            <div className="detail-box">
              <p>Total canes</p>
              <p>125</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
