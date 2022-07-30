import React, {useState} from 'react';
import { StyleSheet, View, Text, Dimensions, Pressable, ImageBackground } from 'react-native';
import { ImageManipulator } from 'expo-image-crop';

const { width, height } = Dimensions.get('window');

const ImageCropPicker = ({ img, show, press, croppedPhoto }) => {
    const [uri, setUri] = useState('https://i.pinimg.com/originals/f1/48/04/f14804ca9a164530b15b4a3f4eeea29b.jpg');
    
    return (
        <View style={{flex: 1, width, height, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000'}}>
            <ImageManipulator
                photo={{ "uri": img }}
                isVisible={show}
                onPictureChoosed={({uri: uriM}) => croppedPhoto(uriM)}
                onToggleModal={()=>press()}
            />
            {/* <View style={{height:200, width:200, backgroundColor:'#fff'}}>
                
            </View> */}
        </View>
    );
}


const styles = StyleSheet.create({
    btn: {
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    disabled: {
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn_text_small: {
        fontSize: 12,
        fontWeight: '600',
        marginHorizontal: 7
    },
    btn_text_big: {
        fontSize: 14,
        fontWeight: '600',
        marginHorizontal: 12
    },
})


export default ImageCropPicker;