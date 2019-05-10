import React, { Component } from "react";
import Head from "../Register/Header";
import "./List.css";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderData() {
    const newData = JSON.parse(localStorage.getItem("EmployeesData"));
    return (
      <div className="List">
        <table>
          <thead>
            <tr>
              <th>NAME</th>
              <th>AGE</th>
              <th>D.O.B</th>
              <th>CONTACT</th>
              <th>CPF</th>
              <th>RG</th>
              <th>ADDRESS</th>
              <th>NUM</th>
              <th>CITY</th>
              <th>STATE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{newData.name}</td>
              <td>{newData.age}</td>
              <td>{newData.dob}</td>
              <td>{newData.phoneNum}</td>
              <td>{newData.cpf}</td>
              <td>{newData.rg}</td>
              <td>{newData.adrs}</td>
              <td>{newData.num}</td>
              <td>{newData.city}</td>
              <td>{newData.sta}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  render() {
    return (
      <div className="List">
        <Head title="Quick-tech's Employees" />
        {this.renderData()}
      </div>
    );
  }
}

export default List;
