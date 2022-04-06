import React, { Component } from "react";
import { Form } from "react-bootstrap";

import SubscribeButton from "./SubscribeButton";

import "../assets/css/SubscribeButton.css";
import "../assets/css/SubscribeForm.css";

export default class SubscribeForm extends Component {
  state = {
    firstname: "",
    lastname: "",
    userEmail: "",
    password: "",
    firstnamePlaceholder: "First Name",
    laststnamePlaceholder: "Last Name",
    userEmailPlaceholder: "Email",
    passwordPlaceholder: "Password",
  };

  onChangeHandler = (e) => {
    const { name, value } = e.target;
    if (name === "firstname") {
      this.setState({
        firstname: value,
      });
    }
    if (name === "lastname") {
      this.setState({
        lastname: value,
      });
    }
    if (name === "userEmail") {
      this.setState({
        userEmail: value,
      });
    }
    if (name === "password") {
      this.setState({
        password: value,
      });
    }
  };

  onSubmitHandler = (e) => {
    const { firstname, lastname, userEmail, password } = this.state;
    if (firstname === "") {
      this.setState({
        emptyFirstname: "First Name cannot be empty",
        firstnamePlaceholder: "",
      });
      e.preventDefault();
    }
    if (lastname === "") {
      this.setState({
        emptyLastname: "Last Name cannot be empty",
        laststnamePlaceholder: "",
      });
      e.preventDefault();
    }
    if (userEmail === "") {
      this.setState({
        emptyUserEmail: "Looks like this is not an email",
        userEmailPlaceholder: "email@example.com",
        placeholderRed: "placeholderRed",
      });
      e.preventDefault();
    }
    if (password === "") {
      this.setState({
        emptyPassword: "Password cannot be empty",
        passwordPlaceholder: "",
      });
      e.preventDefault();
    } else {
      console.log(this.state);
    }
  };

  render() {
    const {
      firstname,
      lastname,
      userEmail,
      password,
      emptyFirstname,
      emptyLastname,
      emptyUserEmail,
      emptyPassword,
      firstnamePlaceholder,
      laststnamePlaceholder,
      userEmailPlaceholder,
      passwordPlaceholder,
      placeholderRed,
    } = this.state;

    console.log(
      "🚀 ~ file: SubscribeForm.jsx ~ line 94 ~ SubscribeForm ~ render ~ placeholderRed: ",
      placeholderRed
    );
    return (
      <>
        <div className="bg--blue mb-4 rounded-3 shadow-offset-y text-center">
          <p className="py-3 px-1 text-white">
            {" "}
            <span className="fw-bold">Try it free 7 days</span> then $20/mo.
            thereafter
          </p>
        </div>
        <div className=" bg-light rounded-3 mt-2">
          <Form onSubmit={this.onSubmitHandler} className="row g-2 px-5 py-5 ">
            <Form.Group controlId="firstname">
              <div className="mb-4">
                <Form.Control
                  className="shadow-none fw-bold"
                  type="text"
                  name="firstname"
                  placeholder={firstnamePlaceholder}
                  // value={this.state.firstname}
                  autoComplete="off"
                  onChange={this.onChangeHandler}
                />
                {firstname === "" && (
                  <div className="empty-message-wrapper mb-4 mt-1">
                    <p className="empty-message smaller fw-bold">
                      {emptyFirstname}
                    </p>
                  </div>
                )}
              </div>
            </Form.Group>
            <Form.Group controlId="lastname">
              <div className="mb-4">
                <Form.Control
                  className={`shadow-none fw-bold`}
                  type="text"
                  name="lastname"
                  // value={this.state.lastname}
                  placeholder={laststnamePlaceholder}
                  autoComplete="off"
                  onChange={this.onChangeHandler}
                />
                {lastname === "" && (
                  <div className="empty-message-wrapper mb-4 mt-1">
                    <p className="empty-message smaller fw-bold">
                      {emptyLastname}
                    </p>
                  </div>
                )}
              </div>
            </Form.Group>
            <Form.Group controlId="userEmail">
              <div className="mb-4">
                <Form.Control
                  className={`shadow-none fw-bold ${
                    emptyUserEmail === "Looks like this is not an email"
                      ? "placeholder-red"
                      : null
                  }`}
                  type="text"
                  name="userEmail"
                  // noValidate
                  // value={this.state.userEmail}
                  placeholder={userEmailPlaceholder}
                  autoComplete="off"
                  onChange={this.onChangeHandler}
                />
                {userEmail === "" && (
                  <div className="empty-message-wrapper mb-4 mt-1">
                    <p className="empty-message smaller fw-bold">
                      {emptyUserEmail}
                    </p>
                  </div>
                )}
              </div>
            </Form.Group>
            <Form.Group controlId="password">
              <div className="mb-4">
                <Form.Control
                  className="shadow-none fw-bold"
                  type="password"
                  name="password"
                  // value={this.state.password}
                  placeholder={passwordPlaceholder}
                  autoComplete="off"
                  onChange={this.onChangeHandler}
                />
                {password === "" && (
                  <div className="empty-message-wrapper mb-4 mt-1">
                    <p className="empty-message smaller fw-bold">
                      {emptyPassword}
                    </p>
                  </div>
                )}
              </div>
            </Form.Group>
            <SubscribeButton />
            <p className="smaller mt-3 text-center text--grayish-blue">
              By clicking the button you are agreeing to our{" "}
              <span className="text--red fw-bolder">Terms and Service</span>{" "}
            </p>
          </Form>
        </div>
      </>
    );
  }
}
