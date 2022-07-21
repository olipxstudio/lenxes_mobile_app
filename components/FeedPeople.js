import React from 'react';
import { Text, Image, StyleSheet, View } from 'react-native';
import Button from './Button';
import Colors from './Colors';

const FeedPeople = ({ userID, name, username, img }) => {
    
    return (
        <View style={styles.card}>
            <View style={styles.cdPhotoHD}>
                {/* <Image style={styles.cdImg} /> */}
            </View>
            <Text style={styles.cdName} numberOfLines={1}>Full name</Text>
            <Text style={styles.cdUsername} numberOfLines={1}>@username</Text>
            <Button
                text="Follow"
                press={()=>alert('Follow')}
                status={false}
                size="small"
                bac={Colors.primary}
                colour={Colors.white}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    card: {
        width: 130,
        backgroundColor: Colors.black_050,
        borderRadius: 22,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    cdPhotoHD: {
        width: 75,
        height: 75,
        backgroundColor: Colors.white,
        borderRadius: 50,
    },
    cdImg: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    cdName: {
        fontSize: 14,
        fontWeight: '700',
        marginTop: 8
    },
    cdUsername: {
        fontSize: 12,
        marginBottom: 8,
        color: Colors.black_800
    },
})


export default FeedPeople;