import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from './Colors';

const CartCard = () => {
    return (
        <View style={styles.main}>
            <View style={styles.hd_det}>
                <View style={styles.hd_img}>
                    {/* <Image style={styles.hdImg_photo} /> */}
                </View>
                <Text style={styles.hd_name}>Littletownltd</Text>
            </View>
            <View style={styles.hd_body}>
                <View style={styles.photo}>
                    {/* <Image style={styles.hdImg_photo} /> */}
                </View>
                <View style={styles.content}>
                    <Text style={styles.title} numberOfLines={2}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                    <View style={styles.foot}>
                        <Text style={styles.typeoff}>Size: L</Text>
                        <Text style={styles.owner}>Colour: Red</Text>
                    </View>
                </View>
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.btnPlus}>
                        <Ionicons name="add-outline" size={18} color={Colors.black_600} />
                    </TouchableOpacity>
                    <Text style={styles.actionsText}>1</Text>
                    <TouchableOpacity style={styles.btnMinus}>
                        <Ionicons name="remove-outline" size={18} color={Colors.black_600} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.footer}>
                <View style={styles.amtHD}>
                    <Text style={styles.amtTit}>Price</Text>
                    <Text style={styles.amt}>N6,000</Text>
                </View>
                <View style={styles.amtHD}>
                    <Text style={styles.amtTit}>Delivery</Text>
                    <Text style={styles.amt}>N6,000</Text>
                </View>
                <View style={styles.amtHD}>
                    <Text style={styles.amtTit}>Total</Text>
                    <Text style={styles.amt}>N6,000</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        marginBottom: 20
    },
    hd_det: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
        display: 'none'
    },
    hd_img: {
        width: 30,
        height: 30,
        backgroundColor: Colors.grayEight,
        borderRadius: 50,
        marginRight: 10,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center'
    },
    hdImg_photo: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    hd_name: {
        fontSize: 13,
        fontWeight: '500',
        marginBottom: 2
    },
    hd_body: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.graySeven,
        borderRadius: 12
    },
    photo: {
        width: 80,
        height: 80,
        backgroundColor: Colors.grayEight,
        borderRadius: 12,
        marginRight: 15
    },
    content: {
        flexGrow: 1,
        flexShrink: 1
    },
    title: {
        lineHeight: 21,
        fontSize: 14.5,
        color: Colors.black_800
    },
    foot: {
        flexDirection: 'row',
        marginTop: 10,
    },
    typeoff: {
        fontSize: 11,
        color: Colors.black_500,
    },
    owner: {
        fontSize: 11,
        color: Colors.black_500,
        marginLeft: 60
    },
    actions: {
        paddingHorizontal: 4,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    btnPlus: {
        width: 27,
        height: 27,
        borderRadius: 50,
        // borderWidth: 1,
        // borderColor: Colors.graySeven,
        backgroundColor: Colors.grayTwo,
        justifyContent: 'center',
        alignItems: 'center'
    },
    actionsText: {
        fontSize: 12,
        fontWeight: '600',
        marginVertical: 2
    },
    btnMinus: {
        width: 27,
        height: 27,
        borderRadius: 50,
        // borderWidth: 1,
        // borderColor: Colors.graySeven,
        backgroundColor: Colors.grayTwo,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Colors.grayOne,
        marginHorizontal: 10,
        borderBottomRightRadius: 12,
        borderBottomLeftRadius: 12,
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    amtHD: {
        
    },
    amtTit: {
        fontSize: 10,
        color: Colors.grayTwelve
    },
    amt: {
        fontSize: 12
    },
})

export default CartCard