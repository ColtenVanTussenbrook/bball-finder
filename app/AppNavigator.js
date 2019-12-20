import Home from './screens/Home';
import Find from './screens/Find';
import Create from './screens/Create';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const AppNavigator = createStackNavigator({
  Home: {screen: Home},
  Find: {screen: Find},
  Create: {screen: Create},
});

export default createAppContainer(AppNavigator);