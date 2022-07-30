import React, { useState, useEffect, useRef } from 'react';
import { Keyboard, View, Text, SafeAreaView, Image, StyleSheet, Pressable, Platform, Dimensions, TouchableOpacity, TextInput, Alert, Linking, Modal, ScrollView, TouchableWithoutFeedback } from 'react-native';
import Button from '../../components/Button';
import Colors from '../../components/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as ImagePicker from 'expo-image-picker';
import TaggedPost from '../../components/TaggedPost';
import ImageCropPicker from '../../components/ImageCropPicker';
import HideKeyboard from '../../components/HideKeyboard';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');


const Post = ({ navigation }) => {
    const [img_uri, set_img_uri] = useState('');
    const [img_ext, set_img_ext] = useState('');
    const [img_picked, set_img_picked] = useState(false);
    const [showTaggedProduct, setShowTaggedProduct] = useState(true);
    const [modCom, setModCom] = useState(false);
    const [modLoc, setModLoc] = useState(false);
    const [modTag, setModTag] = useState(false);
    const [modLink, setModLink] = useState(false);
    const [previewHeight, setPreviewHeight] = useState(0);
    
    const [isVisible, setIsVisible] = useState(false);
    const [uri, setUri] = useState('');
    
    const [postLocation, setPostLocation] = useState('');
    
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
                quality: 1,
            });
        } else {
            result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                // allowsEditing: true,
                // aspect: [7, 8],
                quality: 1,
                videoMaxDuration: 1800
            });
        }
        if (!result.cancelled) {
            // let theurl = result.uri;
            // let cut = theurl.split('.');
            // set_img_ext(cut[cut.length - 1]);
            // set_img_uri(result.uri);
            // set_img_picked(true);
            setUri(result.uri);
            setIsVisible(!isVisible);
            // let w = result.width;
            // let h = result.height;
            // let setW = width / 2;
            // let div = Math.floor(w / setW) - ( -1 );
            // let newH = h / div;
        }
    };
    
    const onToggleModal = () => {
        setIsVisible(!isVisible);
        setUri('');
    }
    
    const PhotoChoosen = (url) =>{
        let desiredWidth = width / 2;
        Image.getSize(url, (width, height) => {
            setPreviewHeight(desiredWidth / width * height)
            // console.log(width+' - '+height)
        })
        let cut = url.split('.');
        set_img_ext(cut[cut.length - 1]);
        set_img_uri(url);
        set_img_picked(true);
        setUri(url);
    }
    
    const removePhoto = async () => {
        set_img_picked(false);
        set_img_ext('');
        set_img_uri('');
        setUri('');
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
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{justifyContent:'flex-start'}}>
                    <View style={styles.main}>
                        
                        <View style={styles.extraAddition}>
                            <View style={styles.exBtnHD}>
                                <View style={styles.exDet}>
                                    <Text style={styles.commentPermissionText}>Everyone can comment</Text>
                                </View>
                                <Pressable onPress={()=>setModCom(!modCom)} style={styles.exBtn}>
                                    <Ionicons name="md-earth" size={20} color={Colors.black} />
                                </Pressable>
                            </View>
                            <View style={styles.exBtnHD}>
                                <View style={styles.exDet}>
                                    <Text style={styles.locationText}>{postLocation}</Text>
                                </View>
                                <Pressable onPress={()=>setModLoc(!modLoc)} style={styles.exBtn}>
                                    <Ionicons name="location-sharp" size={20} color={Colors.black} />
                                </Pressable>
                            </View>
                            <View style={styles.exBtnHD}>
                                <View style={styles.exDet}>
                                    <TaggedPost size="partial" press={()=>alert('done')} show={showTaggedProduct} />
                                </View>
                                <Pressable onPress={()=>setModTag(!modTag)} style={styles.exBtn}>
                                    <Ionicons name="ios-pricetag" size={20} color={Colors.black} />
                                </Pressable>
                            </View>
                            <View style={styles.exBtnHD}>
                                <View style={styles.exDet}>
                                    <View style={styles.exDetLinkDet}>
                                        <Text style={styles.exDetLinkDetText}>Weddings</Text>
                                    </View>
                                </View>
                                <Pressable onPress={()=>setModLink(!modLink)} style={styles.exBtn}>
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
                                    <View style={[styles.ptImgHD, {height: previewHeight}]}>
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
                </ScrollView>
                <View style={{flex: 1, display: isVisible ? 'flex' : 'none'}}>
                    {
                        uri != '' &&
                        <ImageCropPicker img={uri} show={isVisible} press={()=>onToggleModal()} croppedPhoto={(uriM)=>PhotoChoosen(uriM)} />
                    }
                </View>
                
                <Modal
                animationType="slide"
                statusBarTranslucent={true}
                transparent={true}
                visible={modCom}
                // onShow={()=>alert('shown')}
                onRequestClose={() => {
                    setModCom(!modCom);
                }}>
                    <HideKeyboard>
                        <View style={styles.ModalView}>
                            <View style={styles.ModalCenterView}>
                                <View style={styles.modalCloseBarHD}><Pressable style={styles.modalCloseBar} onPress={()=>setModCom(!modCom)}></Pressable></View>
                                <View style={styles.modalHead}>
                                    <Ionicons onPress={()=>setModCom(!modCom)} name="chevron-back" size={24} color={Colors.black} style={{marginLeft:-7}} />
                                </View>
                                <View style={{marginTop:15}}>
                                    <View>
                                        <Text style={styles.commentModTit}>Who can comment?</Text>
                                        <Text style={styles.commentModSubTit}>Pick who can comment on this Post.</Text>
                                    </View>
                                    <Pressable onPress={()=>setModCom(!modCom)} style={styles.commentModAction}>
                                        <View style={styles.commentModActionIcon}>
                                            <Ionicons name="ios-earth-outline" size={24} color={Colors.white} />
                                            <Ionicons name="checkmark-circle" size={15} color={Colors.black} style={styles.commentModActionCheck} />
                                        </View>
                                        <Text style={styles.commentModActionText}>Everyone</Text>
                                    </Pressable>
                                    <Pressable onPress={()=>setModCom(!modCom)} style={styles.commentModAction}>
                                        <View style={styles.commentModActionIcon}>
                                            <MaterialCommunityIcons name="account-check-outline" size={24} color={Colors.white} />
                                            <Ionicons name="checkmark-circle" size={15} color={Colors.black} style={styles.commentModActionCheck} />
                                        </View>
                                        <Text style={styles.commentModActionText}>People you Follow</Text>
                                    </Pressable>
                                    <Pressable onPress={()=>setModCom(!modCom)} style={styles.commentModAction}>
                                        <View style={styles.commentModActionIcon}>
                                            <MaterialCommunityIcons name="account-cancel-outline" size={24} color={Colors.white} />
                                            <Ionicons name="checkmark-circle" size={15} color={Colors.black} style={styles.commentModActionCheck} />
                                        </View>
                                        <Text style={styles.commentModActionText}>No one</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                    </HideKeyboard>
                </Modal>
                
                <Modal
                animationType="slide"
                statusBarTranslucent={true}
                transparent={true}
                visible={modLoc}
                // onShow={()=>alert('shown')}
                onRequestClose={() => {
                    setModLoc(!modLoc);
                }}>
                    <HideKeyboard>
                        <View style={styles.ModalView}>
                            <View style={styles.ModalCenterView}>
                                <View style={styles.modalCloseBarHD}><Pressable style={styles.modalCloseBar} onPress={()=>setModLoc(!modLoc)}></Pressable></View>
                                <View style={styles.modalHead}>
                                    <Ionicons onPress={()=>setModLoc(!modLoc)} name="chevron-back" size={24} color={Colors.black} style={{marginLeft:-7}} />
                                </View>
                                <View style={styles.modInputBar}>
                                    <TextInput style={styles.modInput} placeholder="Enter Location" value={postLocation} onChangeText={(text)=>setPostLocation(text)} />
                                    <Button
                                        text="Done"
                                        press={()=>setModLoc(!modLoc)}
                                        status={false}
                                        size="small"
                                        bac={Colors.primary}
                                        colour={Colors.white}
                                    />
                                </View>
                                <View style={{marginTop:15}}>
                                    
                                    <View style={styles.samphead}>
                                        <Pressable  style={styles.samphd_det}>
                                            <View  style={styles.samphd_img}>
                                            </View>
                                            <View>
                                                <Text  style={styles.samphd_name}>olipxstudio</Text>
                                                <Text  style={styles.samphd_place}>{postLocation}</Text>
                                            </View>
                                        </Pressable>
                                    </View>
                                    <View style={styles.sampBody}></View>
                                    
                                </View>
                            </View>
                        </View>
                    </HideKeyboard>
                </Modal>
                
                <Modal
                animationType="slide"
                statusBarTranslucent={true}
                transparent={true}
                visible={modTag}
                // onShow={()=>alert('shown')}
                onRequestClose={() => {
                    setModTag(!modTag);
                }}>
                    <HideKeyboard>
                        <View style={styles.ModalView}>
                            <View style={styles.ModalCenterView}>
                                <View style={styles.modalCloseBarHD}><Pressable style={styles.modalCloseBar} onPress={()=>setModTag(!modTag)}></Pressable></View>
                                <View style={styles.modalHead}>
                                    <Ionicons onPress={()=>setModTag(!modTag)} name="chevron-back" size={24} color={Colors.black} style={{marginLeft:-7}} />
                                </View>
                                <View style={styles.modInputBar}>
                                    <TextInput style={styles.modInput} placeholder="Search Product Title" />
                                    <Button
                                        text="Find"
                                        press={()=>alert("---")}
                                        status={false}
                                        size="small"
                                        bac={Colors.primary}
                                        colour={Colors.white}
                                    />
                                </View>
                                <View>
                                    <Text>Select a Product</Text>
                                </View>
                                <ScrollView showsVerticalScrollIndicator={false} style={{marginTop:15}} contentContainerStyle={{flexDirection:'row',flexWrap:'wrap'}}>
                                    
                                    <TouchableOpacity style={styles.FindTagbody} onPress={()=>press()}>
                                        <View style={styles.FindTagimgHd}>
                                            {/* <Image style={styles.FindTagphoto} /> */}
                                        </View>
                                        <View style={{flexShrink:1}}>
                                            <Text style={styles.FindTagtit} numberOfLines={1}>Garanimals 365 Kid Boys Player Baby Boy Set</Text>
                                            <View style={styles.FindTagsubHd}>
                                                <Text style={styles.FindTagsubTit}>N13,000</Text>
                                                <Text style={[styles.FindTagsubTit, {color: Colors.grayTen,marginLeft:25}]}>new</Text>
                                            </View>
                                        </View>
                                        <View style={styles.arrow}>
                                            <Ionicons name="ios-pricetag" size={22} color={Colors.grayFour} />
                                        </View>
                                    </TouchableOpacity>
                                    
                                </ScrollView>
                            </View>
                        </View>
                    </HideKeyboard>
                </Modal>
                
                <Modal
                animationType="slide"
                statusBarTranslucent={true}
                transparent={true}
                visible={modLink}
                // onShow={()=>alert('shown')}
                onRequestClose={() => {
                    setModLink(!modLink);
                }}>
                    <HideKeyboard>
                        <View style={styles.ModalView}>
                            <View style={styles.ModalCenterView}>
                                <View style={styles.modalCloseBarHD}><Pressable style={styles.modalCloseBar} onPress={()=>setModLink(!modLink)}></Pressable></View>
                                <View style={styles.modalHead}>
                                    <Ionicons onPress={()=>setModLink(!modLink)} name="chevron-back" size={24} color={Colors.black} style={{marginLeft:-7}} />
                                </View>
                                <View style={styles.modInputBar}>
                                    <TextInput style={styles.modInput} placeholder="Add a new linking word" />
                                    <Button
                                        text="ADD"
                                        press={()=>alert("---")}
                                        status={false}
                                        size="small"
                                        bac={Colors.primary}
                                        colour={Colors.white}
                                    />
                                </View>
                                <View>
                                    <Text>Select a Linking Word</Text>
                                </View>
                                <ScrollView showsVerticalScrollIndicator={false} style={{marginTop:15}} contentContainerStyle={{flexDirection:'row',flexWrap:'wrap'}}>
                                    <Pressable style={styles.linkingWord}>
                                        <Text style={styles.linkingWordTxt}>Weddings</Text>
                                    </Pressable>
                                    <Pressable style={styles.linkingWord}>
                                        <Text style={styles.linkingWordTxt}>Traditional</Text>
                                    </Pressable>
                                    <Pressable style={styles.linkingWord}>
                                        <Text style={styles.linkingWordTxt}>Engagement</Text>
                                    </Pressable>
                                    <Pressable style={styles.linkingWord}>
                                        <Text style={styles.linkingWordTxt}>Studio</Text>
                                    </Pressable>
                                    <Pressable style={styles.linkingWord}>
                                        <Text style={styles.linkingWordTxt}>Portrait</Text>
                                    </Pressable>
                                </ScrollView>
                            </View>
                        </View>
                    </HideKeyboard>
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
        height: '60%',
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
    
    modInputBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    modInput: {
        borderWidth: 1,
        borderColor: Colors.black_100,
        flexGrow: 1,
        paddingHorizontal: 15,
        paddingVertical: Platform.OS == 'android' ? 4 : 8,
        marginRight: 10,
        fontSize: 14,
        borderRadius: 22
    },
    linkingWord: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: Colors.black_050,
        borderRadius: 22,
        marginRight: 15,
        marginBottom: 15
    },
    linkingWordTxt: {
        fontSize: 14
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
        // minHeight: '100%',
        // backgroundColor: '#f00',
        paddingHorizontal: 15,
        paddingBottom: 10,
        alignItems: 'flex-end',
        justifyContent:'flex-end'
    },
    extraAddition: {
        marginBottom: 25,
        marginTop: 25
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
        width: width / 2,
        borderRadius: 19,
        backgroundColor: Colors.black_100,
        minHeight: 50,
        // maxHeight: 250,
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
    
    FindTagbody: {
        width: '100%',
        position: 'relative',
        backgroundColor: Colors.white,
        borderRadius: 12,
        paddingHorizontal: 3,
        paddingVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        // shadowColor: Colors.grayEleven,
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.5,
        // shadowRadius: 2,
        // elevation: 2,
        borderWidth: 1,
        borderColor: Colors.black_050
    },
    FindTagimgHd: {
        width: 50,
        height: 50,
        borderRadius: 8,
        backgroundColor: Colors.grayEight,
        marginRight: 8,
        marginLeft: 2
    },
    FindTagphoto: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    FindTagtit: {
        fontSize: 13,
        fontWeight: '600'
    },
    FindTagsubHd: {
        flexDirection: 'row',
        marginTop: 10
    },
    FindTagsubTit: {
        fontSize: 13,
        textTransform: 'uppercase'
    },
    FindTagarrow: {
        marginLeft: 4
    },
    
    samphead: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    samphd_det: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    samphd_img: {
        width: 30,
        height: 30,
        backgroundColor: Colors.graySix,
        borderRadius: 50,
        marginRight: 10,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center'
    },
    samphdImg_photo: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    samphd_name: {
        fontSize: 12,
        fontWeight: '500'
    },
    samphd_place: {
        fontSize: 12,
        color: Colors.grayEleven
    },
    sampBody: {
        width: '100%',
        height: 300,
        backgroundColor: Colors.graySix,
        borderRadius: 16,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    commentModTit: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    commentModSubTit: {
        fontSize: 14,
        color: Colors.black_700
    },
    commentModAction: {
        marginTop: 40,
        flexDirection: 'row',
        alignItems: 'center'
    },
    commentModActionIcon: {
        backgroundColor: Colors.primary,
        width: 45,
        height: 45,
        position: 'relative',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    commentModActionCheck: {
        position: 'absolute',
        bottom: -2,
        right: -2,
    },
    commentModActionText: {
        marginLeft: 15,
        fontSize: 16
    },
})


export default Post;