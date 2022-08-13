import React from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, Pressable, StyleSheet, Platform } from 'react-native';
import Colors from '../../components/Colors';
import { Ionicons } from '@expo/vector-icons';
import Button from '../../components/Button';

const Invite = ({navigation}) => {
    return (
        <View style={styles.container}>
            <SafeAreaView style={{flex:1}}>
                <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'} style={{flex:1}}>
                    <View style={{ backgroundColor: '#fff', height: Platform.OS === 'android' ? 50 : 0 }} />
                    <View style={styles.header_cont}>
                        <View style={styles.hd_head_options}>
                            <Ionicons onPress={()=>navigation.goBack()} name="chevron-back" size={24} color={Colors.black} />
                        </View>
                        <View style={styles.pageTitleHD}>
                            <Text style={styles.pageTitle}>Invite</Text>
                        </View>
                        <View>
                            <Button
                                text="Create"
                                press={()=>navigation.navigate("EditProfile")}
                                status={false}
                                size="small"
                                bac={Colors.primary}
                                colour={Colors.white}
                            />
                        </View>
                    </View>
                    
                    <View style={styles.main}>
                        
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
    },
    hd_head_options:{
        flexDirection:'row',
        alignItems: 'center',
    },
    pageTitleHD: {
        justifyContent:'center',
        alignItems:'center',
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
        justifyContent: 'space-between'
    },
})

export default Invite