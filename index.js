/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Login from './Src/Screen/Login';
import Deals from './Src/Screen/Deals';
import Cart from './Src/Screen/Cart';
import Checkout from './Src/Screen/Checkout';
import Home from './Src/Screen/Home';


AppRegistry.registerComponent(appName, () => App);
