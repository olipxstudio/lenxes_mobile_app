import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './pages/social/Login';
import Register from './pages/social/Register';
import Home from './Home';
import { TransitionPresets } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Stacks = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                gestureEnabled: false,
                ...TransitionPresets.SlideFromRightIOS,
            }}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            {/* <Stack.Screen name="Account_stack" component={Account_stack} /> */}
        </Stack.Navigator>
    )
}

export default Stacks;