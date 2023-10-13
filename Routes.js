import { Platform, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Ionicons,
  Feather,
  FontAwesome,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

import Login from './Pages/Login/index';
import Home from './Pages/Home/index';
import Transactions from './Pages/Transactions/index';
import Goals from './Pages/Goals/index';
import AddGoals from './Pages/AddGoals/index';

import {
  primary,
  secundary,
  terciary,
  quaternary,
  quinternary,
} from './colors';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Routes() {
  function Tabs() {
    return (
      <Tab.Navigator
        initialRouteName={'Home'}
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            position: 'absolute',
            backgroundColor: secundary,
            borderTopWidth: 0,
            borderRadius: Platform.OS === 'ios' ? 0 : 20,
            height: Platform.OS === 'ios' ? 70 : 50,
            right: Platform.OS === 'ios' ? 0 : 110,
            left: Platform.OS === 'ios' ? 0 : 110,
            bottom: Platform.OS === 'ios' ? 10 : 10,
            paddingBottom: Platform.OS === 'ios' ? 5 : 0,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => {
              if (focused) {
                return (
                  <View style = {{borderColor:terciary,borderBottomWidth:4,margin:2}}>
                    <Ionicons
                      name="home"
                      size={Platform.OS === 'ios' ? 38 : 30}
                      color={terciary}
                    />
                  </View>
                );
              }
              return (
                <Ionicons
                  name="home-outline"
                  size={Platform.OS === 'ios' ? 38 : 30}
                  color={color}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Goals"
          component={Goals}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => {
              if (focused) {
                return (
                  <View style = {{borderColor:terciary,borderBottomWidth:4,margin:2}}>
                  <MaterialCommunityIcons
                    name="clipboard-list"
                    size={Platform.OS === 'ios' ? 38 : 30}
                    color={terciary}
                  />
                   </View>
                );
              }
              return (
                <MaterialCommunityIcons
                  name="clipboard-list-outline"
                  size={Platform.OS === 'ios' ? 38 : 30}
                  color={color}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Transactions"
          component={Transactions}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => {
              if (focused) {
                return (
                  <View style = {{borderColor:terciary,borderBottomWidth:4,margin:2}}>
                  <FontAwesome
                    name="pie-chart"
                    size={Platform.OS === 'ios' ? 35 : 30}
                    color={terciary}
                  />
                   </View>
                );
              }
              return (
                <Feather
                  name="pie-chart"
                  size={Platform.OS === 'ios' ? 37 : 30}
                  color={color}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    );
  }
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Tabs} />
      <Stack.Screen
        name="AddGoals"
        component={AddGoals}
        options={{ presentation: 'card' }}
      />
    </Stack.Navigator>
  );
}
