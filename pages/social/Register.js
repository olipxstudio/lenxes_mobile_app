import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image, TextInput, StyleSheet, Dimensions, Platform, ScrollView, Pressable, KeyboardAvoidingView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AuthButton from '../../components/AuthButton';
import RNPickerSelect from "react-native-picker-select";
import { useFonts } from 'expo-font';
import Colors from '../../components/Colors';

const { width } = Dimensions.get('window');

const Register = ({ navigation }) => {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [category, setCategory] = useState('');
    
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
                                <Text style={[styles.title, {fontFamily:'millik'}]}>Sign up and start earning</Text>
                            </View>
                            <View>
                                <TextInput onChangeText={(text) => setFullname(text)} style={styles.input} placeholder="Full Name" />
                                <TextInput onChangeText={(text) => setEmail(text)} style={styles.input} placeholder="Email" />
                                <TextInput onChangeText={(text) => setPhone(text)} style={styles.input} placeholder="Phone" />
                                
                                <View style={styles.select_container}>
                                    <Text style={styles.select_label}>What do you do?</Text>
                                    <RNPickerSelect
                                        style={pickerSelectStyles}
                                        placeholder={{ label: "Select what you do", value: null }}
                                        onValueChange={(value) => setCategory(value)}
                                        items={[
                                            { label: "Sell Items / Products", value: "sell" },
                                            { label: "Render Services", value: "services" },
                                            { label: "I'm Employed", value: "employed" },
                                            { label: "I'm an Employer", value: "employer" }
                                        ]}
                                    />
                                </View>
                                
                                <AuthButton text="Sign Up" status={false} press={() => navigation.navigate('SignupSecurity')} />
                            </View>
                            <View style={styles.alt_action}>
                                <Text style={styles.alt_action_text}>Already have an account?</Text>
                                <Pressable onPress={() => navigation.navigate('Login')} style={styles.alt_action_btn}>
                                    <Text style={styles.alt_action_btn_text}>Sign In</Text>
                                </Pressable>
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
        lineHeight: 40,
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


export default Register;