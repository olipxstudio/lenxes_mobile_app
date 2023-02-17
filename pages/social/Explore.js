import React, { useState, useEffect, useRef } from 'react';
import { View, Text, SafeAreaView, Modal, Image, StyleSheet, Pressable, Platform, Dimensions, Alert, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import Button from '../../components/Button';
import Colors from '../../components/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Device from 'expo-device';
import PostBody from '../../components/PostBody';
import MasonryList from '@react-native-seoul/masonry-list';
import FeedProductBody from '../../components/FeedProductBody';
import FeedPeople from '../../components/FeedPeople';
import Accounts from '../../components/Accounts';

const {width} = Dimensions.get('window');

const Explore = ({ navigation }) => {
    const [country, setCountry] = useState('');
    const [img_filled, set_img_filled] = useState(false);
    const [img_uri, set_img_uri] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [searchVisible, setSearchModal] = useState(false);
    const [active, setActive] = useState('post'); // post, product
    
    const fakeData = [
        {
            'name':'oke',
            'type':'img',
            'height':120
        },
        {
            'name':'pius',
            'type':'text',
            'height':190
        },
        {
            'name':'peace',
            'type':'img',
            'height':150
        },
        {
            'name':'peter',
            'type':'img',
            'height':170
        },
        {
            'name':'john',
            'type':'img',
            'height':130
        },
        {
            'name':'rufus',
            'type':'img',
            'height':160
        },
        {
            'name':'james',
            'type':'img',
            'height':180
        },
        {
            'name':'okon',
            'type':'img',
            'height':140
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
                    {/* <Pressable style={styles.ex_search_trigger}>
                        <MaterialCommunityIcons name="account-check-outline" size={20} color={Colors.black} />
                    </Pressable> */}
                    <View style={styles.searchHD}>
                        <Ionicons name="ios-search" size={16} color={Colors.grayEleven} />
                        <TextInput style={styles.searchInput} placeholder='Search Lenxes' placeholderTextColor={Colors.grayEleven} />
                    </View>
                    <Ionicons onPress={()=>setSearchModal(!searchVisible)} name="location-sharp" size={22} color={Colors.black} />
                    <Pressable onPress={()=>active == 'post' ? switchTabs('product') : switchTabs('post') } style={styles.exTabBtn}>
                        {
                            active == 'product' ?
                            <>
                            <Ionicons name="ios-chevron-back" size={16} color={Colors.black} style={{marginLeft:-3}} />
                            <Text style={styles.exTabBtnText}>Explore</Text>
                            </>
                            :
                            <Text style={styles.exTabBtnText}>Products</Text>
                        }
                    </Pressable>
                </View>
                
                <View style={styles.main}>
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
                                <>
                                    <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                                        <FeedPeople />
                                        <FeedPeople />
                                        <FeedPeople />
                                        <FeedPeople />
                                        <FeedPeople />
                                        <FeedPeople />
                                    </ScrollView>
                                    
                                    <View style={{marginTop: 20}}>
                                        <Text style={styles.secTitle}>Careers</Text>
                                        <View style={{flexDirection: 'row',flexWrap: 'wrap',justifyContent: 'space-between',marginTop:10}}>
                                            <Accounts />
                                            <Accounts />
                                            <Accounts />
                                            <Accounts />
                                        </View>
                                        <Text style={styles.more_link}>Show more</Text>
                                    </View>
                                    
                                    <View style={{marginTop: 20}}>
                                        <Text style={styles.secTitle}>Events</Text>
                                        <ScrollView style={{marginTop:10}} showsHorizontalScrollIndicator={false} horizontal>
                                            <View style={styles.evMain}>
                                                <View style={styles.evImg}>
                                                    <View style={styles.evThumb}></View>
                                                </View>
                                                <Text style={styles.evTitle}>Annual Celebration of Songs</Text>
                                                <Text style={styles.evDate}>Sun, Dec 28, 3:00PM</Text>
                                            </View>
                                            <View style={styles.evMain}>
                                                <View style={styles.evImg}>
                                                    <View style={styles.evThumb}></View>
                                                </View>
                                                <Text style={styles.evTitle}>Annual Celebration of Songs</Text>
                                                <Text style={styles.evDate}>Sun, Dec 28, 3:00PM</Text>
                                            </View>
                                            <View style={styles.evMain}>
                                                <View style={styles.evImg}>
                                                    <View style={styles.evThumb}></View>
                                                </View>
                                                <Text style={styles.evTitle}>Annual Celebration of Songs</Text>
                                                <Text style={styles.evDate}>Sun, Dec 28, 3:00PM</Text>
                                            </View>
                                        </ScrollView>
                                    </View>
                                    
                                    <View style={{marginTop: 20, marginBottom: 10}}>
                                        <Text style={styles.secTitle}>Suggestions</Text>
                                    </View>
                                    
                                    {/* OUT FOR NOW */}
                                    {/* OUT FOR NOW */}
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
                                </>
                            }
                            numColumns={3}
                            keyExtractor={(item) => item.name}
                            style={{justifyContent: 'space-between'}}
                            renderItem={({ item, index }) => {
                                return (
                                    <Pressable key={index} style={[styles.post, {height: item.height }]} onPress={()=>setModalVisible(!modalVisible)}>
                                        {/* <Image source={{ uri: img_uri }} resizeMode='contain' style={styles.postPhoto} /> */}
                                        {/* <Text style={{color:Colors.grayNine,margin:15}}>{Device.brand}, {Device.deviceName}, {Device.modelName}</Text>
                                        <Ionicons name="play" size={18} color={Colors.primary} style={styles.vidTag} /> */}
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
                
                {/* --------- LOCATION SEARCH MODAL ---------- */}
                <Modal
                animationType="slide"
                statusBarTranslucent={true}
                transparent={true}
                visible={searchVisible}
                // onShow={()=>alert('shown')}
                onRequestClose={() => {
                    setSearchModal(!searchVisible);
                }}>
                    <View style={styles.ModalView}>
                        <View style={styles.ModalCenterViewFull}>
                            <View style={styles.modalCloseBarHD}><Pressable style={styles.modalCloseBar} onPress={()=>setSearchModal(!searchVisible)}></Pressable></View>
                            <View style={styles.modalHead}>
                                <Ionicons onPress={()=>setSearchModal(!searchVisible)} name="chevron-back" size={24} color={Colors.black} style={{marginLeft:-7}} />
                            </View>
                            <View style={[styles.searchHD, {width: '100%'}]}>
                                <Ionicons name="ios-search" size={16} color={Colors.grayEleven} />
                                <TextInput style={styles.searchInput} placeholder='Searching for?' placeholderTextColor={Colors.grayEleven} />
                            </View>
                            <View style={{flexDirection: 'row',justifyContent: 'space-between',marginTop: 7}}>
                                <View style={[styles.searchHD, {width: '49%'}]}>
                                    <TextInput style={styles.searchInput} placeholder='In what State?' placeholderTextColor={Colors.grayEleven} />
                                </View>
                                <View style={[styles.searchHD, {width: '49%'}]}>
                                    <TextInput style={styles.searchInput} placeholder='At what City?' placeholderTextColor={Colors.grayEleven} />
                                </View>
                            </View>
                            <TouchableOpacity
                                style={styles.btn}
                                onPress={()=>press()}
                            >
                                <Text style={styles.btn_text_small}>Search</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
                
                
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
    ModalCenterViewFull: {
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
        paddingHorizontal: 15,
        paddingTop: 15
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
    btn: {
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary,
        padding: 7,
        marginTop: 10
    },
    btn_text_small: {
        fontSize: 12,
        fontWeight: '600',
        marginHorizontal: 7,
        color: Colors.white
    },
    // MODAL STYLES ENDS HERE
    
    // SEARCH ------------------------ //
    searchHD: {
        width: 230,
        height: 32,
        backgroundColor: Colors.black_050,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 30,
        paddingHorizontal: 10
    },
    searchInput: {
        marginLeft: 5,
        paddingRight: 10
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
    },
    main:{
        width: '100%',
        paddingHorizontal: 15,
        boxSizing: 'border-box',
        flex: 1
    },
    exTabBtn: {
        paddingVertical: 7,
        width: 80,
        borderRadius: 16,
        backgroundColor: Colors.graySeven,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    exTabBtnText: {
        fontSize: 12,
        textAlign: 'center',
        fontWeight: '500',
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
        marginBottom: 10,
        display: 'none'
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
    
    // EXPLORE ---------------------------- //
    secTitle: {
        fontSize: 17,
        fontWeight: '600'
    },
    more_link: {
        color: Colors.secondary,
        fontSize: 13
    },
    
    // EVENT ------------------------------ //
    evMain: {
        width: (width / 2) - 30,
        marginRight: 7,
    },
    evImg: {
        width: '100%',
        height: 150,
        backgroundColor: Colors.graySeven,
        borderRadius: 14,
        position: 'relative'
    },
    evThumb: {
        position: 'absolute',
        top: 5,
        left: 5,
        width: 25,
        height: 25,
        backgroundColor: Colors.grayNine,
        borderRadius: 30
    },
    evTitle: {
        fontWeight: '700',
        marginTop: 7
    },
    evDate: {
        color: Colors.grayEleven,
        marginTop: 7,
        fontWeight: '400',
        fontSize: 13
    },
    
    // POST BODY STYLES
    post: {
        width: (width / 3) - 13,
        borderRadius: 14,
        marginBottom: 4,
        backgroundColor: Colors.grayEight,
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