import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Feed from './screens/Feed';
import Other_profile from './screens/Other_profile';
import { TransitionPresets } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Stacks = () => {
    return (
        <Stack.Navigator
        initialRouteName="Feed"
        screenOptions={{
            headerShown: false,
            gestureEnabled:false,
            ...TransitionPresets.SlideFromRightIOS,
        }}
        >
            <Stack.Screen name="Feed" component={Feed} />
            <Stack.Screen name="Other_profile" component={Other_profile} />
        </Stack.Navigator>
    )
}

export default Stacks;