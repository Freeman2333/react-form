import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
export default class FormUserDetails extends Component {
  continue = e => {
    // console.log(e);
    // e.prdeventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange } = this.props;

    return (
      <MuiThemeProvider>
        <>
          <AppBar title="Введіть ваші дані"></AppBar>
          <TextField
            hintText="Введіть ваше ім'я"
            required={true}
            floatingLabelText="Ім'я"
            onChange={handleChange("firstName")}
            defaultValue={values.firstName}
            required
          />
          <br></br>
          <TextField
            required={true}
            hintText="Введіть ваше прізвище"
            floatingLabelText="Прізвище"
            onChange={handleChange("lastName")}
            defaultValue={values.lastName}
            required
          />
          <br></br>
          <TextField
            required={true}
            hintText="Введіть ваш e-mail"
            floatingLabelText="E-mail"
            onChange={handleChange("email")}
            defaultValue={values.email}
            required
          />
          <br></br>
          <RaisedButton
            label="Продовжити"
            primary={true}
            style={styles.button}
            onClick={() => this.continue()}
          />
        </>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};
