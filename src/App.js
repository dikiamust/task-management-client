import "./App.css";
import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./pages/login";
import ManagerDashboard from "./pages/managerDashboard";
import InventoryDashboard from "./pages/inventoryDashboard ";
import AddProduct from "./components/AddProduct";
import AddEmployee from "./components/AddEmployee";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/ManagerDashboard" component={ManagerDashboard} />
          <Route path="/InventoryDashboard" component={InventoryDashboard} />
          <Route path="/AddProduct" component={AddProduct} />
          <Route path="/AddEmployee" component={AddEmployee} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
