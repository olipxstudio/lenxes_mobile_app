import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Platform, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '../../components/Colors';

const {width} = Dimensions.get('window');

const PostsFeed = ({navigation}) => {
    return (
        <View style={styles.container}>
            <SafeAreaView style={{flex:1}}>
                <View style={{ backgroundColor: '#fff', height: Platform.OS === 'android' ? 50 : 0 }} />
                <View style={styles.header_cont}>
                    <View style={styles.hd_head_options}>
                        <Ionicons onPress={()=>navigation.goBack()} name="chevron-back" size={24} color={Colors.black} />
                    </View>
                    {/* <Ionicons name="ellipsis-horizontal-sharp" size={24} color={Colors.black} /> */}
                </View>
                
                <View style={styles.main}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.section}>
                            <View style={styles.secHead}>
                                <View style={styles.indextity}>
                                    <View style={styles.thumb}></View>
                                    <View style={styles.indextity}>
                                        <View style={styles.nameHD}>
                                            <Text style={styles.name}>Olipx Studio</Text>
                                            <Ionicons name="checkmark-circle" size={13} color={Colors.black_600} />
                                        </View>
                                        <View style={styles.purposeHD}>
                                            <Text style={styles.purpose}>Hiring</Text>
                                            <Text style={styles.position}>- Accountant</Text>
                                        </View>
                                    </View>
                                </View>
                                <Ionicons name="ellipsis-horizontal-sharp" size={18} color={Colors.black} />
                            </View>
                            <ScrollView style={styles.body} showsHorizontalScrollIndicator={false} horizontal>
                                <TouchableOpacity onPress={()=>navigation.navigate("Post")} style={styles.vidHD}>
                                    {/* <Ionicons name="play" size={13} color={Colors.primary} /> */}
                                    {/* <Image /> */}
                                </TouchableOpacity>
                                <View style={styles.vidHD}>
                                    {/* <Ionicons name="play" size={13} color={Colors.primary} /> */}
                                    {/* <Image /> */}
                                </View>
                                <View style={styles.vidHD}>
                                    {/* <Ionicons name="play" size={13} color={Colors.primary} /> */}
                                    {/* <Image /> */}
                                </View>
                                <View style={styles.vidHD}>
                                    {/* <Ionicons name="play" size={13} color={Colors.primary} /> */}
                                    {/* <Image /> */}
                                </View>
                            </ScrollView>
                            <View style={styles.dividerHolder}>
                                <View style={styles.divider}></View>
                            </View>
                        </View>
                        <View style={styles.section}>
                            <View style={styles.secHead}>
                                <View style={styles.indextity}>
                                    <View style={styles.thumb}></View>
                                    <View style={styles.indextity}>
                                        <View style={styles.nameHD}>
                                            <Text style={styles.name}>Olipx Studio</Text>
                                            <Ionicons name="checkmark-circle" size={13} color={Colors.black_600} />
                                        </View>
                                    </View>
                                </View>
                                <Ionicons name="ellipsis-horizontal-sharp" size={18} color={Colors.black} />
                            </View>
                            <ScrollView style={styles.body} showsHorizontalScrollIndicator={false} horizontal>
                                <View style={styles.vidHD}>
                                    <Ionicons style={styles.symbol} name="play" size={13} color={Colors.primary} />
                                    {/* <Image /> */}
                                </View>
                                <View style={styles.vidHD}>
                                    {/* <Ionicons name="play" size={13} color={Colors.primary} /> */}
                                    {/* <Image /> */}
                                </View>
                                <View style={styles.vidHD}>
                                    {/* <Ionicons name="play" size={13} color={Colors.primary} /> */}
                                    {/* <Image /> */}
                                </View>
                                <View style={styles.vidHD}>
                                    {/* <Ionicons name="play" size={13} color={Colors.primary} /> */}
                                    {/* <Image /> */}
                                </View>
                            </ScrollView>
                            <View style={styles.dividerHolder}>
                                <View style={styles.divider}></View>
                            </View>
                        </View>
                        <View style={styles.section}>
                            <View style={styles.secHead}>
                                <View style={styles.indextity}>
                                    <View style={styles.thumb}></View>
                                    <View style={styles.indextity}>
                                        <View style={styles.nameHD}>
                                            <Text style={styles.name}>Olipx Studio</Text>
                                            <Ionicons name="checkmark-circle" size={13} color={Colors.black_600} />
                                        </View>
                                        <View style={styles.purposeHD}>
                                            <Text style={styles.position}>Merchant</Text>
                                        </View>
                                    </View>
                                </View>
                                <Ionicons name="ellipsis-horizontal-sharp" size={18} color={Colors.black} />
                            </View>
                            <ScrollView style={styles.body} showsHorizontalScrollIndicator={false} horizontal>
                                <View style={styles.vidHD}>
                                    {/* <Ionicons name="play" size={13} color={Colors.primary} /> */}
                                    {/* <Image /> */}
                                </View>
                                <View style={styles.vidHD}>
                                    {/* <Ionicons name="play" size={13} color={Colors.primary} /> */}
                                    {/* <Image /> */}
                                </View>
                                <View style={styles.vidHD}>
                                    {/* <Ionicons name="play" size={13} color={Colors.primary} /> */}
                                    {/* <Image /> */}
                                </View>
                                <View style={styles.vidHD}>
                                    {/* <Ionicons name="play" size={13} color={Colors.primary} /> */}
                                    {/* <Image /> */}
                                </View>
                            </ScrollView>
                            <View style={styles.dividerHolder}>
                                <View style={styles.divider}></View>
                            </View>
                        </View>
                        <View style={styles.section}>
                            <View style={styles.secHead}>
                                <View style={styles.indextity}>
                                    <View style={styles.thumb}></View>
                                    <View style={styles.indextity}>
                                        <View style={styles.nameHD}>
                                            <Text style={styles.name}>Olipx Studio</Text>
                                            <Ionicons name="checkmark-circle" size={13} color={Colors.black_600} />
                                        </View>
                                        <View style={styles.purposeHD}>
                                            <Text style={styles.purpose}>Hiring</Text>
                                            <Text style={styles.position}>- Accountant</Text>
                                        </View>
                                    </View>
                                </View>
                                <Ionicons name="ellipsis-horizontal-sharp" size={18} color={Colors.black} />
                            </View>
                            <ScrollView style={styles.body} showsHorizontalScrollIndicator={false} horizontal>
                                <View style={styles.vidHD}>
                                    {/* <Ionicons name="play" size={13} color={Colors.primary} /> */}
                                    {/* <Image /> */}
                                </View>
                                <View style={styles.vidHD}>
                                    {/* <Ionicons name="play" size={13} color={Colors.primary} /> */}
                                    {/* <Image /> */}
                                </View>
                                <View style={styles.vidHD}>
                                    {/* <Ionicons name="play" size={13} color={Colors.primary} /> */}
                                    {/* <Image /> */}
                                </View>
                                <View style={styles.vidHD}>
                                    {/* <Ionicons name="play" size={13} color={Colors.primary} /> */}
                                    {/* <Image /> */}
                                </View>
                            </ScrollView>
                            <View style={styles.dividerHolder}>
                                <View style={styles.divider}></View>
                            </View>
                        </View>
                    </ScrollView>
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
    main:{
        flex: 1,
        width: '100%',
        boxSizing: 'border-box'
    },
    
    // SECTION HEAD
    section: {
        marginBottom: 15
    },
    secHead: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 30
    },
    thumb: {
        width: 30,
        height: 30,
        backgroundColor: Colors.grayEight,
        borderRadius: 100,
        marginRight: 8
    },
    indextity: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    nameHD: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    name: {
        fontWeight: '600',
        marginRight: 3,
    },
    purposeHD: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10
    },
    purpose: {
        fontSize: 11,
        color: Colors.secondary,
        marginRight: 3
    },
    position: {
        fontSize: 11,
        color: Colors.grayTwelve
    },
    // SECTION BODY
    body: {
        marginVertical: 15,
        paddingHorizontal: 15
    },
    vidHD: {
        width: width / 3 - 20,
        height: 160,
        backgroundColor: Colors.grayEight,
        borderRadius: 16,
        marginRight: 7,
        position: 'relative'
    },
    symbol: {
        position: 'absolute',
        right: 5,
        top: 5
    },
    dividerHolder: {
        alignItems: 'center'
    },
    divider: {
        width: width - 60,
        height: 1,
        backgroundColor: Colors.grayEight,
    }
})

export default PostsFeed