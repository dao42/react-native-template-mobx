export default new class Routes {
  get WelcomeScreen () {
    return {
      title: 'Home',
      showTabBar: true,
      hideBackButton: true,
      component: require('../containers/welcome_screen').default,
      store: {
        counterStore: require('../stores/counter_store').default,
      }
    }
  }

  get CheckinScreen () {
    return {
      title: 'Checkin',
      showTabBar: true,
      hideBackButton: true,
      component: require('../containers/checkin_screen').default,
    }
  }

  get TaskScreen () {
    return {
      title: 'Task',
      showTabBar: true,
      hideBackButton: true,
      component: require('../containers/task_screen').default,
    }
  }

  get ProfileScreen () {
    return {
      title: 'Profile',
      showTabBar: true,
      hideBackButton: true,
      component: require('../containers/profile_screen').default,
    }
  }

  get SecondScreen () {
    return {
      title: 'Second Screen',
      component: require('../containers/second_screen').default,
    }
  }

  get CounterScreen () {
    return {
      title: 'Counter Screen',
      component: require('../containers/counter_screen').default,
      store: {
        counterStore: require('../stores/counter_store').default,
      }
    }
  }
}
