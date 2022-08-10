import React, { useState, useEffect, useRef } from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, ScrollView, Image, TextInput, Pressable, StyleSheet } from 'react-native';
import AuthButton from '../../components/AuthButton';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import Colors from '../../components/Colors';
import RNPickerSelect from "react-native-picker-select";

const SignupAddress = ({ navigation }) => {
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    
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
                                <Text style={[styles.title, {fontFamily:'millik'}]}>Add Address</Text>
                                <Text style={styles.subtitle}>This address is not visible to others</Text>
                            </View>
                            <View>
                                <View style={styles.select_container}>
                                    <Text style={styles.select_label}>Country</Text>
                                    <RNPickerSelect
                                        style={pickerSelectStyles}
                                        placeholder={{ label: "Select Country", value: null }}
                                        onValueChange={(value) => setCountry(value)}
                                        items={[
                                            { label: "Nigeria", value: "Nigeria" },
                                            { label: "Ghana", value: "Ghana" },
                                            { label: "South Africa", value: "South Africa" },
                                            { label: "USA", value: "USA" },
                                            { label: "Canada", value: "Canada" },
                                        ]}
                                    />
                                </View>
                                <View style={styles.select_container}>
                                    <Text style={styles.select_label}>State</Text>
                                    <RNPickerSelect
                                        style={pickerSelectStyles}
                                        placeholder={{ label: "Select State", value: null }}
                                        onValueChange={(value) => setState(value)}
                                        items={[
                                            { label: "Lagos", value: "Lagos" },
                                            { label: "Delta", value: "Delta" },
                                            { label: "Imo", value: "Imo" },
                                            { label: "Adamawa", value: "Adamawa" },
                                            { label: "Anambra", value: "Anambra" },
                                        ]}
                                    />
                                </View>
                                
                                <TextInput onChangeText={(text) => setCity(text)} style={styles.input} placeholder="City" />
                                <TextInput onChangeText={(text) => setStreet(text)} style={styles.input} placeholder="Street Address" />
                                
                                <AuthButton text="Continue" status={false} press={() => navigation.navigate('SignupProfileDetails')} />
                            </View>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </LinearGradient>
    );
}


const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: Colors.grayNine,
        color: 'black',
        paddingRight: 30 // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 12,
        borderBottomWidth: 0.5,
        borderBottomColor: Colors.grayNine,
        color: 'black',
        paddingRight: 30 // to ensure the text is never behind the icon
    }
});

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
    subtitle: {
        marginTop:10
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
    select_container: {
        width: '100%',
        marginBottom: 30
    },
    select_label: {
        marginBottom:10
    },
    select_input: {
        display: 'block',
        marginLeft: 20
    },
})


export default SignupAddress;