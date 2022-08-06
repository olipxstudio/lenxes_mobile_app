import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SocialTab from './SocialTab';
import Niche from './pages/social/Niche';
import NicheFeed from './pages/social/NicheFeed';
import NicheDetails from './pages/social/NicheDetails';
import DiscussHome from './pages/social/DiscussHome';
import DiscussRoom from './pages/social/DiscussRoom';

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
            <Stack.Screen name="Niche" component={Niche} />
            <Stack.Screen name="NicheFeed" component={NicheFeed} />
            <Stack.Screen name="NicheDetails" component={NicheDetails} />
            <Stack.Screen name="DiscussHome" component={DiscussHome} />
            <Stack.Screen name="DiscussRoom" component={DiscussRoom} />
        </Stack.Navigator>
    )
}

export default SocialAccountsStacks;