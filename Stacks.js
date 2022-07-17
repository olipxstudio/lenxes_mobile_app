import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './pages/social/Login';
import Register from './pages/social/Register';
import SignupSecurity from './pages/social/SignupSecurity';
import SignupAddress from './pages/social/SignupAddress';
import SignupProfileDetails from './pages/social/SignupProfileDetails';
import SignupFollow from './pages/social/SignupFollow';
import SignupAbout from './pages/social/SignupAbout';
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
            <Stack.Screen name="SignupSecurity" component={SignupSecurity} />
            <Stack.Screen name="SignupAddress" component={SignupAddress} />
            <Stack.Screen name="SignupProfileDetails" component={SignupProfileDetails} />
            <Stack.Screen name="SignupFollow" component={SignupFollow} />
            <Stack.Screen name="SignupAbout" component={SignupAbout} />
            {/* <Stack.Screen name="Account_stack" component={Account_stack} /> */}
        </Stack.Navigator>
    )
}

export default Stacks;