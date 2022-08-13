import React from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, Pressable, StyleSheet } from 'react-native';
import Colors from '../../components/Colors';
import { Ionicons } from '@expo/vector-icons';
import Button from '../../components/Button';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Settings = ({navigation}) => {
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
                            <Text style={styles.pageTitle}>Settings</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <MaterialCommunityIcons name="account-edit-outline" size={24} color={Colors.black} />
                        </View>
                    </View>
                    
                    <View style={styles.main}>
                        <View>
                            <Pressable
                                onPress={()=>navigation.navigate("CreateBusiness")}
                                style={styles.opt_hd}
                            >
                                <Ionicons name="ios-business-outline" size={20} color="#000" />
                                <Text style={styles.opt_txt}>Create a Business</Text>
                            </Pressable>
                            <Pressable
                                onPress={()=>navigation.navigate("Invite")}
                                style={styles.opt_hd}
                            >
                                <Ionicons name="ios-mail-outline" size={20} color="#000" />
                                <Text style={styles.opt_txt}>Invite and follow friends</Text>
                            </Pressable>
                            <Pressable
                                style={styles.opt_hd}
                            >
                                <Ionicons name="ios-information-circle-outline" size={20} color="#000" />
                                <Text style={styles.opt_txt}>About</Text>
                            </Pressable>
                            <Pressable
                                style={styles.opt_hd}
                            >
                                <Ionicons name="ios-help-circle-outline" size={20} color="#000" />
                                <Text style={styles.opt_txt}>Help</Text>
                            </Pressable>
                            <Pressable
                                style={styles.opt_hd}
                            >
                                <Ionicons name="ios-build-outline" size={20} color="#000" />
                                <Text style={styles.opt_txt}>Manage account</Text>
                            </Pressable>
                            <Pressable
                                style={styles.opt_hd}
                            >
                                <Ionicons name="ios-lock-closed-outline" size={20} color="#000" />
                                <Text style={styles.opt_txt}>Security and Login</Text>
                            </Pressable>
                        </View>
                        <View>
                            <Pressable
                                style={[styles.opt_hd, {borderBottomWidth:0}]}
                            >
                                <Ionicons name="ios-power-outline" size={20} color={Colors.secondary} />
                                <Text style={[styles.opt_txt, {color: Colors.secondary}]}>Logout of account</Text>
                            </Pressable>
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
    opt_hd: {
        width: '100%',
        backgroundColor: Colors.post_border,
        paddingVertical: 15,
        borderRadius: 12,
        marginBottom: 8,
        borderBottomColor: Colors.graySeven,
        borderBottomWidth: 0.5,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 8
    },
    opt_txt: {
        fontSize: 15,
        fontWeight: '300',
        marginLeft: 25
    },
})

export default Settings