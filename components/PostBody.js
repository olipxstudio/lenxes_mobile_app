import React, {useState} from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, Pressable, ScrollView, Dimensions } from 'react-native';
import Colors from './Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Entypo } from '@expo/vector-icons';
import TaggedPost from './TaggedPost';

const RemoteImage = ({ uri, desiredWidth }) => {
    const [desiredHeight, setDesiredHeight] = React.useState(0)

    Image.getSize(uri, (width, height) => {
        setDesiredHeight(desiredWidth / width * height)
    })

    return (
        <Image
            source={{ uri }}
            // source={ uri }
            style={{
                width: desiredWidth,
                height: desiredHeight,
                resizeMode: 'cover'
            }}
        />
    )
}

const {width} = Dimensions.get('window');

const PostBody = ({ position, text, press, img, type, start_discuss }) => {
    const [showTaggedProduct, setShowTaggedProduct] = useState(false)
    
    return (
        <View style={styles.fdPostHolder}>
            <TouchableOpacity style={styles.body} delayPressIn={200} onPress={()=>press()}>
                <View style={styles.head}>
                    <Pressable  style={styles.hd_det}>
                        <View  style={styles.hd_img}>
                            {/* <Image  style={styles.hdImg_photo} /> */}
                        </View>
                        <View>
                            <Text  style={styles.hd_name}>Olipx Studio <Text style={styles.hd_username}>@olipxstudio</Text></Text>
                            <Text  style={styles.hd_place}>Lekki Penisula</Text>
                        </View>
                    </Pressable>
                    <Ionicons onPress={()=>alert('options')} name="ellipsis-horizontal-sharp" size={20} color={Colors.grayTwelve} />
                </View>
                <View>
                    {/* <View style={{position:'absolute',bottom:3,right:3,width:'100%'}}> */}
                    <View style={{position:'absolute',top:15,left:0,width:'100%',zIndex:10}}>
                        <View style={styles.fdPh_PtBbl}>
                            <TouchableOpacity onPress={()=>setShowTaggedProduct(!showTaggedProduct)} style={styles.fdPh_PtCont}>
                                <Entypo name="price-tag" size={11} color={Colors.black} />
                            </TouchableOpacity>
                        </View>
                        <TaggedPost size="partial" press={()=>alert('done')} show={showTaggedProduct} />
                    </View>
                    <View style={{marginLeft:45}}>
                        <View style={{marginVertical: 5}}>
                            {
                                type == 'text' ?
                                <View style={styles.textPost}>
                                    <Text style={styles.textPostText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</Text>
                                </View>
                                :
                                <View style={styles.postPhoto}>
                                    {/* PHOTO AND VIDEO */}
                                    {/* <RemoteImage uri={'https://images.pexels.com/photos/12987587/pexels-photo-12987587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} desiredWidth={width - 30} /> */}
                                    {/* 9476187 */}
                                    {/* 9476188 */}
                                    {/* 12987587 */}
                                    {/* 6129989 */}
                                    {/* 6129992 */}
                                    {/* 4946918 */}
                                    <Image source={img} style={styles.postPhotoImg} />
                                    <View style={styles.vidPlay}>
                                        <TouchableOpacity style={styles.vidPlayBtn} onPress={()=>alert('good')}>
                                            <Ionicons name="play" size={18} color={Colors.white} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            }
                            {/* <View style={{position:'absolute',bottom:3,right:3,width:'100%'}}>
                                <TaggedPost size="partial" press={()=>alert('done')} show={showTaggedProduct} />
                                <View style={styles.fdPh_PtBbl}>
                                    <TouchableOpacity onPress={()=>setShowTaggedProduct(!showTaggedProduct)} style={styles.fdPh_PtCont}>
                                        <Entypo name="price-tag" size={11} color={Colors.black} />
                                    </TouchableOpacity>
                                </View>
                            </View> */}
                        </View>
                        <View style={styles.postActionHolder}>
                            <View style={styles.postActionBtnGrp}>
                                <Pressable style={styles.postAction}>
                                    <Ionicons name="ios-heart" size={20} color={Colors.grayEight} />
                                    <Text style={styles.postActionText}>8k</Text>
                                </Pressable>
                                <Pressable style={styles.postAction}>
                                    <Ionicons name="ios-chatbubble" size={20} color={Colors.grayEight} />
                                </Pressable>
                            </View>
                            <View style={styles.postActionBtnGrp}>
                                <Pressable style={styles.postAction}>
                                    <Ionicons name="arrow-redo-sharp" size={20} color={Colors.grayEight} />
                                </Pressable>
                                <Pressable onPress={start_discuss} style={[styles.postAction, {marginRight:0}]}>
                                    <Text style={[styles.postActionText, {marginLeft:0,marginRight:4}]}>5</Text>
                                    <Ionicons name="chatbubbles" size={20} color={Colors.grayEight} />
                                </Pressable>
                            </View>
                        </View>
                        <View style={styles.postCaption}>
                            {
                                type != 'text' ?
                                <Text style={styles.postCaptionText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim consectetur.</Text>
                                :
                                <View style={{height: 2}}></View>
                            }
                            <Pressable style={styles.postCaptionCommentStats}>
                                <Text style={styles.postCaptionCommentStatsText}>View comments</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            {/* <View style={{position:'absolute',bottom:0,right:0,width:'100%'}}>
                <TaggedPost size="partial" press={()=>alert('done')} show={showTaggedProduct} />
                <View style={styles.fdPh_PtBbl}>
                    <TouchableOpacity onPress={()=>setShowTaggedProduct(!showTaggedProduct)} style={styles.fdPh_PtCont}>
                        <Entypo name="price-tag" size={18} color={Colors.black} />
                    </TouchableOpacity>
                </View>
            </View> */}
        </View>
    );
}


const styles = StyleSheet.create({
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
        width: 35,
        height: 35,
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
        fontSize: 13,
        fontWeight: '500',
        marginBottom: 2
    },
    hd_username: {
        color: Colors.grayEleven,
    },
    hd_place: {
        fontSize: 12,
        color: Colors.grayEleven
    },
    postPhoto: {
        width: '100%',
        height: 300, // 500 With Sample Image
        backgroundColor: Colors.grayEight,
        borderRadius: 16,
        // marginVertical: 5,
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
        // marginVertical: 5,
        position: 'relative'
    },
    // textPostBar: {
    //     position: 'absolute',
    //     left: 0,
    //     top: 0,
    //     width: 4,
    //     height: '100%',
    //     backgroundColor: Colors.secondaryLight,
    //     borderRadius: 2,
    //     display: 'none'
    // },
    textPostText: {
        lineHeight: 21,
        fontSize: 14.5,
        color: Colors.black_800,
        // marginLeft: 18
    },
    postActionHolder: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5
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
        marginBottom: 5,
        fontSize: 14.5,
        color: Colors.black_800
    },
    postCaptionCommentStats:{
        // height: 17,
        // backgroundColor: '#f00'
    },
    postCaptionCommentStatsText: {
        color: '#787878',
        fontSize: 14,
    },
    fdPostHolder: {
        position: 'relative',
        marginBottom: 20,
    },
    fdPh_PtBbl: {
        // position: 'absolute',
        // bottom: 0,
        // right: 0,
        width: 35,
        height: 35,
        borderRadius: 50,
        backgroundColor: Colors.grayTwo,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5
    },
    fdPh_PtCont: {
        width: 25,
        height: 25,
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
})


export default PostBody;