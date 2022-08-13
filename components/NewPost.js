import React, {useState, useRef} from 'react';
import { Text, TouchableOpacity, StyleSheet, View, ScrollView, Pressable, Modal, Image, Platform, Dimensions, TextInput, Alert, Linking, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from './Colors';
import Button from './Button';
import * as ImagePicker from 'expo-image-picker';
import TaggedPost from './TaggedPost';
import ImageCropPicker from './ImageCropPicker';
import HideKeyboard from './HideKeyboard';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Video, AVPlaybackStatus } from 'expo-av';
import YoutubePlayer from 'react-native-youtube-iframe';

const { width, height } = Dimensions.get('window');

const NewPost = ({ text, press, statusT, size, bac, colour }) => {
    const [modalVisible, setModalVisible] = useState(false);
    
    //POST
    const [media_uri, set_media_uri] = useState('');
    const [media_ext, set_media_ext] = useState('');
    const [media_picked, set_media_picked] = useState(false);
    const [media_type, set_media_type] = useState('');
    const video = useRef(null);
    const [status, setVidStatus] = useState({});
    
    const [showTaggedProduct, setShowTaggedProduct] = useState(true);
    const [modCom, setModCom] = useState(false);
    const [modLoc, setModLoc] = useState(false);
    const [modTag, setModTag] = useState(false);
    const [modLink, setModLink] = useState(false);
    const [previewHeight, setPreviewHeight] = useState(0);
    
    const [isVisible, setIsVisible] = useState(false);
    
    const [postLocation, setPostLocation] = useState('');
    
    const [searchedProducts, setSearchedProducts] = useState([]);
    const [taggedProduct, setTaggedProduct] = useState(0);
    const [linkingWords, setLinkingWords] = useState([]);
    const [linkedWord, setLinkedWord] = useState('');
    
    
    
    
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
            let theurl = result.uri;
            let cut = theurl.split('.');
            let ext = cut[cut.length - 1];
            set_media_picked(false);
            set_media_ext('');
            set_media_uri('');
            set_media_type('');
            if(result.type=='image'){
                let imgHieght = result.height;
                let imgWidth = result.width;
                let desiredWidth = width / 2;
                setPreviewHeight(desiredWidth / imgWidth * imgHieght)
                set_media_ext(ext);
                set_media_uri(theurl);
                set_media_type('image');
                setIsVisible(!isVisible);
            }else{
                let vidHieght = result.height;
                let vidWidth = result.width;
                let desiredWidth = width / 2;
                setPreviewHeight(desiredWidth / vidWidth * vidHieght)
                set_media_picked(true);
                set_media_ext(ext);
                set_media_uri(theurl);
                set_media_type('video');
            }
        }
    };
    
    const onToggleModal = () => {
        setIsVisible(!isVisible);
        // setUri('');
    }
    
    const PhotoChoosen = (url) =>{
        let desiredWidth = width / 2;
        Image.getSize(url, (width, height) => {
            setPreviewHeight(desiredWidth / width * height)
            // console.log(width+' - '+height)
        })
        let cut = url.split('.');
        set_media_ext(cut[cut.length - 1]);
        set_media_uri(url);
        set_media_picked(true);
        set_media_type('image');
        // setUri(url);
    }
    
    const removePhoto = async () => {
        set_media_picked(false);
        set_media_ext('');
        set_media_uri('');
        set_media_type('');
        // setUri('');
    }
    
    
    return (
        <>
            <TouchableOpacity
                style={styles.btn}
                onPress={()=>setModalVisible(!modalVisible)}
            >
                <View style={styles.innerBtn}>
                    <Ionicons name="add" size={29} color={Colors.white} />
                </View>
            </TouchableOpacity>
            
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
                <HideKeyboard>
                    <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'} style={{flex:1}}>
                        <Pressable onPress={()=>setModalVisible(!modalVisible)} style={styles.backDropBig}></Pressable>
                        <View style={styles.ModalCenterViewMain}>
                            <View style={styles.modalCloseBarHD}><Pressable style={styles.modalCloseBar} onPress={()=>setModalVisible(!modalVisible)}></Pressable></View>
                            <View style={styles.modalHeadMain}>
                                <Ionicons onPress={()=>setModalVisible(!modalVisible)} name="chevron-back" size={24} color={Colors.black} style={{marginLeft:-7}} />
                                <Button
                                    text="Publish"
                                    press={()=>navigation.navigate("---")}
                                    status={false}
                                    size="small"
                                    bac={Colors.primary}
                                    colour={Colors.white}
                                />
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
                                    
                                </View>
                            </ScrollView>
                            
                            <SafeAreaView>
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
                                        <View style={[styles.ptPhotoHd, {display: media_picked ? 'flex' : 'none'}]}>
                                            {
                                                media_type == 'image' ?
                                                <View style={[styles.ptImgHD, {height: previewHeight}]}>
                                                    {
                                                        media_uri != '' &&
                                                        <Image source={{uri: media_uri}} style={styles.ptImg} />
                                                    }
                                                    {/* <Image source={require('../../assets/img/eight.jpg')} resizeMode="cover" style={styles.ptImg} /> */}
                                                </View>
                                                :
                                                <View style={[styles.vidCont, {width:width/2,height:previewHeight}]}>
                                                    <Video
                                                        ref={video}
                                                        style={styles.video_sampler}
                                                        source={{
                                                            uri: media_uri
                                                        }}
                                                        useNativeControls={false}
                                                        resizeMode="contain"
                                                        isLooping
                                                        onPlaybackStatusUpdate={status => setVidStatus(() => status)}
                                                    />
                                                    <Pressable style={styles.vidBtnHD} onPress={() => status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()}>
                                                        {
                                                            !status.isPlaying &&
                                                            <View style={styles.vidBtn}>
                                                                <View style={styles.vidBtnInner}>
                                                                    <Ionicons name="play" size={20} color={Colors.white} />
                                                                </View>
                                                            </View>
                                                        }
                                                    </Pressable>
                                                </View>
                                            }
                                            
                                            {/* <View style={styles.youtube_cont}>
                                                <YoutubePlayer
                                                    height={200}
                                                    play={false}
                                                    videoId={is_youtube1}
                                                    controls={false}
                                                />
                                                <Pressable onPress={()=>removeYoutube('one')} style={styles.youtube_cont_btn}>
                                                    <Text style={styles.youtube_cont_btn_txt}>Remove Youtube</Text>
                                                </Pressable>
                                            </View> */}
                                            <Pressable onPress={()=>removePhoto()} style={styles.ptImgCloseBtn}>
                                                <Ionicons name="close" size={16} color={Colors.black_500} />
                                            </Pressable>
                                        </View>
                                        <TextInput style={styles.ptInputField} multiline={true} placeholder="Say something, type here..." />
                                    </View>
                                </View>
                            </SafeAreaView>
                            
                            <View style={{flex: 1, display: isVisible ? 'flex' : 'none'}}>
                                {
                                    media_uri != '' && media_type == 'image' &&
                                    <ImageCropPicker img={media_uri} show={isVisible} press={()=>onToggleModal()} croppedPhoto={(uriM)=>PhotoChoosen(uriM)} />
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
                                        <Pressable onPress={()=>setModCom(!modCom)} style={styles.backDrop}></Pressable>
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
                                        <Pressable onPress={()=>setModLoc(!modLoc)} style={styles.backDrop}></Pressable>
                                        <View style={styles.ModalCenterView}>
                                            <View style={styles.modalCloseBarHD}><Pressable style={styles.modalCloseBar} onPress={()=>setModLoc(!modLoc)}></Pressable></View>
                                            <View style={styles.modalHead}>
                                                <Ionicons onPress={()=>setModLoc(!modLoc)} name="chevron-back" size={24} color={Colors.black} style={{marginLeft:-7}} />
                                            </View>
                                            <View style={styles.modInputBar}>
                                                <TextInput style={styles.modInput} placeholder="Post Location / What's Happening" value={postLocation} onChangeText={(text)=>setPostLocation(text)} />
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
                                        <Pressable onPress={()=>setModTag(!modTag)} style={styles.backDrop}></Pressable>
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
                                            {
                                                searchedProducts == '' ?
                                                <View style={styles.emptyMod}>
                                                    <Image source={require('../assets/img/Products.png')} style={{width: 150,height:118.1}} />
                                                    <Text style={styles.empModTit}>No Search Result</Text>
                                                    <Text style={styles.empModText}>Serach for Products in your Store to tag to this Post. Tagged Product would show alongside Post in Feed and Product View.</Text>
                                                </View>
                                                :
                                                <>
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
                                                </>
                                            }
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
                                        <Pressable onPress={()=>setModLink(!modLink)} style={styles.backDrop}></Pressable>
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
                                            {
                                                linkingWords == '' ?
                                                <View style={styles.emptyMod}>
                                                    <Image source={require('../assets/img/Share_link.png')} style={{width: 150,height:118.1}} />
                                                    <Text style={styles.empModTit}>No Previous Linking Word</Text>
                                                    <Text style={styles.empModText}>Enter a word to link multiple Posts e.g. Weddings can be used to linked all wedding Post, previous Words would be shown here.</Text>
                                                </View>
                                                :
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
                                            }
                                        </View>
                                    </View>
                                </HideKeyboard>
                            </Modal>
                            
                        </View>
                    </KeyboardAvoidingView>
                    </HideKeyboard>
                </View>
            </Modal>
        </>
    );
}


