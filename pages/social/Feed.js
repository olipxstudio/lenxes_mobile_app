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
                        {/* <Ionicons onPress={()=>alert('good')} name="play" size={24} color={Colors.black} style={styles.hdJiveBtn} /> */}
                        <MaterialCommunityIcons onPress={()=>navigation.navigate('Niche')} name="bullseye-arrow" size={24} color={Colors.black} />
                        <Ionicons onPress={()=>alert('good')} name="notifications-outline" size={24} color={Colors.black} style={styles.hdJiveBtn} />
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
                            <ScrollView showsHorizontalScrollIndicator={false} style={styles.discuss} horizontal>
                                <DiscussClip text="Discover" press={()=>alert('Okay')} img="" size="sm" num="12" />
                                <DiscussClip text="Discover" press={()=>alert('Okay')} img="" size="sm" num="24" />
                                <DiscussClip text="Discover" press={()=>alert('Okay')} img="" size="sm" num="6" />
                                <DiscussClip text="Discover" press={()=>alert('Okay')} img="" size="sm" num="33" />
                                <DiscussClip text="Discover" press={()=>alert('Okay')} img="" size="sm" num="8" />
                                <DiscussClip text="Discover" press={()=>alert('Okay')} img="" size="sm" num="17" />
                                <DiscussClip text="Discover" press={()=>alert('Okay')} img="" size="sm" num="4" />
                                <DiscussClip text="Discover" press={()=>alert('Okay')} img="" size="sm" num="28" />
                                <DiscussClip text="Discover" press={()=>alert('Okay')} img="" size="sm" num="14" />
                            </ScrollView>
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
                                        <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={styles.productHD} horizontal>
                                            <FeedProductBody type="scroll" press={()=>navigation.navigate("SingleProduct")} />
                                            <FeedProductBody type="scroll" press={()=>navigation.navigate("SingleProduct")} />
                                            <FeedProductBody type="scroll" press={()=>navigation.navigate("SingleProduct")} />
                                            <TouchableOpacity style={styles.allProductsBtn}>
                                                <Text style={styles.allProductsBtnText}>View all</Text>
                                                <Ionicons name="chevron-forward" size={18} color={Colors.black_600} />
                                            </TouchableOpacity>
                                        </ScrollView>
                                        <PostBody key={index} start_discuss={()=>startDiscuss(item.name)} press={()=>alert('Okay')} position={index} type={item.type} />
                                    </>
                                )
                            }
                            return (
                                <PostBody key={index} start_discuss={()=>startDiscuss(item.name)} press={()=>alert('Okay')} position={index} type={item.type} />
                            )
                        }}
                        ListFooterComponent={
                            <View style={styles.scrollTop}>
                                <View style={styles.scrollTopInner}>
                                    <Ionicons name="ios-add-circle-outline" size={18} color={Colors.black_600} />
                                </View>
                            </View>
                        }
                    />
                </View>
                
                <NewPost />
                
                <Modal
                animationType="slide"
                statusBarTranslucent={true}
                transparent={true}
                visible={discussModal}
                // onShow={()=>alert('shown')}
                onRequestClose={() => {
                    setDiscussModal(!discussModal);
                }}>
                    <View style={styles.ModalView}>
                        <Pressable onPress={()=>setDiscussModal(!discussModal)} style={styles.backDrop}></Pressable>
                        <View style={styles.ModalCenterView}>
                            <View style={styles.modalCloseBarHD}><Pressable style={styles.modalCloseBar} onPress={()=>setDiscussModal(!discussModal)}></Pressable></View>
                            <View style={styles.modalHead}>
                                <Ionicons onPress={()=>setDiscussModal(!discussModal)} name="chevron-back" size={24} color={Colors.black} style={{marginLeft:-7}} />
                                <Pressable onPress={()=>goToDiscussRoom()}>
                                    <Text style={{color:Colors.primary,fontWeight:'700'}}>Start Discuss</Text>
                                </Pressable>
                            </View>
                            <ScrollView showsVerticalScrollIndicator={false} style={{marginTop:15}}>
                                
                                <View style={{marginBottom:25}}>
                                    <Text style={styles.discussModTit}>Start a Discuss</Text>
                                    <Text style={styles.discussModSubTit}>Add people to discuss to chat about this post. All discussion would disappear after 24 Hours.</Text>
                                </View>
                                <DiscussPeopleList press={()=>alert('good')} my_id={1} model="two" name="Olipx Studio" size="big" handle="olipxstudio" img="" added={false} />
                                <DiscussPeopleList press={()=>alert('good')} my_id={1} model="two" name="Olipx Studio" size="big" handle="olipxstudio" img="" added={true} />
                                <DiscussPeopleList press={()=>alert('good')} my_id={1} model="two" name="Olipx Studio" size="big" handle="olipxstudio" img="" added={false} />
                                <DiscussPeopleList press={()=>alert('good')} my_id={1} model="two" name="Olipx Studio" size="big" handle="olipxstudio" img="" added={false} />
                                <DiscussPeopleList press={()=>alert('good')} my_id={1} model="two" name="Olipx Studio" size="big" handle="olipxstudio" img="" added={false} />
                                <DiscussPeopleList press={()=>alert('good')} my_id={1} model="two" name="Olipx Studio" size="big" handle="olipxstudio" img="" added={true} />
                                <DiscussPeopleList press={()=>alert('good')} my_id={1} model="two" name="Olipx Studio" size="big" handle="olipxstudio" img="" added={false} />
                                <DiscussPeopleList press={()=>alert('good')} my_id={1} model="two" name="Olipx Studio" size="big" handle="olipxstudio" img="" added={false} />
                                <DiscussPeopleList press={()=>alert('good')} my_id={1} model="two" name="Olipx Studio" size="big" handle="olipxstudio" img="" added={false} />
                                <DiscussPeopleList press={()=>alert('good')} my_id={1} model="two" name="Olipx Studio" size="big" handle="olipxstudio" img="" added={true} />
                                <DiscussPeopleList press={()=>alert('good')} my_id={1} model="two" name="Olipx Studio" size="big" handle="olipxstudio" img="" added={false} />
                                <DiscussPeopleList press={()=>alert('good')} my_id={1} model="two" name="Olipx Studio" size="big" handle="olipxstudio" img="" added={false} />
                                <DiscussPeopleList press={()=>alert('good')} my_id={1} model="two" name="Olipx Studio" size="big" handle="olipxstudio" img="" added={false} />
                                <DiscussPeopleList press={()=>alert('good')} my_id={1} model="two" name="Olipx Studio" size="big" handle="olipxstudio" img="" added={true} />
                                <DiscussPeopleList press={()=>alert('good')} my_id={1} model="two" name="Olipx Studio" size="big" handle="olipxstudio" img="" added={false} />
                                <DiscussPeopleList press={()=>alert('good')} my_id={1} model="two" name="Olipx Studio" size="big" handle="olipxstudio" img="" added={false} />
                                
                            </ScrollView>
                        </View>
                    </View>
                </Modal>
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
    discuss: {
        marginTop: 10,
        marginBottom: 25
    },
    scrollTop: {
        width: '100%',
        height: 50,
        marginBottom:15,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'none'
    },
    scrollTopInner: {
        width: 30,
        height: 30,
        backgroundColor: Colors.black_025,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
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
        marginBottom: 20,
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
    
    ModalView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: '#00000099',
        position: 'relative'
    },
    backDrop: {
        width:'100%',
        height:'20%',
        position:'absolute',
        left:0,
        top:0
    },
    ModalCenterView: {
        backgroundColor: Colors.grayFive,
        width: '100%',
        height: '80%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingHorizontal: 15,
    },
    modalCloseBarHD: {
        width: '100%',
        // position: 'absolute',
        // top: 0,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical:5,
    },
    modalCloseBar: {
        width: 50,
        height: 6,
        borderRadius: 12,
        backgroundColor: Colors.grayNine,
    },
    modalHead: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 10,
    },
    discussModTit: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    discussModSubTit: {
        fontSize: 14,
        color: Colors.black_700
    },
})


export default Feed;