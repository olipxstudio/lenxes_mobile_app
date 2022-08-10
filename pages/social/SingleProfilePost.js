import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, TextInput, StyleSheet, Pressable, Platform, Dimensions, Image, Alert, FlatList } from 'react-native';
import Button from '../../components/Button';
import Colors from '../../components/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import PostBody from '../../components/PostBody';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const RemoteImage = ({ uri, type, desiredWidth }) => {
    const [desiredHeight, setDesiredHeight] = React.useState(0)
    const [newWidth, setNewWidth] = React.useState(0)

    Image.getSize(uri, (width, height) => {
        if(width>desiredWidth){
            setNewWidth(desiredWidth)
            setDesiredHeight(desiredWidth / width * height)
        }else{
            setNewWidth(width)
            setDesiredHeight(width / width * height)
        }
    })

    return (
        <Image
            source={{ uri }}
            style={{
                width: newWidth,
                height: desiredHeight,
                resizeMode: 'cover',
                borderRadius: type == 'comment' ? 10 : 16
            }}
        />
    )
}

const {width} = Dimensions.get('window');

const SingleProfilePost = ({ navigation }) => {
    const [data, setData] = useState([]);
    const [type, setType] = useState('img');
    
    const fakeData = [
        {
            'name':'oke',
            'type':'img'
        },
        {
            'name':'pius',
            'type':'text'
        }
    ]
    
    return (
        <View style={styles.container}>
            <SafeAreaView style={{flex:1}}>
                <View style={{ backgroundColor: '#fff', height: Platform.OS === 'android' ? 50 : 0 }} />
                <View style={styles.header_cont}>
                    <Pressable onPress={()=>navigation.goBack()} style={{marginLeft:-6}}>
                        <Ionicons name="chevron-back" size={24} color="black" />
                    </Pressable>
                    <View style={styles.pf_hd_options}>
                        <TouchableOpacity onPress={()=>setShowTaggedProduct(!showTaggedProduct)} style={styles.fdPh_PtCont}>
                            <Entypo name="price-tag" size={18} color={Colors.black} />
                        </TouchableOpacity>
                        <Pressable style={styles.pf_option_btn}>
                            <AntDesign name="adduser" size={24} color="black" />
                        </Pressable>
                    </View>
                </View>
                
                <View style={styles.main}>
                    <FlatList
                        data={fakeData}
                        showsVerticalScrollIndicator={false}
                        // getItemLayout={(data, index) => getItemLayout(data, index)}
                        // ref={(ref) => setListRef(ref)}
                        // onMomentumScrollEnd={(nativeEvent) => handleScrollTop(nativeEvent)}
                        // removeClippedSubviews={true}
                        initialNumToRender={10}
                        // onEndReached={() => loadMoreFeed(user_id)}
                        // onEndReachedThreshold={7}
                        // onRefresh={() => getItems(owner_id)}
                        // refreshing={loading}
                        ListHeaderComponent={
                            <>
                                <View style={styles.fdPostHolder}>
                                    <View style={styles.body}>
                                        <View style={styles.head}>
                                            <Pressable  style={styles.hd_det}>
                                                {/* <View  style={styles.hd_img}>
                                                    <Image  style={styles.hdImg_photo} />
                                                </View> */}
                                                <View>
                                                    {/* <Text  style={styles.hd_name}>olipxstudio</Text> */}
                                                    <Text  style={styles.hd_place}>Lekki Penisula</Text>
                                                </View>
                                            </Pressable>
                                            <Ionicons onPress={()=>alert('options')} name="ellipsis-horizontal-sharp" size={20} color={Colors.grayTwelve} />
                                        </View>
                                        {
                                            type == 'text' ?
                                            <View style={styles.textPost}>
                                                <View style={styles.textPostBar}></View>
                                                <Text style={styles.textPostText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</Text>
                                            </View>
                                            :
                                            <View style={styles.postPhoto}>
                                                {/* PHOTO AND VIDEO */}
                                                <RemoteImage uri={'https://images.pexels.com/photos/6129992/pexels-photo-6129992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} desiredWidth={width - 30} />
                                                {/* 9476187 */}
                                                {/* 9476188 */}
                                                {/* 12987587 */}
                                                {/* 6129989 */}
                                                {/* 6129992 */}
                                                {/* 4946918 */}
                                                {/* <Image source={img} style={styles.postPhotoImg} /> */}
                                                <View style={styles.vidPlay}>
                                                    <TouchableOpacity style={styles.vidPlayBtn} onPress={()=>alert('good')}>
                                                        <Ionicons name="play" size={18} color={Colors.white} />
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        }
                                        <View style={styles.postActionHolder}>
                                            <View style={styles.postActionBtnGrp}>
                                                <Pressable style={styles.postAction}>
                                                    <Ionicons name="ios-star" size={22} color={Colors.grayFour} />
                                                    <Text style={styles.postActionText}>1+8k</Text>
                                                </Pressable>
                                                {/* <Pressable style={styles.postAction}>
                                                    <Ionicons name="ios-chatbubble" size={22} color={Colors.grayFour} />
                                                </Pressable> */}
                                            </View>
                                            <View style={styles.postActionBtnGrp}>
                                                <Pressable style={styles.postAction}>
                                                    <Ionicons name="arrow-redo-sharp" size={22} color={Colors.grayFour} />
                                                </Pressable>
                                                <Pressable style={[styles.postAction, {marginRight:0}]}>
                                                    <Text style={[styles.postActionText, {marginLeft:0,marginRight:4}]}>5</Text>
                                                    <Ionicons name="chatbubbles" size={22} color={Colors.grayFour} />
                                                </Pressable>
                                            </View>
                                        </View>
                                        <View style={styles.postCaption}>
                                            {
                                                type != 'text' ?
                                                <Text style={styles.postCaptionText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim consectetur.</Text>
                                                :
                                                <View style={{height:Colors.space_12}}></View>
                                            }
                                            {/* <Pressable style={styles.postCaptionCommentStats}>
                                                <Text style={styles.postCaptionCommentStatsText}>View all 430 comments</Text>
                                            </Pressable> */}
                                        </View>
                                    </View>
                                </View>
                                
                                <View style={styles.addComHd}>
                                    <TouchableOpacity style={styles.addComAddImg}>
                                        <Ionicons name="image" size={18} color={Colors.black_500} />
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
                                                <RemoteImage type="comment" uri={'https://images.pexels.com/photos/6129989/pexels-photo-6129989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} desiredWidth={width - 114} />
                                                {/* <Image source={require('../../assets/img/four.jpg')} resizeMode="contain" style={{width:'100%',height:200}} /> */}
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
                                                <RemoteImage type="comment" uri={'https://images.pexels.com/photos/6129989/pexels-photo-6129989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} desiredWidth={width - 114} />
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
                                        <Text style={{color:Colors.secondary}}>View more comments</Text>
                                    </Pressable>
                                </View>
                                <View style={styles.linkerHd}>
                                    <View style={{flexDirection:'row'}}>
                                        <Text>This post is linked to </Text>
                                        <Text style={{fontWeight:'bold'}}>*Wedding*</Text>
                                        <Text> posts</Text>
                                    </View>
                                    <Ionicons name="ios-information-circle-outline" size={20} color={Colors.grayTwelve} />
                                </View>
                            </>
                        }
                        numColumns={1}
                        keyExtractor={(item) => item.name}
                        renderItem={({ item, index }) => {
                            return (
                                <PostBody key={index} press={()=>alert('Okay')} position={index} type={item.type} />
                            )
                        }}
                        ListFooterComponent={
                            <View style={styles.scrollTop}>
                                <View style={styles.scrollTopInner}>
                                    <Ionicons name="ios-add-circle-outline" size={18} color={Colors.black_600} />
                                </View>
                            </View>
                        }
                    />
                </View>
            </SafeAreaView>
        </View>
    );
}


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
    allComments: {
        marginBottom: 15
    },
    addComHd: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: Colors.black_075,
        borderRadius: 30,
        padding: 3,
        marginBottom: 15
    },
    addComAddImg: {
        width: 33,
        height: 33,
        backgroundColor: Colors.black_050,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
    },
    addComInput: {
        fontSize: 14.5,
        flexGrow: 1,
        marginHorizontal: 10
    },
    addComBtn: {
        width: 33,
        height: 33,
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
    },
    
    
    // FOR TOP DETAILS - main single page details ------------------------------ //
    body: {
        width: '100%'
    },
    head: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    hd_det: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    hd_img: {
        width: 30,
        height: 30,
        backgroundColor: Colors.grayEight,
        borderRadius: 50,
        marginRight: 10,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center'
    },
    hdImg_photo: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    hd_name: {
        fontSize: 12,
        fontWeight: '500'
    },
    hd_place: {
        fontSize: 12,
        color: Colors.grayEleven
    },
    postPhoto: {
        width: '100%',
        // height: 350, // 500 With Sample Image
        // backgroundColor: Colors.grayEight,
        borderRadius: 16,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },
    postPhotoImg: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    textPost: {
        marginVertical: 15,
        position: 'relative'
    },
    textPostBar: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: 5,
        height: '100%',
        backgroundColor: Colors.secondaryLight,
        borderRadius: 1
    },
    textPostText: {
        lineHeight: 21,
        fontSize: 14.5,
        color: Colors.black_800,
        marginLeft: 20
    },
    postActionHolder: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    },
    postActionBtnGrp: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    postAction: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 35
    },
    postActionText: {
        color: '#787878',
        fontSize: 11,
        marginLeft: 4
    },
    postCaption:{
        // marginBottom: 10
    },
    postCaptionText:{
        lineHeight: 21,
        fontSize: 14.5,
        color: Colors.black_800
    },
    postCaptionCommentStats:{
        
    },
    postCaptionCommentStatsText: {
        color: '#787878',
        fontSize: 14,
    },
    fdPostHolder: {
        position: 'relative',
        marginBottom: 15,
    },
    fdPh_PtBbl: {
        position: 'absolute',
        bottom: -5,
        right: 0,
        width: 45,
        height: 45,
        borderRadius: 50,
        backgroundColor: Colors.grayTwo,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fdPh_PtCont: {
        width: 32,
        height: 32,
        borderRadius: 50,
        backgroundColor: Colors.grayEight,
        justifyContent: 'center',
        alignItems: 'center'
    },
    vidPlay: {
        width: 40,
        height: 40,
        borderRadius: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'none'
    },
    vidPlayBtn: {
        width: 28,
        height: 28,
        borderRadius: 50,
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    // END TOP DETAILS STYLE ---------------------------------- //
    cmHd: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        width: width - 30,
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
        backgroundColor: Colors.grayOne,
        marginLeft: 10,
        paddingTop: 3,
        paddingHorizontal: 3,
        position: 'relative',
        borderRadius: 12,
        flexShrink: 1,
        zIndex: 1,
        width: width - 70
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
        width: width - 108
    },
    cmIcon: {
        position: 'absolute',
        top: 3,
        left: -16,
        zIndex: 0
    },
    cmIconFlip: {
        left: width - 116,
    },
    cmCaption: {
        lineHeight: 20,
        fontSize: 14,
        color: Colors.black_800,
        marginHorizontal: 6,
        marginTop: 4,
    },
    cmPhoto: {
        // borderRadius
    },
    cmFt: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 6,
        marginTop: 6,
        marginBottom: 6
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
    linkerHd: {
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: Colors.grayEight,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 20
    },
    linkerText: {
        
    },
})


export default SingleProfilePost;