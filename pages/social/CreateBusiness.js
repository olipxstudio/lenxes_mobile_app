import React, {useState} from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, Pressable, StyleSheet, Platform, ScrollView, TextInput, Image, Linking, Alert } from 'react-native';
import Colors from '../../components/Colors';
import { Ionicons } from '@expo/vector-icons';
import Button from '../../components/Button';
import AuthButton from '../../components/AuthButton';
import RNPickerSelect from "react-native-picker-select";
import * as ImagePicker from 'expo-image-picker';

const CreateBusiness = ({navigation}) => {
    const [img_filled, set_img_filled] = useState(false);
    const [img_uri, set_img_uri] = useState('');
    const [img_ext, set_img_ext] = useState('');
    const [picked, set_picked] = useState(false);
    const [previewWidth, setPreviewWidth] = useState(50);
    const [storename, setStorename] = useState('');
    const [slogan, setSlogan] = useState('');
    const [location, setLocation] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [bank, setBank] = useState('');
    const [accname, setAccName] = useState('');
    const [accnumber, setAccNumber] = useState('');
    
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
            let imgHieght = result.height;
            let imgWidth = result.width;
            let desiredHeight = 50;
            setPreviewWidth(desiredHeight / imgHieght * imgWidth)
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
                        {/* <View style={styles.pageTitleHD}>
                            <Text style={styles.pageTitle}>Create Business</Text>
                        </View>
                        <View>
                            <Button
                                text="Create"
                                press={()=>navigation.navigate("EditProfile")}
                                status={false}
                                size="small"
                                bac={Colors.primary}
                                colour={Colors.white}
                            />
                        </View> */}
                    </View>
                    
                    <View style={styles.main}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={{marginTop: 10}}></View>
                            <View style={styles.titlesHD}>
                                <Text style={styles.title}>Create</Text>
                                <Text style={styles.title}>a Website</Text>
                                <Text style={styles.subtitle}>Sell your products/services to countless people visiting your profile and seeing your posts on Lenxes</Text>
                            </View>
                            <View style={styles.inputHolder}>
                                <TextInput onChangeText={(text) => setStorename(text)} style={styles.input} placeholder="Store Name" />
                                <TextInput onChangeText={(text) => setSlogan(text)} style={styles.input} placeholder="Slogan / Motto" />
                                
                                <View style={{flexDirection:'row',alignItems:'center',marginBottom:30}}>
                                    <Pressable onPress={() => changePhoto()} style={[styles.pf_pt_inner, {width:previewWidth}]}>
                                        {
                                            img_filled ?
                                                <Image source={{ uri: img_uri }} resizeMode='contain' style={styles.photo_inp_img} />
                                                :
                                                <View>
                                                    <Ionicons name="add-outline" size={24} color="#ccc" />
                                                </View>
                                        }
                                    </Pressable>
                                    <Text style={[styles.select_label, {marginLeft:10,marginBottom:0}]}>Logo</Text>
                                </View>
                                
                                <View style={styles.select_container}>
                                    <Text style={styles.select_label}>Business Location</Text>
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
                                <TextInput onChangeText={(text) => setAddress(text)} style={styles.input} placeholder="Address" />
                                <TextInput onChangeText={(text) => setPhone(text)} style={styles.input} placeholder="Business Phone" />
                                <TextInput onChangeText={(text) => setEmail(text)} style={styles.input} placeholder="Business Email" />
                                
                                <Text style={styles.accTitle}>Receive Payment</Text>
                                <TextInput onChangeText={(text) => setBank(text)} style={styles.input} placeholder="Bank" />
                                <TextInput onChangeText={(text) => setAccNumber(text)} style={styles.input} placeholder="Account Number" />
                                <TextInput onChangeText={(text) => setAccName(text)} style={styles.input} placeholder="Account Name" />
                                
                                <View style={{alignItems:'center'}}>
                                    <AuthButton text="Continue" status={false} press={() => navigation.navigate('SignupFollow')} />
                                </View>
                            </View>
                        </ScrollView>
                    </View>
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
        position: 'relative',
    },
    hd_head_options:{
        flexDirection:'row',
        alignItems: 'center',
    },
    pageTitleHD: {
        justifyContent:'center',
        alignItems:'center',
    },
    pageTitle: {
        fontWeight: '700',
        fontSize: 16
    },
    main:{
        flex: 1,
        width: '100%',
        paddingHorizontal: 15,
        boxSizing: 'border-box',
        justifyContent: 'space-between'
    },
    pf_pt_inner: {
        height: 50,
        borderRadius: 12,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: Colors.graySix,
        overflow:'hidden'
    },
    photo_inp_img: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    titlesHD: {
        paddingRight: 60,
        marginBottom: 20,
        paddingHorizontal: 15
    },
    title: {
        fontSize: 36,
        fontWeight: '800',
    },
    subtitle: {
        fontSize: 14,
        lineHeight: 20,
        marginTop: 5
    },
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
        marginBottom:10,
        color: Colors.grayTen
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
    inputHolder: {
        marginBottom: 15,
        paddingHorizontal: 15
    },
    accTitle: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 10,
        marginTop: 10
    }
})

export default CreateBusiness