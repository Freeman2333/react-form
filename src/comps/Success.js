import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

export default class Success extends Component {
  render() {
    const {
      values: { firstName, lastName, email, occupation, city, additional }
    } = this.props;

    return (
      <MuiThemeProvider>
        <>
          <AppBar title="Заявка прийнята"></AppBar>
          <h1>Дякуємо, що звернулись до нас!</h1>
          <p>Ми з Вами зв'яжемося!</p>
        </>
      </MuiThemeProvider>
    );
  }
}
