import React, { Component } from 'react';
import { Provider } from "react-redux";
import store from './src/redux/store'
import AppContainer from './src/navigators/AppRouteConfigs';
export const dispatch = store.dispatch

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}