import React, { useState, useEffect, useRef } from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, ScrollView, Image, TextInput, StyleSheet } from 'react-native';
import AuthButton from '../../components/AuthButton';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import Colors from '../../components/Colors';

const SignupSecurity = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRePassword] = useState('');
    
    const [fontsLoaded] = useFonts({
        millik: require('../../assets/fonts/Millik.otf')
    });
    
    if(!fontsLoaded){
        return null;
    }
    
    return (
        <LinearGradient
            colors={['#EFE9D9', '#ffffff']}
            style={{flex:1}}
        >
            <SafeAreaView>
                <KeyboardAvoidingView
                behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
                    <ScrollView>
                        <View style={{ height: Platform.OS === 'android' ? 50 : 0 }} />
                        <View style={styles.container}>
                            <Image source={require('../../assets/logo/lenxes_logo_bg_millik_black.png')} style={{width:110,height:26.6}} />
                            <View style={styles.t_b_space}>
                                <Text style={[styles.title, {fontFamily:'millik'}]}>Account Security</Text>
                            </View>
                            <View>
                                <TextInput onChangeText={(text) => setUsername(text)} style={styles.input} placeholder="Email or Username" />
                                <TextInput onChangeText={(text) => setPassword(text)} style={styles.input} placeholder="Password" secureTextEntry={true} />
                                <TextInput onChangeText={(text) => setRePassword(text)} style={styles.input} placeholder="Confirm Password" secureTextEntry={true} />
                                
                                <AuthButton text="Continue" press={() => navigation.navigate('SignupAddress')} />
                            </View>
                            <View style={styles.alt_action}>
                                <Text style={styles.alt_action_text}>By clicking “Continue” you consent to the collection and processing of your personal data in line with data regulations as described in the Lenxes Privacy Policy and you agree to Lenxes’ terms of acceptable use.</Text>
                            </View>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </LinearGradient>
    );
}


const styles = StyleSheet.create({
    input: {
        width: '100%',
        height: 40,
        borderBottomWidth: 0.5,
        borderBottomColor: Colors.grayNine,
        marginBottom: 30
    },
    container:{
        width: '100%',
        padding: 30,
        boxSizing: 'border-box'
    },
    t_b_space: {
        marginVertical: 50
    },
    title: {
        fontSize: 36,
        paddingRight: 50
    },
    alt_action: {
        flexDirection: 'row',
        marginTop: 45
    },
    alt_action_text: {
        fontSize: 13,
        color: Colors.grayTwelve,
        lineHeight:18
    },
})


export default SignupSecurity;