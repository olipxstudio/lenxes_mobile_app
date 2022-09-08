import React, {useState} from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, Pressable, ScrollView, Dimensions } from 'react-native';
import Colors from './Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Entypo } from '@expo/vector-icons';
import TaggedPost from './TaggedPost';

const {width} = Dimensions.get('window');

const FeedProductBody = ({ position, text, press, img, type }) => {
    const [showTaggedProduct, setShowTaggedProduct] = useState(false)
    
    return (
        <View style={[styles.fdPostHolder, type == 'scroll' ? styles.fdPostHolderScroll : styles.fdPostHolderFit]}>
            <TouchableOpacity style={styles.body} delayPressIn={200} onPress={()=>press()}>
                <View style={[type == 'scroll' ? styles.postPhotoScroll : styles.postPhotoFit, styles.postPhoto]}>
                    {/* PHOTO OR VIDEO */}
                    <Image source={img} style={styles.postPhotoImg} />
                </View>
                <View style={styles.postCaption}>
                    <Text style={styles.postCaptionText} numberOfLines={1}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
                    <View style={styles.subHd}>
                        <Text style={styles.subTit}>N13,000</Text>
                        <Text style={[styles.subTit, {color: Colors.grayNine,marginLeft:45,fontWeight: '400'}]}>new</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    fdPostHolderScroll: {
        width: (width / 2) - 14,
        marginBottom: 20,
    },
    fdPostHolderFit: {
        width: (width / 2) - 20,
        marginBottom: 5,
        backgroundColor: Colors.grayTwo,
        borderWidth: 0
    },
    fdPostHolder: {
        position: 'relative',
        // backgroundColor: Colors.black_025,
        marginRight: 10,
        borderRadius: 22,
        borderWidth: 0.5,
        borderColor: Colors.black_150
    },
    postPhotoScroll: {
        width: (width / 2) - 20,
        height: (width / 2) - 20,
    },
    postPhotoFit: {
        width: (width / 2) - 24,
        height: (width / 2) - 24,
    },
    postPhoto: {
        marginLeft: 2,
        marginTop: 2,
        backgroundColor: Colors.black_075,
        borderRadius: 20,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },
    postPhotoImg: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    postCaption:{
        marginBottom: 10,
        paddingHorizontal: 10
    },
    postCaptionText:{
        lineHeight: 18,
        marginBottom: 5,
        fontSize: 13,
        fontWeight: '600',
        color: Colors.black_800
    },
    subHd: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    subTit: {
        fontSize: 13,
        fontWeight: '600',
        textTransform: "capitalize",
        color: Colors.black_800,
    },
})


export default FeedProductBody;