import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categoris from '../Categoris';
import AddSreen from '../AddSreen';
import Settings from '../Settings';
import SignInPage from '../../SingIn';


const Stack = createNativeStackNavigator();

const ProductStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Categoris}
                options={{
                    headerShown: false,
                }} />
            <Stack.Screen name="AddSreen" component={AddSreen}
                options={{
                    headerShown: false,
                }} />
        </Stack.Navigator>
    )
}

const SettingsStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Settings' component={Settings}
                options={{
                    headerShown: false,
                }} />
        </Stack.Navigator>
    )
}

const LogInStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='SignInPage' component={SignInPage}
                options={{
                    headerShown: false,
                }} />
        </Stack.Navigator>
    )
}
export { ProductStack ,SettingsStack,LogInStack }