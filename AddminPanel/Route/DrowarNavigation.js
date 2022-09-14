import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { BottomNavigation } from './TabNAvigation';
import Settings from '../Settings';
import Catagari1 from '../Catagari1';
import Categoris from '../Categoris';




const Drawer = createDrawerNavigator();

export const DrawerNavgation = () => {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen options={{
            headerShown: false,
        }} name="Categoris" component={Categoris} />
            <Drawer.Screen name="Catagari1" component={Catagari1} />
        </Drawer.Navigator>
    )
}
