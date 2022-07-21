import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, SafeAreaView, ScrollView, Image, StyleSheet, Pressable, Platform, Dimensions, Modal, Alert, FlatList } from 'react-native';
import Button from '../../components/Button';
import Colors from '../../components/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import PostBody from '../../components/PostBody';
import ProfileChecklist from '../../components/ProfileChecklist';
import MasonryList from '@react-native-seoul/masonry-list';

const {width} = Dimensions.get('window');

const RemoteImage = ({ uri, desiredWidth }) => {
    const [desiredHeight, setDesiredHeight] = React.useState(0)

    Image.getSize(uri, (width, height) => {
        setDesiredHeight(desiredWidth / width * height)
    })

    return (
        <Image
            source={{ uri }}
            style={{
                width: desiredWidth,
                height: desiredHeight
            }}
        />
    )
}

const Profile = ({ navigation }) => {
    const [data, setData] = useState([
        {'name':'one','height':130,'img':'https://i.pinimg.com/originals/12/78/87/12788757389604aae46006a1b7e3500b.jpg'},{'name':'two','height':230,'img':'https://wallpaper.dog/large/522253.jpg'},
        {'name':'three','height':190,'img':'https://thumbs.dreamstime.com/b/aster-flowers-art-design-26968847.jpg'},{'name':'four','height':130,'img':'https://www.azflowerpictures.com/wp-content/uploads/2020/09/Pink-Flowers-1.jpg'},
        {'name':'five','height':200,'img':'https://static.onecms.io/wp-content/uploads/sites/37/2020/04/10/premixed-bouquet-flower-0e49a64c.jpg'},
        {'name':'six','height':110,'img':'https://www.expressflowersandevents.com/assets/1/14/MainFCKEditorDimension/179418xlx1.jpg'},
        {'name':'seven','height':200,'img':'https://www.expressflowersandevents.com/assets/1/14/MainFCKEditorDimension/179418xlx1.jpg'},
        {'name':'eight','height':240,'img':'https://www.expressflowersandevents.com/assets/1/14/MainFCKEditorDimension/179418xlx1.jpg'},
        {'name':'nine','height':160,'img':'https://www.expressflowersandevents.com/assets/1/14/MainFCKEditorDimension/179418xlx1.jpg'},
        {'name':'ten','height':240,'img':'https://www.expressflowersandevents.com/assets/1/14/MainFCKEditorDimension/179418xlx1.jpg'},
        {'name':'eleven','height':160,'img':'https://www.expressflowersandevents.com/assets/1/14/MainFCKEditorDimension/179418xlx1.jpg'},
        {'name':'twelve','height':230,'img':'https://www.expressflowersandevents.com/assets/1/14/MainFCKEditorDimension/179418xlx1.jpg'},
        {'name':'thirteen','height':200,'img':'https://www.expressflowersandevents.com/assets/1/14/MainFCKEditorDimension/179418xlx1.jpg'},
        {'name':'fourteen','height':200,'img':'https://www.expressflowersandevents.com/assets/1/14/MainFCKEditorDimension/179418xlx1.jpg'},
        {'name':'fifteen','height':100,'img':'https://www.expressflowersandevents.com/assets/1/14/MainFCKEditorDimension/179418xlx1.jpg'}
    ]); //{'one':'good'},{'two':'fine'}
    const [loading, setLoading] = useState(false);
    const [profileDone, setProfileDone] = useState('');
    const [img_filled, set_img_filled] = useState(false);
    const [img_uri, set_img_uri] = useState('');
    const [siteType, setSiteType] = useState('Store');
    const [active, setActive] = useState('grid'); // grid, tag, play, bookmark
    const [modalVisible, setModalVisible] = useState(false);
    const [checklistVisible, setChecklistVisible] = useState(false);
    
    const imageMap = {
        one: require('../../assets/img/one.jpg'),
        two: require('../../assets/img/two.jpg'),
        three: require('../../assets/img/three.jpg'),
        four: require('../../assets/img/four.jpg'),
        five: require('../../assets/img/five.jpg'),
        six: require('../../assets/img/six.jpg'),
        seven: require('../../assets/img/seven.jpg'),
        eight: require('../../assets/img/eight.jpg'),
        nine: require('../../assets/img/nine.jpg'),
        ten: require('../../assets/img/ten.jpg'),
        eleven: require('../../assets/img/eleven.jpg'),
        twelve: require('../../assets/img/twelve.jpg'),
        thirteen: require('../../assets/img/thirteen.jpg'),
        fourteen: require('../../assets/img/fourteen.jpg'),
        fifteen: require('../../assets/img/fifteen.jpg')
    }
    
    return (
        <View style={styles.container}>
            <SafeAreaView style={{flex:1}}>
                <View style={{ backgroundColor: '#fff', height: Platform.OS === 'android' ? 50 : 0 }} />
                <View style={styles.header_cont}>
                    <View style={styles.pf_hd_username}>
                        <Text style={styles.pf_hd_username_text}>olipxstudio</Text>
                    </View>
                    <View style={styles.pf_hd_options}>
                        {
                            profileDone == '' &&
                            <Button
                                text="Complete"
                                press={()=>navigation.navigate("---")}
                                status={false}
                                size="small"
                                bac={Colors.primary}
                                colour={Colors.white}
                            />
                        }
                        <Pressable style={styles.pf_option_btn}>
                            <Ionicons name="ellipsis-horizontal-sharp" size={24} color="black" />
                        </Pressable>
                    </View>
                </View>
                
                <View style={styles.main}>
                    
                    <MasonryList
                        data={data}
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
                            <View style={styles.pf_details}>
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
                                <View style={styles.pf_det_info}>
                                    <View style={styles.pf_det_tits}>
                                        <Text style={styles.pfd_tit}>Olipx Studio</Text>
                                        <Text style={styles.pfd_subtit}>Web Designer</Text>
                                    </View>
                                    <View style={styles.pf_det_stats}>
                                        <View>
                                            <Text style={styles.pfs_num}>340</Text>
                                            <Text style={styles.pfd_subtit}>Followers</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.pfs_num}>20.4k</Text>
                                            <Text style={styles.pfd_subtit}>Following</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.pfs_num}>204</Text>
                                            <Text style={styles.pfd_subtit}>Posts</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.bio}>
                                <Text style={styles.bio_text}>UI designer a Product Designer | Product Manager Available | also good at football</Text>
                                <Text style={styles.bio_url}>olipxstudio.com</Text>
                            </View>
                            {
                                data == '' ?
                                <>
                                <View style={styles.emptyHD}>
                                    <View style={styles.empLine}></View>
                                    <View style={styles.empDetails}>
                                        <Text style={styles.empTit}>Let's get your Profile ready</Text>
                                        <Text style={styles.empSub}>We make it easy and quick, follow this simple checklist.</Text>
                                        <Button
                                            text="Open Checklist"
                                            press={()=>setChecklistVisible(!checklistVisible)}
                                            status={false}
                                            size="large"
                                            bac={Colors.primary}
                                            colour={Colors.white}
                                        />
                                    </View>
                                </View>
                                <Modal
                                animationType="slide"
                                statusBarTranslucent={true}
                                transparent={true}
                                visible={checklistVisible}
                                // onShow={()=>alert('shown')}
                                onRequestClose={() => {
                                    setChecklistVisible(!checklistVisible);
                                }}>
                                    <View style={styles.ModalView}>
                                        <View style={styles.ModalCenterView}>
                                            <View style={styles.modalCloseBarHD}><Pressable style={styles.modalCloseBar} onPress={()=>setChecklistVisible(!checklistVisible)}></Pressable></View>
                                            <View style={styles.modalHead}>
                                                <Ionicons onPress={()=>setChecklistVisible(!checklistVisible)} name="close-circle-outline" size={24} color={Colors.black} style={{marginLeft:-7}} />
                                            </View>
                                            <ProfileChecklist />
                                        </View>
                                    </View>
                                </Modal>
                                </>
                                :
                                <>
                                <View style={styles.pf_action_bar}>
                                    <Pressable style={[styles.pfActionBtn, {backgroundColor:Colors.graySeven}]}>
                                        <Text style={styles.pfActionBtnText}>Edit Profile</Text>
                                    </Pressable>
                                    <Pressable style={[styles.pfActionBtn, {backgroundColor:Colors.primary}]}>
                                        <Text style={[styles.pfActionBtnText, {color:Colors.white}]}>Create {siteType}</Text>
                                    </Pressable>
                                </View>
                                <View style={styles.tabBar}>
                                    <View>
                                        <Ionicons name="ios-grid-outline" size={24} color={Colors.grayEleven} style={{display:active==='grid'?'none':'flex'}} />
                                        <Ionicons name="ios-grid" size={24} color={Colors.grayTwelve} style={{display:active==='grid'?'flex':'none'}} />
                                    </View>
                                    <View>
                                        <Ionicons name="pricetags-outline" size={24} color={Colors.grayEleven} style={{display:active==='tag'?'none':'flex'}} />
                                        <Ionicons name="pricetags" size={24} color={Colors.grayTwelve} style={{display:active==='tag'?'flex':'none'}} />
                                    </View>
                                    <View>
                                        <Ionicons name="play-outline" size={24} color={Colors.grayEleven} style={{display:active==='play'?'none':'flex'}} />
                                        <Ionicons name="play" size={24} color={Colors.grayTwelve} style={{display:active==='play'?'flex':'none'}} />
                                    </View>
                                    <View>
                                        <Ionicons name="bookmark-outline" size={24} color={Colors.grayEleven} style={{display:active==='bookmark'?'none':'flex'}} />
                                        <Ionicons name="bookmark" size={24} color={Colors.grayTwelve} style={{display:active==='bookmark'?'flex':'none'}} />
                                    </View>
                                </View>
                                </>
                            }
                            </>
                        }
                        numColumns={2}
                        keyExtractor={(item) => item.name}
                        style={{justifyContent: 'space-between'}}
                        renderItem={({ item, index }) => {
                            return (
                                <Pressable onPress={()=>setModalVisible(!modalVisible)} key={index} style={[styles.post, {height: item.height }]}>
                                    {/* <Ionicons name="ios-pricetag" size={18} color={Colors.white} style={styles.productTag} /> */}
                                    <Image source={imageMap[item.name]} resizeMode='cover' style={{width:'100%',height:'100%'}} />
                                    {/* <RemoteImage uri={item.img} desiredWidth={(width - 30) / 2} /> */}
                                </Pressable>
                            )
                        }}
                        ListFooterComponent={
                            <View style={styles.scrollTop}>
                                <View style={styles.scrollTopInner}>
                                    <Ionicons name="arrow-up" size={18} color={Colors.black_600} />
                                </View>
                            </View>
                        }
                    />
                    
                </View>
                
                {/* <View style={styles.postsHolder}>
                    <View style={styles.post}>
                        <Ionicons name="play" size={18} color={Colors.primary} style={styles.vidTag} />
                    </View>
                    <View style={[styles.post, styles.textPost]}>
                        <View style={styles.textPostBar}></View>
                        <Text style={styles.textPostText} numberOfLines={8}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                    </View>
                    <View style={styles.post}>
                        
                    </View>
                    <View style={styles.post}>
                        <Ionicons name="ios-pricetag" size={18} color={Colors.white} style={styles.productTag} />
                    </View>
                </View> */}
                
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
                            <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom:30}}>
                                <PostBody press={()=>alert('Okay')} img={imageMap['two']} type="photo" />
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
        paddingBottom: 15
    },
    main:{
        flex: 1,
        width: '100%',
        paddingHorizontal: 15,
        boxSizing: 'border-box'
    },
    t_b_space: {
        marginVertical: 50
    },
    title: {
        fontSize: 36,
        marginBottom:3
    },
    subtitle: {
        marginTop:10
    },
    pf_hd_options:{
        flexDirection:'row',
        alignItems: 'center',
    },
    pf_option_btn: {
        marginLeft: 25
    },
    pf_pt: {
        width: 82,
        height: 82,
        borderColor: Colors.grayEight,
        borderWidth: 2.5,
        padding: 3,
        borderRadius: 50,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center'
    },
    pf_pt_inner: {
        width: '100%',
        height: '100%',
        backgroundColor: Colors.grayThree,
        borderRadius: 50,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center'
    },
    photo_inp_img: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    pf_details: {
        flexDirection: 'row',
        width: '100%',
    },
    pf_det_info: {
        marginLeft: 15,
        flexGrow: 1,
    },
    pf_det_tits: {
        
    },
    pfd_tit: {
        fontWeight: '700',
        fontSize: 16
    },
    pfd_subtit: {
        fontSize: 13,
        color: Colors.grayTwelve,
        marginTop: 2
    },
    pf_det_stats: {
        flexDirection: 'row',
        flexGrow: 1,
        marginTop: 10,
        justifyContent: 'space-between',
    },
    pfs_num: {
        fontWeight: '700',
        fontSize: 14
    },
    bio: {
        marginTop: 15
    },
    bio_text: {
        fontSize: 14,
        lineHeight: 21,
        color: Colors.black_800
    },
    bio_url: {
        fontSize: 14,
        color: Colors.secondary,
        marginTop: 5
    },
    emptyHD: {
        marginTop: 30,
    },
    empLine: {
        width: '100%',
        height: 1,
        backgroundColor: Colors.grayEight
    },
    empDetails: {
        width: '50%',
        paddingTop: 50
    },
    empTit: {
        fontSize: 22,
        lineHeight: 30
    },
    empSub: {
        fontSize: 16,
        marginVertical: 15,
        lineHeight: 23,
        color: Colors.black_800
    },
    pf_action_bar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15
    },
    pfActionBtn: {
        paddingVertical: 8,
        width: (width / 2) - 25,
        borderRadius: 30
    },
    pfActionBtnText: {
        fontSize: 14,
        textAlign: 'center',
        fontWeight: '500'
    },
    tabBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 15
    },
    post: {
        width: (width / 2) - 18,
        borderRadius: 16,
        backgroundColor: Colors.grayEight,
        marginBottom: 5,
        position: 'relative',
        overflow: 'hidden'
    },
    textPost: {
        paddingVertical: 10,
        paddingRight: 10,
        paddingLeft: 20,
        backgroundColor: Colors.white,
        borderWidth: 1,
        borderColor: Colors.graySix
    },
    textPostBar: {
        position: 'absolute',
        width: 6,
        height: '80%',
        left: 0,
        top: '20%',
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
        zIndex: 10
    },
    scrollTop: {
        width: '100%',
        height: 50,
        marginBottom:15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    scrollTopInner: {
        width: 30,
        height: 30,
        backgroundColor: Colors.black_025,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
    }
})


export default Profile;