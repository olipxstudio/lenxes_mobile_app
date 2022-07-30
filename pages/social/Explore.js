import React, { useState, useEffect, useRef } from 'react';
import { View, Text, SafeAreaView, Modal, Image, StyleSheet, Pressable, Platform, Dimensions, Alert } from 'react-native';
import Button from '../../components/Button';
import Colors from '../../components/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as Device from 'expo-device';
import PostBody from '../../components/PostBody';
import MasonryList from '@react-native-seoul/masonry-list';
import FeedProductBody from '../../components/FeedProductBody';

const {width} = Dimensions.get('window');

const Explore = ({ navigation }) => {
    const [country, setCountry] = useState('');
    const [img_filled, set_img_filled] = useState(false);
    const [img_uri, set_img_uri] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [active, setActive] = useState('post'); // post, product
    
    const fakeData = [
        {
            'name':'oke',
            'type':'img'
        },
        {
            'name':'pius',
            'type':'text'
        },
        {
            'name':'peace',
            'type':'img'
        },
        {
            'name':'peter',
            'type':'img'
        }
    ]
    
    const switchTabs = (tab) => {
        setActive(tab)
    }
    
    
    return (
        <View style={styles.container}>
            <SafeAreaView style={{flex: 1}}>
                <View style={{ backgroundColor: '#fff', height: Platform.OS === 'android' ? 50 : 0 }} />
                <View style={styles.header_cont}>
                    <View style={styles.pf_hd_username}>
                        <Image source={require('../../assets/logo/lenxes_logo_bg_millik_black.png')} style={{width:90,height:21.8}} />
                    </View>
                    <View style={styles.pf_hd_options}>
                        <Pressable style={styles.ex_search_trigger}>
                            <Text style={styles.ex_search_trigger_text}>Search lenxes</Text>
                        </Pressable>
                    </View>
                </View>
                
                <View style={styles.main}>
                    <View style={styles.ex_tab_bar}>
                        <Pressable onPress={()=>switchTabs('post')} style={[styles.exTabBtn, active==='post' && styles.active]}>
                            <Text style={[styles.exTabBtnText, active==='post' && styles.active_text]}>Posts</Text>
                        </Pressable>
                        <Pressable onPress={()=>switchTabs('product')} style={[styles.exTabBtn, active==='product' && styles.active]}>
                            <Text style={[styles.exTabBtnText, active==='product' && styles.active_text]}>Products</Text>
                        </Pressable>
                    </View>
                    <View style={[styles.postsContainer, {display: active == 'post' ? 'flex' : 'none' }]}>
                        <MasonryList
                            data={fakeData}
                            showsVerticalScrollIndicator={false}
                            // getItemLayout={(data, index) => getItemLayout(data, index)}
                            // ref={(ref) => setListRef(ref)}
                            // onMomentumScrollEnd={(nativeEvent) => handleScrollTop(nativeEvent)}
                            removeClippedSubviews={true}
                            initialNumToRender={10}
                            // onEndReached={() => loadMoreFeed(user_id)}
                            // onEndReachedThreshold={7}
                            // onRefresh={() => getItems(owner_id)}
                            // refreshing={loading}
                            ListHeaderComponent={
                                <Pressable onPress={() => alert("NA")} style={styles.ptz_hd}>
                                    <View style={styles.ptz_det}>
                                        <Text style={styles.ptz_det_txt}>These people are in your line of industry.</Text>
                                    </View>
                                    <View style={styles.ptz_imgs_cont}>
                                        <View style={[styles.ptz_img_hd, styles.num1]}>
                                            {/* <Image style={styles.ptz_img} source={{ uri: Url.profile_photo + 'no-photo-available.jpg' }} /> */}
                                        </View>
                                        <View style={[styles.ptz_img_hd, styles.num2]}>
                                            {/* <Image style={styles.ptz_img} source={{ uri: Url.profile_photo + 'no-photo-available.jpg' }} /> */}
                                        </View>
                                        <View style={[styles.ptz_img_hd, styles.num3]}>
                                            {/* <Image style={styles.ptz_img} source={{ uri: Url.profile_photo + 'no-photo-available.jpg' }} /> */}
                                        </View>
                                        <View style={[styles.ptz_img_hd, styles.num4]}>
                                            {/* <Image style={styles.ptz_img} source={{ uri: Url.profile_photo + 'no-photo-available.jpg' }} /> */}
                                        </View>
                                        <View style={[styles.ptz_img_hd, styles.num5]}>
                                            {/* <Image style={styles.ptz_img} source={{ uri: Url.profile_photo + 'no-photo-available.jpg' }} /> */}
                                        </View>
                                        <View style={[styles.ptz_img_hd, styles.num6]}>
                                            {/* <Image style={styles.ptz_img} source={{ uri: Url.profile_photo + 'no-photo-available.jpg' }} /> */}
                                        </View>
                                        <View style={[styles.ptz_img_hd, styles.num7]}>
                                            {/* <Image style={styles.ptz_img} source={{ uri: Url.profile_photo + 'no-photo-available.jpg' }} /> */}
                                        </View>
                                    </View>
                                </Pressable>
                            }
                            numColumns={2}
                            keyExtractor={(item) => item.name}
                            style={{justifyContent: 'space-between'}}
                            renderItem={({ item, index }) => {
                                return (
                                    <Pressable key={index} style={styles.post} onPress={()=>setModalVisible(!modalVisible)}>
                                        {/* <Image source={{ uri: img_uri }} resizeMode='contain' style={styles.postPhoto} /> */}
                                        <Text style={{color:Colors.grayNine,margin:15}}>{Device.brand}, {Device.deviceName}, {Device.modelName}</Text>
                                        <Ionicons name="play" size={18} color={Colors.primary} style={styles.vidTag} />
                                    </Pressable>
                                )
                            }}
                        />
                    </View>
                    {/* <View style={[styles.post, styles.textPost]}>
                        <View style={styles.textPostBar}></View>
                        <Text style={styles.textPostText} numberOfLines={8}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                    </View> */}
                    
                    {/* ------------------- PRODUCT CONTAINER ------------------------ */}
                    
                    {/* ------------------- PRODUCT CONTAINER ------------------------ */}
                    
                    {/* ------------------- PRODUCT CONTAINER ------------------------ */}
                    
                    <View style={[styles.productsContainer, {display: active == 'product' ? 'flex' : 'none' }]}>
                        <MasonryList
                            data={fakeData}
                            showsVerticalScrollIndicator={false}
                            // getItemLayout={(data, index) => getItemLayout(data, index)}
                            // ref={(ref) => setListRef(ref)}
                            // onMomentumScrollEnd={(nativeEvent) => handleScrollTop(nativeEvent)}
                            removeClippedSubviews={true}
                            initialNumToRender={10}
                            // onEndReached={() => loadMoreFeed(user_id)}
                            // onEndReachedThreshold={7}
                            // onRefresh={() => getItems(owner_id)}
                            // refreshing={loading}
                            ListHeaderComponent={
                                <Pressable onPress={() => alert("NA")} style={{marginBottom: 15, width: width}}>
                                    <Text>Sorting & Location</Text>
                                </Pressable>
                            }
                            numColumns={2}
                            keyExtractor={(item) => item.name}
                            contentContainerStyle={{flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap'}}
                            renderItem={({ item, index }) => {
                                return (
                                    <FeedProductBody key={index} type="fit" />
                                )
                            }}
                        />
                    </View>
                </View>
                
                
                <Modal
                animationType="slide"
                statusBarTranslucent={true}
                transparent={true}
                visible={modalVisible}
                // onShow={()=>alert('shown')}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                    <View style={styles.ModalView}>
                        <View style={styles.ModalCenterView}>
                            <View style={styles.modalCloseBarHD}><Pressable style={styles.modalCloseBar} onPress={()=>setModalVisible(!modalVisible)}></Pressable></View>
                            <View style={styles.modalHead}>
                                <Ionicons onPress={()=>setModalVisible(!modalVisible)} name="chevron-back" size={24} color={Colors.black} style={{marginLeft:-7}} />
                            </View>
                            <PostBody press={()=>alert('Okay')} type="photo" />
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
        height: '96%',
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
        paddingBottom: 15
    },
    main:{
        width: '100%',
        paddingHorizontal: 15,
        boxSizing: 'border-box',
        flex: 1
    },
    pf_hd_options:{
        flexDirection:'row',
        alignItems: 'center',
        width: Platform.OS === 'android' ? 260 : 240,
    },
    ex_search_trigger: {
        backgroundColor: Colors.graySix,
        width: '100%',
        paddingVertical: 7,
        paddingHorizontal: 20,
        borderRadius: 30
    },
    ex_search_trigger_text: {
        color: Colors.grayTwelve,
        fontSize: 14
    },
    ex_tab_bar: {
        flexDirection: 'row',
        marginBottom: 20,
        marginTop:5,
        justifyContent: 'center'
    },
    exTabBtn: {
        paddingVertical: 7,
        width: 100,
        borderRadius: 30,
        backgroundColor: Colors.primary
    },
    exTabBtnText: {
        fontSize: 14,
        textAlign: 'center',
        fontWeight: '500',
        color: Colors.white
    },
    active: {
        zIndex: 1,
        backgroundColor: Colors.graySix,
    },
    active_text: {
        color: Colors.black
    },
    postsContainer: {
        flex: 1
    },
    productsContainer: {
        flex: 1
    },
    // SUGGESTED PEOPLE STYLES
    ptz_hd: {
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: Colors.graySix,
        borderRadius: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 117,
        marginBottom: 10
    },
    ptz_img_hd: {
        backgroundColor: Colors.grayNine,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    num0: {
        width: 65,
        height: 65,
        position: 'absolute',
        left: 50,
        top: 10
    },
    num1: {
        width: 47,
        height: 47,
        position: 'absolute',
        left: 125,
    },
    num2: {
        width: 47,
        height: 47,
        position: 'absolute',
        top: 50
    },
    num5: {
        width: 47,
        height: 47,
        position: 'absolute',
        left: 159,
        top: 45
    },
    num3: {
        width: 33,
        height: 33,
        position: 'absolute',
        left: 120,
        top: 55
    },
    num4: {
        width: 33,
        height: 33,
        position: 'absolute',
        left: 10,
        top: 10
    },
    num6: {
        width: 33,
        height: 33,
        position: 'absolute',
        left: 178,
        top: 6
    },
    num7: {
        width: 75,
        height: 75,
        position: 'absolute',
        left: 47,
        top: 5
    },
    ptz_img: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 50
    },
    ptz_det: {
        width: '30%'
    },
    ptz_det_txt: {
        fontSize: 13,
        lineHeight: 18,
        marginTop: 10
    },
    ptz_imgs_cont: {
        position: 'relative',
        width: '65%',
        overflow: 'hidden'
    },
    // POST BODY STYLES
    post: {
        width: (width / 2) - 20,
        borderRadius: 22,
        height: 200,
        backgroundColor: Colors.grayEight,
        marginBottom: 10,
        position: 'relative'
    },
    textPost: {
        paddingVertical: 10,
        paddingRight: 10,
        paddingLeft: 18,
        backgroundColor: Colors.white,
        borderWidth: 1,
        borderColor: Colors.graySix
    },
    textPostBar: {
        position: 'absolute',
        width: 5,
        height: '80%',
        left: 0,
        top: '15%',
        backgroundColor: Colors.secondaryLight,
        borderTopRightRadius: 16,
        borderBottomRightRadius: 16
    },
    textPostText: {
        fontSize: 14,
        lineHeight: 21,
        color: Colors.black_800
    },
    vidTag: {
        position: 'absolute',
        top: 10,
        right: 10
    },
    productTag: {
        position: 'absolute',
        bottom: 10,
        right: 10,
    }, 
})


export default Explore;