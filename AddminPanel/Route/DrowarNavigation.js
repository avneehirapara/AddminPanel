import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { BottomNavigation } from './TabNAvigation';
import Settings from '../Settings';




const Drawer = createDrawerNavigator();

export const DrawerNavgation = () => {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen options={{
            headerShown: false,
        }} name="Home" component={BottomNavigation} />
            <Drawer.Screen name="Settings" component={Settings} />
        </Drawer.Navigator>
    )
}
