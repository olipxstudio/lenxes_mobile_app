import React, { useState, useEffect, useRef } from 'react';
import { View, Text, SafeAreaView, ScrollView, Image, StyleSheet, Pressable, Platform, Dimensions } from 'react-native';
import Button from '../../components/Button';
import Colors from '../../components/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';

const {width} = Dimensions.get('window');

const Post = ({ navigation }) => {
    const [country, setCountry] = useState('');
    const [img_filled, set_img_filled] = useState(false);
    const [img_uri, set_img_uri] = useState('');
    const [siteType, setSiteType] = useState('Store');
    const [active, setActive] = useState('grid'); // grid, tag, play, bookmark
    
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <View style={{ backgroundColor: '#fff', height: Platform.OS === 'android' ? 50 : 0 }} />
                <View style={styles.header_cont}>
                    <View style={styles.pf_hd_username}>
                        <Text style={styles.pf_hd_username_text}>olipxstudio</Text>
                    </View>
                    <View style={styles.pf_hd_options}>
                        <Button
                            text="Follow"
                            press={()=>navigation.navigate("---")}
                            status={false}
                            size="small"
                            bac={Colors.primary}
                            colour={Colors.white}
                        />
                        <Pressable style={styles.pf_option_btn}>
                            <Ionicons name="ellipsis-horizontal-sharp" size={24} color="black" />
                        </Pressable>
                    </View>
                </View>
                
                <View style={styles.main}>
                    <View style={styles.pf_action_bar}>
                        <Pressable style={[styles.pfActionBtn, {backgroundColor:Colors.graySeven}]}>
                            <Text style={styles.pfActionBtnText}>Edit Profile</Text>
                        </Pressable>
                        <Pressable style={[styles.pfActionBtn, {backgroundColor:Colors.primary}]}>
                            <Text style={[styles.pfActionBtnText, {color:Colors.white}]}>Create {siteType}</Text>
                        </Pressable>
                    </View>
                    <View style={styles.postsHolder}>
                        <View style={styles.post}>
                            {/* <Image source={{ uri: img_uri }} resizeMode='contain' style={styles.postPhoto} /> */}
                            <Ionicons name="play" size={18} color={Colors.primary} style={styles.vidTag} />
                        </View>
                        <View style={styles.post}>
                            
                        </View>
                        <View style={styles.post}>
                            
                        </View>
                        <View style={styles.post}>
                            <Ionicons name="ios-pricetag" size={18} color={Colors.white} style={styles.productTag} />
                        </View>
                    </View>
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
        paddingBottom: 15
    },
    main:{
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
        lineHeight: 20
    },
    bio_url: {
        fontSize: 14,
        color: Colors.secondary,
        marginTop: 5
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
    postsHolder: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    post: {
        width: (width / 2) - 20,
        borderRadius: 22,
        height: 200,
        backgroundColor: Colors.grayEight,
        marginBottom: 10,
        position: 'relative'
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


export default Post;