import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Feed from './pages/social/Feed';
import Niche from './pages/social/Niche';
import { TransitionPresets } from '@react-navigation/stack';

const Stack = createStackNavigator();

const FeedStacks = () => {
    return (
        <></>
        // <Stack.Navigator
        // initialRouteName="Feed"
        // screenOptions={{
        //     headerShown: false,
        //     gestureEnabled:false,
        //     ...TransitionPresets.SlideFromRightIOS,
        // }}
        // >
        //     <Stack.Screen name="Feed" component={Feed} />
        //     <Stack.Screen name="Niche" component={Niche} />
        // </Stack.Navigator>
    )
}

export default FeedStacks;