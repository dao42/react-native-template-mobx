import React, { Component, PropTypes } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Button from 'react-native-button'
import { observer } from 'mobx-react/native'
import Icon from 'react-native-vector-icons/FontAwesome'
import ApplicationStyles from '../styles'

import counterStore from '../stores/counter_store'

@observer
export default class CounterScreen extends Component {
  static navigationOptions = {
    tabBarVisible: false,
    title: 'Counter Screen',
  };

  render() {
    return (
      <View style={[styles.container, ApplicationStyles.container]}>
        <Icon style={styles.welcome} name='building' size={30}></Icon>
        <Text style={styles.text}>
          Counter Container Test
        </Text>
        <Text style={styles.text}>Clicked: <Text style={styles.textRed}>{counterStore.counter}</Text> times</Text>
        <Button style={ApplicationStyles.button} onPress={() => counterStore.increment()}>
          |   +1   |
        </Button>
        <Button style={ApplicationStyles.button} onPress={() => counterStore.incrementAsync()}>
          |   +1 async  |
        </Button>
        <Button onPress={ ()=> this.props.navigation.goBack() }>
          Back
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
    marginTop: 100,
    marginBottom: 20,
  },
  text: {
    margin: 10
  },
  textRed: {
    color: 'red',
  },
});
