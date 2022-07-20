import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';

const Button = ({ text, press, status, size, bac, colour }) => {
    
    return (
        <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
                style={[status ? styles.disabled : styles.btn, {padding: size === 'small' ? 7 : 10, backgroundColor: bac}]}
                onPress={()=>press()}
                disabled={status}
            >
                <Text style={[size === 'small' ? styles.btn_text_small : styles.btn_text_big, {color: colour}]}>{text}</Text>
            </TouchableOpacity>
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


export default Button;