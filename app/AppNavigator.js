import Home from './screens/Home';
import Find from './screens/Find';
import Create from './screens/Create';
import Authentication from './components/Authentication';
import Account from './screens/Account';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const AppNavigator = createStackNavigator({
  Home: {screen: Home},
  Find: {screen: Find},
  Create: {screen: Create},
  Authentication: {screen: Authentication},
  Account: {screen: Account},
});

export default createAppContainer(AppNavigator);