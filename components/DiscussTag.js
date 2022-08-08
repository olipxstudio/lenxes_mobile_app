import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from './Colors';

const DiscussTag = ({type}) => {
    return (
        <TouchableOpacity>
            {
                type == 'product' &&
                <View style={styles.container}>
                    <View style={styles.imgHD}></View>
                    <View style={styles.det}>
                        <Text style={styles.title} numberOfLines={2}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                        <View style={styles.foot}>
                            <Text style={styles.typeoff}>Product</Text>
                            <Text style={styles.owner}>Olipx Studio</Text>
                        </View>
                    </View>
                    <Ionicons name="chevron-forward" size={24} color={Colors.grayFour} style={{marginRight: -5}} />
                </View>
            }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.grayFive,
        marginTop: 5,
        borderRadius: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5,
        position: 'relative'
    },
    imgHD: {
        width: 80,
        height: 70,
        backgroundColor: Colors.grayNine,
        borderRadius: 12,
        marginRight: 10
    },
    det: {
        flexShrink: 1,
        flexGrow: 1,
        justifyContent: 'space-between'
    },
    title: {
        lineHeight: 21,
        fontSize: 14.5,
        color: Colors.black_800
    },
    foot: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    typeoff: {
        backgroundColor: Colors.white,
        paddingVertical: 2,
        paddingHorizontal: 4,
        fontSize: 11,
    },
    owner: {
        fontSize: 12,
        fontWeight: '600',
        color: Colors.black_500
    },
})

export default DiscussTag