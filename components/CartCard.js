import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from './Colors';

const CartCard = () => {
    return (
        <View style={styles.main}>
            <View style={styles.flexBetween}>
                <View style={styles.hd_det}>
                    <View style={styles.hd_img}>
                        {/* <Image style={styles.hdImg_photo} /> */}
                    </View>
                    <Text style={styles.hd_name}>Littletownltd</Text>
                </View>
                <View style={styles.trash}>
                    <Ionicons name="ios-trash-bin" size={15} color={Colors.grayNine} />
                </View>
            </View>
            <View style={styles.hd_body}>
                <View style={styles.photo}>
                    {/* <Image style={styles.hdImg_photo} /> */}
                </View>
                <View style={styles.content}>
                    <Text style={styles.title} numberOfLines={2}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                    <View style={styles.footer}>
                        <View style={styles.amtHD}>
                            <Text style={styles.amtTot}>N60,000</Text>
                            <Text style={styles.amt}>N60,000 <Text style={styles.amtDesc}>Delivery</Text></Text>
                            <Text style={styles.amt}>N60,000 <Text style={styles.amtDesc}>Price</Text></Text>
                        </View>
                        <View style={styles.controls}>
                            <View style={styles.actions}>
                                <TouchableOpacity style={styles.btnMinus}>
                                    <Ionicons name="remove-outline" size={18} color={Colors.black_600} />
                                </TouchableOpacity>
                                <Text style={styles.actionsText}>1</Text>
                                <TouchableOpacity style={styles.btnPlus}>
                                    <Ionicons name="add-outline" size={18} color={Colors.black_600} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.foot}>
                                <Text style={styles.typeoff}>Size: L</Text>
                                <Text style={styles.owner}>Colour: Red</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        marginBottom: 20,
        paddingBottom: 20,
        borderBottomColor: Colors.graySeven,
        borderBottomWidth: 1
    },
    flexBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    hd_det: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
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
        borderRadius: 12
    },
    photo: {
        width: 90,
        height: 110,
        backgroundColor: Colors.grayEight,
        borderRadius: 12,
        marginRight: 15,
    },
    trash: {
        width: 25,
        height: 25,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.grayTwo
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
    footer: {
        borderTopColor: Colors.graySeven,
        borderTopWidth: 1,
        marginTop: 8,
        paddingTop: 8,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    amtHD: {
        
    },
    amtTot: {
        fontWeight: '600'
    },
    amt: {
        fontSize: 12,
        color: Colors.grayTwelve,
        marginTop: 2
    },
    amtDesc: {
        fontSize: 10
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
        marginLeft: 10
    },
    controls: {
        width: 120,
        alignItems: 'flex-end'
    },
    actions: {
        flexDirection: 'row',
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
        marginVertical: 2,
        marginHorizontal: 15
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
})

export default CartCard