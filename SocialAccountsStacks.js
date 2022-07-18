import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SocialTab from './SocialTab';

import { TransitionPresets } from '@react-navigation/stack';

const Stack = createStackNavigator();

const SocialAccountsStacks = () => {
    return (
        <Stack.Navigator
            initialRouteName="SocialTab"
            screenOptions={{
                headerShown: false,
                gestureEnabled: false,
                ...TransitionPresets.SlideFromRightIOS,
            }}
        >
            <Stack.Screen name="SocialTab" component={SocialTab} />
            {/* <Stack.Screen name="Account_stack" component={Account_stack} /> */}
        </Stack.Navigator>
    )
}

export default SocialAccountsStacks;