import React, { useState, useEffect, useRef } from 'react';
import { View, Text, SafeAreaView, Image, StyleSheet, Pressable, Platform, Dimensions, TouchableOpacity, TextInput, Alert, Linking, Modal, ScrollView } from 'react-native';
import Button from '../../components/Button';
import Colors from '../../components/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as ImagePicker from 'expo-image-picker';
import TaggedPost from '../../components/TaggedPost';

const {width} = Dimensions.get('window');

const Post = ({ navigation }) => {
    const [country, setCountry] = useState('');
    const [img_filled, set_img_filled] = useState(false);
    const [siteType, setSiteType] = useState('Store');
    const [active, setActive] = useState('grid'); // grid, tag, play, bookmark
    const [img_uri, set_img_uri] = useState('');
    const [img_ext, set_img_ext] = useState('');
    const [img_picked, set_img_picked] = useState(false);
    const [showTaggedProduct, setShowTaggedProduct] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);
    
    const changePhoto = (type) => {
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
                        pickImage(type);
                    }
                }
            }
        })();
    }
    
    const pickImage = async (type) => {
        let result;
        if (type === 'photo') {
            result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                // allowsEditing: true,
                // aspect: [7, 8],
                // aspect: [1, 1],
                quality: 1,
            });
        } else {
            result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [7, 8],
                quality: 1,
                videoMaxDuration: 1800
            });
        }
        if (!result.cancelled) {
            let theurl = result.uri;
            let cut = theurl.split('.');
            set_img_ext(cut[cut.length - 1]);
            set_img_uri(result.uri);
            set_img_picked(true);
        }
    };
    
    const removePhoto = async () => {
        set_img_picked(false);
        set_img_ext('');
        set_img_uri('');
    }
    
    return (
        <View style={styles.container}>
            <SafeAreaView style={{flex:1}}>
                <View style={{ backgroundColor: '#fff', height: Platform.OS === 'android' ? 50 : 0 }} />
                <View style={styles.header_cont}>
                    <View style={styles.pf_hd_username}>
                        <Text style={[styles.pf_hd_username_text, {color: Colors.secondary}]}>In Process</Text>
                    </View>
                    <View style={styles.pf_hd_options}>
                        <Button
                            text="Publish"
                            press={()=>navigation.navigate("---")}
                            status={false}
                            size="small"
                            bac={Colors.primary}
                            colour={Colors.white}
                        />
                    </View>
                </View>
                
                <View style={styles.main}>
                    <View style={styles.extraAddition}>
                        <View style={styles.exBtnHD}>
                            <View style={styles.exDet}>
                                <Text style={styles.commentPermissionText}>Everyone can comment</Text>
                            </View>
                            <Pressable onPress={()=>setModalVisible(!modalVisible)} style={styles.exBtn}>
                                <Ionicons name="md-earth" size={20} color={Colors.black} />
                            </Pressable>
                        </View>
                        <View style={styles.exBtnHD}>
                            <View style={styles.exDet}>
                                <Text style={styles.locationText}>Lekki Penisula</Text>
                            </View>
                            <Pressable style={styles.exBtn}>
                                <Ionicons name="location-sharp" size={20} color={Colors.black} />
                            </Pressable>
                        </View>
                        <View style={styles.exBtnHD}>
                            <View style={styles.exDet}>
                                <TaggedPost size="partial" press={()=>alert('done')} show={showTaggedProduct} />
                            </View>
                            <Pressable style={styles.exBtn}>
                                <Ionicons name="ios-pricetag" size={20} color={Colors.black} />
                            </Pressable>
                        </View>
                        <View style={styles.exBtnHD}>
                            <View style={styles.exDet}>
                                <View style={styles.exDetLinkDet}>
                                    <Text style={styles.exDetLinkDetText}>Weddings</Text>
                                </View>
                            </View>
                            <Pressable style={styles.exBtn}>
                                <Ionicons name="ios-link" size={20} color={Colors.black} />
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.ptInput}>
                        <View>
                            <View style={styles.ptIpBtnInnerHD}>
                                <TouchableOpacity onPress={()=>changePhoto('camera')} style={styles.ptIpBtn}>
                                    <Ionicons name="ios-camera" size={25} color={Colors.black_500} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=>changePhoto('photo')} style={[styles.ptIpBtn, {marginTop: 15}]}>
                                    <Ionicons name="image" size={25} color={Colors.black_500} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        
                        <View style={styles.ptInputHD}>
                            <View style={[styles.ptPhotoHd, {display: img_picked ? 'flex' : 'none'}]}>
                                <View style={styles.ptImgHD}>
                                    {
                                        img_uri != '' &&
                                        <Image source={{uri: img_uri}} style={styles.ptImg} />
                                    }
                                    {/* <Image source={require('../../assets/img/eight.jpg')} resizeMode="cover" style={styles.ptImg} /> */}
                                </View>
                                <Pressable onPress={()=>removePhoto()} style={styles.ptImgCloseBtn}>
                                    <Ionicons name="close" size={16} color={Colors.black_500} />
                                </Pressable>
                            </View>
                            <TextInput style={styles.ptInputField} multiline={true} placeholder="Say something, type here..." />
                        </View>
                    </View>
                </View>
                
                
                
                
                <Modal
                animationType="slide"
                statusBarTranslucent={true}
                transparent={true}
                visible={modalVisible}
                // onShow={()=>alert('shown')}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                    <View style={styles.ModalView}>
                        <View style={styles.ModalCenterView}>
                            <View style={styles.modalCloseBarHD}><Pressable style={styles.modalCloseBar} onPress={()=>setModalVisible(!modalVisible)}></Pressable></View>
                            <View style={styles.modalHead}>
                                <Ionicons onPress={()=>setModalVisible(!modalVisible)} name="chevron-back" size={24} color={Colors.black} style={{marginLeft:-7}} />
                            </View>
                            <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom:30}}>
                                <Text>Good</Text>
                            </ScrollView>
                        </View>
                    </View>
                </Modal>
            </SafeAreaView>
        </View>
    );
}


