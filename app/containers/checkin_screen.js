import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Button from 'react-native-button'
import { observer } from 'mobx-react/native'
import Icon from 'react-native-vector-icons/FontAwesome'

import ApplicationStyles from '../styles'

@observer
export default class CheckinScreen extends Component {
  static navigationOptions = {
    title: 'Checkin',
    tabBarIcon: ({tintColor}) => (
      <Icon name='user' color={tintColor} size={24}/>
    )
  };

  render() {
    return (
      <View style={[styles.container, ApplicationStyles.container]}>
        <Text style={styles.welcome} >
          CheckinScreen
        </Text>
        <Button onPress={()=>this.props.navigation.navigate('ThirdScreen')} >
          To ThirdScreen
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
