import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import s from "./phoneEditor.module.css";

export default class PhoneEditor extends Component {
  state = {
    userName: "",
    userPhone: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name);
    // console.log(value);
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    const newContact = {
      id: uuid(),
      name: this.state.userName,
      number: this.state.userPhone,
    };
    console.log(newContact);
    console.log(this.props.x);
    this.props.x(newContact);
  };

  render() {
    return (
      <>
        <form className={s.phone} onSubmit={this.handleSubmit}>
          <h2>Phone book</h2>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="userName"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="userPhone"
            type="tel"
            value={this.state.phone}
            onChange={this.handleChange}
          />
          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}
