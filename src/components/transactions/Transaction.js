import React from "react";
import "./transaction.css";

const Transaction = () => {
  return (
    <div className="others">
      <div>
        <h3>Transactions</h3>
        <div className="options-transaction">
          <div className="orders-transaction">
            <input placeholder="search by customer name"></input>
            <select>
              <option>status</option>
              <option>Price</option>
            </select>
            <input type="date"></input>
          </div>
          <div>
            <button className="green">Download</button>
            <button className="blue">Add Transaction</button>
          </div>
        </div>
        <div>
          <table className="transaction-table">
            <thead>
              <tr>
                <th>Customer Name</th>
                <th>Phone No</th>
                <th>Product Id</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Order Time</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Praveen</td>
                <td>
                  <a href="#"> +91 9087672689</a>
                </td>
                <td>#0001</td>
                <td>Aqua</td>
                <td>20 litres</td>
                <td>₹ 50</td>

                <td>25-09-2021 || 5.23PM</td>
                <td style={{ color: "red" }}>Pending</td>
              </tr>
              <tr>
                <td>kumar</td>
                <td>
                  <a href="#"> +91 7893672689</a>
                </td>
                <td>#0023</td>
                <td>Aqua</td>
                <td>20 litres</td>
                <td>₹ 50</td>

                <td>21-01-2021 || 6.30PM</td>
                <td style={{ color: "red" }}>Pending</td>
              </tr>
              <tr>
                <td>Rajesh</td>
                <td>
                  <a href="#"> +91 9087672689</a>
                </td>
                <td>#0045</td>
                <td>Aqua</td>
                <td>20 litres</td>
                <td>₹ 50</td>

                <td>15-09-2021 || 5.23PM</td>
                <td style={{ color: "green" }}>Paid</td>
              </tr>
              <tr>
                <td>Pranesh</td>
                <td>
                  <a href="#"> +91 6734672689</a>
                </td>
                <td>#0095</td>
                <td>Aqua</td>
                <td>20 litres</td>
                <td>₹ 50</td>

                <td>09-09-2021 || 5.23PM</td>
                <td style={{ color: "green" }}>Paid</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