const styles = StyleSheet.create({
    btn: {
        borderRadius: 50,
        width: 50,
        height: 50,
        position: 'absolute',
        right: 15,
        bottom: 15,
        backgroundColor: 'rgba(209, 122, 106, 0.4)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerBtn: {
        backgroundColor: Colors.primary,
        width: '80%',
        height: '80%',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 2
    },
    vidBtnHD: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    vidBtn: {
        borderRadius: 50,
        width: 40,
        height: 40,
        backgroundColor: 'rgba(209, 122, 106, 0.5)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    vidBtnInner: {
        backgroundColor: Colors.primary,
        width: '79%',
        height: '79%',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 2
    },
    ModalView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: '#00000099',
        position: 'relative'
    },
    backDropBig: {
        width:'100%',
        height:'5%',
        position:'absolute',
        left:0,
        top:0
    },
    ModalCenterViewMain: {
        backgroundColor: '#fff',
        width: '100%',
        height: '95%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    backDrop: {
        width:'100%',
        height:'40%',
        position:'absolute',
        left:0,
        top:0
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
    modalHeadMain: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    modalHead: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
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
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingBottom: 10
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
        borderRadius: 16,
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
    emptyMod: {
        alignItems:'center',
        marginTop:15
    },
    empModTit: {
        fontWeight: '700',
        marginTop: 15
    },
    empModText: {
        lineHeight: 20,
        marginTop: 10,
        textAlign: 'center',
        color: Colors.black_600,
        paddingHorizontal: 20
    },
    vidCont: {
        overflow: 'hidden',
        borderRadius: 16
    },
    video_sampler: {
        width: '100%',
        height: '100%',
    },
})


export default NewPost;