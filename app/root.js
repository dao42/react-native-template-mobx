import React, { Component } from 'react'
import { Navigator, Text } from 'react-native'
import Routes from './navigation/routes'
import Router from './navigation/router'

export default class Root extends Component {
  render() {
    return (
      <Navigator
        initialRoute={Routes.WelcomeScreen}
        renderScene={Router.renderScene}
      />
    );
  }
}
