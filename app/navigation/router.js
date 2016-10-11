import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import NavigationBar from 'react-native-navbar'
import TabNavigator from './tab_navigator'
import tabStore from '../stores/tab_store'
import Icon from 'react-native-vector-icons/FontAwesome'

export default {
  renderScene (route, navigator) {
    const titleConfig = {
      title: route.title
    };

    let leftButtonConfig = { title: '' };

    const renderLeftButton = () => {
      return (
        <TouchableOpacity style={{flexDirection: 'row', paddingHorizontal: 15, alignItems: 'center'}} onPress={ ()=>{ navigator.pop() }}>
          <Icon name="angle-left" size={25} />
        </TouchableOpacity>
      )
    }

    if(! route.hideBackButton) {
      leftButtonConfig = renderLeftButton();
    }

    let view = <route.component {...route.store} navigator={navigator}/>;

    if(route.showTabBar){
      view = <TabNavigator tabStore={tabStore} view={view} navigator={navigator}/>;
    }
    return (
      <View style={{ flex: 1 }}>
        <NavigationBar title={titleConfig} leftButton={leftButtonConfig} style={{backgroundColor: '#eee'}} statusBar={{tintColor: '#eee'}}/>
        {view}
      </View>
    )
  }
}
