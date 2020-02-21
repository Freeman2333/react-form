import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";
export default class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    additional: ""
  };
  // proceed
  nextStep = () => {
    const { step } = this.state;
    if (this.state.step === 1) {
      if (
        this.state.firstName == "" ||
        this.state.lastName == "" ||
        this.state.email == ""
      ) {
        alert("Заповніть всі дані");
      } else {
        this.setState({
          step: step + 1
        });
      }
    } else if (this.state.step === 2) {
      if (
        this.state.ocupation == "" ||
        this.state.additional == "" ||
        this.state.city == ""
      ) {
        alert("Заповніть всі дані");
      } else {
        this.setState({
          step: step + 1
        });
      }
    }
    else{
      this.setState({
        step: step + 1
      });
    }
  };
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };
  // handle chage

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };
  render() {
    const { step } = this.state;
    const {
      firstName,
      lastName,
      email,
      occupation,
      city,
      additional
    } = this.state;
    const values = {
      firstName,
      lastName,
      email,
      occupation,
      city,
      occupation,
      additional
    };
    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <>
            <FormPersonalDetails
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          </>
        );
      case 3:
        return (
          <>
            <Confirm
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              values={values}
            />
          </>
        );
      case 4:
        return <Success values={values} />;
    }
  }
}
