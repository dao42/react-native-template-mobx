import React, { Component, PropTypes } from 'react'
import { View, Text, Image } from 'react-native'
import STabNavigator from 'react-native-tab-navigator'
import NavigationBar from 'react-native-navbar'
import { observer } from 'mobx-react/native'

import Routes from './routes'
import ApplicationStyles from '../styles'

@observer
export default class TabNavigator extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      selected: 'welcome'
    }
  }

  renderContainerView(route, navigator) {
    const titleConfig = {
      title: route.title,
      style: ApplicationStyles.navBarTitleStyle,
    };

    let leftButtonConfig = { title: '' };

    let navBar = <NavigationBar title={titleConfig} leftButton={leftButtonConfig} style={ApplicationStyles.navBarStyle} statusBar={ApplicationStyles.statusBarStyle}/>

    let view = <route.component {...route.store} navigator={navigator}/>;

    return (
      <View style={{ flex: 1 }}>
        {navBar}
        {view}
      </View>
    )
  }

  selectTab(which) {
    this.setState({selected: which});
  }

  render() {
    return (
      <STabNavigator tabBarStyle={ApplicationStyles.tabBarStyle}>
        <STabNavigator.Item
          titleStyle ={ApplicationStyles.tabBarTitleStyle}
          selectedTitleStyle={ApplicationStyles.tabBarSelectedTitleStyle}
          selected={this.state.selected === 'welcome'}
          title="Home"
          renderIcon={() => <Image source={require('../images/home.png')} style={ApplicationStyles.iconSize}/>}
          onPress={() => this.selectTab('welcome')}>
          {this.renderContainerView(Routes.WelcomeScreen, this.props.navigator)}
        </STabNavigator.Item>
        <STabNavigator.Item
          titleStyle ={ApplicationStyles.tabBarTitleStyle}
          selectedTitleStyle={ApplicationStyles.tabBarSelectedTitleStyle}
          selected={this.state.selected === 'checkin'}
          title="Checkin"
          renderIcon={() => <Image source={require('../images/checkin.png')} style={ApplicationStyles.iconSize}/>}
          onPress={() => this.selectTab('checkin')}>
          {this.renderContainerView(Routes.CheckinScreen, this.props.navigator)}
        </STabNavigator.Item>
        <STabNavigator.Item
          titleStyle ={ApplicationStyles.tabBarTitleStyle}
          selectedTitleStyle={ApplicationStyles.tabBarSelectedTitleStyle}
          selected={this.state.selected === 'profile'}
          title="Profile"
          renderIcon={() => <Image source={require('../images/profile.png')} style={ApplicationStyles.iconSize}/>}
          onPress={() => this.selectTab('profile')}>
          {this.renderContainerView(Routes.ProfileScreen, this.props.navigator)}
        </STabNavigator.Item>
      </STabNavigator>
    )
  }
}
