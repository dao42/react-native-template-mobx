import React, { Component, PropTypes } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Button from 'react-native-button'
import { observer } from 'mobx-react/native'
import Icon from 'react-native-vector-icons/FontAwesome'
import ApplicationStyles from '../styles'

import counterStore from '../stores/counter_store'

@observer
export default class WelcomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
    tabBarIcon: ({tintColor}) => (
      <Icon name='home' color={tintColor} size={24}/>
    )
  };

  render() {
    return (
      <View style={[styles.container, ApplicationStyles.container]}>
        <Icon style={styles.welcome} name="home" size={30} />
        <Text style={styles.text} >
          Welcome to Mobx React Native Template
        </Text>
        <Text style={styles.text} >
          Now counter is <Text style={styles.textRed}>{counterStore.counter}</Text>
        </Text>
        <Text style={styles.text} >
          Now remote counter is {counterStore.remoteCounter}
        </Text>
        <Button style={ApplicationStyles.button} onPress={ ()=> counterStore.getFromRemote() }>
          Click to get api data
        </Button>
        <Button style={ApplicationStyles.button} onPress={ ()=> this.props.navigation.navigate('SecondScreen') }>
          Click to second screen
        </Button>

        <Button style={ApplicationStyles.button} onPress={ ()=> this.props.navigation.navigate('CounterScreen') }>
          Click to counter screen
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  welcome: {
    textAlign: 'center',
    margin: 10,
    marginTop: 100
  },
  text: {
    textAlign: 'center',
    margin: 10,
  },
  textRed: {
    color: 'red',
  },
});
