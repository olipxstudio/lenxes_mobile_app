import React, {useState, useRef} from 'react'
import { StyleSheet, Text, View, SafeAreaView, Platform, ScrollView, Dimensions, Pressable, Image, TouchableOpacity } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Entypo } from '@expo/vector-icons'
import Colors from '../../components/Colors'
import TaggedPost from '../../components/TaggedPost'
import Button from '../../components/Button'
import { Video, AVPlaybackStatus } from 'expo-av'

const {width} = Dimensions.get('window');

const RemoteImage = ({ uri, desiredWidth }) => {
    const [desiredHeight, setDesiredHeight] = React.useState(0)

    Image.getSize(uri, (width, height) => {
        setDesiredHeight(desiredWidth / width * height)
    })

    return (
        <Image
            source={{ uri }}
            style={{
                width: desiredWidth,
                height: desiredHeight,
                borderRadius: 14
            }}
        />
    )
}

const Post = ({ navigation }) => {
    const [data, setData] = useState([])
    const [showTaggedProduct, setShowTaggedProduct] = useState(false)
    
    const fakeData = [
        {
            'name':'rufus',
            'posts': [
                {
                    'date': '02-10-2022',
                    'seen': true,
                    'type': 'photo'
                },
                {
                    'date': '02-10-2022',
                    'seen': false,
                    'type': 'event'
                },
                {
                    'date': '02-10-2022',
                    'seen': false,
                    'type': 'product'
                },
                {
                    'date': '02-10-2022',
                    'seen': false,
                    'type': 'video'
                }
            ]
        },
        {
            'name':'peace',
            'posts': [
                {
                    'date': '02-10-2022',
                    'seen': false,
                    'type': 'photo'
                },
                {
                    'date': '02-10-2022',
                    'seen': false,
                    'type': 'event'
                },
                {
                    'date': '02-10-2022',
                    'seen': false,
                    'type': 'product'
                }
            ]
        },
        {
            'name':'john',
            'posts': [
                {
                    'date': '02-10-2022',
                    'seen': false,
                    'type': 'product'
                },
                {
                    'date': '02-10-2022',
                    'seen': false,
                    'type': 'video'
                }
            ]
        },
        {
            'name':'pius',
            'posts': [
                {
                    'date': '02-10-2022',
                    'seen': false,
                    'type': 'video'
                },
                {
                    'date': '02-10-2022',
                    'seen': false,
                    'type': 'event'
                },
                {
                    'date': '02-10-2022',
                    'seen': false,
                    'type': 'product'
                },
                
            ]
        },
        {
            'name':'okoro',
            'posts': [
                {
                    'date': '02-10-2022',
                    'seen': false,
                    'type': 'product'
                },
                {
                    'date': '02-10-2022',
                    'seen': false,
                    'type': 'video'
                }
            ]
        }
    ]
    
    const changeIndex = ({ nativeEvent }) => {
        // let number = 1;
        // let slide_dot = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        
    }
    
    const [input1, setinput1] = useState('./assets/video/video.mp4');
    const video1 = useRef(null);
    const [status1, setStatus1] = useState({});
    
    return (
        <View style={styles.container}>
            <SafeAreaView style={{flex:1}}>
                <View style={{ backgroundColor: '#fff', height: Platform.OS === 'android' ? 50 : 0 }} />
                <View style={styles.header_cont}>
                    <View style={styles.hd_head_options}>
                        <Ionicons onPress={()=>navigation.goBack()} name="chevron-back" size={24} color={Colors.black} />
                        <View style={styles.ownerHD}>
                            <View style={styles.thumb}></View>
                            <View>
                                <View style={styles.nameHD}>
                                    <Text style={styles.name}>Olipx Studio</Text>
                                    <Ionicons name="checkmark-circle" size={13} color={Colors.black_600} />
                                </View>
                                <Text style={styles.date}>Yesterday, 4:30 PM</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.tickHD}>
                        <View style={[styles.tick, styles.filled]}></View>
                        <View style={styles.tick}></View>
                        <View style={styles.tick}></View>
                        <View style={styles.tick}></View>
                        <View style={styles.tick}></View>
                    </View>
                </View>
                <View style={styles.main}>
                    <ScrollView
                        pagingEnabled
                        horizontal
                        onScroll={(nativeEvent) => changeIndex(nativeEvent)} scrollEventThrottle={1}
                        showsHorizontalScrollIndicator={false}
                        // onScrollBeginDrag={hideButtons}
                        // onScrollEndDrag={showButtons}
                        // onMomentumScrollEnd={showButtons}
                        style={{flex: 1,position:'relative'}}
                    >
                        <View style={styles.thePost}>
                            <ScrollView showsVerticalScrollIndicator={false} style={styles.postBody}>
                                {/* https://www.apple.com/newsroom/videos/iphone-14-pro-3up/large_2x.mp4 */}
                                {/* 10168103 */}
                                {/* 8087846 */}
                                {/* 7599652 */}
                                <RemoteImage uri={'https://images.pexels.com/photos/8087846/pexels-photo-8087846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} desiredWidth={width - 70} />
                                <Text style={styles.postText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</Text>
                                {/* <Text style={styles.postText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</Text> */}
                                <Pressable>
                                    <Text style={styles.commentLink}>View  all 460 comments</Text>
                                </Pressable>
                            </ScrollView>
                            <View style={styles.btns}>
                                <View style={styles.postActionBtnGrp}>
                                    <Pressable style={styles.postAction}>
                                        <Ionicons name="arrow-redo-sharp" size={22} color="#D1D1D1" />
                                    </Pressable>
                                    <Pressable onPress={()=>alert("good")} style={[styles.postAction, {marginRight:0}]}>
                                        <Ionicons name="chatbubbles" size={22} color="#D1D1D1" />
                                    </Pressable>
                                    <Pressable style={styles.postAction}>
                                        <Ionicons name="ios-chatbubble" size={22} color="#D1D1D1" />
                                    </Pressable>
                                    <Pressable style={styles.postAction}>
                                        <Ionicons name="ios-heart" size={22} color="#D1D1D1" />
                                        <Text style={styles.postActionText}>8k</Text>
                                    </Pressable>
                                </View>
                                <View style={styles.bottomBtns}>
                                    {/* <View style={{position:'absolute',top:15,left:0,width:'100%',zIndex:10}}> */}
                                    <View>
                                        <View style={styles.fdPh_PtBbl}>
                                            <TouchableOpacity onPress={()=>setShowTaggedProduct(!showTaggedProduct)} style={styles.fdPh_PtCont}>
                                                <Entypo name="price-tag" size={13} color={Colors.black} />
                                            </TouchableOpacity>
                                        </View>
                                        <TaggedPost size="partial" position={true} press={()=>alert('done')} show={showTaggedProduct} />
                                    </View>
                                    <TouchableOpacity style={styles.moreViewIcon}>
                                        <View style={styles.icnTop}></View>
                                        <View style={styles.icnMid}></View>
                                        <View style={styles.icnBottom}></View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        {/* ---------------- EVENT POST VIEW ----------------  */}
                        <View style={styles.thePost}>
                            <ScrollView showsVerticalScrollIndicator={false} style={styles.postBody}>
                                <Text style={styles.ptTitle}>ACCORDED AFFECTION - Cindy & Mista CSO</Text>
                                <Text style={styles.ptDate}>Wed, Feb 10, 11:00 AM</Text>
                                <View style={styles.photoContainer}>
                                    <RemoteImage uri={'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F348780219%2F217578266642%2F1%2Foriginal.20220906-131821?w=600&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C31%2C3000%2C1500&s=96321251a26e04f11a7805786fef18d6'} desiredWidth={width - 70} />
                                </View>
                                <ScrollView showsHorizontalScrollIndicator={false} style={styles.thumbsHD} horizontal>
                                    <View style={[styles.thumbs, {width: 60}]}></View>
                                    <View style={[styles.thumbs, {width: 100}]}></View>
                                    <View style={[styles.thumbs, {width: 70}]}></View>
                                    <View style={[styles.thumbs, {width: 80}]}></View>
                                    <View style={[styles.thumbs, {width: 50}]}></View>
                                </ScrollView>
                                <View style={styles.venueHD}>
                                    <Ionicons name="location-sharp" size={15} color={Colors.grayEleven} />
                                    <Text style={styles.venue}>The Grove School 1 Abacha Road Port Harcourt, RV 500272</Text>
                                </View>
                                <Text style={styles.postText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</Text>
                                <Text style={styles.postText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</Text>
                                <View style={styles.link}>
                                    <Text style={styles.bio_url}>olipxstudio.com</Text>
                                    <Ionicons name="arrow-forward" size={13} color={Colors.secondary} style={styles.link_arrow} />
                                </View>
                                <Pressable>
                                    <Text style={styles.commentLink}>View  all 460 comments</Text>
                                </Pressable>
                            </ScrollView>
                            <View style={styles.btns}>
                                <View style={styles.postActionBtnGrp}>
                                    <Pressable style={styles.postAction}>
                                        <Ionicons name="arrow-redo-sharp" size={22} color="#D1D1D1" />
                                    </Pressable>
                                    <Pressable onPress={()=>alert("good")} style={[styles.postAction, {marginRight:0}]}>
                                        <Ionicons name="chatbubbles" size={22} color="#D1D1D1" />
                                    </Pressable>
                                    <Pressable style={styles.postAction}>
                                        <Ionicons name="ios-chatbubble" size={22} color="#D1D1D1" />
                                    </Pressable>
                                    <Pressable style={styles.postAction}>
                                        <Ionicons name="ios-heart" size={22} color="#D1D1D1" />
                                        <Text style={styles.postActionText}>8k</Text>
                                    </Pressable>
                                </View>
                                <View style={styles.bottomBtns}>
                                    {/* <View style={{position:'absolute',top:15,left:0,width:'100%',zIndex:10}}> */}
                                    <View>
                                        <View style={styles.fdPh_PtBbl}>
                                            <TouchableOpacity onPress={()=>setShowTaggedProduct(!showTaggedProduct)} style={styles.fdPh_PtCont}>
                                                <Entypo name="price-tag" size={13} color={Colors.black} />
                                            </TouchableOpacity>
                                        </View>
                                        <TaggedPost size="partial" position={true} press={()=>alert('done')} show={showTaggedProduct} />
                                    </View>
                                    <TouchableOpacity style={styles.moreViewIcon}>
                                        <View style={styles.icnTop}></View>
                                        <View style={styles.icnMid}></View>
                                        <View style={styles.icnBottom}></View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        {/* ---------------- PRODUCT POST VIEW ----------------  */}
                        <View style={styles.thePost}>
                            <ScrollView showsVerticalScrollIndicator={false} style={styles.postBody}>
                                <Text style={styles.ptTitle}>iPhone 14 Pro and iPhone 14 Pro Max - Pro Beyond</Text>
                                <View style={styles.photoContainer}>
                                    <RemoteImage uri={'https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-deep-purple-220907_inline.jpg.large_2x.jpg'} desiredWidth={width - 70} />
                                </View>
                                <ScrollView showsHorizontalScrollIndicator={false} style={styles.thumbsHD} horizontal>
                                    <View style={[styles.thumbs, {width: 60}]}></View>
                                    <View style={[styles.thumbs, {width: 100}]}></View>
                                    <View style={[styles.thumbs, {width: 70}]}></View>
                                    <View style={[styles.thumbs, {width: 80}]}></View>
                                    <View style={[styles.thumbs, {width: 50}]}></View>
                                </ScrollView>
                                <View style={styles.prodIdentity}>
                                    <Text style={styles.ident}>Garanimals</Text>
                                    <Text style={styles.ident}>SKU 0001</Text>
                                </View>
                                <Text style={styles.postText}>A magical new way to interact with iPhone. Groundbreaking safety features designed to save lives. An innovative 48MP camera for mind-blowing detail. All powered by the ultimate smartphone chip.</Text>
                                <Text style={styles.postText}>Designed for durability. With Ceramic Shield, tougher than any smartphone glass. Water resistance.1 Surgical-grade stainless steel. 6.1″ and 6.7″ display sizes.2 All in four Pro colors.</Text>
                                <View style={styles.optHd}>
                                    <Text style={styles.optText}>Color <Text style={styles.optTextSm}>- select</Text></Text>
                                    <ScrollView showsHorizontalScrollIndicator={false} style={styles.optsBtns} horizontal>
                                        <TouchableOpacity style={[styles.optBtn, styles.actBtn]}>
                                            <Text style={[styles.optBtnText, styles.actBtnText]}>Red</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.optBtn}>
                                            <Text style={styles.optBtnText}>Blue</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.optBtn}>
                                            <Text style={styles.optBtnText}>Green</Text>
                                        </TouchableOpacity>
                                    </ScrollView>
                                </View>
                                <View style={styles.optHd}>
                                    <Text style={styles.optText}>Size <Text style={styles.optTextSm}>- select</Text></Text>
                                    <ScrollView showsHorizontalScrollIndicator={false} style={styles.optsBtns} horizontal>
                                        <TouchableOpacity style={[styles.optBtn, styles.actBtn]}>
                                            <Text style={[styles.optBtnText, styles.actBtnText]}>S</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.optBtn}>
                                            <Text style={styles.optBtnText}>M</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.optBtn}>
                                            <Text style={styles.optBtnText}>L</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.optBtn}>
                                            <Text style={styles.optBtnText}>XL</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.optBtn}>
                                            <Text style={styles.optBtnText}>XXL</Text>
                                        </TouchableOpacity>
                                    </ScrollView>
                                </View>
                                <View style={styles.bottomBar}>
                                    <View>
                                        <Text style={styles.amtTot}>N13,000</Text>
                                        <Text style={styles.amtTotDesc}>This is excluding delivery charge.</Text>
                                    </View>
                                    <Button
                                        text="Add to Cart"
                                        press={()=>setChecklistVisible(!checklistVisible)}
                                        status={false}
                                        size="large"
                                        bac={Colors.primary}
                                        colour={Colors.white}
                                    />
                                </View>
                            </ScrollView>
                            <View style={styles.btns}>
                                <View style={styles.postActionBtnGrp}>
                                    <Pressable style={styles.postAction}>
                                        <Ionicons name="arrow-redo-sharp" size={22} color="#D1D1D1" />
                                    </Pressable>
                                    <Pressable onPress={()=>alert("good")} style={[styles.postAction, {marginRight:0}]}>
                                        <Ionicons name="chatbubbles" size={22} color="#D1D1D1" />
                                    </Pressable>
                                    <Pressable style={styles.postAction}>
                                        <Ionicons name="help-circle" size={22} color="#D1D1D1" />
                                    </Pressable>
                                    <Pressable style={styles.postAction}>
                                        <Ionicons name="ios-heart" size={22} color="#D1D1D1" />
                                        <Text style={styles.postActionText}>8k</Text>
                                    </Pressable>
                                    <Pressable style={styles.postAction}>
                                        <Ionicons name="ios-chatbubble" size={22} color="#D1D1D1" />
                                        <Ionicons name="ios-star" size={14} color="#ffffff" style={{position:'absolute',top:4,left:3.5}} />
                                    </Pressable>
                                </View>
                                <View style={styles.bottomBtns}>
                                    {/* <View style={{position:'absolute',top:15,left:0,width:'100%',zIndex:10}}> */}
                                    <View>
                                        <View style={styles.fdPh_PtBbl}>
                                            <TouchableOpacity onPress={()=>setShowTaggedProduct(!showTaggedProduct)} style={styles.fdPh_PtCont}>
                                                <Entypo name="price-tag" size={13} color={Colors.black} />
                                            </TouchableOpacity>
                                        </View>
                                        <TaggedPost size="partial" position={true} press={()=>alert('done')} show={showTaggedProduct} />
                                    </View>
                                    <TouchableOpacity style={styles.moreViewIcon}>
                                        <View style={styles.icnTop}></View>
                                        <View style={styles.icnMid}></View>
                                        <View style={styles.icnBottom}></View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        {/* ---------------- VIDEO POST VIEW ----------------  */}
                        <View style={styles.thePost}>
                            <View style={styles.postBody}>
                                <View style={styles.video_wrapper}>
                                    <Video
                                        ref={video1}
                                        style={styles.video_inp_img}
                                        source={{
                                            uri: input1
                                        }}
                                        useNativeControls={false}
                                        resizeMode="contain"
                                        isLooping
                                        onPlaybackStatusUpdate={status => setStatus1(() => status)}
                                    />
                                </View>
                                <Pressable style={[styles.caption_cont, { justifyContent: 'center', alignItems: 'center' }]} onPress={() => status1.isPlaying ? video1.current.pauseAsync() : video1.current.playAsync()}>
                                    {
                                        !status1.isPlaying &&
                                        <Ionicons name="play" size={60} color="#ccc" />
                                    }
                                </Pressable>
                            </View>
                            <View style={styles.btns}>
                                <View style={styles.postActionBtnGrp}>
                                    <Pressable style={styles.postAction}>
                                        <Ionicons name="arrow-redo-sharp" size={22} color="#D1D1D1" />
                                    </Pressable>
                                    <Pressable onPress={()=>alert("good")} style={[styles.postAction, {marginRight:0}]}>
                                        <Ionicons name="chatbubbles" size={22} color="#D1D1D1" />
                                    </Pressable>
                                    <Pressable style={styles.postAction}>
                                        <Ionicons name="ios-chatbubble" size={22} color="#D1D1D1" />
                                    </Pressable>
                                    <Pressable style={styles.postAction}>
                                        <Ionicons name="ios-heart" size={22} color="#D1D1D1" />
                                        <Text style={styles.postActionText}>8k</Text>
                                    </Pressable>
                                </View>
                                <View style={styles.bottomBtns}>
                                    {/* <View style={{position:'absolute',top:15,left:0,width:'100%',zIndex:10}}> */}
                                    <View>
                                        <View style={styles.fdPh_PtBbl}>
                                            <TouchableOpacity onPress={()=>setShowTaggedProduct(!showTaggedProduct)} style={styles.fdPh_PtCont}>
                                                <Entypo name="price-tag" size={13} color={Colors.black} />
                                            </TouchableOpacity>
                                        </View>
                                        <TaggedPost size="partial" position={true} press={()=>alert('done')} show={showTaggedProduct} />
                                    </View>
                                    <TouchableOpacity style={styles.moreViewIcon}>
                                        <View style={styles.icnTop}></View>
                                        <View style={styles.icnMid}></View>
                                        <View style={styles.icnBottom}></View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    
    video_inp_img: {
        width: '100%',
        height: width - 50,
        resizeMode: 'cover',
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
    ownerHD: {
        flexDirection:'row',
        alignItems: 'center',
        marginLeft: 20
    },
    thumb: {
        width: 30,
        height: 30,
        backgroundColor: Colors.grayEight,
        borderRadius: 100,
        marginRight: 8
    },
    nameHD: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    name: {
        fontWeight: '600',
        marginRight: 3,
    },
    date: {
        fontSize: 11,
        color: Colors.grayTwelve,
        marginTop: 1
    },
    tickHD: {
        backgroundColor: 'rgba(217, 217, 217, 0.3)',
        flexDirection:'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 20
    },
    tick: {
        width: 8,
        height: 8,
        backgroundColor: Colors.white,
        borderRadius: 20,
        marginHorizontal: 2,
        borderWidth: 0.5,
        borderColor: 'rgba(209, 122, 106, 0.3)',
    },
    filled: {
        backgroundColor: Colors.primary
    },
    main:{
        flex: 1,
        width: '100%',
        boxSizing: 'border-box'
    },
    thePost: {
        width: width - 30,
        marginHorizontal: 15,
        flexDirection: 'row',
    },
    postBody: {
        width: width - 70,
        marginRight: 10,
    },
    ptTitle: {
        fontSize: 24,
        marginBottom: 8,
        fontWeight: '700'
    },
    ptDate: {
        fontSize: 13,
        marginBottom: 5,
    },
    photoContainer: {
        marginTop: 7
    },
    thumbsHD: {
        marginTop: 6,
        marginBottom: 15
    },
    thumbs: {
        width: 100,
        height: 80,
        backgroundColor: Colors.grayEight,
        borderRadius: 12,
        marginRight: 6
    },
    venueHD: {
        flexDirection: 'row',
        width: '100%'
    },
    venue: {
        marginLeft: 5,
        fontSize: 13,
        color: Colors.grayEleven,
        width: '93%',
        lineHeight: 17
    },
    prodIdentity: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    ident: {
        color: Colors.grayEleven,
        lineHeight: 17
    },
    postText: {
        marginVertical: 10,
        lineHeight: 20
    },
    link: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    bio_url: {
        fontSize: 14,
        color: Colors.secondary,
    },
    link_arrow: {
        transform: [{ rotate: "-45deg" }],
        marginLeft: 3
    },
    commentLink: {
        color: '#9F9F9F'
    },
    btns: {
        width: 30,
        justifyContent: 'flex-end',
        marginBottom: 80,
    },
    postActionBtnGrp: {
        marginBottom: 100,
    },
    postAction: {
        marginHorizontal: 4,
        marginBottom: 25,
        alignItems: 'center',
        position: 'relative'
    },
    postActionText: {
        fontSize: 12,
        color: Colors.black_300
    },
    
    optHd: {
        marginTop: 12
    },
    optText: {
        fontSize: 14,
        fontWeight: '600'
    },
    optTextSm: {
        fontSize: 12,
        fontWeight: '400',
        color: Colors.grayTen
    },
    optsBtns: {
        flexDirection: 'row',
        marginTop: 7
    },
    optBtn: {
        paddingHorizontal: 20,
        backgroundColor: Colors.grayTwo,
        marginRight: 6,
        borderRadius: 10,
        width: 84,
        height: 33,
        justifyContent: 'center',
        alignItems: 'center'
    },
    actBtn: {
        backgroundColor: Colors.primary,
    },
    optBtnText: {
        fontSize: 13,
        fontWeight: '600',
        textAlign: 'center'
    },
    actBtnText: {
        color: Colors.white
    },
    bottomBar: {
        // position: 'absolute',
        // bottom: 0,
        // left: 0,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 35,
        marginBottom: 15
    },
    amtTot: {
        fontWeight: '600',
        fontSize: 16
    },
    amtTotDesc: {
        fontSize: 10,
        color: Colors.grayEleven,
        marginTop: 1
    },
    
    fdPh_PtBbl: {
        // position: 'absolute',
        // bottom: 0,
        // right: 0,
        width: 30,
        height: 30,
        borderRadius: 50,
        backgroundColor: Colors.grayTwo,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5
    },
    fdPh_PtCont: {
        width: 22,
        height: 22,
        borderRadius: 50,
        backgroundColor: Colors.grayEight,
        justifyContent: 'center',
        alignItems: 'center'
    },
    moreViewIcon: {
        width: 22,
        marginHorizontal: 4,
        marginTop: 25
    },
    icnTop: {
        width: '100%',
        height: 6,
        backgroundColor: '#D1D1D1',
        borderRadius: 4
    },
    icnMid: {
        width: '100%',
        height: 16,
        backgroundColor: '#D1D1D1',
        borderRadius: 4,
        marginVertical: 2
    },
    icnBottom: {
        width: '100%',
        height: 6,
        backgroundColor: '#D1D1D1',
        borderRadius: 4
    },
})

export default Post
