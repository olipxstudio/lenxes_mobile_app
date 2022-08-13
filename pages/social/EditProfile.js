import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, Image, StyleSheet, Pressable, Platform, Dimensions, TextInput, Alert, KeyboardAvoidingView, Linking } from 'react-native';
import Button from '../../components/Button';
import Colors from '../../components/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import RNPickerSelect from "react-native-picker-select";
import * as ImagePicker from 'expo-image-picker';

const EditProfile = ({navigation}) => {
    const [img_filled, set_img_filled] = useState(false);
    const [img_uri, set_img_uri] = useState('');
    const [img_ext, set_img_ext] = useState('');
    const [picked, set_picked] = useState(false);
    const [fullname, setFullname] = useState('');
    const [username, setUsername] = useState('');
    const [bio, setBio] = useState('');
    const [category, setCategory] = useState('');
    
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
        <View style={styles.container}>
            <SafeAreaView style={{flex:1}}>
                <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'} style={{flex:1}}>
                    <View style={{ backgroundColor: '#fff', height: Platform.OS === 'android' ? 50 : 0 }} />
                    <View style={styles.header_cont}>
                        <View style={styles.hd_head_options}>
                            <Ionicons onPress={()=>navigation.goBack()} name="chevron-back" size={24} color={Colors.black} />
                        </View>
                        <View style={styles.pf_hd_options}>
                            <Button
                                text="Save"
                                press={()=>navigation.navigate("EditProfile")}
                                status={false}
                                size="small"
                                bac={Colors.primary}
                                colour={Colors.white}
                            />
                        </View>
                    </View>
                    
                    <ScrollView showsVerticalScrollIndicator={false} style={styles.main}>
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
                                    <Ionicons name="logo-facebook" size={20} color="#4267B2" />
                                </Pressable>
                                <Pressable style={[styles.pf_import_btn, styles.ig]} onPress={() => changePhoto()}>
                                    <Ionicons name="logo-instagram" size={20} color="#C13584" />
                                </Pressable>
                                <Pressable style={styles.pf_import_btn} onPress={() => changePhoto()}>
                                    <Ionicons name="logo-twitter" size={20} color="#00acee" />
                                </Pressable>
                            </View>
                        </View>
                        <View style={{paddingHorizontal: 15}}>
                            <TextInput onChangeText={(text) => setFullname(text)} style={styles.input} placeholder="Full Name" />
                            <TextInput onChangeText={(text) => setUsername(text)} style={styles.input} placeholder="Username" />
                            
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
                        </View>
                        
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </View>
    )
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
    container:{
        width: '100%',
        flex: 1,
        backgroundColor: Colors.white
    },
    header_cont: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 15,
    },
    hd_head_options:{
        flexDirection:'row',
        alignItems: 'center',
    },
    main:{
        flex: 1,
        width: '100%',
        paddingHorizontal: 15,
        boxSizing: 'border-box'
    },
    pf_pt_hd: {
        width: '100%',
        alignItems: 'center',
        marginVertical:30,
    },
    pf_pt: {
        width: 100,
        height: 100,
        borderColor: Colors.graySeven,
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
        backgroundColor: Colors.graySeven,
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
        backgroundColor: Colors.grayThree,
        borderRadius: 50
    },
    ig: {
        marginHorizontal:30
    },
    input: {
        width: '100%',
        height: 40,
        borderBottomWidth: 0.5,
        borderBottomColor: Colors.grayNine,
        marginBottom: 30
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
    select_container: {
        width: '100%',
        marginBottom: 30
    },
    select_label: {
        marginBottom:10
    },
})

export default EditProfile