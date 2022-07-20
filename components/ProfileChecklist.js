import React, {useState} from 'react';
import { Text, StyleSheet, View, Pressable, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from './Colors';

const ProfileChecklist = ({ text }) => {
    const [one, setOne] = useState(true);
    const [two, setTwo] = useState(false);
    const [three, setThree] = useState(false);
    
    return (
        <ScrollView>
            <Text style={styles.ckTitle}>Follow this Checklist to get your profile ready for visitors, Let's Go</Text>
            <View style={styles.ckBd}>
                {
                    one ?
                    <Ionicons onPress={()=>alert('good')} name="checkmark-circle-outline" size={26} color={Colors.green} />
                    :
                    <Ionicons onPress={()=>alert('good')} name="ellipsis-horizontal-circle-outline" size={26} color={Colors.black} />
                }
                <View style={styles.ckBdDet}>
                    <Text style={[styles.ckBdTit, one && styles.strike]}>Sign up</Text>
                    <Text style={[styles.ckBdSub, {color: Colors.green}]}>Completed</Text>
                </View>
            </View>
            <View style={styles.ckBd}>
                {
                    two ?
                    <Ionicons onPress={()=>alert('good')} name="checkmark-circle-outline" size={26} color={Colors.green} />
                    :
                    <Ionicons onPress={()=>alert('good')} name="ellipsis-horizontal-circle-outline" size={26} color={Colors.black_800} />
                }
                <Pressable style={styles.ckBdDet}>
                    <Text style={[styles.ckBdTit, two && styles.strike]}>Profile Details</Text>
                    <Text style={styles.ckBdSub}>Enter a profile photo and describe yourself so people can recognise and follow you.</Text>
                    {
                        two ?
                        <Text style={[styles.ckBdSub, {color: Colors.green}]}>Completed</Text>
                        :
                        <View style={styles.ckBdLink}>
                            <Text style={styles.ckBdLinkText}>Enter profile details</Text>
                            <Ionicons name="chevron-forward" size={16} color={Colors.secondary} />
                        </View>
                    }
                </Pressable>
            </View>
            <View style={styles.ckBd}>
                {
                    three ?
                    <Ionicons onPress={()=>alert('good')} name="checkmark-circle-outline" size={26} color={Colors.green} />
                    :
                    <Ionicons onPress={()=>alert('good')} name="ellipsis-horizontal-circle-outline" size={26} color={Colors.black_800} />
                }
                <Pressable style={styles.ckBdDet}>
                    <Text style={[styles.ckBdTit, three && styles.strike]}>Share your first post</Text>
                    <Text style={styles.ckBdSub}>It’s easy and quick, you could share a photo, video or text.</Text>
                    {
                        three ?
                        <Text style={[styles.ckBdSub, {color: Colors.green}]}>Completed</Text>
                        :
                        <View style={styles.ckBdLink}>
                            <Text style={styles.ckBdLinkText}>Create Post - make an impression</Text>
                            <Ionicons name="chevron-forward" size={16} color={Colors.secondary} />
                        </View>
                    }
                </Pressable>
            </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    ckTitle: {
        fontSize: 20,
        fontWeight: '700',
        lineHeight: 27,
        paddingRight: 140,
        marginVertical: 30,
        marginTop: 20
    },
    ckBd: {
        width: '100%',
        flexDirection: 'row',
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: Colors.black_050,
        paddingBottom: 20
    },
    ckBdDet: {
        marginTop: 2.5,
        marginLeft: 20,
        flexShrink: 1,
    },
    ckBdTit: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 5,
        color: Colors.black_800,
    },
    strike: {
        color: Colors.black_500,
        textDecorationColor: Colors.black_500,
        textDecorationLine: 'line-through'
    },
    ckBdSub: {
        fontSize: 14,
        lineHeight: 21,
        color: Colors.black_800
    },
    ckBdLink: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    ckBdLinkText: {
        color: Colors.secondary,
        fontSize: 14,
    },
})


export default ProfileChecklist;