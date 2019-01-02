import React, { Component } from 'react';
import { Provider } from "react-redux";
import LoggedOut from './src/screens/LoggedOut';
import ForgotPassword from './src/screens/ForgotPassword'
import store from './src/redux/store'
import LogIn from './src/screens/LogIn';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <LogIn />
      </Provider>
    )
  }
}