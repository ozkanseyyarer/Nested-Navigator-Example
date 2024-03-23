import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import Member from './src/pages/member/Member';
import Profile from './src/pages/profile/Profile';
import MemberDetail from './src/pages/member/MemberDetail';
import MemberUpdate from './src/pages/member/MemberUpdate';
import ProfileEdit from './src/pages/profile/ProfileEdit';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './src/pages/HomeScreen';
import SettingsScreen from './src/pages/SettingsScreen';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


function MemberDrawer(){
  return (
    <Drawer.Navigator >
      <Drawer.Screen name="Home Screen" component={HomeScreen} />
      <Drawer.Screen name="Settings Detail" component={SettingsScreen} />
    </Drawer.Navigator>
  )
}

function MemberStack(){
  return (
    <Stack.Navigator >
      <Stack.Screen name="Member Screen" component={Member} />
      <Stack.Screen name="Member Detail" component={MemberDetail} />
      <Stack.Screen name="Member Update" component={MemberUpdate} />
    </Stack.Navigator>
  )
}

function ProfileStack(){
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProfileScreen" component={Profile} />
      <Stack.Screen name="ProfileEditScreen" component={ProfileEdit} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Main" component={MainTab} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

function MainTab() {
  return (
    <Tab.Navigator initialRouteName="Member">
      <Tab.Screen name="Member" component={MemberStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({})
