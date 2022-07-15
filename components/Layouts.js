import React from 'react';
import { View } from 'react-native';

const Layout = ({ children }) => {
    return (
        <View>
            <View>header</View>
            <View>{children}</View>
            <View>footer</View>
        </View>
    );
};

export default Layout;
