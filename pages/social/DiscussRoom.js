import { View, Text, SafeAreaView, Platform, Image, StyleSheet, FlatList, ScrollView, TouchableOpacity, TextInput, Pressable, Dimensions } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '../../components/Colors';
import Button from '../../components/Button';

const { width } = Dimensions.get('window')

const DiscussRoom = ({navigation}) => {
    return (
        <View style={styles.container}>
            <SafeAreaView style={{flex:1}}>
                <View style={{ backgroundColor: '#fff', height: Platform.OS === 'android' ? 50 : 0 }} />
                <View style={styles.header_cont}>
                    <View style={styles.hd_head_options}>
                        <Ionicons onPress={()=>navigation.goBack()} name="chevron-back" size={24} color={Colors.black} />
                    </View>
                    <View style={styles.people}>
                        <View style={styles.peopleHD}>
                            <View style={styles.ppFH}>
                                <View style={styles.ppMPt}></View>
                                <View style={styles.ppSPt}></View>
                            </View>
                            <View style={styles.ppMH}>
                                <View style={styles.ppBPt}></View>
                            </View>
                            <View style={styles.ppLH}>
                                <View style={styles.ppSPt}></View>
                                <View style={styles.ppMPt}></View>
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Ionicons name="ellipsis-horizontal-sharp" size={24} color={Colors.black} />
                    </View>
                </View>
                
                <View style={styles.main}>
                    
                </View>
            </SafeAreaView>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        width: '100%',
        flex: 1,
        backgroundColor: Colors.white
    },
    header_cont: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 15,
        position: 'relative'
    },
    hd_head_options:{
        flexDirection:'row',
        alignItems: 'center',
    },
    pageTitleHD: {
        justifyContent:'center',
        alignItems:'center',
        marginLeft: 10
    },
    pageTitle: {
        fontWeight: '400',
        fontSize: 12
    },
    main:{
        flex: 1,
        width: '100%',
        paddingHorizontal: 15,
        boxSizing: 'border-box'
    },
    people: {
        justifyContent: 'center',
    },
    peopleHD: {
        flexDirection: 'row',
    },
    ppFH: {
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    ppMPt: {
        width: 37,
        height: 37,
        backgroundColor: Colors.grayEight,
        borderRadius: 50
    },
    ppSPt: {
        width: 25,
        height: 25,
        backgroundColor: Colors.grayEight,
        borderRadius: 50
    },
    ppMH: {
        marginHorizontal: 3
    },
    ppBPt: {
        width: 65,
        height: 65,
        backgroundColor: Colors.grayEight,
        borderRadius: 50,
    },
    ppLH: {
        justifyContent: 'space-between'
    },
})

export default DiscussRoom