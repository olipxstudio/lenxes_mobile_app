import React, { useState, useEffect, useRef } from 'react';
import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import AuthButton from '../../components/AuthButton';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import { FontAwesome } from '@expo/vector-icons';
import * as Contacts from 'expo-contacts';
import FollowersListCard from '../../components/FollowersListCard';
import Colors from '../../components/Colors';

const { width, height } = Dimensions.get("window")

const SignupFollow = ({ navigation }) => {
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [contacts, setContacts] = useState('');
    const [loading, setloading] = useState(true);
    
    const [fontsLoaded] = useFonts({
        millik: require('../../assets/fonts/Millik.otf')
    });
    
    useEffect(() => {
        setTimeout(()=>{
            (async () => {
                const { status } = await Contacts.requestPermissionsAsync();
                if (status === 'granted') {
                    const { data } = await Contacts.getContactsAsync({
                        fields: [Contacts.Fields.Emails, Contacts.Fields.PhoneNumbers],
                    });
                    if (data.length > 0) {
                        // const contact = data[0];
                        // console.log(data);
                        setContacts(data)
                        setloading(false)
                    }
                }
            })();
        },500)
    }, []);
    //   phoneNumbers
    
    
    if(!fontsLoaded){
        return null;
    }
    
    return (
        <LinearGradient
            colors={['#EFE9D9', '#ffffff']}
            style={{flex:1}}
        >
            <SafeAreaView>
                <View style={styles.container}>
                    <View>
                        <View style={{ height: Platform.OS === 'android' ? 50 : 0 }} />
                        <View style={{flexDirection:'row',alignItems:'flex-start',justifyContent:'space-between'}}>
                            <Image source={require('../../assets/logo/lenxes_logo_bg_millik_black.png')} style={{width:110,height:26.6}} />
                            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('SignupAbout')}>
                                <Text style={styles.btn_text}>Finish</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.t_b_space}>
                            <Text style={[styles.title, {fontFamily:'millik'}]}>Follow People</Text>
                            <Text style={styles.subtitle}>Tese are some of our top accounts</Text>
                        </View>
                    </View>
                    <FlatList
                        data={contacts}
                        showsVerticalScrollIndicator={false}
                        // onRefresh={() => refreshAll(user_id)}
                        refreshing={loading}
                        removeClippedSubviews={true}
                        initialNumToRender={20}
                        // onEndReached={() => loadMoreFeed(user_id)}
                        // onEndReachedThreshold={7}
                        contentContainerStyle={{ paddingVertical: 20 }}
                        keyExtractor={(item, index) => `${index}`}
                        renderItem={({ item, index }) => {
                            if(item.phoneNumbers && index<30){
                                return (
                                    <FollowersListCard press={index} my_id={index} key={index} name={item.name} handle={false} size="sm" img="" following={false} />
                                )
                            }
                        }}
                        ListFooterComponent={
                            <View style={styles.bottom_pad}></View>
                        }
                    />
                </View>
            </SafeAreaView>
        </LinearGradient>
    );
}


const styles = StyleSheet.create({
    container:{
        width: '100%',
        padding: 30,
        boxSizing: 'border-box',
    },
    t_b_space: {
        marginTop: 50,
        marginBottom: 40
    },
    title: {
        fontSize: 36,
        paddingRight: 50
    },
    subtitle: {
        marginTop:10
    },
    btn: {
        width: 100,
        height: 34,
        backgroundColor: '#000',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn_text: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '800',
    },
    bottom_pad: {
        paddingVertical: 250
    }
})


export default SignupFollow;