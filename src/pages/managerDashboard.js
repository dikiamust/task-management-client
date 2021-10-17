import React, {Component} from "react";
import apiService from "../service/api.service";

export default class ManagerDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
    };
  }

  componentDidMount() {
    this.retrieveEmployees();
  }

  retrieveEmployees() {
    apiService
      .allEmployee(localStorage.getItem("access_token"))
      .then((response) => {
        this.setState({
          employees: response.data.data,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  // signOut() {
  //   localStorage.clear();
  //   window.location.href = "/";
  // }

  // onClick={this.signOut()}

  render() {
    return (
      <div>
        <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
          <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">
            Task Management
          </a>
          <button
            className="navbar-toggler position-absolute d-md-none collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#sidebarMenu"
            aria-controls="sidebarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <input
            className="form-control form-control-dark w-100"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
          <div className="navbar-nav">
            <div className="nav-item text-nowrap">
              <a className="nav-link px-3" href="#">
                Sign Out
              </a>
            </div>
          </div>
        </header>
        <div className="container-fluid">
          <div className="row">
            <nav
              id="sidebarMenu"
              className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
            >
              <div className="position-sticky pt-3">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <button className="btn-dark rounded-pill mt-5 px-3">
                      Add Employee
                    </button>
                  </li>
                  <li>
                    <button className="btn-dark rounded-pill mt-4 px-3">
                      Visit Employee Dashboard
                    </button>
                  </li>
                </ul>
              </div>
            </nav>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <h2 className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-5 border-bottom">
                Manager Dashboard
              </h2>
              <h2>List Employees</h2>
              <div className="table-responsive mt-3">
                <table className="table table-striped table-sm">
                  <thead>
                    <tr>
                      <th scope="col">Id</th>
                      <th scope="col">Eployee Name</th>
                      <th scope="col">Email Address</th>
                      <th scope="col">Created At</th>
                      <th scope="col">Updated At</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        {" "}
                        {this.state.employees.map((employee) => (
                          <li>{employee._id}</li>
                        ))}
                      </td>
                      <td>
                        {this.state.employees.map((employee) => (
                          <li>{employee.username}</li>
                        ))}
                      </td>
                      <td>
                        {" "}
                        {this.state.employees.map((employee) => (
                          <li>{employee.email}</li>
                        ))}
                      </td>

                      <td>
                        {" "}
                        {this.state.employees.map((employee) => (
                          <li>{employee.createdAt}</li>
                        ))}
                      </td>
                      <td>
                        {" "}
                        {this.state.employees.map((employee) => (
                          <li>{employee.updatedAt}</li>
                        ))}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}
