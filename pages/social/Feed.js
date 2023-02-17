import React, { useState, useEffect, useRef } from 'react';
import { View, Text, SafeAreaView, ScrollView, Image, StyleSheet, TouchableOpacity, Platform, Dimensions, FlatList, Modal, Pressable } from 'react-native';
import Button from '../../components/Button';
import Colors from '../../components/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DiscussClip from '../../components/DiscussClip';
import PostBody from '../../components/PostBody';
import FeedPeople from '../../components/FeedPeople';
import FeedProductBody from '../../components/FeedProductBody';
import NewPost from '../../components/NewPost';
import DiscussPeopleList from '../../components/DiscussPeopleList';
import Club from '../../components/Club';

const {width} = Dimensions.get('window');

const Feed = ({ navigation }) => {
    const [data, setData] = useState([])
    const [country, setCountry] = useState('');
    const [img_filled, set_img_filled] = useState(false);
    const [img_uri, set_img_uri] = useState('');
    const [siteType, setSiteType] = useState('Store');
    const [active, setActive] = useState('post'); // post, product
    const [discussModal, setDiscussModal] = useState(false);
    
    const fakeData = [
        {
            'name':'okay',
            'title': 'Social gethering and it\'s applications, this is it'
        },
        {
            'name':'peace',
            'title': 'Social gethering and it\'s applications'
        },
        {
            'name':'john',
            'title': 'Technical Club'
        },
        {
            'name':'pius',
            'title': 'Agenda for Peter Obi Campaign'
        },
        {
            'name':'okoro',
            'title': 'Non violence group for country restructuring'
        }
    ]
    
    const startDiscuss = (post_id) => {
        setDiscussModal(true)
    }
    const goToDiscussRoom = () => {
        setDiscussModal(!discussModal);
        navigation.navigate("DiscussRoom");
    }
    
    return (
        <View style={styles.container}>
            <SafeAreaView style={{flex:1}}>
                <View style={{ backgroundColor: '#fff', height: Platform.OS === 'android' ? 50 : 0 }} />
                <View style={styles.header_cont}>
                    <View style={styles.pf_hd_username}>
                        <Image source={require('../../assets/logo/lenxes_logo_bg_millik_black.png')} style={{width:90,height:21.8}} />
                    </View>
                    <View style={styles.hd_head_options}>
                        <Ionicons onPress={()=>navigation.navigate("PostsFeed")} name="play" size={22} color={Colors.black} style={styles.hdJiveBtn} />
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
                        ListHeaderComponent={
                            <>
                                <ScrollView showsHorizontalScrollIndicator={false} style={styles.feed_videos} contentContainerStyle={{alignItems: 'center'}} horizontal>
                                    <View style={styles.vidHD}>
                                        <View style={styles.vidIndentity}>
                                            <View style={styles.vidOwner}></View>
                                            {/* <Ionicons name="play" size={13} color={Colors.primary} /> */}
                                        </View>
                                        {/* <Image /> */}
                                    </View>
                                    <View style={styles.vidHD}>
                                        <View style={styles.vidIndentity}>
                                            <View style={styles.vidOwner}></View>
                                            <Ionicons name="play" size={13} color={Colors.primary} />
                                        </View>
                                        {/* <Image /> */}
                                    </View>
                                    <View style={styles.vidHD}>
                                        <View style={styles.vidIndentity}>
                                            <View style={styles.vidOwner}></View>
                                            {/* <Ionicons name="play" size={13} color={Colors.primary} /> */}
                                        </View>
                                        {/* <Image /> */}
                                    </View>
                                    <View style={styles.vidHD}>
                                        <View style={styles.vidIndentity}>
                                            <View style={styles.vidOwner}></View>
                                            <Ionicons name="play" size={13} color={Colors.primary} />
                                        </View>
                                        {/* <Image /> */}
                                    </View>
                                    <TouchableOpacity onPress={()=>navigation.navigate("PostsFeed")} style={styles.allProductsBtn}>
                                        <Text style={styles.allProductsBtnText}>View all</Text>
                                        <Ionicons name="chevron-forward" size={18} color={Colors.black_600} />
                                    </TouchableOpacity>
                                </ScrollView>
                                <View style={styles.joined_clubs}>
                                    <View style={styles.jcHD}>
                                        <View style={styles.jcImg}>
                                            <View style={styles.jcAlert}>
                                                <Text style={styles.jcAlertText}>2</Text>
                                            </View>
                                            {/* <Image /> */}
                                        </View>
                                        <Text style={styles.jcTit} numberOfLines={1}>Social gathering club</Text>
                                    </View>
                                    <View style={styles.jcHD}>
                                        <View style={styles.jcImg}>
                                            {/* <View style={styles.jcAlert}>
                                                <Text style={styles.jcAlertText}>2</Text>
                                            </View> */}
                                            {/* <Image /> */}
                                        </View>
                                        <Text style={styles.jcTit} numberOfLines={1}>Social gathering club</Text>
                                    </View>
                                    <View style={styles.jcHD}>
                                        <View style={styles.jcImg}>
                                            {/* <View style={styles.jcAlert}>
                                                <Text style={styles.jcAlertText}>2</Text>
                                            </View> */}
                                            {/* <Image /> */}
                                        </View>
                                        <Text style={styles.jcTit} numberOfLines={1}>Social gathering club</Text>
                                    </View>
                                    <View style={styles.jcHD}>
                                        <View style={styles.jcImg}>
                                            <View style={styles.jcAlert}>
                                                <Text style={styles.jcAlertText}>10</Text>
                                            </View>
                                            {/* <Image /> */}
                                        </View>
                                        <Text style={styles.jcTit} numberOfLines={1}>Social gathering club</Text>
                                    </View>
                                    <View style={styles.jcHD}>
                                        <View style={styles.jcImg}>
                                            {/* <View style={styles.jcAlert}>
                                                <Text style={styles.jcAlertText}>10</Text>
                                            </View> */}
                                            {/* <Image /> */}
                                        </View>
                                        <Text style={styles.jcTit} numberOfLines={1}>Social gathering club</Text>
                                    </View>
                                </View>
                                <View style={styles.dividerLine}></View>
                                <View style={styles.suggestedTitle}>
                                    <Text style={styles.suggestedTitleText}>Suggested Clubs</Text>
                                </View>
                            </>
                        }
                        ListEmptyComponent={
                            <View style={styles.emptyHD}>
                                <View style={styles.empDetails}>
                                    <Text style={styles.empTit}>Get the Complete Experience</Text>
                                    <Text style={styles.empSub}>Follow people to see their latest posts, products and stories here.</Text>
                                    
                                    <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                                        <FeedPeople />
                                        <FeedPeople />
                                        <FeedPeople />
                                        <FeedPeople />
                                        <FeedPeople />
                                        <FeedPeople />
                                    </ScrollView>
                                    
                                    <View style={styles.invHD}>
                                        <Text style={styles.invText}>Or invite friends from contact</Text>
                                        <View style={styles.invLine} />
                                    </View>
                                    <Button
                                        text="Invite Friends"
                                        press={()=>setChecklistVisible(!checklistVisible)}
                                        status={false}
                                        size="large"
                                        bac={Colors.primary}
                                        colour={Colors.white}
                                    />
                                </View>
                            </View>
                        }
                        numColumns={1}
                        keyExtractor={(item) => item.name}
                        renderItem={({ item, index }) => {
                            if(index == 2){
                                return (
                                    <>
                                        {/* <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={styles.productHD} horizontal>
                                            <FeedProductBody type="scroll" press={()=>navigation.navigate("SingleProduct")} />
                                            <FeedProductBody type="scroll" press={()=>navigation.navigate("SingleProduct")} />
                                            <FeedProductBody type="scroll" press={()=>navigation.navigate("SingleProduct")} />
                                            <TouchableOpacity style={styles.allProductsBtn}>
                                                <Text style={styles.allProductsBtnText}>View all</Text>
                                                <Ionicons name="chevron-forward" size={18} color={Colors.black_600} />
                                            </TouchableOpacity>
                                        </ScrollView>
                                        <PostBody key={index} img={item.img} start_discuss={()=>startDiscuss(item.name)} press={()=>alert('Okay')} position={index} type={item.type} /> */}
                                    </>
                                )
                            }
                            return (
                                <Club key={index} press={()=>alert('Okay')} title={item.title} />
                            )
                        }}
                        ListFooterComponent={
                            <View style={styles.scrollTop}>
                                <View style={styles.scrollTopInner}>
                                    <Ionicons name="arrow-up" size={18} color={Colors.black_500} />
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
        paddingBottom: 15
    },
    main:{
        flex: 1,
        width: '100%',
        paddingHorizontal: 15,
        boxSizing: 'border-box'
    },
    hd_head_options:{
        flexDirection:'row',
        alignItems: 'center',
    },
    hdJiveBtn: {
        marginLeft: 30
    },
    
    // FEED POSTS ------------------- //
    feed_videos: {
        marginTop: 10,
        marginBottom: 25,
    },
    vidHD: {
        width: width / 3 - 20,
        height: 160,
        backgroundColor: Colors.grayEight,
        borderRadius: 16,
        marginRight: 7
    },
    vidIndentity: {
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    vidOwner: {
        width: 25,
        height: 25,
        backgroundColor: Colors.grayNine,
        borderRadius: 100
    },
    
    // JOINED CLUB ------------------------- //
    joined_clubs: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    jcHD: {
        width: (width / 4) - 23,
        marginRight: 15,
        marginBottom: 15
    },
    jcImg: {
        height: (width / 4) - 23,
        width: '100%',
        backgroundColor: Colors.grayEight,
        borderRadius: 100,
        position: 'relative'
    },
    jcAlert: {
        position: 'absolute',
        right: 5,
        top: 5,
        backgroundColor: Colors.red,
        width: 14,
        height: 14,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    jcAlertText: {
        color: Colors.white,
        fontSize: 10,
        fontWeight: '700'
    },
    jcTit: {
        fontSize: 14
    },
    
    // DIVIDER LINE ------------------------- //
    dividerLine:{
        width: '100%',
        height: 1,
        backgroundColor: Colors.grayEight,
        marginVertical: 10
    },
    
    // CLUBS ------------------------- //
    suggestedTitle: {
        marginTop: 10,
        marginBottom: 15
    },
    suggestedTitleText: {
        fontWeight: '600',
        fontSize: 16
    },
    
    
    scrollTop: {
        width: '100%',
        height: 50,
        marginBottom:5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    scrollTopInner: {
        width: 28,
        height: 28,
        backgroundColor: Colors.graySix,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
    empDetails: {
        width: '100%',
        paddingTop: 30
    },
    empTit: {
        fontSize: 22,
        lineHeight: 30,
        paddingRight: '60%'
    },
    empSub: {
        fontSize: 14,
        marginTop: 15,
        marginBottom: 30,
        lineHeight: 21,
        color: Colors.black_800,
        paddingRight: '20%'
    },
    invHD: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 15,
    },
    invText: {
        fontSize: 13,
        color: Colors.black_800
    },
    invLine: {
        width: 120,
        height: 1,
        backgroundColor: Colors.grayEight,
        marginLeft: 15
    },
    productHD: {
        marginBottom: 0,
        alignItems: 'center'
    },
    allProductsBtn: {
        flexDirection: 'row',
        backgroundColor: Colors.black_050,
        paddingHorizontal: 12,
        paddingVertical: 7,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    allProductsBtnText: {
        fontSize: 13
    },
    
})


export default Feed;