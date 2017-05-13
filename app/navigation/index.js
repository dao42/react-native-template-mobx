import { TabNavigator, StackNavigator } from 'react-navigation'

import WelcomeScreen from '../containers/welcome_screen'
import SecondScreen from '../containers/second_screen'
import CounterScreen from '../containers/counter_screen'
import CheckinScreen from '../containers/checkin_screen'
import ThirdScreen from '../containers/third_screen'

// see here for options: https://reactnavigation.org/docs/navigators/tab
const TabNavigation = TabNavigator({
  HomeTab: { screen: WelcomeScreen },
  CheckinTab: { screen: CheckinScreen },
}, {
  animationEnabled: false,
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  backBehavior: 'none',
});

// add your router below
const Navigation = StackNavigator({
  Main: { screen: TabNavigation },
  SecondScreen: { screen: SecondScreen },
  CounterScreen: { screen: CounterScreen },
  ThirdScreen: { screen: ThirdScreen },
});

export default Navigation
