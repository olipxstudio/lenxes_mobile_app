import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Colors from './Colors';

const {width} = Dimensions.get('window')

const DiscussClip = ({ text, press, img, num, size }) => {
    
    return (
        <TouchableOpacity style={styles.discussClip} onPress={()=>press()}>
            <View style={size == 'sm' ? styles.dc_Img : styles.dc_ImgBig}>
                {/* <Image style={styles.dc_Photo} /> */}
            </View>
            <View style={styles.dc_MCnt}>
                <Text style={styles.dc_MCnt_txt}>{num}</Text>
            </View>
            <Text style={styles.cd_Text}>{text}</Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    discussClip: {
        position: 'relative',
        marginRight: 15
    },
    dc_Img: {
        width: 70,
        height: 70,
        borderRadius: 50,
        backgroundColor: Colors.grayFive
    },
    dc_ImgBig: {
        width: ((width - 30) / 4) - 11.5,
        height: ((width - 30) / 4) - 11.5,
        borderRadius: 50,
        backgroundColor: Colors.grayFive
    },
    dc_Photo: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    dc_MCnt: {
        backgroundColor: Colors.black,
        borderRadius: 50,
        width: 28,
        height: 28,
        borderWidth: 3,
        borderColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 17,
        right: 0
    },
    dc_MCnt_txt: {
        fontSize: 11,
        color: Colors.white
    },
    cd_Text: {
        fontSize: 11,
        textAlign: 'center',
        marginTop: 2
    },
})


export default DiscussClip;