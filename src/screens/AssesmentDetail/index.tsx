import React, { useCallback, useState } from 'react'
import { Text, SafeAreaView } from 'react-native'
import { Button, Actionsheet } from 'native-base'
import { useFocusEffect, useRoute } from '@react-navigation/native'
import axios from 'axios'

interface AssesmentProps {
  id: number
  email: string
  first_name: string
  last_name: string
  avatar: string
}

const Assesment = () => {
  const router = useRoute<ScreenRouteProp>()

  const id = router?.params?.id

  const [isActionSheetOpen, setIsActionSheetOpen] = useState(false)
  const [assesment, setAssesment] = useState<AssesmentProps | null>(null)

  const handleGetAssesmentDetail = (id: number) => {
    axios({ url: `https://reqres.in/api/users/${id}`, method: 'get' }).then((response) => {
      if (response.data.data) {
        setAssesment(response.data.data)
      }
    })
  }

  const handleOpenActionSheet = () => {
    setIsActionSheetOpen(true)
  }

  const handleCloseActionSheet = () => {
    setIsActionSheetOpen(false)
  }

  useFocusEffect(
    useCallback(() => {
      if (id) {
        handleGetAssesmentDetail(id)
      }
      console.log('Screen Assesment Detail was focused')

      return () => {
        console.log('Screen Assesment Detail was unfocused')
      }
    }, [id]),
  )

  return (
    <SafeAreaView>
      <Text>This is Assesment Detail</Text>
      <Text>Assesment ID: {assesment?.id}</Text>
      <Text>
        Assesment Name: {assesment?.first_name} {assesment?.last_name}
      </Text>
      <Button onPress={handleOpenActionSheet}>Open Action Sheet</Button>

      <Actionsheet isOpen={isActionSheetOpen} onClose={handleCloseActionSheet}>
        <Actionsheet.Content>
          <Text>
            Assesment Name: {assesment?.first_name} {assesment?.last_name}
          </Text>
          <Text>Assesment Email: {assesment?.email}</Text>
        </Actionsheet.Content>
      </Actionsheet>
    </SafeAreaView>
  )
}

export default Assesment
