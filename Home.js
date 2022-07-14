import React, { useState, useEffect, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import {useTailwind} from 'tailwind-rn';

const Home = () => {
    const tw = useTailwind();
    
    return (
        <View style={tw('flex-1 bg-black justify-center items-center')}>
            <Text style={tw('text-red-600')}>Open up App.js to start working on your app!</Text>
        </View>
    );
}


export default Home;