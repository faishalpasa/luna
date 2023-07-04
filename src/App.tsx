import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
import { NativeBaseProvider } from 'native-base'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import 'react-native-gesture-handler'

import Home from './screens/Home'
import Assesment from './screens/Assesment'
import AssesmentDetail from './screens/AssesmentDetail'
import Profile from './screens/Profile'
// import Notif from './screens/Notification'

import { requestUserPermission, NotificationListener } from './utils/notification'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator<RootStackParamList>()

const AssesmentStack = () => {
  return (
    <Stack.Navigator initialRouteName="StackAssesment" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="StackAssesment" component={Assesment} />
      <Stack.Screen name="StackAssesmentDetail" component={AssesmentDetail} />
    </Stack.Navigator>
  )
}

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        unmountOnBlur: true,
      }}
    >
      <Tab.Screen name="TabHome" component={Home} options={{ tabBarLabel: 'Home' }} />
      <Tab.Screen
        name="TabAssesment"
        component={AssesmentStack}
        options={{ tabBarLabel: 'Assesment' }}
      />
      <Tab.Screen name="TabProfile" component={Profile} options={{ tabBarLabel: 'Profile' }} />
      {/* <Tab.Screen name="TabNotif" component={Notif} options={{ tabBarLabel: 'Notif' }} /> */}
    </Tab.Navigator>
  )
}

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide()
    }, 1000)

    requestUserPermission()
    NotificationListener()
  }, [])
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <BottomNavigation />
      </NavigationContainer>
    </NativeBaseProvider>
  )
}

export default App
