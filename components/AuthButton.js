import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const AuthButton = ({ text, press }) => {
    
    return (
        <TouchableOpacity style={styles.btn} onPress={()=>press()}>
            <Text style={styles.btn_text}>{text}</Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    btn: {
        width: 174,
        height: 48,
        backgroundColor: '#000',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: (width / 2) - 117, // Half button width plus margin left of 30
        marginTop: 20
    },
    btn_text: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '800',
    },
})


export default AuthButton;