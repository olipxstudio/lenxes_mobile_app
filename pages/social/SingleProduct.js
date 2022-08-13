import React from 'react';
import { View, Text, SafeAreaView, Platform, StyleSheet, Dimensions, ScrollView, TouchableOpacity, TextInput, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../../components/Colors';
import * as Device from 'expo-device';
import Button from '../../components/Button';
import FeedProductBody from '../../components/FeedProductBody';

const RemoteImage = ({ uri, type, desiredWidth }) => {
    const [desiredHeight, setDesiredHeight] = React.useState(0)
    const [newWidth, setNewWidth] = React.useState(0)

    Image.getSize(uri, (width, height) => {
        if(width>desiredWidth){
            setNewWidth(desiredWidth)
            setDesiredHeight(desiredWidth / width * height)
        }else{
            setNewWidth(width)
            setDesiredHeight(width / width * height)
        }
    })

    return (
        <Image
            source={{ uri }}
            style={{
                width: newWidth,
                height: desiredHeight,
                resizeMode: 'cover',
                borderRadius: type == 'comment' ? 10 : 16
            }}
        />
    )
}

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
                    <View style={styles.skuHd}>
                        <Text style={styles.sku}>SKU 0001</Text>
                    </View>
                    <View style={styles.pdPhotoHd}>
                        
                    </View>
                    <View style={styles.actions}>
                        <View style={styles.actThumbs}>
                            <View style={styles.actTmb}></View>
                            <View style={[styles.actTmb, styles.activeTab]}></View>
                        </View>
                        <View style={styles.actBtns}>
                            <Ionicons name="ios-heart" size={20} color={Colors.grayEight} style={styles.actIcon} />
                            <MaterialCommunityIcons name="chat-question" size={20} color={Colors.grayEight} style={styles.actIcon} />
                            <Ionicons name="arrow-redo-sharp" size={20} color={Colors.grayEight} style={styles.actIcon} />
                            <Ionicons name="chatbubbles" size={20} color={Colors.grayEight} style={styles.actIcon} />
                        </View>
                    </View>
                    <View style={styles.description}>
                        <Text style={styles.descTitle}>Customize your Minimal Sofa</Text>
                        <Text style={styles.descText}>This Chair is made to suit your relaxation needs, perfectly suited for all rooms, bedrooms, receptions. Dimensions: Height - 76cm x Lenght - 79</Text>
                    </View>
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
                            <TouchableOpacity style={styles.optBtn}>
                                <Text style={styles.optBtnText}>{Device.modelName}</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                    <View style={styles.addComHd}>
                        {/* <TouchableOpacity style={styles.addComAddImg}>
                            <Ionicons name="image" size={18} color={Colors.black_500} />
                        </TouchableOpacity> */}
                        <TextInput style={styles.addComInput} placeholder='Enter a review...' />
                        <TouchableOpacity style={styles.addComBtn}>
                            <Ionicons name="ios-add" size={22} color={Colors.white} style={{marginLeft:2.5}} />
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.allComments}>
                        <View>
                            <View style={styles.cmHd}>
                                <View style={styles.cmPht}>
                                    
                                </View>
                                <View style={styles.cmDetHd}>
                                    <Ionicons name="caret-back" size={24} color={Colors.grayTwo} style={styles.cmIcon} />
                                    <Text style={styles.cmCaption}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</Text>
                                    <View style={styles.cmFt}>
                                        <Text style={styles.cmHr}>5h</Text>
                                        <Pressable style={styles.cmRpBtn}>
                                            <Text style={styles.cmBtnTxt}>Reply</Text>
                                        </Pressable>
                                    </View>
                                </View>
                            </View>
                            <View style={[styles.cmHd, styles.cmHdFlip]}>
                                <View style={[styles.cmPht, styles.PhtFlip]}>
                                    
                                </View>
                                <View style={[styles.cmDetHd, styles.cmDetHdFlip]}>
                                    <Ionicons name="caret-forward" size={24} color={Colors.grayTwo} style={[styles.cmIcon, styles.cmIconFlip]} />
                                    {/* <RemoteImage type="comment" uri={'https://images.pexels.com/photos/6129989/pexels-photo-6129989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} desiredWidth={width - 114} /> */}
                                    {/* <Image source={require('../../assets/img/four.jpg')} resizeMode="contain" style={{width:'100%',height:200}} /> */}
                                    <View style={styles.cmFt}>
                                        <Text style={styles.cmHr}>5h</Text>
                                        <Pressable style={styles.cmRpBtn}>
                                            <Text style={styles.cmBtnTxt}>Reply</Text>
                                        </Pressable>
                                    </View>
                                    <View style={styles.replyLine}></View>
                                </View>
                            </View>
                            <View style={[styles.cmHd, styles.cmHdFlip]}>
                                <View style={[styles.cmPht, styles.PhtFlip]}>
                                    
                                </View>
                                <View style={[styles.cmDetHd, styles.cmDetHdFlip]}>
                                    <Ionicons name="caret-forward" size={24} color={Colors.grayTwo} style={[styles.cmIcon, styles.cmIconFlip]} />
                                    <Text style={styles.cmCaption}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</Text>
                                    <View style={styles.cmFt}>
                                        <Text style={styles.cmHr}>5h</Text>
                                        <Pressable style={styles.cmRpBtn}>
                                            <Text style={styles.cmBtnTxt}>Reply</Text>
                                        </Pressable>
                                    </View>
                                </View>
                            </View>
                            <Pressable style={{marginBottom: 10, marginLeft: 43}}>
                                <Text style={{color:Colors.secondary}}>View more replies</Text>
                            </Pressable>
                        </View>
                        
                        <View>
                            <View style={styles.cmHd}>
                                <View style={styles.cmPht}>
                                    
                                </View>
                                <View style={styles.cmDetHd}>
                                    <Ionicons name="caret-back" size={24} color={Colors.grayTwo} style={styles.cmIcon} />
                                    {/* <RemoteImage type="comment" uri={'https://images.pexels.com/photos/6129989/pexels-photo-6129989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} desiredWidth={width - 75} /> */}
                                    <Text style={styles.cmCaption}>Do you ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</Text>
                                    <View style={styles.cmFt}>
                                        <Text style={styles.cmHr}>5h</Text>
                                        <Pressable style={styles.cmRpBtn}>
                                            <Text style={styles.cmBtnTxt}>Reply</Text>
                                        </Pressable>
                                    </View>
                                </View>
                            </View>
                            <View style={[styles.cmHd, styles.cmHdFlip]}>
                                <View style={[styles.cmPht, styles.PhtFlip]}>
                                    
                                </View>
                                <View style={[styles.cmDetHd, styles.cmDetHdFlip]}>
                                    <Ionicons name="caret-forward" size={24} color={Colors.grayTwo} style={[styles.cmIcon, styles.cmIconFlip]} />
                                    {/* <RemoteImage type="comment" uri={'https://images.pexels.com/photos/6129989/pexels-photo-6129989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} desiredWidth={width - 114} /> */}
                                    {/* <Image source={require('../../assets/img/four.jpg')} resizeMode="contain" style={{width:'100%',height:200}} /> */}
                                    <Text style={styles.cmCaption}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</Text>
                                    <View style={styles.cmFt}>
                                        <Text style={styles.cmHr}>5h</Text>
                                        <Pressable style={styles.cmRpBtn}>
                                            <Text style={styles.cmBtnTxt}>Reply</Text>
                                        </Pressable>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <Pressable>
                            <Text style={{color:Colors.secondary}}>View more comments</Text>
                        </Pressable>
                    </View>
                    
                    <View>
                        <Text style={styles.moreProdTit}>You may also like</Text>
                        <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={styles.productHD} horizontal>
                            <FeedProductBody type="scroll" press={()=>navigation.navigate("SingleProduct")} />
                            <FeedProductBody type="scroll" press={()=>navigation.navigate("SingleProduct")} />
                            <FeedProductBody type="scroll" press={()=>navigation.navigate("SingleProduct")} />
                            <FeedProductBody type="scroll" press={()=>navigation.navigate("SingleProduct")} />
                            <TouchableOpacity style={styles.allProductsBtn}>
                                <Text style={styles.allProductsBtnText}>Visit Store</Text>
                                <Ionicons name="chevron-forward" size={18} color={Colors.black_600} />
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                    <View>
                        <Text style={styles.moreProdTit}>More Products from Seller</Text>
                        <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={styles.productHD} horizontal>
                            <FeedProductBody type="scroll" press={()=>navigation.navigate("SingleProduct")} />
                            <FeedProductBody type="scroll" press={()=>navigation.navigate("SingleProduct")} />
                            <FeedProductBody type="scroll" press={()=>navigation.navigate("SingleProduct")} />
                            <FeedProductBody type="scroll" press={()=>navigation.navigate("SingleProduct")} />
                            <TouchableOpacity style={styles.allProductsBtn}>
                                <Text style={styles.allProductsBtnText}>Visit Store</Text>
                                <Ionicons name="chevron-forward" size={18} color={Colors.black_600} />
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                    
                </ScrollView>
                <SafeAreaView>
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
                </SafeAreaView>
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
        boxSizing: 'border-box',
        marginBottom: 55
    },
    skuHd: {
        marginLeft: 15
    },
    sku: {
        fontSize: 13,
        color: Colors.grayEleven,
        fontWeight: '600'
    },
    pdPhotoHd: {
        width: '100%',
        height: 350,
        backgroundColor: Colors.grayEight,
        borderRadius: 16,
        marginTop: 5
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5
    },
    actThumbs: {
        flexDirection: 'row',
    },
    actTmb: {
        width: 33,
        height: 33,
        backgroundColor: Colors.grayEight,
        borderRadius: 12,
        marginRight: 10
    },
    activeTab: {
        borderColor: Colors.primary,
        borderWidth: 1
    },
    actBtns: {
        flexDirection: 'row',
    },
    actIcon: {
        marginLeft: 15
    },
    description: {
        marginTop: 25,
        marginBottom: 10
    },
    descTitle: {
        fontSize: 20,
        fontWeight: '600'
    },
    descText: {
        fontSize: 14.5,
        fontWeight: '300',
        lineHeight: 23,
        marginTop: 5
    },
    optHd: {
        marginTop: 15
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
        marginTop: 5
    },
    optBtn: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: Colors.graySix,
        marginRight: 15,
        borderRadius: 16
    },
    actBtn: {
        backgroundColor: Colors.primary,
    },
    optBtnText: {
        fontSize: 13,
        fontWeight: '600'
    },
    actBtnText: {
        color: Colors.white
    },
    addComHd: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 0.5,
        borderColor: Colors.primary,
        borderRadius: 50,
        padding: 3,
        marginVertical: 25
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
        width: 32,
        height: 32,
        backgroundColor: Colors.black,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
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
    
    bottomBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        borderTopColor: Colors.grayEight,
        borderTopWidth: 0.5
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
    
    // REVIEW / COMMENT SECTION
    allComments:{
        marginBottom: 25
    },
    cmHd: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        width: width - 30,
        position: 'relative'
    },
    cmHdFlip: {
        flexDirection: 'row-reverse',
        justifyContent: 'flex-start'
    },
    cmPht: {
        width: 30,
        height: 30,
        backgroundColor: Colors.grayEight,
        borderRadius: 50
    },
    PhtFlip: {
        width: 27,
        height: 27,
    },
    cmDetHd: {
        backgroundColor: Colors.grayTwo,
        marginLeft: 10,
        paddingTop: 3,
        paddingHorizontal: 3,
        position: 'relative',
        borderRadius: 16,
        flexShrink: 1,
        zIndex: 1,
        width: width - 70
    },
    replyLine: {
        position: 'absolute',
        width: 2,
        height: '91%',
        top: 30,
        right: - 24.5,
        backgroundColor: Colors.graySeven
    },
    cmDetHdFlip: {
        marginRight: 10,
        width: width - 108
    },
    cmIcon: {
        position: 'absolute',
        top: 3,
        left: -16,
        zIndex: 0
    },
    cmIconFlip: {
        left: width - 116,
    },
    cmCaption: {
        lineHeight: 20,
        fontSize: 13.5,
        color: Colors.black_800,
        marginHorizontal: 10,
        marginTop: 6,
    },
    cmPhoto: {
        // borderRadius
    },
    cmFt: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginTop: 6,
        marginBottom: 10
    },
    cmHr: {
        fontSize: 11,
        color: Colors.black_500
    },
    cmRpBtn: {
        
    },
    cmBtnTxt: {
        fontSize: 11,
        color: Colors.black_500
    },
    moreProdTit: {
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 10
    }
})

export default SingleProduct