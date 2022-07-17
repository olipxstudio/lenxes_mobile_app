import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Buttons = ({text,color,border,bac,press}) => {
  return (
        <TouchableOpacity style={[styles.btn, {borderColor:border,backgroundColor:bac}]} onPress={()=>press()}>
            <Text style={[styles.text, {color:color}]}>{text}</Text>
        </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    paddingVertical:8,
    borderRadius:7,
    borderWidth:1,
    fontWeight:'800',
    width:110,
    alignItems:'center'
  },
  text:{
    fontSize:12,
  }
});


export default Buttons;