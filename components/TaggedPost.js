import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Colors from './Colors';
import Ionicons from '@expo/vector-icons/Ionicons';

const {width} = Dimensions.get('window');

const TaggedPost = ({ size, position, press, show, img, num }) => {
    
    return (
        <>
        {
            show &&
            <TouchableOpacity style={[styles.body, {width: size==='full'?'100%':(width-78), position: position ? 'absolute' : 'relative', left: position ? 40 : 0}]} onPress={()=>press()}>
                <View style={styles.imgHd}>
                    {/* <Image style={styles.photo} /> */}
                </View>
                <View style={{flexShrink:1}}>
                    <Text style={styles.tit} numberOfLines={1}>Garanimals 365 Kid Boys Player Baby Boy Set</Text>
                    <View style={styles.subHd}>
                        <Text style={styles.subTit}>N13,000</Text>
                        <Text style={[styles.subTit, {color: Colors.grayTen,marginLeft:25}]}>new</Text>
                    </View>
                </View>
                <View style={styles.arrow}>
                    <Ionicons name="chevron-forward" size={22} color={Colors.grayFour} />
                </View>
            </TouchableOpacity>
        }
        </>
    );
}


const styles = StyleSheet.create({
    body: {
        top: 0,
        backgroundColor: Colors.white,
        borderRadius: 16,
        paddingHorizontal: 3,
        paddingVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: Colors.grayEleven,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
        borderWidth: 1,
        borderColor: Colors.primary,
        marginLeft: 5
    },
    imgHd: {
        width: 50,
        height: 50,
        borderRadius: 12,
        backgroundColor: Colors.grayEight,
        marginRight: 8,
        marginLeft: 2
    },
    photo: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    tit: {
        fontSize: 13,
        fontWeight: '600'
    },
    subHd: {
        flexDirection: 'row',
        marginTop: 10
    },
    subTit: {
        fontSize: 13,
        textTransform: 'uppercase'
    },
    arrow: {
        marginLeft: 4
    },
})


export default TaggedPost;