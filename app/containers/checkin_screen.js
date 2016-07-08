import React, { Component, PropTypes } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Button from 'react-native-button'
import Routes from '../navigation/routes'
import { observer } from 'mobx-react/native'

@observer
export default class CheckinScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome} >
          CheckinScreen
        </Text>
        <Button onPress={()=>this.props.navigator.push(Routes.SecondScreen)} >
          To SecondScreen
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
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    textAlign: 'center',
    margin: 10
  },
});
