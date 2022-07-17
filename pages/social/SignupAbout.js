import React, { useState, useEffect, useRef } from 'react';
import { View, Text, SafeAreaView, ScrollView, Image, StyleSheet, Pressable, ActivityIndicator } from 'react-native';
import AuthButton from '../../components/AuthButton';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import Colors from '../../components/Colors';
import { FontAwesome } from '@expo/vector-icons';

const SignupAbout = ({ navigation }) => {
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    
    const [fontsLoaded] = useFonts({
        millik: require('../../assets/fonts/Millik.otf')
    });
    
    if(!fontsLoaded){
        return null;
    }
    
    return (
        <LinearGradient
            colors={['#EFE9D9', '#ffffff']}
            style={{flex:1}}
        >
            <SafeAreaView>
                <ScrollView>
                    <View style={{ height: Platform.OS === 'android' ? 50 : 0 }} />
                    <View style={styles.container}>
                        <Image source={require('../../assets/logo/lenxes_logo_bg_millik_black.png')} style={{width:110,height:26.6}} />
                        <View style={styles.t_b_space}>
                            <Text style={[styles.title, {fontFamily:'millik'}]}>The</Text>
                            <Text style={[styles.title, {fontFamily:'millik',color:Colors.primary}]}>TOWN SQUARE</Text>
                            <Text style={[styles.title, {fontFamily:'millik'}]}>of the Internet</Text>
                            <Text style={styles.subtitle}>This is a Social media platform that users can post photos and videos, follow and be followed, like, share, message etc. it also has attached the functionality of Ecommerce site for sellers (Vendors, Merchant) so they can create a store front and upload products, visitors of their profile can easily visit their store and purchase from them.  and more...</Text>
                            
                            <Text style={[styles.title, {fontFamily:'millik',marginTop:40}]}>Experience is everything</Text>
                            
                            <Text style={styles.subtitle}>This is a Social media platform that users can post photos and videos, follow and be followed, like, share, message etc. it also has attached the functionality of Ecommerce site for sellers (Vendors, Merchant) so they can create a store front and upload products, visitors of their profile can easily visit their store and purchase from them.  and more...</Text>
                            
                        </View>
                        <View>
                            <View style={{flexDirection:'row',justifyContent:'center'}}>
                                <ActivityIndicator size="small" color={Colors.grayTen} />
                                <Text style={{marginLeft:7,color:Colors.grayTen,fontSize:12}}>we are getting your profile ready</Text>
                            </View>
                            <AuthButton text="Proceed" press={() => navigation.navigate('SignupProfileDetails')} />
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    );
}


const styles = StyleSheet.create({
    container:{
        width: '100%',
        padding: 30,
        boxSizing: 'border-box'
    },
    t_b_space: {
        marginVertical: 50
    },
    title: {
        fontSize: 36,
        marginBottom:3
    },
    subtitle: {
        marginTop:10
    },
})


export default SignupAbout;