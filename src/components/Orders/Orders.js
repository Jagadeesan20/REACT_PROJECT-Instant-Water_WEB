import React from "react";
import "./orders.css";
const Orders = () => {
  return (
    <div className="others">
      <div>
        <h3>Orders</h3>
        <div className="options-tab">
          <div className="orders-tab">
            <input placeholder="search by customer name"></input>
            <select>
              <option>order status</option>
              <option>Price</option>
            </select>
            <input type="date"></input>
          </div>
          <div>
            <button className="green">Download</button>
            <button className="blue">Add New Order</button>
          </div>
        </div>
        <div>
          <table className="content-table">
            <thead>
              <tr>
                <th>Customer Name</th>
                <th>Product Id</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Delivery Date</th>
                <th>Delivery Time</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Praveen</td>
                <td>#0001</td>
                <td>Aqua</td>
                <td>20 litres</td>
                <td>₹ 50</td>
                <td>25-06-2021</td>
                <td>5.23PM</td>
                <td style={{ color: "red" }}>Pending</td>
              </tr>
              <tr>
                <td>Rajesh</td>
                <td>#0002</td>
                <td>Aqua</td>
                <td>20 litres</td>
                <td>₹ 50</td>
                <td>25-06-2021</td>
                <td>2.23PM</td>
                <td style={{ color: "green" }}>Packed</td>
              </tr>
              <tr>
                <td>Kumar</td>
                <td>#0034</td>
                <td>Aqua</td>
                <td>20 litres</td>
                <td>₹ 50</td>
                <td>25-06-2021</td>
                <td>10.23PM</td>
                <td style={{ color: "green" }}>Packed</td>
              </tr>
              <tr>
                <td>Dominic</td>
                <td>#0023</td>
                <td>Aqua</td>
                <td>20 litres</td>
                <td>₹ 50</td>
                <td>25-06-2021</td>
                <td>12.30PM</td>
                <td style={{ color: "blue" }}>Delivered</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
