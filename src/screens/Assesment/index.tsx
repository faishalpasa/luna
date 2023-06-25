import React, { useCallback, useState } from 'react'
import { Text, SafeAreaView } from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import axios from 'axios'
import { Box, Button } from 'native-base'

interface AssesmentProps {
  id: number
  email: string
  first_name: string
  last_name: string
  avatar: string
}

const Assesment = () => {
  const navigation = useNavigation<ScreenNavigationProp>()
  const [assesments, setAssesments] = useState<AssesmentProps[]>([])

  const handlePushToAssesmentDetail = (id: number) =>
    navigation.navigate('StackAssesmentDetail', { id })

  const handleGetAssesment = () => {
    axios({ url: 'https://reqres.in/api/users', method: 'get' }).then((response) => {
      if (response.data.data) {
        setAssesments(response.data.data)
      }
    })
  }

  useFocusEffect(
    useCallback(() => {
      console.log('Screen Assesment was focused')
      handleGetAssesment()

      return () => {
        console.log('Screen Home was unfocused')
      }
    }, []),
  )

  console.log(assesments)

  return (
    <SafeAreaView>
      <Text>This is Assesment</Text>
      <Box>
        {assesments.map((assesment) => (
          <Box key={assesment.id}>
            <Text>{assesment.first_name}</Text>
            <Text>{assesment.last_name}</Text>
            <Text>{assesment.email}</Text>
            <Button onPress={() => handlePushToAssesmentDetail(assesment.id)}>To Detail</Button>
          </Box>
        ))}
      </Box>
    </SafeAreaView>
  )
}

export default Assesment
