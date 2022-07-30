import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from './pages/social/Profile';
import SingleProfilePost from './pages/social/SingleProfilePost';
import { TransitionPresets } from '@react-navigation/stack';

const Stack = createStackNavigator();

const ProfileStacks = () => {
    return (
        <Stack.Navigator
        initialRouteName="Profile"
        screenOptions={{
            headerShown: false,
            gestureEnabled:false,
            ...TransitionPresets.SlideFromRightIOS,
        }}
        >
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="SingleProfilePost" component={SingleProfilePost} />
        </Stack.Navigator>
    )
}

export default ProfileStacks;