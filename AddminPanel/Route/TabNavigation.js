import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProductStack, SettingsStack } from './StackNavigation';
import AntDesign from 'react-native-vector-icons/AntDesign';


const Tab = createBottomTabNavigator();


export const BottomNavigation =() => {
    return (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = focused
                return <AntDesign name={'home'} size={size} color={color} />;
              }  
              else if (route.name === 'setting') {
                iconName = focused
                return <AntDesign name={'setting'} size={size} color={color} />;
              }
    
            },
            tabBarActiveTintColor:'#3498DB',
            tabBarInactiveTintColor: 'black',
    
          })}
        >
          <Tab.Screen name="Home" component={ProductStack}
            options={{
              headerShown: false
            }} />
            <Tab.Screen name="setting" component={SettingsStack}
            options={{
              headerShown: false
            }} />
    
        </Tab.Navigator>
    
      )
    }
    
    
