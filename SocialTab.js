import 'react-native-gesture-handler';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Platform, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from './components/Colors';
import ProfileStacks from './ProfileStack';
import Explore from './pages/social/Explore';
import Feed from './pages/social/Feed';
import Cart from './pages/social/Cart';
import Activities from './pages/social/Activities';

function Icon({ foc, img, text }) {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', top: 2 }}>
            <Ionicons name={img} size={25} color={foc ? Colors.primary : '#999'} />
            <Text style={{ fontSize: Platform.OS === 'android' ? 8 : 8, color: foc ? Colors.primary : '#999', marginBottom: 5 }}>{text}</Text>
        </View>
    )
}

const Tab = createBottomTabNavigator();

const SocialTab = ({ route }) => {
    return (
        <Tab.Navigator
            initialRouteName="ProfileStacks"
            barStyle={{ backgroundColor: '#ffffff' }}
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
            }}
        >
            <Tab.Screen name="Feed" component={Feed} options={{
                tabBarIcon: ({ focused }) => (
                    <Icon foc={focused} img="md-home-outline" text="Timeline" />
                ),
            }} />
            <Tab.Screen name="Explore" component={Explore} options={{
                tabBarIcon: ({ focused }) => (
                    <Icon foc={focused} img="ios-search-outline" text="Explore" />
                ),
            }} />
            <Tab.Screen name="Cart" component={Cart} options={{
                tabBarIcon: ({ focused }) => (
                    <Icon foc={focused} img="ios-cart-outline" text="Shopping" />
                ),
            }} />
            <Tab.Screen name="Activities" component={Activities} options={{
                tabBarIcon: ({ focused }) => (
                    <Icon foc={focused} img="chatbubbles-outline" text="Activity" />
                ),
            }} />
            <Tab.Screen name="ProfileStacks" component={ProfileStacks} options={{
                tabBarIcon: ({ focused }) => (
                    // <Icon foc={focused} img="person-circle-outline" text="Profile" />
                    <View style={
                        {
                            alignItems: 'center',
                            justifyContent: 'center',
                            top: 2,
                        }
                    }>
                        <View style={
                            {
                                width: 25,
                                height: 25,
                                borderRadius: 50,
                                borderWidth: 1.5,
                                borderColor: focused ? Colors.primary : '#999',
                                padding: 1.5
                            }
                        }>
                            <View style={
                                {
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: 50,
                                    backgroundColor: '#ccc'
                                }
                            }>
                                
                            </View>
                        </View>
                        <Text style={{ fontSize: Platform.OS === 'android' ? 8 : 8, color: focused ? Colors.primary : '#999', marginBottom: 5, marginTop: 1 }}>Profile</Text>
                    </View>
                ),
            }} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#eaeef5",
        paddingBottom: 50
    },
    post: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        borderRadius: 60,
        top: 0
    },
    notification: {
        width: 13,
        height: 18,
        fontSize: 11,
        // position: 'absolute',
        // top: 0,
        // right: -3,
        backgroundColor: '#f00',
        // borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    notification_txt: {
        color: Colors.white,
        fontSize: 10,
        fontWeight: 'bold'
    },
});

export default SocialTab;