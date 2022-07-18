import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import Colors from './Colors';
import Ionicons from '@expo/vector-icons/Ionicons';

const PostBody = ({ text, press, img, num }) => {
    
    return (
        <TouchableOpacity style={styles.body} onPress={()=>press()}>
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
                <Ionicons onPress={()=>alert('options')} name="ellipsis-horizontal-sharp" size={24} color={Colors.grayTwelve} />
            </View>
            <View style={styles.postPhoto}>
                {/* <Image  style={styles.postPhotoImg} /> */}
            </View>
            <View style={styles.postActionHolder}>
                <View style={styles.postActionBtnGrp}>
                    <Pressable style={styles.postAction}>
                        <Ionicons name="ios-star" size={22} color={Colors.grayFour} />
                        <Text style={styles.postActionText}>2+8k</Text>
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
                <Text style={styles.postCaptionText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</Text>
                <Pressable style={styles.postCaptionCommentStats}>
                    <Text style={styles.postCaptionCommentStatsText}>View all 430 comments</Text>
                </Pressable>
            </View>
        </TouchableOpacity>
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
        marginRight: 10
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
        height: 380,
        backgroundColor: Colors.grayEight,
        borderRadius: 12,
        marginVertical: 10
    },
    postPhotoImg: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
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
        lineHeight: 18.5,
        marginBottom: 10
    },
    postCaptionCommentStats:{
        
    },
    postCaptionCommentStatsText: {
        color: '#787878'
    }
})


export default PostBody;