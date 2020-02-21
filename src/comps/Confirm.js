import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";
export default class FormUserDetails extends Component {
  continue = e => {
    console.log(e);
    // e.prdeventDefault();
    this.props.nextStep();
  };
  back = e => {
    // e.prdeventDefault();
    this.props.prevStep();
  };
  render() {
    const {
      values: { firstName, lastName, email, occupation, city, additional }
    } = this.props;

    return (
      <MuiThemeProvider>
        <>
          <AppBar title="Підтвердіть введені дані"></AppBar>
          <List>
            <ListItem primaryText="Ім'я" secondaryText={firstName}></ListItem>
            <ListItem
              primaryText="Прізвище"
              secondaryText={lastName}
            ></ListItem>
            <ListItem primaryText="E-mail" secondaryText={email}></ListItem>
            <ListItem
              primaryText="Рід діяльності"
              secondaryText={additional}
            ></ListItem>
            <ListItem primaryText="Місто" secondaryText={city}></ListItem>
            <ListItem
              primaryText="Додатково"
              secondaryText={additional}
            ></ListItem>
          </List>
          <RaisedButton
            label="Підтвердити і продовжити"
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
