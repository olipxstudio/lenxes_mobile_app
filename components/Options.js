import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, Text, Pressable, Image, ActivityIndicator, Platform, Modal } from 'react-native';
import Colors from './Colors';
import { Ionicons } from '@expo/vector-icons';

const Options = ({ options, show, press, own, post, user }) => {
    // const [modal, set_modal] = useState(show);
    
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={show}
            onRequestClose={() => {
                set_modal(!show);
            }}
        >
            <View style={styles.qrModalView}>
                <Pressable onPress={press} style={styles.close_options_bac}></Pressable>
                <View style={styles.qrModalCenterView}>
                    {
                        options.map((item, e) => {
                            return (
                                <Pressable
                                    onPress={item.action}
                                    key={e}
                                    style={styles.opt_hd}
                                >
                                    <Ionicons name={item.icon} size={24} color="#000" />
                                    <Text style={styles.opt_txt}>{item.name}</Text>
                                </Pressable>
                            )
                        })
                    }
                    <Pressable onPress={press} style={styles.close_options}>
                        <Ionicons name="close-outline" size={18} color="#000" />
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    qrModalView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    qrModalCenterView: {
        backgroundColor: '#fff',
        width: '100%',
        height: 470,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingVertical: 10,
        padding: 15,
        alignItems: 'center'
    },
    opt_hd: {
        width: '100%',
        backgroundColor: Colors.post_border,
        paddingVertical: 15,
        borderRadius: 12,
        marginBottom: 8,
        borderBottomColor: Colors.graySeven,
        borderBottomWidth: 0.5,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 8
    },
    opt_txt: {
        textTransform:'capitalize',
        fontSize: 15,
        fontWeight: '300',
        marginLeft: 25
    },
    close_options_bac: {
        width: '100%',
        height: '100%',
        backgroundColor: '#00000099',
        position: 'absolute'
    },
    close_options: {
        position: 'absolute',
        right: 30,
        bottom: 30,
        backgroundColor: Colors.lightGray,
        borderRadius: 26,
        padding: 1
    }
});


export default Options;