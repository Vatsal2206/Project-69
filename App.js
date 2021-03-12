import * as React from 'react';
import ScanScreen from './screens/scanScreen';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import SearchScreen from './screens/searchScreen';

export default class App extends React.Component{
render(){
  return (

      <AppContainer />

  );
}
}

const TabNavigator = createBottomTabNavigator({
  Scan:{screen: ScanScreen},
  Search:{screen:SearchScreen}
})

const AppContainer = createAppContainer(TabNavigator)