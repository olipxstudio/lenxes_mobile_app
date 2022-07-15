import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image, TextInput, StyleSheet, Dimensions, Platform, ScrollView, Pressable, KeyboardAvoidingView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AuthButton from '../../components/AuthButton';
import RNPickerSelect from "react-native-picker-select";

const { width } = Dimensions.get('window');

const Register = ({ navigation }) => {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [category, setCategory] = useState('');
    
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
                                <Text style={styles.title}>Sign up and start earning</Text>
                            </View>
                            <View>
                                <TextInput onChangeText={(text) => setFullname(text)} style={styles.input} placeholder="Full Name" />
                                <TextInput onChangeText={(text) => setEmail(text)} style={styles.input} placeholder="Email" />
                                <TextInput onChangeText={(text) => setPhone(text)} style={styles.input} placeholder="Phone" />
                                <TextInput onChangeText={(text) => setCategory(text)} style={styles.input} placeholder="I sell" />
                                
                                <View style={styles.select_container}>
                                    <Text style={styles.select_label}>What do you do?</Text>
                                    <RNPickerSelect
                                        style={pickerSelectStyles}
                                        placeholder={{ label: "Select you favourite language", value: null }}
                                        onValueChange={(value) => console.log(value)}
                                        items={[
                                            { label: "JavaScript", value: "JavaScript" },
                                            { label: "TypeScript", value: "TypeScript" },
                                            { label: "Python", value: "Python" },
                                            { label: "Java", value: "Java" },
                                            { label: "C++", value: "C++" },
                                            { label: "C", value: "C" },
                                        ]}
                                    />
                                </View>
                                
                                <AuthButton text="Sign Up" />
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
        borderBottomColor: '#ccc',
        color: 'black',
        paddingRight: 30 // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 12,
        borderBottomWidth: 0.5,
        borderBottomColor: '#ccc',
        color: 'black',
        paddingRight: 30 // to ensure the text is never behind the icon
    }
});

const styles = StyleSheet.create({
    input: {
        width: '100%',
        height: 40,
        borderBottomWidth: 0.5,
        borderBottomColor: '#ccc',
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
        fontWeight: '800',
        paddingRight: 50
    },
    alt_action: {
        flexDirection: 'row',
        marginTop: 30
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