/*import React from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Src/Screen/Home";
import Productscreen  from "../foodapp/Src/Screen/Productscreen";
import Cartscreen  from "../foodapp/Src/Screen/Cartscreen";
import Checkout  from "../foodapp/Src/Screen/Checkout";
import Login from "./Src/Screen/Login";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Deals from "../foodapp/Src/Screen/Deals";
import Wishlist from "../foodapp/Src/Screen/Wishlist";
import Cart from "../foodapp/Src/Screen/Cart";
import Search from "../foodapp/Src/Screen/Search";
const Stack = createStackNavigator(); 
const BottomTabNavigator = createMaterialBottomTabNavigator(); 

const App = () => {
    return(
      <NavigationContainer>
      <BottomTabNavigator.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor:'#05A845', 
            borderTopLeftRadius: 20, 
            borderTopRightRadius: 20, 
            height: 60, 
            position: 'absolute', 
            bottom: 0, 
            shadowColor: '#000',
            shadowOpacity: 0.1, 
            elevation: 10, 
          },
          tabBarActiveTintColor: '#05A845', 
          tabBarInactiveTintColor: '#7D7B86', 
          tabBarLabelStyle: {
            fontSize: 12,
          },
        }}>
        <BottomTabNavigator.Screen name='Login' component={Login}/>
        <BottomTabNavigator.Screen name='Home' component={Home}/>
        <BottomTabNavigator.Screen name='Deals' component={Deals}/>
        <BottomTabNavigator.Screen name='Cart' component={Cart}/>
        <BottomTabNavigator.Screen name='wishlist' component={Wishlist}/>
        <BottomTabNavigator.Screen name='Search' component={Search}/>
      </BottomTabNavigator.Navigator>
      </NavigationContainer>
    );
  }
  
 /* return ( 
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Bottomtab" component={BottomTab} />
        
        <Stack.Screen name="Productscreen" component={Productscreen} />
        <Stack.Screen name="Cartscreen" component={Cartscreen} />
        <Stack.Screen name="Checkout" component={Checkout} />
      </Stack.Navigator>
    </NavigationContainer>
  );

export default App;
*/

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Src/Screen/Home";
import Productscreen from "../foodapp/Src/Screen/Productscreen";
import Checkout from "../foodapp/Src/Screen/Checkout";
import Login from "./Src/Screen/Login";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Deals from "../foodapp/Src/Screen/Deals";
import Order from "../foodapp/Src/Screen/Order";
import Wishlist from "../foodapp/Src/Screen/Wishlist";
import Cart from "../foodapp/Src/Screen/Cart";
import Search from "../foodapp/Src/Screen/Search";

const Stack = createStackNavigator();
const BottomTabNavigator = createMaterialBottomTabNavigator();

const BottomTab = () => {
  return (
    <BottomTabNavigator.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#05A845',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: 60,
          width:200,
          position: 'absolute',
          bottom: 0,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          elevation: 10,
        },
        tabBarActiveTintColor: '#05A845',
        tabBarInactiveTintColor: '#7D7B86',
        tabBarLabelStyle: {
          fontSize: 12,
        },
      }}
    >
      <BottomTabNavigator.Screen name='Hometab' component={Home} />
      <BottomTabNavigator.Screen name='Deals' component={Deals} />
      <BottomTabNavigator.Screen name='Cart' component={Cart} />
      <BottomTabNavigator.Screen name='Wishlist' component={Wishlist} />
      <BottomTabNavigator.Screen name='Search' component={Search} />
    </BottomTabNavigator.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={BottomTab} options={{ headerShown: false }}/>
        <Stack.Screen name="Productscreen" component={Productscreen} />
        <Stack.Screen name="Order" component={Order} />
        <Stack.Screen name="Checkout" component={Checkout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
