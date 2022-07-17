import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable, Dimensions } from 'react-native';
import Colors from './Colors';
const { width } = Dimensions.get('window');
// import Url from './Url';

const FollowersListCard = ({ press, my_id, name, handle, img, following }) => {
    const [follow_unfollow, setfollow_unfollow] = useState(following);

    const addToFollow = (user_follow_id) => {
        // Activate the follow btn
        // setfollow_unfollow(true);
        // // Send request
        // const xhr = new XMLHttpRequest();
        // const formData = new FormData();
        // formData.append('follow', 'yes');
        // formData.append('userFollowID', user_follow_id);
        // formData.append('userID', my_id);
        // xhr.addEventListener("load", () => {
        //     if (xhr.response !== '1') {
        //         setfollow_unfollow(false);
        //     }
        // }, false);
        // xhr.open("POST", Url.action);
        // xhr.send(formData);
    }

    const removeToFollow = (user_follow_id) => {
        // Activate the follow btn
        // setfollow_unfollow(false);
        // // Send request
        // const xhr = new XMLHttpRequest();
        // const formData = new FormData();
        // formData.append('unfollow', 'yes');
        // formData.append('userFollowID', user_follow_id);
        // formData.append('userID', my_id);
        // xhr.addEventListener("load", () => {
        //     if (xhr.response !== '1') {
        //         setfollow_unfollow(true);
        //     }
        // }, false);
        // xhr.open("POST", Url.action);
        // xhr.send(formData);
    }

    return (
        <View style={styles.follow_people}>
            <View style={styles.det_holder}>
                <View style={styles.fl_pp_img_holder}>
                    {/* <Image source={img} style={styles.fl_pp_img} /> */}
                </View>
                <View style={styles.fl_pp_txt}>
                    <Text style={styles.follow_name}>{name}</Text>
                    <Text style={styles.follow_handle}>@{handle}</Text>
                </View>
            </View>
            <View>
                {
                    follow_unfollow !== 'nill' &&
                        follow_unfollow ?
                        <Pressable onPress={() => removeToFollow(press)} style={styles.unfl_pp_btn}>
                            <Text style={styles.unfl_pp_btn_text}>following</Text>
                        </Pressable>
                        :
                        <Pressable onPress={() => addToFollow(press)} style={styles.fl_pp_btn}>
                            <Text style={styles.fl_pp_btn_text}>Follow</Text>
                        </Pressable>
                }

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    follow_people: {
        backgroundColor: Colors.white,
        width: width - 60,
        paddingHorizontal: 10,
        paddingVertical:8,
        borderRadius: 40,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        marginBottom: 7,
        borderWidth: 2,
        borderColor: Colors.grayTwo
    },
    det_holder: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    fl_pp_img_holder: {
        width: 40,
        height: 40,
        borderRadius: 60,
        backgroundColor: Colors.graySeven
    },
    fl_pp_img: {
        width: 50,
        height: 50,
        resizeMode: 'cover',
        borderRadius: 60,
    },
    fl_pp_txt: {
        marginLeft: 15
    },
    follow_name: {
        fontWeight: '500',
        marginBottom: 3
    },
    follow_handle: {
        color: Colors.grayEleven,
        fontSize: 12
    },
    fl_pp_btn: {
        backgroundColor: Colors.primary,
        paddingHorizontal: 18,
        paddingVertical: 7,
        borderRadius: 26
    },
    fl_pp_btn_text: {
        color: Colors.white,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 12
    },
    unfl_pp_btn: {
        backgroundColor: Colors.white,
        paddingHorizontal: 17,
        paddingVertical: 7,
        borderWidth: 1,
        borderRadius: 16,
        borderColor: Colors.grayEight
    },
    unfl_pp_btn_text: {
        textAlign: 'center',
        color: '#aaa',
        fontSize: 12
    },
});


export default FollowersListCard;