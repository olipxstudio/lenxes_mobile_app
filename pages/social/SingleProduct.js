import React from 'react';
import { View, Text, SafeAreaView, Platform, StyleSheet, Dimensions, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '../../components/Colors';

const {width} = Dimensions.get('window')

const SingleProduct = ({navigation}) => {
    return (
        <View style={styles.container}>
            <SafeAreaView style={{flex:1}}>
                <View style={{ backgroundColor: '#fff', height: Platform.OS === 'android' ? 50 : 0 }} />
                <View style={styles.header_cont}>
                    <View style={styles.hd_head_options}>
                        <Ionicons onPress={()=>navigation.goBack()} name="chevron-back" size={24} color={Colors.black} />
                        <View style={styles.pageTitleHD}>
                            <Text style={styles.pageTitle}>Olipx Studio</Text>
                        </View>
                    </View>
                    <View style={styles.flexrow}>
                        <Ionicons name="ios-cart-outline" size={24} color={Colors.black} />
                        <Ionicons name="ellipsis-horizontal-sharp" size={24} color={Colors.black} style={{marginLeft:30}} />
                    </View>
                </View>
                
                <ScrollView showsVerticalScrollIndicator={false} style={styles.main}>
                    
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    flexrow: {
        flexDirection: 'row'
    },
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
        marginLeft: 30,
        justifyContent:'center',
        alignItems:'center'
    },
    pageTitle: {
        fontWeight: '700',
        fontSize: 16
    },
    main:{
        flex: 1,
        width: '100%',
        paddingHorizontal: 15,
        boxSizing: 'border-box'
    },
})

export default SingleProduct