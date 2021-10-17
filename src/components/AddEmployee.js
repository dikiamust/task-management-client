import React, {Component} from "react";
import {useState, setState} from "react";
import apiService from "../service/api.service";

export default class AddEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      role: "inventory",
    };

    this.handleUserName = this.handleUserName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleRole = this.handleRole.bind(this);
  }

  handleUserName(event) {
    this.setState({username: event.target.value});
  }
  handleEmail(event) {
    this.setState({email: event.target.value});
  }
  handlePassword(event) {
    this.setState({password: event.target.value});
  }
  handleRole(event) {
    this.setState({role: event.target.value});
  }

  handleSubmit(event) {
    let data = JSON.stringify({
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      password: this.state.role,
    });

    const accesss_token = localStorage.getItem("access_token");
    apiService
      .addEmployee(data, accesss_token)
      .then((response) => {
        this.props.router.push("/ManagerDashboard");
      })
      .catch((e) => {
        alert(e);
      });
  }
  render() {
    return (
      <div className="container " style={{marginTop: 150, maxWidth: 1000}}>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card mx-2">
              <div className="card-block p-2">
                <p className="text-muted">Add Employee</p>
                <div className="input-group mb-1">
                  <span className="input-group-addon">
                    <i className="icon-user"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="User Name"
                    value={this.state.username}
                    onChange={this.handleUserName}
                  />
                </div>
                <div className="input-group mb-1">
                  <span className="input-group-addon">
                    <i className="icon-user"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="email"
                    value={this.state.email}
                    onChange={this.handleEmail}
                  />
                </div>
                <div className="input-group mb-1">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="password"
                    value={this.state.password}
                    onChange={this.handlePassword}
                  />
                </div>
                <div className="input-group mb-1">
                  <span className="input-group-addon"></span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Role"
                    value={this.state.role}
                    onChange={this.handleRole}
                  />
                </div>
                <button
                  type="button"
                  onClick={this.handleSubmit.bind(this)}
                  className="btn btn-block btn-dark mt-2 px-5"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
