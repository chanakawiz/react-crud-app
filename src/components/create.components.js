import React, { Component } from "react";

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangePersonName = this.onChangePersonName.bind(this);
    this.onChangeBuisnessName = this.onChangeBuisnessName.bind(this);
    this.onChangeNICNumber = this.onChangeNICNumber.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      person_name: "",
      buisness_name: "",
      buisness_nic_number: "",
    };
  }

  onChangePersonName(e) {
    this.setState({
      person_name: e.target.value,
    });
  }

  onChangeBuisnessName(e) {
    this.setState({
      buisness_name: e.target.value,
    });
  }

  onChangeNICNumber(e) {
    this.setState({
      buisness_nic_number: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(
      `the values are ${this.state.person_name},${this.state.buisness_name} and ${this.state.buisness_nic_number}`
    );
    this.setState({
      person_name: "",
      buisness_name: "",
      buisness_nic_number: "",
    });
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h2>Add New Buisness </h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Add Person Name</label>
            <input
              type="text"
              className="form-control"
              value={this.state.person_name}
              onChange={this.onChangePersonName}
            />
          </div>
          <br />
          <div className="form-group">
            <label>Add Buisness name</label>
            <input
              type="text"
              className="form-control"
              value={this.state.buisness_name}
              onChange={this.onChangeBuisnessName}
            />
          </div>
          <br />
          <div className="form-group">
            <label>Add NIC Number</label>
            <input
              type="text"
              className="form-control"
              value={this.state.buisness_nic_number}
              onChange={this.onChangeNICNumber}
            />
          </div>
          <br />
          <div className="form-group">
            <input
              type="submit"
              value="Register Buisness name"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
