import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Pimpek} from '../screens/Pimpek/Pimpek';
import {Plan} from '../screens/Plan/Plan';
import {ToDo} from '../screens/ToDo/ToDo';
import {Welcome} from '../screens/Welcome/Welcome';
import {Zwierzaczki} from '../screens/Zwierzaczki/Zwierzaczki';

import {useStyles} from './navigation.styles';
import {colors} from '../utils/colors';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Welcome'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'Welcome'} component={Welcome} />
      <Stack.Screen name={'Tab'} component={TabNavigator} />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  const styles = useStyles();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.darkPink,
        tabBarInactiveTintColor: colors.background,
        tabBarStyle: {
          height: 86,
          backgroundColor: colors.lightPink,
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen
        name={'TODO'}
        component={ToDo}
        options={() => ({
          tabBarLabel: 'TODO',
          tabBarLabelStyle: styles.label,
          tabBarIcon: ({focused}) => (
            <Icon
              name="list"
              color={focused ? colors.darkPink : colors.background}
              size={32}
            />
          ),
        })}
      />
      <Tab.Screen
        name={'Zwierzaczki'}
        component={Zwierzaczki}
        options={() => ({
          tabBarLabelStyle: styles.label,
          tabBarLabel: 'Zwierzaczki',
          tabBarIcon: ({focused}) => (
            <Icon
              name="pets"
              color={focused ? colors.darkPink : colors.background}
              size={32}
            />
          ),
        })}
      />
      <Tab.Screen
        name={'Pimpek'}
        component={Pimpek}
        options={() => ({
          tabBarLabelStyle: styles.label,
          tabBarLabel: 'Pimpek',
          tabBarIcon: ({focused}) => (
            <Icon
              name="favorite"
              color={focused ? colors.darkPink : colors.background}
              size={32}
            />
          ),
        })}
      />
      <Tab.Screen
        name={'Notatnik'}
        component={Plan}
        options={() => ({
          tabBarLabelStyle: styles.label,
          tabBarLabel: 'Notatnik',
          tabBarIcon: ({focused}) => (
            <Icon
              name="article"
              color={focused ? colors.darkPink : colors.background}
              size={32}
            />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

export const AppNavigator = () => (
  <NavigationContainer>
    <MainNavigator />
  </NavigationContainer>
);
