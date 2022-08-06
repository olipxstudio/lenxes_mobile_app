import { View, Text, SafeAreaView, Platform, Image, StyleSheet, FlatList } from 'react-native';
import React, {useState} from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '../../components/Colors';
import DiscussClip from '../../components/DiscussClip';
import Button from '../../components/Button';

const Niche = ({navigation}) => {
    const [joinedNiches, setJoinedNiches] = useState([{ 'name': 'good'}]);
    
    const data = [
        { 'name': 'good'},
        {
            'name': 'better'
        },
        {
            'name': 'best'
        },
        {
            'name': 'very'
        },
        {
            'name': 'well'
        },
        {
            'name': 'done'
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
                        <Text style={styles.pageTitle}>Niches</Text>
                    </View>
                    <View>
                        <Ionicons name="ellipsis-horizontal-sharp" size={24} color={Colors.black} />
                    </View>
                </View>
                
                <View style={styles.main}>
                    <FlatList
                        data={data}
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
                            {
                                joinedNiches == '' ?
                                <View style={styles.emptyMod}>
                                    <Image source={require('../../assets/img/empty_niche.png')} style={{width: 150,height:118.1}} />
                                    <Text style={styles.empModTit}>No Previous Linking Word</Text>
                                    <Text style={styles.empModText}>Niches you join will show here with their Title and Creator's Photo.</Text>
                                </View>
                                :
                                <View style={styles.joinedNiches}>
                                    <View style={styles.DiscussClip}>
                                        <DiscussClip text="Discover" press={()=>navigation.navigate('NicheFeed')} img="" size="big" num="12" />
                                    </View>
                                    <View style={styles.DiscussClip}>
                                        <DiscussClip text="Discover" press={()=>alert('Okay')} img="" size="big" num="24" />
                                    </View>
                                    <View style={styles.DiscussClip}>
                                        <DiscussClip text="Discover" press={()=>alert('Okay')} img="" size="big" num="6" />
                                    </View>
                                    <View style={styles.DiscussClip}>
                                        <DiscussClip text="Discover" press={()=>alert('Okay')} img="" size="big" num="33" />
                                    </View>
                                    <View style={styles.DiscussClip}>
                                        <DiscussClip text="Discover" press={()=>alert('Okay')} img="" size="big" num="8" />
                                    </View>
                                    <View style={styles.DiscussClip}>
                                        <DiscussClip text="Discover" press={()=>alert('Okay')} img="" size="big" num="17" />
                                    </View>
                                    <View style={styles.DiscussClip}>
                                        <DiscussClip text="Discover" press={()=>alert('Okay')} img="" size="big" num="4" />
                                    </View>
                                    <View style={styles.DiscussClip}>
                                        <DiscussClip text="Discover" press={()=>alert('Okay')} img="" size="big" num="28" />
                                    </View>
                                    <View style={styles.DiscussClip}>
                                        <DiscussClip text="Discover" press={()=>alert('Okay')} img="" size="big" num="14" />
                                    </View>
                                </View>
                            }
                            {
                                data != '' &&
                                <View>
                                    <Text style={styles.nicheExpContTit}>Niches to Explore</Text>
                                </View>
                            }
                            </>
                        }
                        keyExtractor={(item) => item.name}
                        renderItem={({ item, index }) => {
                            return (
                                <View style={styles.nicheExp} key={index}>
                                    <View style={styles.nicheExpPhoto}></View>
                                    <View style={styles.nicheExpDet}>
                                        <Text style={styles.nicheExpTit}>Tech Discovery</Text>
                                        <Text style={styles.nicheExpSub} numberOfLines={2}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua.</Text>
                                        <Text style={styles.nicheExpFollow}>970k followers</Text>
                                    </View>
                                    <Button
                                        text="follow"
                                        press={()=>navigation.navigate("---")}
                                        status={false}
                                        size="small"
                                        bac={Colors.primary}
                                        colour={Colors.white}
                                    />
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
        width:150,
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
        boxSizing: 'border-box'
    },
    joinedNiches: {
        flexDirection:'row',
        flexWrap:'wrap',
    },
    DiscussClip: {
        marginBottom: 15,
        // marginRight: 10
    },
    nicheExpContTit: {
        fontSize: 18,
        fontWeight: '700',
        marginVertical: 15,
    },
    nicheExp: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    nicheExpPhoto: {
        width: 55,
        height: 55,
        backgroundColor: Colors.graySeven,
        borderRadius: 50,
        marginRight: 10
    },
    nicheExpDet: {
        flexShrink: 1,
        flexGrow: 1
    },
    nicheExpTit: {
        fontWeight: '700'
    },
    nicheExpSub: {
        color: Colors.grayTwelve,
        lineHeight: 17,
        fontSize: 13
    },
    nicheExpFollow: {
        fontSize: 11,
        color: Colors.grayTen,
        marginTop: 2
    },
    emptyMod: {
        alignItems:'center',
        marginVertical:15
    },
    empModTit: {
        fontWeight: '700',
        marginTop: 15
    },
    empModText: {
        lineHeight: 20,
        marginTop: 10,
        textAlign: 'center',
        color: Colors.black_600,
        paddingHorizontal: 20
    },
})

export default Niche;