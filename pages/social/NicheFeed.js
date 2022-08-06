import { View, Text, SafeAreaView, Platform, Image, StyleSheet, FlatList, ScrollView, TouchableOpacity, TextInput, Pressable, Dimensions } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '../../components/Colors';
import Button from '../../components/Button';
import PostBody from '../../components/PostBody';
import FeedProductBody from '../../components/FeedProductBody';

const { width } = Dimensions.get('window')

const NicheFeed = ({navigation}) => {
    
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
        }
    ]
    
    return (
        <View style={styles.container}>
            <SafeAreaView style={{flex:1}}>
                <View style={{ backgroundColor: '#fff', height: Platform.OS === 'android' ? 50 : 0 }} />
                <View style={styles.header_cont}>
                    <View style={styles.hd_head_options}>
                        <Ionicons onPress={()=>navigation.goBack()} name="chevron-back" size={24} color={Colors.black} />
                        <View style={styles.pageTitleHD}>
                            <Text style={styles.pageTitle}>Niches</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Button
                            text="follow"
                            press={()=>navigation.navigate("---")}
                            status={false}
                            size="small"
                            bac={Colors.primary}
                            colour={Colors.white}
                        />
                        <Ionicons name="ellipsis-horizontal-sharp" size={24} color={Colors.black} style={{marginLeft:20}} />
                    </View>
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
                            <Pressable onPress={()=>navigation.navigate("NicheDetails")} style={styles.memPhotoSamp}>
                                <View style={styles.ptz_imgs_cont}>
                                    <View style={[styles.ptz_img_hd, styles.num1]}>
                                        {/* <Image style={styles.ptz_img} source={{ uri: Url.profile_photo + 'no-photo-available.jpg' }} /> */}
                                    </View>
                                    <View style={[styles.ptz_img_hd, styles.num2]}>
                                        {/* <Image style={styles.ptz_img} source={{ uri: Url.profile_photo + 'no-photo-available.jpg' }} /> */}
                                    </View>
                                    <View style={[styles.ptz_img_hd, styles.num3]}>
                                        {/* <Image style={styles.ptz_img} source={{ uri: Url.profile_photo + 'no-photo-available.jpg' }} /> */}
                                    </View>
                                    <View style={[styles.ptz_img_hd, styles.num4]}>
                                        {/* <Image style={styles.ptz_img} source={{ uri: Url.profile_photo + 'no-photo-available.jpg' }} /> */}
                                    </View>
                                    <View style={[styles.ptz_img_hd, styles.num7]}>
                                        {/* <Image style={styles.ptz_img} source={{ uri: Url.profile_photo + 'no-photo-available.jpg' }} /> */}
                                    </View>
                                </View>
                            </Pressable>
                            <View style={styles.nicheFeedMainTitle}>
                                <Text style={styles.nicheFeedMainTitleText}>Tech Discovery</Text>
                                <Text style={styles.nicheFeedMainSubtitle}>This Niche is for Tech Professionals and majors, top professionals in the industry at large.</Text>
                            </View>
                            <View style={styles.addComHd}>
                                {/* <TouchableOpacity style={styles.addComAddImg}>
                                    <Ionicons name="image" size={18} color={Colors.black_500} />
                                </TouchableOpacity> */}
                                <TextInput style={styles.addComInput} placeholder='Ask a question?' />
                                <TouchableOpacity style={styles.addComBtn}>
                                    <Ionicons name="ios-help" size={18} color={Colors.white} />
                                </TouchableOpacity>
                            </View>
                            <ScrollView showsHorizontalScrollIndicator={false} style={{marginBottom:20,marginTop:10}} horizontal>
                                <TouchableOpacity style={styles.questionBody}>
                                    <View style={styles.head}>
                                        <Pressable  style={styles.hd_det}>
                                            <View  style={styles.hd_img}>
                                                {/* <Image  style={styles.hdImg_photo} /> */}
                                            </View>
                                            <View>
                                                <Text  style={styles.hd_name}>Olipx Studio <Text style={styles.hd_username}>@olipxstudio</Text></Text>
                                            </View>
                                        </Pressable>
                                    </View>
                                    <View style={styles.textPost}>
                                        <Text style={styles.textPostText} numberOfLines={3}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.questionBody}>
                                    <View style={styles.head}>
                                        <Pressable  style={styles.hd_det}>
                                            <View  style={styles.hd_img}>
                                                {/* <Image  style={styles.hdImg_photo} /> */}
                                            </View>
                                            <View>
                                                <Text  style={styles.hd_name}>Olipx Studio <Text style={styles.hd_username}>@olipxstudio</Text></Text>
                                            </View>
                                        </Pressable>
                                    </View>
                                    <View style={styles.textPost}>
                                        <Text style={styles.textPostText} numberOfLines={3}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</Text>
                                    </View>
                                </TouchableOpacity>
                            </ScrollView>
                            </>
                        }
                        keyExtractor={(item) => item.name}
                        renderItem={({ item, index }) => {
                            if(index == 2){
                                return (
                                    <>
                                        <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={styles.productHD} horizontal>
                                            <FeedProductBody type="scroll" />
                                            <FeedProductBody type="scroll" />
                                            <FeedProductBody type="scroll" />
                                            <TouchableOpacity style={styles.allProductsBtn}>
                                                <Text style={styles.allProductsBtnText}>View all</Text>
                                                <Ionicons name="chevron-forward" size={18} color={Colors.black_600} />
                                            </TouchableOpacity>
                                        </ScrollView>
                                        <PostBody key={index} press={()=>alert('Okay')} position={index} type={item.type} />
                                    </>
                                )
                            }
                            return (
                                <PostBody key={index} press={()=>alert('Okay')} position={index} type={item.type} />
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
    memPhotoSamp: {
        width: '100%',
        height: 100,
        alignItems: 'center',
    },
    ptz_imgs_cont: {
        position: 'relative',
        width: 172,
        height: 100,
    },
    ptz_img_hd: {
        backgroundColor: Colors.grayEight,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    num0: {
        width: 65,
        height: 65,
        position: 'absolute',
        left: 50,
        top: 10
    },
    num1: {
        width: 47,
        height: 47,
        position: 'absolute',
        left: 125,
    },
    num2: {
        width: 47,
        height: 47,
        position: 'absolute',
        top: 50
    },
    num5: {
        width: 47,
        height: 47,
        position: 'absolute',
        left: 159,
        top: 45
    },
    num3: {
        width: 33,
        height: 33,
        position: 'absolute',
        left: 120,
        top: 55
    },
    num4: {
        width: 33,
        height: 33,
        position: 'absolute',
        left: 10,
        top: 10
    },
    num6: {
        width: 33,
        height: 33,
        position: 'absolute',
        left: 178,
        top: 6
    },
    num7: {
        width: 75,
        height: 75,
        position: 'absolute',
        left: 47,
        top: 5
    },
    ptz_img: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 50
    },
    ptz_det: {
        width: '30%'
    },
    ptz_det_txt: {
        fontSize: 13,
        lineHeight: 18,
        marginTop: 10
    },
    nicheFeedMainTitle: {
        alignItems: 'center'
    },
    nicheFeedMainTitleText: {
        fontSize: 20,
        fontWeight: '700',
        marginVertical: 10
    },
    nicheFeedMainSubtitle: {
        textAlign: 'center',
        lineHeight: 21,
        color: Colors.black_800
    },
    addComHd: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: Colors.black_075,
        borderRadius: 30,
        padding: 3,
        marginVertical: 15
    },
    addComAddImg: {
        width: 33,
        height: 33,
        backgroundColor: Colors.black_050,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
    },
    addComInput: {
        fontSize: 14.5,
        flexGrow: 1,
        marginHorizontal: 10
    },
    addComBtn: {
        width: 33,
        height: 33,
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
    },
    questionBody: {
        width: width - 130,
        // borderWidth: 1,
        // borderColor: Colors.grayEight,
        // borderRadius: 16,
        // padding: 5,
        marginRight: 15
    },
    head: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    hd_det: {
        flexDirection: 'row',
        alignItems: 'center'
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
        fontWeight: '500'
    },
    hd_username: {
        color: Colors.grayTwelve,
        fontWeight: '300',
    },
    hd_place: {
        fontSize: 12,
        color: Colors.grayEleven
    },
    textPost: {
        marginVertical: 10,
        position: 'relative',
        flexGrow: 1,
        flexShrink: 1,
    },
    textPostText: {
        lineHeight: 21,
        fontSize: 14.5,
        color: Colors.black_800,
        flexGrow: 1,
        flexShrink: 1,
    },
    
})

export default NicheFeed;