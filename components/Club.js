import React from 'react'
import { Dimensions, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Colors from './Colors'
import Ionicons from '@expo/vector-icons/Ionicons'

const {width} = Dimensions.get('window')

const Club = ({title, pin}) => {
    return (
        <TouchableOpacity style={styles.main}>
            {
                pin == 'yes' &&
                <Ionicons name="pin" size={16} color={Colors.black_200} style={styles.pinned} />
            }
            <View style={styles.thumb}></View>
            <View style={styles.detailAlign}>
                <View style={styles.detHolder}>
                    <Text style={styles.title} numberOfLines={1}>{title}</Text>
                    <View style={styles.extras}>
                        <View style={styles.adminThumbsHD}>
                            <View style={styles.adminThumbs}></View>
                            <View style={styles.adminThumbs}></View>
                            <View style={styles.adminThumbs}></View>
                            <View style={styles.adminThumbs}></View>
                        </View>
                        <View style={styles.divider}></View>
                        <Text style={styles.membersCount}>22k members</Text>
                    </View>
                </View>
                <Ionicons name="chevron-forward" size={20} color={Colors.black_200} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    main: {
        width: '100%',
        height: 65,
        backgroundColor: Colors.grayTwo,
        borderRadius: 16,
        paddingVertical: 8,
        paddingLeft: 8,
        paddingRight: 2,
        marginBottom: 7,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative'
    },
    pinned: {
        position: 'absolute',
        top: 5,
        left: 0
    },
    thumb: {
        width: 50,
        height: 50,
        backgroundColor: Colors.grayEight,
        borderRadius: 100,
        marginRight: 10
    },
    detailAlign: {
        height: '100%',
        flexShrink: 1,
        flexGrow: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    detHolder: {
        height: '100%',
        flexShrink: 1,
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 15,
        fontWeight: '400'
    },
    extras: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    adminThumbsHD: {
        flexDirection: 'row'
    },
    adminThumbs: {
        width: 20,
        height: 20,
        backgroundColor: Colors.grayEight,
        borderRadius: 100,
    },
    divider: {
        height: '65%',
        width: 1,
        backgroundColor: Colors.black_500,
        marginHorizontal: 15
    },
    membersCount: {
        fontSize: 11,
        color: Colors.black_500
    },
})

export default Club