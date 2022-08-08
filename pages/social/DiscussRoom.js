import { View, Text, SafeAreaView, Platform, Image, StyleSheet, FlatList, ScrollView, TouchableOpacity, TextInput, Pressable, Dimensions, KeyboardAvoidingView } from 'react-native';
import React, {useRef} from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '../../components/Colors';
import Button from '../../components/Button';
import { StatusBar } from 'expo-status-bar';
import DiscussTag from '../../components/DiscussTag';

const RemoteImage = ({ uri, desiredWidth, left }) => {
    const [desiredHeight, setDesiredHeight] = React.useState(0)

    Image.getSize(uri, (width, height) => {
        setDesiredHeight(desiredWidth / width * height)
    })

    return (
        <Image
            source={{ uri }}
            // source={ uri }
            style={{
                width: desiredWidth,
                height: desiredHeight,
                resizeMode: 'cover',
                borderRadius: 16,
                // borderBottomLeftRadius: left ? 0 : 16,
                // borderBottomRightRadius: left ? 16 : 0,
            }}
        />
    )
}

const { width } = Dimensions.get('window');

const DiscussRoom = ({navigation}) => {
    const scrollViewRef = useRef();
    
    
    
    return (
        <View style={styles.container}>
            <View style={{width: '100%', height: 80, backgroundColor: Colors.graySix,position:'absolute'}}></View>
            <SafeAreaView style={{flex:1}}>
                <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'} style={{flex:1}}>
                    <StatusBar style="auto" />
                    <View style={{ backgroundColor: Colors.graySix, height: Platform.OS === 'android' ? 50 : 0 }} />
                    <View style={styles.header_cont}>
                        <View style={styles.hd_head_options}>
                            <Ionicons onPress={()=>navigation.goBack()} name="chevron-back" size={24} color={Colors.black} />
                        </View>
                        <Pressable onPress={()=>navigation.navigate('DiscussDetails')} style={styles.people}>
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
                        </Pressable>
                        <View style={{flexDirection:'row'}}>
                            <Ionicons name="ellipsis-horizontal-sharp" size={24} color={Colors.black} />
                        </View>
                    </View>
                    
                    <View style={styles.main}>
                        <DiscussTag type="product" />
                        
                        <ScrollView ref={scrollViewRef} onLayout={() => scrollViewRef.current.scrollToEnd({ animated: true })} onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })} showsVerticalScrollIndicator={false} style={styles.chatBody}>
                            <View style={styles.otherMes}>
                                <View style={styles.mesPhoHd}>
                                    <View style={styles.mesPhoto}>
                                        <Image source={require('../../assets/img/one.jpg')} style={{width:28,height:28,resizeMode:'cover'}} />
                                    </View>
                                    <Ionicons name="ios-chatbubble" size={30} color={Colors.grayNine} style={styles.mesPhoIcon} />
                                </View>
                                <View style={styles.mesBody}>
                                    <Text style={styles.mesTime}>Jane 2:00 pm</Text>
                                    <View style={styles.mesContent}>
                                        <Text style={styles.mesText}>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={[styles.otherMes, styles.mineMes]}>
                                <View style={[styles.mesPhoHd, styles.mesPhoHdOut]}>
                                    <View style={styles.mesPhoto}></View>
                                    <Ionicons name="ios-chatbubble" size={30} color={Colors.grayNine} style={styles.mesPhoIcon} />
                                </View>
                                <View style={styles.mesBody}>
                                    <Text style={[styles.mesTime, styles.mesTimeOut]}>Jane 2:00 pm</Text>
                                    <View style={[styles.mesContent, styles.mesContentmine]}>
                                        <Text style={[styles.mesText, styles.mesTextmine]}>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod.</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.otherMes}>
                                <View style={styles.mesPhoHd}>
                                    <View style={styles.mesPhoto}>
                                        <Image source={require('../../assets/img/one.jpg')} style={{width:28,height:28,resizeMode:'cover'}} />
                                    </View>
                                    <Ionicons name="ios-chatbubble" size={30} color={Colors.grayNine} style={styles.mesPhoIcon} />
                                </View>
                                <View style={styles.mesBody}>
                                    <Text style={styles.mesTime}>Jane 2:00 pm</Text>
                                    <View style={styles.mesContent}>
                                        <Text style={styles.mesText}>Yeah! I think this is better</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.otherMes}>
                                <View style={styles.mesPhoHd}>
                                    <View style={styles.mesPhoto}>
                                        <Image source={require('../../assets/img/one.jpg')} style={{width:28,height:28,resizeMode:'cover'}} />
                                    </View>
                                    <Ionicons name="ios-chatbubble" size={30} color={Colors.grayNine} style={styles.mesPhoIcon} />
                                </View>
                                <View style={styles.mesBody}>
                                    <Text style={styles.mesTime}>Jane 2:00 pm</Text>
                                    <View style={styles.mesContent}>
                                        {/* <RemoteImage uri={'file:///Users/philipenaohwo/Lenxes_socialcommerce/Site/lenxes_app/assets/img/fourteen.jpg'} desiredWidth={width - 120} left={true} /> */}
                                        <Text style={styles.mesText}>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod.</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={[styles.otherMes, styles.mineMes]}>
                                <View style={[styles.mesPhoHd, styles.mesPhoHdOut]}>
                                    <View style={styles.mesPhoto}></View>
                                    <Ionicons name="ios-chatbubble" size={30} color={Colors.grayNine} style={styles.mesPhoIcon} />
                                </View>
                                <View style={styles.mesBody}>
                                    <Text style={[styles.mesTime, styles.mesTimeOut]}>Jane 2:00 pm</Text>
                                    <View style={[styles.mesContent, styles.mesContentmine]}>
                                        {/* <RemoteImage uri={'file:///Users/philipenaohwo/Lenxes_socialcommerce/Site/lenxes_app/assets/img/eight.jpg'} desiredWidth={width - 120} left={false} /> */}
                                        <Text style={[styles.mesText, styles.mesTextmine]}>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod.</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={[styles.otherMes, styles.mineMes]}>
                                <View style={[styles.mesPhoHd, styles.mesPhoHdOut]}>
                                    <View style={styles.mesPhoto}></View>
                                    <Ionicons name="ios-chatbubble" size={30} color={Colors.grayNine} style={styles.mesPhoIcon} />
                                </View>
                                <View style={styles.mesBody}>
                                    <Text style={[styles.mesTime, styles.mesTimeOut]}>Jane 2:00 pm</Text>
                                    <View style={[styles.mesContent, styles.mesContentmine]}>
                                        {/* <RemoteImage uri={'file:///Users/philipenaohwo/Lenxes_socialcommerce/Site/lenxes_app/assets/img/eight.jpg'} desiredWidth={width - 120} left={false} /> */}
                                        <Text style={[styles.mesText, styles.mesTextmine]}>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod. Consec tetur adipisicing elit, sed do eiusmod.</Text>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                        
                        <View style={styles.inputCont}>
                            <TouchableOpacity style={styles.addComAddImg}>
                                <Ionicons name="camera" size={18} color={Colors.black_500} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.addComAddImg}>
                                {/* style={styles.addComAddImg} */}
                                <Ionicons name="image" size={18} color={Colors.black_500} />
                            </TouchableOpacity>
                            <View style={styles.addComHd}>
                                <TextInput multiline={true} style={styles.addComInput} placeholder='Type a comment...' />
                                <TouchableOpacity style={styles.addComBtn}>
                                    {/* style={styles.addComBtn} */}
                                    <Ionicons name="arrow-up" size={18} color={Colors.white} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        
                    </View>
                </KeyboardAvoidingView>
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
        position: 'relative',
        backgroundColor: Colors.graySix
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
        boxSizing: 'border-box',
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
    
    chatBody: {
        // backgroundColor: '#f00',
        paddingVertical: 10,
    },
    
    
    inputCont: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        paddingVertical: 3
    },
    addComHd: {
        width: width - 115,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        borderWidth: 1,
        borderColor: Colors.black_075,
        borderRadius: 30,
        padding: 3,
    },
    addComAddImg: {
        minWidth: 36,
        minHeight: 36,
        backgroundColor: Colors.black_050,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
    },
    addComInput: {
        fontSize: 14.5,
        flexGrow: 1,
        marginHorizontal: 10,
        maxHeight: 160
    },
    addComBtn: {
        minWidth: 33,
        minHeight: 33,
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
    
    otherMes: {
        // maxWidth: width - 110,
        flexDirection: 'row',
        marginBottom: 15
    },
    mesPhoHd: {
        position: 'relative',
        justifyContent: 'flex-end'
    },
    mesPhoto: {
        width: 28,
        height: 28,
        backgroundColor: Colors.grayNine,
        borderRadius: 50,
        position: 'absolute',
        zIndex: 1,
        bottom: 2,
        left: 1,
        overflow: 'hidden'
    },
    mesPhoIcon: {
        // position: 'absolute',
        // bottom: 0,
    },
    mesBody: {
        marginLeft: 2
    },
    mesTime: {
        fontSize: 11,
        fontWeight: '600',
        color: Colors.grayTen,
        marginLeft: 10,
        marginBottom: 2
    },
    mesContent: {
        backgroundColor: Colors.grayFive,
        borderRadius: 16,
        borderBottomLeftRadius: 0,
        maxWidth: width - 120,
    },
    mesText: {
        marginHorizontal: 10,
        marginVertical: 8,
        lineHeight: 20,
        color: Colors.black_800
    },
    
    mineMes: {
        alignSelf: 'flex-end',
    },
    mesPhoHdOut: {
        display: 'none'
    },
    mesTimeOut: {
        display: 'none'
    },
    mesContentmine: {
        borderRadius: 16,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 0,
        backgroundColor: Colors.primary
    },
    mesTextmine: {
        color: Colors.white
    }
})

export default DiscussRoom