import { View, Text, SafeAreaView, Platform, Image, StyleSheet, FlatList, Pressable, Dimensions } from 'react-native';
import React, {useState} from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '../../components/Colors';
import FollowersListCard from '../../components/FollowersListCard';

const { width } = Dimensions.get('window')

const DiscussDetails = ({navigation}) => {
    
    const fakeData = [
        {
            'name':'oke',
            'type':'text'
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
        },
        {
            'name':'rufus',
            'type':'img'
        },
        {
            'name':'james',
            'type':'img'
        }
    ]
    
    
    return (
        <View style={styles.container}>
            <SafeAreaView style={{flex:1}}>
                <View style={{ backgroundColor: '#fff', height: Platform.OS === 'android' ? 50 : 0 }} />
                <View style={styles.header_cont}>
                    <View style={styles.hd_head_options}>
                        <Ionicons onPress={()=>navigation.goBack()} name="chevron-back" size={24} color={Colors.black} />
                    </View>
                    <View style={styles.pageTitleHD}>
                        <Text style={styles.pageTitle}>20:38</Text>
                        <Ionicons name="time-outline" size={13} color={Colors.black} />
                    </View>
                    <Ionicons name="ellipsis-horizontal-sharp" size={24} color={Colors.black} />
                </View>
                
                <View style={styles.main}>
                    <FlatList
                        data={fakeData}
                        showsVerticalScrollIndicator={false}
                        // getItemLayout={(data, index) => getItemLayout(data, index)}
                        // ref={(ref) => setListRef(ref)}
                        // onMomentumScrollEnd={(nativeEvent) => handleScrollTop(nativeEvent)}
                        // removeClippedSubviews={true}
                        initialNumToRender={10}
                        // onEndReached={() => loadMoreFeed(user_id)}
                        // onEndReachedThreshold={7}
                        // onRefresh={() => getItems(owner_id)}
                        // refreshing={loading}
                        ListHeaderComponent={
                            <>
                            <Pressable  style={styles.hd_det}>
                                <View  style={styles.hd_img}>
                                    {/* <Image  style={styles.hdImg_photo} /> */}
                                </View>
                                <View style={styles.hd_owner}>
                                    <View>
                                        <Text  style={styles.hd_name}>Olipx Studio <Text style={styles.hd_username}>@olipxstudio</Text></Text>
                                        <Text style={styles.hd_place}>Web Designer</Text>
                                    </View>
                                    <View>
                                        <Text style={styles.hd_identify}>Creator</Text>
                                    </View>
                                </View>
                            </Pressable>
                            <View style={styles.actionHD}>
                                <Pressable style={styles.actionBtn}>
                                    <Ionicons name="exit-outline" size={20} color={Colors.black} />
                                    <Text style={styles.actionBtnText}>Exit Discuss</Text>
                                </Pressable>
                                <Pressable style={styles.actionBtn}>
                                    <Ionicons name="thumbs-down-sharp" size={20} color={Colors.black} />
                                    <Text style={styles.actionBtnText}>Report Discuss</Text>
                                </Pressable>
                            </View>
                            <View style={styles.addMember}>
                                <Pressable style={styles.addMemBtn}>
                                    <View style={{flexDirection:'row',alignItems:'center'}}>
                                        <Ionicons name="ios-person-add-outline" size={16} color={Colors.black} />
                                        <Text style={styles.addMemBtnText}>Add a Member to this Discuss</Text>
                                    </View>
                                    <Ionicons name="ios-chevron-forward" size={16} color={Colors.black} />
                                </Pressable>
                                {/* <View style={styles.addMemDivider}></View> */}
                            </View>
                            </>
                        }
                        keyExtractor={(item) => item.name}
                        renderItem={({ item, index }) => {
                            return (
                                <View key={index} style={{marginLeft:15}}>
                                    <FollowersListCard press={index} my_id={index} name={item.name} size="big" handle="olipxstudio" img="" following={false} />
                                </View>
                            )
                        }}
                    />
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
        width: 120,
        justifyContent:'center',
        alignItems:'center',
        flexDirection: 'row'
    },
    pageTitle: {
        fontWeight: '400',
        fontSize: 12,
        textAlign: 'center',
        marginRight: 5
    },
    main:{
        flex: 1,
        width: '100%',
        boxSizing: 'border-box'
    },
    hd_det: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    
    hdImg_photo: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    hd_det_sm: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15
    },
    hd_img: {
        width: 50,
        height: 50,
        backgroundColor: Colors.grayEight,
        borderRadius: 50,
        marginRight: 10,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center'
    },
    hd_img_sm: {
        width: 40,
        height: 40,
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
    hd_owner: {
        flexGrow: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    hd_name: {
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 2
    },
    hd_username: {
        color: Colors.grayEleven,
    },
    hd_place: {
        fontSize: 12,
        color: Colors.grayEleven
    },
    hd_identify: {
        fontSize: 12,
        color: Colors.green
    },
    actionHD: {
        width: '100%',
        // paddingHorizontal: 15,
        // paddingVertical: 10,
        padding: 15,
        backgroundColor: Colors.black_050,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
    },
    actionBtn: {
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: '47%',
        padding: 10,
        borderRadius: 12
    },
    actionBtnText: {
        marginLeft: 10
    },
    addMember: {
        width: '100%',
        paddingHorizontal: 15,
        marginVertical: 15
    },
    addMemBtn: {
        flexDirection: 'row',
        marginVertical: 15,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    addMemBtnText: {
        marginLeft: 10,
    },
    addMemDivider: {
        width: '100%',
        height: 1,
        backgroundColor: Colors.black_075,
    },
    
})

export default DiscussDetails