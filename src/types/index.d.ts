// eslint-disable-next-line prettier/prettier
export { }

import type {
  NativeStackScreenProps,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'
import type { RouteProp } from '@react-navigation/native'

declare global {
  type RootTabParamList = {
    TabHome: undefined
    TabAssesment: undefined
    TabProfile: undefined
  }

  type RootStackParamList = {
    StackAssesment: undefined
    StackAssesmentDetail: { id: number }
  }

  type Props = NativeStackScreenProps<RootStackParamList, RootTabParamList>
  type ScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, RootTabParamList>
  type ScreenRouteProp = RouteProp<RootStackParamList>
}
