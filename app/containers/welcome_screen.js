import React, { Component, PropTypes } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Button from 'react-native-button'
import Routes from '../navigation/routes'
import { observer } from 'mobx-react/native'
import Icon from 'react-native-vector-icons/FontAwesome'
import ApplicationStyles from '../styles'

@observer
export default class WeclomeScreen extends Component {
  static propTypes = {
    counterStore: PropTypes.object.isRequired,
    navigator: PropTypes.object.isRequired
  }

  render() {
    return (
      <View style={styles.container}>
        <Icon style={styles.welcome} name="home" size={30} />
        <Text style={styles.text} >
          Weclome to Mobx React Native Template
        </Text>
        <Text style={styles.text} >
          Now counter is <Text style={styles.textRed}>{this.props.counterStore.counter}</Text>
        </Text>
        <Text style={styles.text} >
          Now remote counter is {this.props.counterStore.remoteCounter}
        </Text>
        <Button style={ApplicationStyles.button} onPress={ ()=> this.props.counterStore.getFromRemote() }>
          Click to get api data
        </Button>
        <Button style={ApplicationStyles.button} onPress={ ()=> this.props.navigator.push(Routes.SecondScreen) }>
          Click to second screen
        </Button>

        <Button style={ApplicationStyles.button} onPress={ ()=> this.props.navigator.push(Routes.CounterScreen) }>
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
    backgroundColor: '#F5FCFF',
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
