import React, { useState, useEffect, useRef } from 'react';
import { Keyboard, View, Text, SafeAreaView, Image, StyleSheet, Pressable, Platform, Dimensions, TouchableOpacity, TextInput, Alert, Linking, Modal, ScrollView, FlatList } from 'react-native';
import Button from '../../components/Button';
import Colors from '../../components/Colors';
import CartCard from '../../components/CartCard';

const { width, height } = Dimensions.get('window');


const Cart = ({ navigation }) => {
    
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
                    <View>
                        <Text>Credit N<Text>57,185</Text></Text>
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
    main:{
        width: '100%',
        // minHeight: '100%',
        // backgroundColor: '#f00',
        paddingHorizontal: 15,
        paddingBottom: 10,
    },
})


export default Cart;