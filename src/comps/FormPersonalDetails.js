import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
export default class FormPersonalDetails extends Component {
  continue = e => {
    // e.prdeventDefault();
    this.props.nextStep();
  };
  back = e => {
    // e.prdeventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, handleChange } = this.props;

    return (
      <MuiThemeProvider>
        <>
          <AppBar title="Введіть особисті дані"></AppBar>
          <TextField
            required={true}
            hintText="Введіть рід діяльності"
            floatingLabelText="Рід діяльності"
            onChange={handleChange("occupation")}
            defaultValue={values.occupation}
          />
          <br></br>
          <TextField
            required={true}
            hintText="Введіть ваше місто"
            floatingLabelText="Місто"
            onChange={handleChange("city")}
            defaultValue={values.city}
          />
          <br></br>
          <TextField
            required={true}
            hintText="Додаткові відомості"
            floatingLabelText="Додатково"
            onChange={handleChange("additional")}
            defaultValue={values.additional}
          />
          <br></br>
          <RaisedButton
            label="Продовжити"
            primary={true}
            style={styles.button}
            onClick={() => this.continue()}
          />
          <RaisedButton
            label="Назад"
            primary={false}
            style={styles.button}
            onClick={() => this.back()}
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
