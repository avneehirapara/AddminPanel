import { View, Text } from 'react-native'
import React from 'react'
import Categoris from './AddminPanel/Categoris'
import AddSreen from './AddminPanel/AddSreen'
import { NavigationContainer } from '@react-navigation/native'
import { DrawerNavgation } from './AddminPanel/Route/DrowarNavigation'
import LogInPage from './AddminPanel/LogInPage'
import SignUp from './AddminPanel/SignupPage'


export default function App() {

  return (
    
    // <>
    // {/* <Categoris /> */}
    // {/* <AddSreen /> */}
    // {/* <LogInPage /> */}
    // {/* <SignUp /> */}
    // </>

    <NavigationContainer>
       <DrawerNavgation />
    </NavigationContainer>
  )
}