import React from "react";
import "./deliveryboy.css";
import { Edit, Delete } from "@material-ui/icons";

const DeliveryBoy = () => {
  return (
    <div className="others">
      <div>
        <h3>Delivery Boy</h3>
        <div className="option-del">
          <div className="select-del">
            <input placeholder="search by Name"></input>
          </div>
          <div>
            <button>Add Delivery Boy</button>
          </div>
        </div>
        <div>
          <table className="content-table">
            <thead>
              <tr>
                <th>Img</th>
                <th>Delivery Boy Name</th>
                <th>Delivery Boy Id</th>
                <th>Phone Number</th>
                <th>Email Id</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Image one</td>
                <td>Ramesh</td>
                <td>#0023</td>
                <td>
                  <a href="#">+91 9827362819</a>
                </td>
                <td>delivery@gmail.com</td>
                <td className="icons-action">
                  <Edit style={{ color: "blue" }} />
                  <Delete style={{ color: "red" }} />
                </td>
              </tr>
              <tr>
                <td>Image Five</td>
                <td>Kamesh</td>
                <td>#0021</td>
                <td>
                  <a href="#">+91 9827362819</a>
                </td>
                <td>delivery@gmail.com</td>
                <td className="icons-action">
                  <Edit style={{ color: "blue" }} />
                  <Delete style={{ color: "red" }} />
                </td>
              </tr>
              <tr>
                <td>Image one</td>
                <td>Kumar</td>
                <td>#0003</td>
                <td>
                  <a href="#">+91 9827362819</a>
                </td>
                <td>delivery@gmail.com</td>
                <td className="icons-action">
                  <Edit style={{ color: "blue" }} />
                  <Delete style={{ color: "red" }} />
                </td>
              </tr>
              <tr>
                <td>Image four</td>
                <td>Kiran</td>
                <td>#0021</td>
                <td>
                  <a href="#">+91 9237362819</a>
                </td>
                <td>delivery@gmail.com</td>
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

export default DeliveryBoy;
