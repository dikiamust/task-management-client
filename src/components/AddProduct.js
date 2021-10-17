import React, {Component} from "react";
import {useState, setState} from "react";
import apiService from "../service/api.service";

export default class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product_name: "",
      stock: "",
      purchase_price: "",
      selling_price: "",
      UOM: "",
    };

    this.handleProductName = this.handleProductName.bind(this);
    this.handleStock = this.handleStock.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePurchase = this.handlePurchase.bind(this);
    this.handleSelling = this.handleSelling.bind(this);
    this.handleUOM = this.handleUOM.bind(this);
  }

  handleProductName(event) {
    this.setState({product_name: event.target.value});
  }
  handleStock(event) {
    this.setState({stock: event.target.value});
  }
  handlePurchase(event) {
    this.setState({purchase_price: event.target.value});
  }
  handleSelling(event) {
    this.setState({selling_price: event.target.value});
  }

  handleUOM(event) {
    this.setState({UOM: event.target.value});
  }

  handleSubmit(event) {
    let data = JSON.stringify({
      product_name: this.state.product_name,
      stock: this.state.stock,
      purchase_price: this.state.purchase_price,
      selling_price: this.state.selling_price,
      UOM: this.state.UOM,
    });

    const accesss_token = localStorage.getItem("access_token");
    apiService
      .createProduct(data, accesss_token)
      .then((response) => {
        this.props.router.push("/InventoryDashboard");
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
                <p className="text-muted">Add Product</p>
                <div className="input-group mb-1">
                  <span className="input-group-addon">
                    <i className="icon-user"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Product Name"
                    value={this.state.product_name}
                    onChange={this.handleProductName}
                  />
                </div>
                <div className="input-group mb-1">
                  <span className="input-group-addon">
                    <i className="icon-user"></i>
                  </span>
                  <input
                    type="number"
                    min="0"
                    className="form-control"
                    placeholder="Stock"
                    value={this.state.stock}
                    onChange={this.handleStock}
                  />
                </div>
                <div className="input-group mb-1">
                  <input
                    type="number"
                    min="0"
                    className="form-control"
                    placeholder="Purchase Price"
                    value={this.state.purchase_price}
                    onChange={this.handlePurchase}
                  />
                </div>
                <div className="input-group mb-1">
                  <span className="input-group-addon"></span>
                  <input
                    type="number"
                    min="0"
                    className="form-control"
                    placeholder="Selling Price"
                    value={this.state.selling_price}
                    onChange={this.handleSelling}
                  />
                </div>

                <div className="input-group mb-1">
                  <span className="input-group-addon"></span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="UOM"
                    value={this.state.UOM}
                    onChange={this.handleUOM}
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
