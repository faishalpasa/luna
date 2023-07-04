import messaging from '@react-native-firebase/messaging'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { PermissionsAndroid, Platform } from 'react-native'

export async function requestUserPermission() {
  if (Platform.OS === 'android') {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS)
  }

  const authStatus = await messaging().requestPermission()
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL

  // debug
  if (authStatus === messaging.AuthorizationStatus.AUTHORIZED) {
    console.log('User has notification permissions enabled.')
  } else if (authStatus === messaging.AuthorizationStatus.PROVISIONAL) {
    console.log('User has provisional notification permissions.')
  } else {
    console.log('User has notification permissions disabled')
  }

  getFCMToken()

  if (enabled) {
    console.log('Authorization status:', authStatus)
  }
}

async function getFCMToken() {
  const fcmToken = await AsyncStorage.getItem('fcmtoken')
  console.log('old token', fcmToken)

  if (!fcmToken) {
    await messaging().registerDeviceForRemoteMessages()
    const newFcmToken = await messaging().getToken()

    if (newFcmToken) {
      console.log('new token', newFcmToken)
      await AsyncStorage.setItem('fcmtoken', newFcmToken)
    }
  }
}

export const NotificationListener = () => {
  messaging().onNotificationOpenedApp((remoteMessage) => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    )
  })

  messaging()
    .getInitialNotification()
    .then((remoteMessage) => {
      if (remoteMessage) {
        console.log('Notification caused app to open from quit state:', remoteMessage.notification)
      }
    })

  messaging().onMessage(async (remoteMessage) => {
    console.log('Notification on foreground', remoteMessage)
  })
}
