import React, { useState, useEffect, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, SafeAreaView } from 'react-native';

const Home = ({ navigation }) => {
    
    return (
        <SafeAreaView>
            <View style={{marginTop:100}}>
                <Text>Open up App.js to start working on your app!</Text>
                <Button
                    title="Go to Register"
                    onPress={() => navigation.navigate('Register')}
                />
            </View>
            
        </SafeAreaView>
    );
}


export default Home;