const styles = StyleSheet.create({
    ModalView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: '#00000099',
        position: 'relative'
    },
    ModalCenterView: {
        backgroundColor: '#fff',
        width: '100%',
        height: '90%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingHorizontal: 15,
    },
    modalCloseBarHD: {
        width: '100%',
        // position: 'absolute',
        // top: 0,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical:5,
    },
    modalCloseBar: {
        width: 50,
        height: 6,
        borderRadius: 12,
        backgroundColor: Colors.grayNine,
    },
    modalHead: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10
    },
    
    
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
        zIndex: 1,
        backgroundColor: Colors.white
    },
    main:{
        width: '100%',
        paddingHorizontal: 15,
        boxSizing: 'border-box',
        position: 'absolute',
        bottom: 10,
        alignItems: 'flex-end'
    },
    extraAddition: {
        marginBottom: 25
    },
    exBtnHD: {
        marginBottom: 25,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    exDet: {
        display:'flex'
    },
    exBtn: {
        padding: 9,
        backgroundColor: Colors.grayThree,
        borderRadius: 50,
        marginLeft: 10
    },
    exDetLinkDet: {
        backgroundColor: Colors.black_050,
        paddingVertical: 8,
        paddingHorizontal: 18,
        borderRadius: 22
    },
    exDetLinkDetText: {
        fontSize: 13,
        fontWeight: '600'
    },
    locationText: {
        fontSize: 13,
        fontWeight: '600'
    },
    commentPermissionText: {
        fontSize: 13,
        fontWeight: '600',
        color: Colors.secondary
    },
    ptInput: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    ptIpBtnInnerHD: {
        backgroundColor: Colors.black_050,
        borderRadius: 30,
        padding: 2,
    },
    ptIpBtn: {
        backgroundColor: Colors.white,
        padding: 7,
        borderRadius: 50,
    },
    ptInputHD: {
        flexGrow: 1,
        flexShrink: 1,
        borderWidth: 1,
        borderColor: Colors.black_100,
        marginLeft: 10,
        borderRadius: 21,
    },
    ptPhotoHd: {
        width: '100%',
        minHeight: 0,
        borderRadius: 21,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        marginLeft: 5
    },
    ptImgHD: {
        width: '70%',
        borderRadius: 19,
        backgroundColor: Colors.black_100,
        minHeight: 50,
        maxHeight: 250,
        overflow: 'hidden'
    },
    ptImg: {
        width: '100%',
        height: '100%'
    },
    ptImgCloseBtn: {
        padding: 4,
        backgroundColor: Colors.black_050,
        borderRadius: 50,
        marginLeft: 5
    },
    ptInputField: {
        width: '100%',
        borderRadius: 21,
        minHeight: 70,
        maxHeight: 150,
        padding: 15,
    },
})


export default Post;