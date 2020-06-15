import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Home from '../screens/Home'
import Details from '../screens/Details'

const MainApp = createStackNavigator({
  Home: {
    screen: Home,
    
    navigationOptions: {
      headerTitle: 'Home',
      
    },
    path: 'home'
  },
  Details: {
    screen: Details,
    navigationOptions: {
      headerTitle: 'Details'
    },
    path: 'name/:userId'
  }
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
 })

const AppContainer = createAppContainer(MainApp)

export default () => {
  const prefix = 'https//freeflix.live/channels/name'
  return(
      
    <AppContainer uriPrefix={prefix} />
  )
}
