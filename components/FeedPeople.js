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
        width: 105,
        backgroundColor: Colors.black_050,
        borderRadius: 22,
        padding: 7,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 7,
    },
    cdPhotoHD: {
        width: 60,
        height: 60,
        backgroundColor: Colors.white,
        borderRadius: 50,
    },
    cdImg: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    cdName: {
        fontSize: 13,
        fontWeight: '600',
        marginTop: 8
    },
    cdUsername: {
        fontSize: 12,
        marginBottom: 8,
        color: Colors.black_600
    },
})


export default FeedPeople;