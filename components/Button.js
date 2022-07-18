import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button = ({ text, press, status, size, bac, colour }) => {
    
    return (
        <TouchableOpacity
            style={[status ? styles.disabled : styles.btn, {padding: size === 'small' ? 7 : 13, backgroundColor: bac}]}
            onPress={()=>press()}
            disabled={status}
        >
            <Text style={[size === 'small' ? styles.btn_text_small : styles.btn_text_big, {color: colour}]}>{text}</Text>
        </TouchableOpacity>
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
        fontSize: 16,
        fontWeight: '600',
        marginHorizontal: 12
    },
})


export default Button;