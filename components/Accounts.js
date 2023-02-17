import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from './Colors';
import Ionicons from '@expo/vector-icons/Ionicons';

const Accounts = () => {
    return (
        <View style={styles.main}>
            <View style={styles.thumb}></View>
            <View style={styles.detHD}>
                <View style={styles.nameHD}>
                    <Text style={styles.name}>Oke James</Text>
                    <Ionicons name="checkmark-circle" size={13} color={Colors.black_600} />
                </View>
                <Text style={styles.profession}>Developer</Text>
                <View style={styles.purposeHD}>
                    <Text style={styles.purpose}>Hiring</Text>
                    <Text style={styles.position}>- Accountant</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15
    },
    thumb: {
        width: 50,
        height: 50,
        backgroundColor: Colors.grayEight,
        borderRadius: 100,
        marginRight: 8
    },
    detHD: {
        
    },
    nameHD: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    name: {
        fontWeight: '600',
        marginRight: 3,
    },
    profession: {
        fontSize: 11,
        color: Colors.grayTwelve,
        marginTop: 1
    },
    purposeHD: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 1
    },
    purpose: {
        fontSize: 11,
        color: Colors.secondary,
        marginRight: 3
    },
    position: {
        fontSize: 11,
        color: Colors.grayTwelve
    },
})

export default Accounts