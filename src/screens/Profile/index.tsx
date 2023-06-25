import React, { useCallback } from 'react'
import { Text, SafeAreaView } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'

const Profile = () => {
  useFocusEffect(
    useCallback(() => {
      console.log('Screen Profile was focused')

      return () => {
        console.log('Screen Home was unfocused')
      }
    }, []),
  )

  return (
    <SafeAreaView>
      <Text>This is Profile</Text>
    </SafeAreaView>
  )
}

export default Profile
