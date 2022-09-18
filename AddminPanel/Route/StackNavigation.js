import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categoris from '../Categoris';
import ProductSreen from '../ProductSreen';
import Settings from '../Settings';


const Stack = createNativeStackNavigator();

const CatagoryStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Categoris}
                options={{
                    headerShown: false,
                }} />
            <Stack.Screen name="ProductSreen" component={ProductSreen}
                // options={{
                //     headerShown: false, }} 
                    />
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

// const LogInStack = () => {
//     return (
//         <Stack.Navigator>
//             <Stack.Screen name='SignInPage' component={LogInPage}
//                 options={{
//                     headerShown: false,
//                 }} />
//         </Stack.Navigator>
//     )
// }
export { CatagoryStack ,SettingsStack}