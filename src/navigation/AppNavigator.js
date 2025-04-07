import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../components/Theme';

import BlogsScreen from '../screens/BlogsScreen';
import PublishScreen from '../screens/PublishScreen';
import SearchScreen from '../screens/SearchScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Blogs') {
              iconName = focused ? 'newspaper' : 'newspaper-outline';
            } else if (route.name === 'Publish') {
              iconName = focused ? 'create' : 'create-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.secondary,
          tabBarStyle: { backgroundColor: colors.white },
        })}
      >
        <Tab.Screen name="Blogs" component={BlogsScreen} />
        <Tab.Screen name="Publish" component={PublishScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator; 