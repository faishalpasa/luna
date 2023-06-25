import * as React from 'react'
import { useEffect, useState } from 'react'
import { Platform, BackHandler, ToastAndroid } from 'react-native'

interface Props {
  message: string
}

export const ExecuteOnlyOnAndroid = (props: Props) => {
  const { message } = props
  const [exitApp, setExitApp] = useState(0)
  const backAction = () => {
    setTimeout(() => {
      setExitApp(0)
    }, 2000)

    if (exitApp === 0) {
      setExitApp(exitApp + 1)

      ToastAndroid.show(message, ToastAndroid.SHORT)
    } else if (exitApp === 1) {
      BackHandler.exitApp()
    }
    return true
  }
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction)
    return () => backHandler.remove()
  })
  return <></>
}

export const DoubleTapToClose = () => {
  const message = 'tap back again to exit the App'
  return Platform.OS !== 'ios' ? <ExecuteOnlyOnAndroid message={message} /> : <></>
}

export default DoubleTapToClose
