import React, { useState, useCallback } from 'react'
import { Text, SafeAreaView, StyleSheet, RefreshControl } from 'react-native'
import { ScrollView, View } from 'native-base'
import { useFocusEffect } from '@react-navigation/native'

import AppBar from '../../components/AppBar'
import DoubleTapToClose from '../../components/DoubleTapToClose'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    flex: 1,
  },
  content: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    backgroundColor: '#fff',
  },
  text: {
    color: 'red',
    fontSize: 24,
  },
})

const Home = () => {
  const [isRefresh, setIsRefresh] = useState(false)

  const handleRefresh = () => {
    setIsRefresh(true)
    console.log('refreshing')
    setTimeout(() => {
      setIsRefresh(false)
    }, 2000)
  }

  useFocusEffect(
    useCallback(() => {
      console.log('Screen Home was focused')
      // Do something when the screen is focused
      return () => {
        console.log('Screen Home was unfocused')
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      }
    }, []),
  )

  return (
    <>
      <DoubleTapToClose />
      <SafeAreaView style={styles.container}>
        <ScrollView
          style={styles.content}
          showsHorizontalScrollIndicator={false}
          refreshControl={<RefreshControl refreshing={isRefresh} onRefresh={handleRefresh} />}
        >
          <AppBar />
          <View style={styles.main}>
            <Text style={styles.text}>Uje Was Here</Text>
            <Text style={styles.text}>This is Home</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default Home
