import React, { useState, useEffect, useRef } from 'react';
import { Keyboard, View, Text, SafeAreaView, Image, StyleSheet, Pressable, Platform, Dimensions, TouchableOpacity, TextInput, Alert, Linking, Modal, ScrollView, FlatList } from 'react-native';
import Colors from '../../components/Colors';
import CartCard from '../../components/CartCard';
import Ionicons from '@expo/vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');


const Cart = ({ navigation }) => {
    const [active, setActive] = useState('active'); // active, pending
    
    const fakeData = [
        {
            'name':'oke',
            'type':'img'
        },
        {
            'name':'pius',
            'type':'text'
        },
        {
            'name':'peace',
            'type':'img'
        },
        {
            'name':'peter',
            'type':'img'
        }
    ]
    
    return (
        <View style={styles.container}>
            <SafeAreaView style={{flex:1}}>
                <View style={{ backgroundColor: '#fff', height: Platform.OS === 'android' ? 50 : 0 }} />
                <View style={styles.header_cont}>
                    <View style={styles.pageTitleHD}>
                        <Text style={styles.pageTitle}>Cart</Text>
                    </View>
                    <View style={styles.ex_tab_bar}>
                        <Pressable onPress={()=>switchTabs('active')} style={[styles.exTabBtn, active==='active' && styles.active]}>
                            <Text style={[styles.exTabBtnText, active==='active' && styles.active_text]}>Ready</Text>
                        </Pressable>
                        <Pressable onPress={()=>switchTabs('pending')} style={[styles.exTabBtn, active==='pending' && styles.active]}>
                            <Text style={[styles.exTabBtnText, active==='pending' && styles.active_text]}>Pending</Text>
                        </Pressable>
                    </View>
                    <View>
                        {/* <Text>Cred</Text> */}
                        <Pressable style={styles.scrollDown}>
                            <Ionicons name="arrow-down" size={16} color={Colors.black} />
                        </Pressable>
                    </View>
                </View>
                
                <View style={styles.main}>
                    <FlatList
                        data={fakeData}
                        showsVerticalScrollIndicator={false}
                        // getItemLayout={(data, index) => getItemLayout(data, index)}
                        // ref={(ref) => setListRef(ref)}
                        // onMomentumScrollEnd={(nativeEvent) => handleScrollTop(nativeEvent)}
                        removeClippedSubviews={true}
                        initialNumToRender={10}
                        // onEndReached={() => loadMoreFeed(user_id)}
                        // onEndReachedThreshold={7}
                        // onRefresh={() => getItems(owner_id)}
                        // refreshing={loading}
                        ListEmptyComponent={
                            <View style={styles.emptyHD}>
                                <View style={styles.empDetails}>
                                    
                                    
                                </View>
                            </View>
                        }
                        numColumns={1}
                        keyExtractor={(item) => item.name}
                        renderItem={({ item, index }) => {
                            return (
                                <CartCard />
                            )
                        }}
                        ListFooterComponent={
                            <View style={styles.footer}>
                                <Text style={styles.footText}><Text style={styles.footTextBold}>NOTE:</Text> Merchat for eachitem you add to cart would receive a request to provide delivery fee to your location before you can make payment for that item.</Text>
                                <View style={styles.footAction}>
                                    <Text style={styles.footDiscount}>Save N268.5</Text>
                                    <TouchableOpacity style={styles.btn} onPress={()=>alert("Good")}>
                                        <Text style={styles.btn_text}>Buy Now - Pay N53,281.5</Text>
                                    </TouchableOpacity>
                                    <Text style={styles.footStoreCredit}>Store Credit N1,500</Text>
                                </View>
                            </View>
                        }
                    />
                </View>
            </SafeAreaView>
        </View>
    );
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
    pageTitleHD: {
        justifyContent:'center',
        alignItems:'center'
    },
    pageTitle: {
        fontWeight: '700',
        fontSize: 16
    },
    ex_tab_bar: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: Colors.graySeven,
        padding: 3,
        borderRadius: 9
    },
    exTabBtn: {
        paddingVertical: 7,
        width: 80,
        borderRadius: 7,
        backgroundColor: Colors.white,
    },
    exTabBtnText: {
        fontSize: 12,
        textAlign: 'center',
        fontWeight: '500',
    },
    active: {
        zIndex: 1,
        backgroundColor: Colors.graySeven,
    },
    active_text: {
        color: Colors.black
    },
    scrollDown: {
        backgroundColor: Colors.graySix,
        width: 30,
        height: 30,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    main:{
        width: '100%',
        // minHeight: '100%',
        // backgroundColor: '#f00',
        paddingHorizontal: 15,
        paddingBottom: 10,
    },
    footer: {
        marginBottom: 70,
        marginTop: 25
    },
    footText: {
        fontSize: 12,
        lineHeight: 17,
        color: Colors.grayTwelve
    },
    footTextBold: {
        fontWeight: '700'
    },
    btn: {
        width: '100%',
        height: 48,
        backgroundColor: '#000',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    btn_text: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '800',
    },
    footAction: {
        marginTop: 25
    },
    footDiscount: {
        color: Colors.primary,
        textAlign: 'center',
        fontWeight: '700'
    },
    footStoreCredit: {
        fontSize: 12,
        textAlign: 'center',
        marginTop: 5
    }
})


export default Cart;