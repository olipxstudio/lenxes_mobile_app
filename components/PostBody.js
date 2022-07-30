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

const PostBody = ({ position, text, press, img, type }) => {
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
                            <Text  style={styles.hd_name}>olipxstudio</Text>
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
                <View style={styles.postActionHolder}>
                    <View style={styles.postActionBtnGrp}>
                        <Pressable style={styles.postAction}>
                            <Ionicons name="ios-star" size={22} color={Colors.grayFour} />
                            <Text style={styles.postActionText}>1+8k</Text>
                        </Pressable>
                        <Pressable style={styles.postAction}>
                            <Ionicons name="ios-chatbubble" size={22} color={Colors.grayFour} />
                        </Pressable>
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
                    <Pressable style={styles.postCaptionCommentStats}>
                        <Text style={styles.postCaptionCommentStatsText}>View all 430 comments</Text>
                    </Pressable>
                </View>
            </TouchableOpacity>
            <View style={{position:'absolute',bottom:0,right:0,width:'100%'}}>
                <TaggedPost size="partial" press={()=>alert('done')} show={showTaggedProduct} />
                <View style={styles.fdPh_PtBbl}>
                    <TouchableOpacity onPress={()=>setShowTaggedProduct(!showTaggedProduct)} style={styles.fdPh_PtCont}>
                        <Entypo name="price-tag" size={18} color={Colors.black} />
                    </TouchableOpacity>
                </View>
            </View>
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
        marginBottom: 10
    },
    postCaptionText:{
        lineHeight: 21,
        marginBottom: 10,
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
        marginBottom: 20,
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
})


export default PostBody;