import React, { useState, useEffect, useRef } from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, ScrollView, Image, TextInput, Pressable, StyleSheet, Platform, Linking, Alert } from 'react-native';
import AuthButton from '../../components/AuthButton';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../../components/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import RNPickerSelect from "react-native-picker-select";
import * as ImagePicker from 'expo-image-picker';

const SignupProfileDetails = ({ navigation }) => {
    const [bio, setBio] = useState('');
    const [category, setCategory] = useState('');
    const [img_filled, set_img_filled] = useState(false);
    const [img_uri, set_img_uri] = useState('');
    const [img_ext, set_img_ext] = useState('');
    const [picked, set_picked] = useState(false);
    
    const changePhoto = () => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    Alert.alert("Grant Permission to Photos", "You need to grant permission to the photos gallery to post photos", [
                        {
                            text: "Not now"
                        },
                        {
                            text: "Grant Permission",
                            onPress: Platform.OS === 'ios' ? () => Linking.openSettings() : Linking.openURL('app-settings:')
                        }
                    ])
                } else {
                    const { status } = await ImagePicker.requestCameraPermissionsAsync();
                    if (status !== 'granted') {
                        Alert.alert("Grant Permission to Photos", "You need to grant permission to the camera to post photos", [
                            {
                                text: "Not now"
                            },
                            {
                                text: "Grant Permission",
                                onPress: Platform.OS === 'ios' ? () => Linking.openSettings() : Linking.openURL('app-settings:')
                            }
                        ])
                    } else {
                        pickImage();
                    }
                }
            }
        })();
    }
    
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });
        if (!result.cancelled) {
            let theurl = result.uri;
            let cut = theurl.split('.');
            set_img_ext(cut[cut.length - 1]);
            set_img_uri(result.uri);
            set_img_filled(true);
            set_picked(true);
        }
    };
    
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
                            <View>
                                
                                <View style={styles.pf_pt_hd}>
                                    <View style={styles.pf_pt}>
                                        <Pressable onPress={() => changePhoto()} style={styles.pf_pt_inner}>
                                            {
                                                img_filled ?
                                                    <Image source={{ uri: img_uri }} resizeMode='contain' style={styles.photo_inp_img} />
                                                    :
                                                    <View>
                                                        <Ionicons name="add-outline" size={40} color="#ccc" />
                                                    </View>
                                            }
                                        </Pressable>
                                    </View>
                                    <Pressable style={styles.pf_pt_btn} onPress={() => changePhoto()}>
                                        <Text style={styles.pf_pt_btn_txt}>Choose a photo</Text>
                                    </Pressable>
                                    
                                    <Text style={{marginBottom:5}}>or</Text>
                                    <Text>Import from:</Text>
                                    <View style={styles.pf_import}>
                                        <Pressable style={styles.pf_import_btn} onPress={() => changePhoto()}>
                                            <Ionicons name="logo-facebook" size={22} color="#4267B2" />
                                        </Pressable>
                                        <Pressable style={[styles.pf_import_btn, styles.ig]} onPress={() => changePhoto()}>
                                            <Ionicons name="logo-instagram" size={22} color="#C13584" />
                                        </Pressable>
                                        <Pressable style={styles.pf_import_btn} onPress={() => changePhoto()}>
                                            <Ionicons name="logo-twitter" size={22} color="#00acee" />
                                        </Pressable>
                                    </View>
                                </View>
                                
                                <View style={styles.ta_holder}>
                                    <Text style={styles.ta_txt}>Tell us about yourself, your skill, talent and what you do</Text>
                                    <TextInput onChangeText={(text) => setBio(text)} multiline={true} style={styles.text_area} placeholder="Write bio here..." maxLength={100} />
                                    <View style={styles.ta_cnt}>
                                        <Text style={[styles.ta_cnt_txt, {color: bio.length > 90 ? '#f00' : '#000' }]}>{bio.length}</Text>
                                        <Text style={styles.ta_cnt_txt}>/</Text>
                                        <Text style={styles.ta_cnt_txt}>100</Text>
                                    </View>
                                </View>
                                
                                <View style={styles.select_container}>
                                    <Text style={styles.select_label}>What best describes you?</Text>
                                    <RNPickerSelect
                                        style={pickerSelectStyles}
                                        placeholder={{ label: "Select Category", value: null }}
                                        onValueChange={(value) => setCategory(value)}
                                        items={[
                                            { label: "Artist", value: "Artist" },
                                            { label: "Writter", value: "Writter" },
                                            { label: "Designer", value: "Designer" },
                                        ]}
                                    />
                                </View>
                                
                                <AuthButton text="Continue" status={false} press={() => navigation.navigate('SignupFollow')} />
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
    text_area: {
        width: '100%',
        minHeight: 80,
        borderWidth: 0.5,
        borderColor: Colors.grayNine,
        borderRadius: 12,
        padding: 10,
        marginBottom: 3,
        backgroundColor: Colors.white
    },
    ta_holder: {
        width: '100%',
        marginBottom: 30,
    },
    ta_txt: {
        paddingRight: 100,
        lineHeight: 20,
        marginBottom: 10
    },
    ta_cnt: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    ta_cnt_txt: {
        fontSize: 12
    },
    container:{
        width: '100%',
        padding: 30,
        boxSizing: 'border-box'
    },
    t_b_space: {
        marginVertical: 50
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
    pf_pt_hd: {
        width: '100%',
        alignItems: 'center',
        marginVertical:30,
    },
    pf_pt: {
        width: 100,
        height: 100,
        borderColor: Colors.white,
        borderWidth: 2,
        padding: 3,
        borderRadius: 50,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center'
    },
    pf_pt_inner: {
        width: '100%',
        height: '100%',
        backgroundColor: Colors.white,
        borderRadius: 50,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center'
    },
    photo_inp_img: {
        width: 100,
        height: 100,
        resizeMode: 'cover'
    },
    pf_pt_btn: {
        marginVertical: 10
    },
    pf_pt_btn_txt: {
        color: Colors.primary,
        fontWeight: '700'
    },
    pf_import: {
        flexDirection: 'row',
        marginTop: 10
    },
    pf_import_btn: {
        padding: 6,
        backgroundColor: Colors.white,
        borderRadius: 50
    },
    ig: {
        marginHorizontal:30
    },
})


export default SignupProfileDetails;