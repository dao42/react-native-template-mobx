import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Button from 'react-native-button'

import ApplicationStyles from '../styles'

export default class SecondScreen extends Component {
  static navigationOptions = {
    tabBarVisible: false,
    title: 'Second Screen',
  };

  render() {
    return (
      <View style={[styles.container, ApplicationStyles.container]}>
        <Text style={styles.welcome}>
          Second Screen Container
        </Text>
        <Button style={styles.instructions} onPress={ ()=> this.props.navigation.goBack() }>
          Back to Prev Screen
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    textAlign: 'center',
    margin: 10
  },
});
