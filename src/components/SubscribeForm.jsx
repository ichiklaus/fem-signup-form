import React, { Component, createRef } from "react";
import { Form } from "react-bootstrap";

import SubscribeButton from "./SubscribeButton";

// import "../assets/css/SubscribeForm.css";
import "../assets/css/SubscribeForm.css";

export default class SubscribeForm extends Component {
  firstname = createRef();
  lastname = createRef();
  email = createRef();
  password = createRef();

  render() {
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
          <Form className="row g-2 px-5 py-5 ">
            <Form.Group controlId="firstname">
              <div className="mb-1">
                <Form.Control
                  className="shadow-none fw-bold"
                  type="text"
                  name="firstname"
                  ref={""}
                  // value={""}
                  placeholder="First Name"
                  autoComplete="off"
                />
              </div>
            </Form.Group>
            <Form.Group controlId="lastname">
              <div className="mt-1">
                <Form.Control
                  className="shadow-none fw-bold"
                  type="text"
                  name="lastname"
                  ref={""}
                  // value={""}
                  placeholder="Last Name"
                  autoComplete="off"
                />
              </div>
            </Form.Group>
            <Form.Group controlId="usermail">
              <div className="mt-1">
                <Form.Control
                  className="shadow-none fw-bold"
                  type="email"
                  name="usermail"
                  ref={""}
                  // value={""}
                  placeholder="Email"
                  autoComplete="off"
                />
              </div>
            </Form.Group>
            <Form.Group controlId="password">
              <div className="mt-1">
                <Form.Control
                  className="shadow-none fw-bold"
                  type="password"
                  name="password"
                  ref={""}
                  // value={""}
                  placeholder="Password"
                  autoComplete="off"
                />
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
