import React from 'react'
import { View } from 'react-native'
import NavigationBar from 'react-native-navbar'
import TabNavigator from './tab_navigator'
import tabStore from '../stores/tab_store'

export default {
  renderScene (route, navigator) {
    const titleConfig = {
      title: route.title
    };

    let leftButtonConfig = { title: '' };
    if(! route.hideBackButton) {
      leftButtonConfig = {
        title: ' <',
        handler: ()=>
          navigator.pop()
      }
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
