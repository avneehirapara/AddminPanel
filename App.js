import { View, Text } from 'react-native'
import React from 'react'
import Categoris from './AddminPanel/Categoris'
import AddSreen from './AddminPanel/AddSreen'
import { NavigationContainer } from '@react-navigation/native'
import { DrawerNavgation } from './AddminPanel/Route/DrowarNavigation'
import LogInPage from './AddminPanel/LogInPage'
import SignUp from './AddminPanel/SignupPage'
import { Provider } from 'react-redux'
import { configstoreg } from './AddminPanel/redux/reducer/store'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProductSreen from './AddminPanel/ProductSreen'

export default function App() {

  let store = configstoreg();
  return (
    <Provider store={store}>
      {/* <NavigationContainer>
        <DrawerNavgation />
      </NavigationContainer> */}
      <ProductSreen />
      {/* <Categoris/> */}
      {/* <SignUp/> */}
    </Provider>
  )
}