import React from "react";
import "./product.css";
import { Edit, Delete } from "@material-ui/icons";

const Product = () => {
  return (
    <div className="others">
      <div>
        <h3>Products</h3>
        <div className="option-tab">
          <div className="select-tab">
            <input placeholder="search for products"></input>
            <select>
              <option>Quantity</option>
              <option>Price</option>
            </select>
          </div>
          <div>
            <button>Add Products</button>
          </div>
        </div>
        <div>
          <table className="content-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Product Id</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Image one</td>
                <td>#0001</td>
                <td>Aqua</td>
                <td>20 litres</td>
                <td>₹ 50</td>
                <td className="icons-action">
                  <Edit style={{ color: "blue" }} />
                  <Delete style={{ color: "red" }} />
                </td>
              </tr>
              <tr>
                <td>Image two</td>
                <td>#0002</td>
                <td>Bisleri</td>
                <td>10 litres</td>
                <td>₹ 25</td>
                <td className="icons-action">
                  <Edit style={{ color: "blue" }} />
                  <Delete style={{ color: "red" }} />
                </td>
              </tr>
              <tr>
                <td>Image three</td>
                <td>#0002</td>
                <td>Nestie</td>
                <td>5 litres</td>
                <td>₹ 20</td>
                <td className="icons-action">
                  <Edit style={{ color: "blue" }} />
                  <Delete style={{ color: "red" }} />
                </td>
              </tr>
              <tr>
                <td>Image four</td>
                <td>#0004</td>
                <td>Aqua</td>
                <td>10 litres</td>
                <td>₹ 10</td>
                <td className="icons-action">
                  <Edit style={{ color: "blue" }} />
                  <Delete style={{ color: "red" }} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Product;
