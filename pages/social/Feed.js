import React, { useState, useEffect, useRef } from 'react';
import { View, Text, SafeAreaView, ScrollView, Image, StyleSheet, Pressable, Platform, Dimensions } from 'react-native';
import Button from '../../components/Button';
import Colors from '../../components/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import DiscussClip from '../../components/DiscussClip';
import PostBody from '../../components/PostBody';

const {width} = Dimensions.get('window');

const Feed = ({ navigation }) => {
    const [country, setCountry] = useState('');
    const [img_filled, set_img_filled] = useState(false);
    const [img_uri, set_img_uri] = useState('');
    const [siteType, setSiteType] = useState('Store');
    const [active, setActive] = useState('post'); // post, product
    
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <View style={{ backgroundColor: '#fff', height: Platform.OS === 'android' ? 50 : 0 }} />
                <View style={styles.header_cont}>
                    <View style={styles.pf_hd_username}>
                        <Image source={require('../../assets/logo/lenxes_logo_bg_millik_black.png')} style={{width:90,height:21.8}} />
                    </View>
                    <View style={styles.hd_head_options}>
                        <Ionicons onPress={()=>alert('good')} name="ios-cart" size={24} color={Colors.black} />
                        <Ionicons onPress={()=>alert('good')} name="play" size={24} color={Colors.black} style={styles.hdJiveBtn} />
                    </View>
                </View>
                
                <View style={styles.main}>
                    <ScrollView showsHorizontalScrollIndicator={false} style={styles.discuss} horizontal>
                        <DiscussClip text="Discover" press={()=>alert('Okay')} img="" num="12" />
                        <DiscussClip text="Discover" press={()=>alert('Okay')} img="" num="24" />
                        <DiscussClip text="Discover" press={()=>alert('Okay')} img="" num="6" />
                        <DiscussClip text="Discover" press={()=>alert('Okay')} img="" num="33" />
                        <DiscussClip text="Discover" press={()=>alert('Okay')} img="" num="8" />
                        <DiscussClip text="Discover" press={()=>alert('Okay')} img="" num="17" />
                        <DiscussClip text="Discover" press={()=>alert('Okay')} img="" num="4" />
                        <DiscussClip text="Discover" press={()=>alert('Okay')} img="" num="28" />
                        <DiscussClip text="Discover" press={()=>alert('Okay')} img="" num="14" />
                    </ScrollView>
                    
                    <PostBody press={()=>alert('Okay')} />
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
    hd_head_options:{
        flexDirection:'row',
        alignItems: 'center',
    },
    hdJiveBtn: {
        marginLeft: 30
    },
    discuss: {
        marginTop: 10,
        marginBottom: 25
    },
    
})


export default Feed;