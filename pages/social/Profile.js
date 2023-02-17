import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, SafeAreaView, ScrollView, Image, StyleSheet, Pressable, Platform, Dimensions, Modal, TextInput, TouchableOpacity } from 'react-native';
import Button from '../../components/Button';
import Colors from '../../components/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import ProfileChecklist from '../../components/ProfileChecklist';
import MasonryList from '@react-native-seoul/masonry-list';
import NewPost from '../../components/NewPost';
import Options from '../../components/Options';
import QRCode from 'react-native-qrcode-svg';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { LinearGradient } from 'expo-linear-gradient';
import Club from '../../components/Club';

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
                height: desiredHeight,
                borderRadius: 10
            }}
        />
    )
}

const Profile = ({ navigation }) => {
    const [data, setData] = useState([
        {'i':0, 'name':'button'},
        {'i':1, 'name':'one','height':130,'img':'https://i.pinimg.com/originals/12/78/87/12788757389604aae46006a1b7e3500b.jpg'},
        {'i':2, 'name':'three','height':190,'img':'https://thumbs.dreamstime.com/b/aster-flowers-art-design-26968847.jpg'},
        {'i':3, 'name':'five','height':200,'img':'https://static.onecms.io/wp-content/uploads/sites/37/2020/04/10/premixed-bouquet-flower-0e49a64c.jpg'},
        {'i':4, 'name':'six','height':110,'img':'https://www.expressflowersandevents.com/assets/1/14/MainFCKEditorDimension/179418xlx1.jpg'},
        {'i':5, 'name':'seven','height':200,'img':'https://www.expressflowersandevents.com/assets/1/14/MainFCKEditorDimension/179418xlx1.jpg'},
        {'i':6, 'name':'nine','height':160,'img':'https://www.expressflowersandevents.com/assets/1/14/MainFCKEditorDimension/179418xlx1.jpg'},
        {'i':7, 'name':'eight','height':240,'img':'https://www.expressflowersandevents.com/assets/1/14/MainFCKEditorDimension/179418xlx1.jpg'},
        {'i':8, 'name':'ten','height':240,'img':'https://www.expressflowersandevents.com/assets/1/14/MainFCKEditorDimension/179418xlx1.jpg'},
        // {'i':9, 'name':'eleven','height':160,'img':'https://www.expressflowersandevents.com/assets/1/14/MainFCKEditorDimension/179418xlx1.jpg'},
        // {'i':10, 'name':'twelve','height':230,'img':'https://www.expressflowersandevents.com/assets/1/14/MainFCKEditorDimension/179418xlx1.jpg'},
        // {'i':11, 'name':'thirteen','height':200,'img':'https://www.expressflowersandevents.com/assets/1/14/MainFCKEditorDimension/179418xlx1.jpg'},
        // {'i':12, 'name':'fourteen','height':200,'img':'https://www.expressflowersandevents.com/assets/1/14/MainFCKEditorDimension/179418xlx1.jpg'},
        // {'i':13, 'name':'fifteen','height':100,'img':'https://www.expressflowersandevents.com/assets/1/14/MainFCKEditorDimension/179418xlx1.jpg'}
    ]); //{'one':'good'},{'two':'fine'}
    const [emptydata, setEmptyData] = useState([]);
    const [photo, setPhoto] = useState('photo');
    const [bio, setBio] = useState('');
    
    const [tab, setTab] = useState(false); // true - posts, false - reviews
    const [loading, setLoading] = useState(false);
    const [profileDone, setProfileDone] = useState('');
    const [img_filled, set_img_filled] = useState(false);
    const [img_uri, set_img_uri] = useState('');
    const [siteType, setSiteType] = useState('Store');
    const [active, setActive] = useState('grid'); // grid, tag, play, bookmark
    const [modalVisible, setModalVisible] = useState(false);
    const [checklistVisible, setChecklistVisible] = useState(false);
    const [sh_opt, set_sh_opt] = useState(false);
    const [qr_vis, set_qr_vis] = useState(false);
    const [scanned, setScanned] = useState(false);
    const [listRef, setListRef] = useState();
    const [scroll_up, set_scroll_up] = useState(false);
    
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
    
    const handleScrollTop = ({ nativeEvent }) => {
        if (nativeEvent.contentOffset.y > 30) {
            set_scroll_up(true);
        } else {
            set_scroll_up(false);
        }
    }
    
    const scrollToTop = () => {
        // listRef.scrollToOffset({ offset: 0, animated: true });
        // set_scroll_up(false);
    }
    
    // const getItemLayout = (data, index) => {
    //     let calc = width + 50;
    //     return { length: calc, offset: calc * index, index }
    // }
    
    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        let cut = data.split("-");
        let followUser = cut[cut.length - 1];
        // set_qr_vis(false);
        // set_following_qr(true);
        // set_qr_follow_alert(true);
        // Send request
        // const xhr = new XMLHttpRequest();
        // const formData = new FormData();
        // formData.append('follow', 'yes');
        // formData.append('userFollowID', followUser);
        // formData.append('userID', loggedin_user_id);
        // xhr.addEventListener("load", () => {
        //   if (xhr.response == '1') {
        //     set_following_qr(false);
        //     setTimeout(() => {
        //         set_qr_follow_alert(false);
        //     }, 1500);
        //     reloadDetails(owner_id, loggedin_user_id);
        //   }
        // }, false);
        // xhr.open("POST", Url.action);
        // xhr.send(formData);
    };
    
    const options = [
        {
            'name': 'Settings',
            'icon': 'ios-settings-outline',
            'action': () => gotoSettings()
        },
        {
            'name': 'Orders & more',
            'icon': 'ios-wallet-outline',
            'action': () => alert("Yeah")
        },
        {
            'name': 'Business Account',
            'icon': 'ios-business-outline',
            'action': () => gotoBusiness()
        },
        {
            'name': 'Invite Friends',
            'icon': 'ios-person-add-outline',
            'action': () => gotoInvite()
        },
        {
            'name': 'QR Code',
            'icon': 'ios-qr-code-outline',
            'action': () => showQr()
        },
        {
            'name': 'I Have Worked With Olipx Studio',
            'icon': 'checkmark-done-circle-outline',
            'action': () => showQr()
        }
    ];
    const closeOption = () => {
        set_sh_opt(false);
    }
    
    const gotoSettings = () => {
        set_sh_opt(false);
        navigation.navigate("Settings");
    }
    const gotoInvite = () => {
        set_sh_opt(false);
        navigation.navigate("Invite");
    }
    const gotoBusiness = () => {
        set_sh_opt(false);
        navigation.navigate("CreateBusiness");
    }
    const showQr = () => {
        set_sh_opt(false);
        set_qr_vis(true);
    }
    
    return (
        <View style={styles.container}>
            <SafeAreaView style={{flex:1}}>
                <View style={{ backgroundColor: '#fff', height: Platform.OS === 'android' ? 50 : 0 }} />
                <View style={styles.header_cont}>
                    <View style={styles.pf_hd_username}>
                        <Text style={styles.pf_hd_username_text}>olipxstudio</Text>
                        <Ionicons name="checkmark-circle" size={13} color={Colors.black_600} />
                        <Text style={styles.merchat}>Merchant</Text>
                    </View>
                    <View style={styles.pf_hd_options}>
                        <Pressable onPress={()=>set_sh_opt(true)} style={styles.pf_option_btn}>
                            <Ionicons name="ellipsis-horizontal-sharp" size={24} color="black" />
                        </Pressable>
                    </View>
                </View>
                
                <View style={styles.main}>
                    
                    <MasonryList
                        data={tab ? data : emptydata}
                        showsVerticalScrollIndicator={false}
                        // getItemLayout={(data, index) => getItemLayout(data, index)}
                        innerRef={(ref) => setListRef(ref)}
                        onMomentumScrollEnd={(nativeEvent) => handleScrollTop(nativeEvent)}
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
                                        <View style={{marginRight: 10}}>
                                            <Button
                                                text="Edit Profile"
                                                press={()=>setChecklistVisible(!checklistVisible)}
                                                status={false}
                                                size="large"
                                                bac={Colors.grayFive}
                                                colour={Colors.black}
                                            />
                                        </View>
                                        <Button
                                            text="Business"
                                            press={()=>setChecklistVisible(!checklistVisible)}
                                            status={false}
                                            size="large"
                                            bac={Colors.grayFive}
                                            colour={Colors.black}
                                        />
                                    </View>
                                </View>
                            </View>
                            <View style={styles.bio}>
                                <Text style={styles.bio_text}>UI designer a Product Designer | Product Manager Available | also good at football</Text>
                            </View>
                            <View style={styles.url_workedWith}>
                                <TouchableOpacity style={styles.link}>
                                    <Text style={styles.bio_url}>olipxstudio.com</Text>
                                    <Ionicons name="arrow-forward" size={15} color={Colors.secondary} style={styles.link_arrow} />
                                </TouchableOpacity>
                                <View style={styles.wwHD}>
                                    <Text style={styles.wwText}>Worked with</Text>
                                    <View style={styles.adminThumbsHD}>
                                        <View style={styles.adminThumbs}></View>
                                        <View style={styles.adminThumbs}></View>
                                        <View style={styles.adminThumbs}></View>
                                        <View style={styles.adminThumbs}></View>
                                    </View>
                                </View>
                            </View>
                            <ScrollView style={styles.data_Indicators} showsHorizontalScrollIndicator={false} horizontal>
                                <View style={styles.indHd}>
                                    <Text style={styles.indTit}>posts</Text>
                                    <Text style={styles.indText}>1806</Text>
                                </View>
                                <View style={styles.indHd}>
                                    <Text style={styles.indTit}>followers</Text>
                                    <Text style={styles.indText}>400</Text>
                                </View>
                                <View style={styles.indHd}>
                                    <Text style={styles.indTit}>following</Text>
                                    <Text style={styles.indText}>12.4M</Text>
                                </View>
                                <View style={styles.indHd}>
                                    <Text style={styles.indTit}>reviews</Text>
                                    <Text style={styles.indText}>2.4K</Text>
                                </View>
                                <View style={styles.indHd}>
                                    <Text style={styles.indTit}>clubs</Text>
                                    <Text style={styles.indText}>35</Text>
                                </View>
                            </ScrollView>
                            {/* ------------- TO SHOW PINNED CLUB --------------- */}
                            <View style={{marginBottom:13}}>
                                <Club press={()=>alert('Okay')} title="My pinned Club" pin="yes" />
                            </View>
                            {/* ------------- TO SHOW PINNED CLUB --------------- */}
                            {
                                photo == '' && bio == '' &&
                                <>
                                <View style={styles.emptyHD}>
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
                            }
                            {
                                !tab ?
                                <>
                                    <ScrollView contentContainerStyle={{alignItems: 'center'}} style={{marginBottom: 20}} showsHorizontalScrollIndicator={false} horizontal>
                                        <View style={styles.btnPrimary}>
                                            <View style={styles.innerBtnPrimary}>
                                                <Ionicons name="add" size={29} color={Colors.white} />
                                            </View>
                                        </View>
                                        <View style={styles.bizImgSam}></View>
                                        <View style={styles.bizImgSam}></View>
                                        <View style={styles.bizImgSam}></View>
                                    </ScrollView>
                                    <View style={styles.addComHd}>
                                        <TouchableOpacity style={styles.addComAddImg}>
                                            <Ionicons name="ios-attach-outline" size={20} color={Colors.black_500} />
                                        </TouchableOpacity>
                                        <TextInput style={styles.addComInput} placeholder='Type a comment...' />
                                        <TouchableOpacity style={styles.addComBtn}>
                                            <Ionicons name="ios-send" size={18} color={Colors.white} />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.allComments}>
                                        <View>
                                            <View style={styles.cmHd}>
                                                <View style={styles.cmPht}>
                                                    
                                                </View>
                                                <View style={styles.cmDetHd}>
                                                    <Ionicons name="caret-back" size={24} color={Colors.grayTwo} style={styles.cmIcon} />
                                                    <Text style={styles.cmCaption}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</Text>
                                                    <View style={styles.cmFt}>
                                                        <Text style={styles.cmHr}>5h</Text>
                                                        <Pressable style={styles.cmRpBtn}>
                                                            <Text style={styles.cmBtnTxt}>Reply</Text>
                                                        </Pressable>
                                                    </View>
                                                </View>
                                            </View>
                                            <View style={[styles.cmHd, styles.cmHdFlip]}>
                                                <View style={[styles.cmPht, styles.PhtFlip]}>
                                                    
                                                </View>
                                                <View style={[styles.cmDetHd, styles.cmDetHdFlip]}>
                                                    <Ionicons name="caret-forward" size={24} color={Colors.grayTwo} style={[styles.cmIcon, styles.cmIconFlip]} />
                                                    <RemoteImage uri={'https://images.pexels.com/photos/6129992/pexels-photo-6129992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} desiredWidth={width - 144} />
                                                    <View style={styles.cmFt}>
                                                        <Text style={styles.cmHr}>5h</Text>
                                                        <Pressable style={styles.cmRpBtn}>
                                                            <Text style={styles.cmBtnTxt}>Reply</Text>
                                                        </Pressable>
                                                    </View>
                                                    <View style={styles.replyLine}></View>
                                                </View>
                                            </View>
                                            <View style={[styles.cmHd, styles.cmHdFlip]}>
                                                <View style={[styles.cmPht, styles.PhtFlip]}>
                                                    
                                                </View>
                                                <View style={[styles.cmDetHd, styles.cmDetHdFlip]}>
                                                    <Ionicons name="caret-forward" size={24} color={Colors.grayTwo} style={[styles.cmIcon, styles.cmIconFlip]} />
                                                    <Text style={styles.cmCaption}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</Text>
                                                    <View style={styles.cmFt}>
                                                        <Text style={styles.cmHr}>5h</Text>
                                                        <Pressable style={styles.cmRpBtn}>
                                                            <Text style={styles.cmBtnTxt}>Reply</Text>
                                                        </Pressable>
                                                    </View>
                                                </View>
                                            </View>
                                            <Pressable style={{marginBottom: 10, marginLeft: 43}}>
                                                <Text style={{color:Colors.secondary}}>View more replies</Text>
                                            </Pressable>
                                        </View>
                                        
                                        <View>
                                            <View style={styles.cmHd}>
                                                <View style={styles.cmPht}>
                                                    
                                                </View>
                                                <View style={styles.cmDetHd}>
                                                    <Ionicons name="caret-back" size={24} color={Colors.grayTwo} style={styles.cmIcon} />
                                                    {/* <RemoteImage type="comment" uri={'https://images.pexels.com/photos/6129989/pexels-photo-6129989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} desiredWidth={width - 75} /> */}
                                                    <Text style={styles.cmCaption}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</Text>
                                                    <View style={styles.cmFt}>
                                                        <Text style={styles.cmHr}>5h</Text>
                                                        <Pressable style={styles.cmRpBtn}>
                                                            <Text style={styles.cmBtnTxt}>Reply</Text>
                                                        </Pressable>
                                                    </View>
                                                </View>
                                            </View>
                                            <View style={[styles.cmHd, styles.cmHdFlip]}>
                                                <View style={[styles.cmPht, styles.PhtFlip]}>
                                                    
                                                </View>
                                                <View style={[styles.cmDetHd, styles.cmDetHdFlip]}>
                                                    <Ionicons name="caret-forward" size={24} color={Colors.grayTwo} style={[styles.cmIcon, styles.cmIconFlip]} />
                                                    <RemoteImage type="comment" uri={'https://images.pexels.com/photos/6129989/pexels-photo-6129989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} desiredWidth={width - 144} />
                                                    {/* <Image source={require('../../assets/img/four.jpg')} resizeMode="contain" style={{width:'100%',height:200}} /> */}
                                                    <Text style={styles.cmCaption}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</Text>
                                                    <View style={styles.cmFt}>
                                                        <Text style={styles.cmHr}>5h</Text>
                                                        <Pressable style={styles.cmRpBtn}>
                                                            <Text style={styles.cmBtnTxt}>Reply</Text>
                                                        </Pressable>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                        <Pressable>
                                            <Text style={{color:Colors.secondary}}>View more reviews</Text>
                                        </Pressable>
                                    </View>
                                </> : null
                            }
                            </>
                        }
                        numColumns={3}
                        keyExtractor={(item) => item.name}
                        style={{justifyContent: 'space-between'}}
                        renderItem={({ item, index }) => {
                            if(item.i == 0){
                                return (
                                    <LinearGradient
                                        colors={[Colors.primary, 'rgba(209, 122, 106, 0.4)']}
                                        style={styles.postBtn}
                                    >
                                        <View style={styles.btn}>
                                            <View style={styles.innerBtn}>
                                                <Ionicons name="add" size={29} color={Colors.primary} />
                                            </View>
                                        </View>
                                    </LinearGradient>
                                )
                            }
                            return (
                                <Pressable onPress={()=>navigation.navigate("SingleProfilePost")} key={index} style={[styles.post, {height: item.height }]}>
                                    {/* <Ionicons name="ios-pricetag" size={18} color={Colors.white} style={styles.productTag} /> */}
                                    <Image source={imageMap[item.name]} resizeMode='cover' style={{width:'100%',height:'100%'}} />
                                    {/* <RemoteImage uri={item.img} desiredWidth={(width - 30) / 2} /> */}
                                </Pressable>
                            )
                        }}
                        ListFooterComponent={
                            <Pressable onPress={() => scrollToTop()} style={styles.scrollTop}>
                                {
                                    data != '' &&
                                    <View style={styles.scrollTopInner}>
                                        <Ionicons name="arrow-up" size={18} color={Colors.black_600} />
                                    </View>
                                }
                            </Pressable>
                        }
                    />
                    
                </View>
                
                
                
                <Modal
                animationType="slide"
                transparent={true}
                visible={qr_vis}
                onRequestClose={() => {
                    set_qr_vis(!qr_vis);
                }}
                >
                    <View style={styles.qrModalView}>
                        <View style={styles.qrModalCenterView}>

                        <View style={styles.qr_code_top}>
                            <Pressable style={styles.qr_code_icon_hd} onPress={() => set_qr_vis(false)}>
                                <Ionicons name="close-outline" size={24} color={Colors.black} style={styles.qr_code_icon} />
                            </Pressable>
                            <Pressable style={styles.qr_code_icon_hd}>
                                <Ionicons name="share-social-outline" size={24} color={Colors.black} style={styles.qr_code_icon} />
                            </Pressable>
                        </View>
                        <View style={styles.qr_code_hd}>
                            {
                            scanned ?
                                <>
                                    <QRCode
                                        value={'follow=yes&7y778327g-'}
                                        // value={Url.action + 'follow=yes&7y778327g-' + loggedin_user_id}
                                        // logo={require('../../assets/images/app-icon-150.png')}
                                        logoSize={70}
                                        size={width - 50}
                                        color='#000' // FEB23E
                                        logoBackgroundColor='transparent'
                                        style={styles.qr_code}
                                    />
                                    <Text style={styles.qr_code_text}>@olipsphil</Text>
                                </>
                                :
                                <View style={styles.qr_scanner_hd}>
                                    <BarCodeScanner
                                        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                                        style={styles.barcode}
                                    />
                                    {/* <Ionicons name="scan-outline" size={380} color="#ccc" style={styles.qr_outline} /> */}
                                    <View>
                                        <Text style={{ fontSize: 14, color: '#000', marginTop: 5 }}>Point to QR Code</Text>
                                    </View>
                                </View>
                            }
                        </View>
                        {
                            scanned ?
                            <Pressable onPress={() => setScanned(false)} style={styles.qr_code_bottom}>
                                <Ionicons name="ios-camera-outline" size={24} color="#000" style={styles.qr_code_bottom_icon} />
                                <Text style={styles.qr_code_bt_text}>Scan QR Code</Text>
                            </Pressable>
                            :
                            <Pressable onPress={() => setScanned(true)} style={{ paddingBottom: 0, marginBottom: 50, alignItems: 'center' }}>
                                <Ionicons name="qr-code-outline" size={30} color="#000" />
                            </Pressable>
                        }
                        </View>
                    </View>
                </Modal>
                
                
                <NewPost />
                
                <View style={styles.tabHolder}>
                    <View style={styles.tabControls}>
                        <TouchableOpacity onPress={()=>setTab(false)} style={[styles.tabBtn, tab ? styles.active : null]}>
                            <Text style={[styles.tabBtnText, tab ? styles.activeText : null]}>Reviews</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>setTab(true)} style={[styles.tabBtn, tab ? null : styles.active]}>
                            <Text style={[styles.tabBtnText, tab ? null : styles.activeText]}>Posts</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
                <Options options={options} show={sh_opt} press={() => closeOption()} />
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
    backDrop: {
        width:'100%',
        height:'5%',
        position:'absolute',
        left:0,
        top:0
    },
    ModalCenterView: {
        backgroundColor: '#fff',
        width: '100%',
        height: '95%',
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
    },
    pf_hd_username: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    pf_hd_username_text: {
        marginRight: 3,
    },
    merchat: {
        fontSize: 12,
        marginLeft: 10,
        color: Colors.grayTen
    },
    main:{
        flex: 1,
        width: '100%',
        paddingHorizontal: 15,
        boxSizing: 'border-box'
    },
    pf_hd_options:{
        flexDirection:'row',
        alignItems: 'center',
    },
    pf_option_btn: {
        marginLeft: 25
    },
    pf_pt: {
        width: 92,
        height: 92,
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
        justifyContent: 'space-between'
    },
    pf_det_tits: {
        
    },
    pfd_tit: {
        fontWeight: '700',
        fontSize: 18
    },
    pfd_subtit: {
        fontSize: 13,
        color: Colors.grayTwelve,
        marginTop: 2
    },
    pf_det_stats: {
        flexDirection: 'row'
    },
    bio: {
        marginTop: 15
    },
    bio_text: {
        fontSize: 14,
        lineHeight: 21,
        color: Colors.black_800
    },
    url_workedWith: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    link: {
        backgroundColor: Colors.grayTwo,
        flexDirection: 'row',
        alignItems: 'baseline',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 30
    },
    bio_url: {
        fontSize: 14,
        color: Colors.secondary,
    },
    link_arrow: {
        transform: [{ rotate: "-45deg" }]
    },
    wwHD: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    wwText: {
        fontSize: 12,
        color: Colors.grayTwelve,
        marginRight: 10
    },
    adminThumbsHD: {
        flexDirection: 'row'
    },
    adminThumbs: {
        width: 20,
        height: 20,
        backgroundColor: Colors.grayEight,
        borderRadius: 100,
        marginLeft: -5
    },
    data_Indicators: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: Colors.grayEight,
        paddingVertical: 10,
        marginTop: 15,
        marginBottom: 20
    },
    indHd: {
        marginRight: 30,
        alignItems: 'center'
    },
    indTit: {
        textTransform: 'uppercase',
        fontSize: 10,
        fontWeight: '600',
        color: Colors.black_500
    },
    indText: {
        fontSize: 16,
        marginTop: 7,
        color: Colors.black_500
    },
    
    
    
    
    
    
    
    
    emptyHD: {
        marginTop: 30,
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
    
    
    postBtn: {
        height: 160,
        width: (width / 3) - 13,
        borderRadius: 14,
        marginBottom: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnPrimary: {
        borderRadius: 50,
        width: 45,
        height: 45,
        backgroundColor: 'rgba(209, 122, 106, 0.35)',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10
    },
    innerBtnPrimary: {
        backgroundColor: Colors.primary,
        width: '73%',
        height: '73%',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 2
    },
    btn: {
        borderRadius: 50,
        width: 45,
        height: 45,
        // backgroundColor: 'rgba(209, 122, 106, 0.4)',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerBtn: {
        backgroundColor: Colors.white,
        width: '73%',
        height: '73%',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 2
    },
    post: {
        width: (width / 3) - 13,
        borderRadius: 14,
        marginBottom: 4,
        backgroundColor: Colors.grayEight,
        position: 'relative',
        overflow: 'hidden'
    },
    bizImgSam: {
        width: 200,
        height: 300,
        backgroundColor: Colors.black_100,
        borderRadius: 20,
        marginRight: 10
    },
    // REVIEW INPUT
    addComHd: {
        // width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 0.5,
        borderColor: Colors.grayEight,
        borderRadius: 50,
        padding: 3,
        marginBottom: 15,
        marginHorizontal: 15
    },
    addComAddImg: {
        width: 31,
        height: 31,
        backgroundColor: Colors.black_050,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
    },
    addComInput: {
        fontSize: 14,
        flexGrow: 1,
        marginHorizontal: 10
    },
    addComBtn: {
        width: 31,
        height: 31,
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
    },
    // Reviews
    allComments: {
        marginBottom: 15,
        marginHorizontal: 15
    },
    cmHd: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        width: width - 60, // 30
        position: 'relative'
    },
    cmHdFlip: {
        flexDirection: 'row-reverse',
        justifyContent: 'flex-start'
    },
    cmPht: {
        width: 30,
        height: 30,
        backgroundColor: Colors.grayEight,
        borderRadius: 50
    },
    PhtFlip: {
        width: 27,
        height: 27,
    },
    cmDetHd: {
        backgroundColor: Colors.grayTwo,
        marginLeft: 10,
        paddingTop: 3,
        paddingHorizontal: 3,
        position: 'relative',
        borderRadius: 12,
        flexShrink: 1,
        zIndex: 1,
        width: width - 100 // 30
    },
    replyLine: {
        position: 'absolute',
        width: 2,
        height: '91%',
        top: 30,
        right: - 24.5,
        backgroundColor: Colors.graySeven
    },
    cmDetHdFlip: {
        marginRight: 10,
        width: width - 138 // 30
    },
    cmIcon: {
        position: 'absolute',
        top: 3,
        left: -16,
        zIndex: 0
    },
    cmIconFlip: {
        left: width - 146, // 30
    },
    cmCaption: {
        lineHeight: 20,
        fontSize: 13.5,
        color: Colors.black_800,
        marginHorizontal: 10,
        marginTop: 6,
    },
    cmPhoto: {
        // borderRadius
    },
    cmFt: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginTop: 6,
        marginBottom: 10
    },
    cmHr: {
        fontSize: 11,
        color: Colors.black_500
    },
    cmRpBtn: {
        
    },
    cmBtnTxt: {
        fontSize: 11,
        color: Colors.black_500
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
        alignItems: 'center',
        display: 'none'
    },
    scrollTopInner: {
        width: 30,
        height: 30,
        backgroundColor: Colors.black_025,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
    },
    qrModalView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: '#00000099'
    },
    qrModalCenterView: {
        backgroundColor: '#fff',
        width: '100%',
        height: '90%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingVertical: 10,
        justifyContent: 'space-between',
        padding: 15,
        alignItems: 'center'
    },
    qr_code_top: {
        width: width - 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginTop: 5
    },
    qr_code_icon_hd: {
        width: 30,
        height: 30
    },
    qr_code_icon: {
        width: 25,
        height: 25,
    },
    qr_code_hd: {
        width: width - 50,
        height: width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    qr_code: {
  
    },
    qr_code_text: {
        fontSize: Colors.no22,
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: '700',
        marginTop: 10
    },
    qr_code_bottom: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 50
    },
    qr_code_bottom_icon: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    qr_code_bt_text: {
        fontSize: 16
    },
    qr_scanner_hd: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    barcode: {
        width: '100%',
        height: '100%'
    },
    qr_outline: {
        position: 'absolute',
        left: 0,
        top: 0
    },
    
    tabHolder: {
        position: 'absolute',
        bottom: 5,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    tabControls: {
        backgroundColor: Colors.graySeven,
        flexDirection: 'row',
        padding: 2,
        borderRadius: 30,
    },
    tabBtn: {
        padding: 7,
        borderRadius: 30,
        width: 100,
        alignItems: 'center'
    },
    tabBtnText: {
        color: Colors.black_500
    },
    active: {
        backgroundColor: Colors.white,
    },
    activeText: {
        color: Colors.black
    }
})


export default Profile;