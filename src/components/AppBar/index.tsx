import React from 'react'
import { HStack, Text, View } from 'native-base'

const AppBar = () => {
  return (
    <View>
      <HStack
        background="violet.800"
        px="1"
        py="3"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        height={50}
      >
        <HStack alignItems="center">
          <Text color="white" fontSize="20" fontWeight="bold">
            Home
          </Text>
        </HStack>
      </HStack>
    </View>
  )
}

export default AppBar
