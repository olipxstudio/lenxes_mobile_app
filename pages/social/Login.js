import React, { useState, useEffect, useRef } from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, ScrollView, Image, TextInput, Pressable, StyleSheet } from 'react-native';
import AuthButton from '../../components/AuthButton';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import Colors from '../../components/Colors';

const Login = ({ navigation }) => {
    const [email_username, setEmail_username] = useState('');
    const [password, setPassword] = useState('');
    
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
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={{ height: Platform.OS === 'android' ? 50 : 0 }} />
                        <View style={styles.container}>
                            <Image source={require('../../assets/logo/lenxes_logo_bg_millik_black.png')} style={{width:110,height:26.6}} />
                            <View style={styles.t_b_space}>
                                <Text style={[styles.title, {fontFamily:'millik'}]}>Welcome Back</Text>
                            </View>
                            <View>
                                <TextInput onChangeText={(text) => setEmail_username(text)} style={styles.input} placeholder="Email or Username" />
                                <TextInput onChangeText={(text) => setPassword(text)} style={styles.input} placeholder="Password" secureTextEntry={true} />
                                
                                <AuthButton text="Sign In" status={false} press={()=>navigation.navigate("SocialAccountsStacks")} />
                            </View>
                            <View style={styles.alt_action}>
                                <Text style={styles.alt_action_text}>Don't have an account?</Text>
                                <Pressable onPress={() => navigation.navigate('Register')} style={styles.alt_action_btn}>
                                    <Text style={styles.alt_action_btn_text}>Sign Up</Text>
                                </Pressable>
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
        fontSize: 13
    },
    alt_action_btn: {
        marginLeft: 5
    },
    alt_action_btn_text: {
        fontWeight: '700',
        fontSize: 13
    },
})


export default Login;