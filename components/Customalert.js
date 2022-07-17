import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Modal, Dimensions } from 'react-native';
import Colors from './Colors';

const { height } = Dimensions.get('window');

const Customalert = ({ vis, text, callback }) => {
    const [modalVisible, setModalVisible] = useState(false);
    
    const callOnShow = () => {
        if(vis===true){
            setModalVisible(true);
        }else{
            setModalVisible(false);
        }
    }
    
    useEffect(() => {
        callOnShow();
    }, [vis]);
    
    return (
        <>
            {
                modalVisible ?
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>{text}</Text>
                        </View>
                    </View>
                    : null
            }
        </>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: 45,
        width:'100%',
        position:'absolute',
        top:250
    },
    modalView: {
        backgroundColor: '#00000099',
        width: '87%',
        height: 45,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop:height/2 - 20
    },
    modalText: {
        color: Colors.white,
        fontWeight: 'bold'
    }
});


export default Customalert;