import { NavigationContainer } from '@react-navigation/native';
import { Platform } from 'react-native';
import Stacks from './Stacks';
import * as NavigationBar from 'expo-navigation-bar';
import { AppProvider } from './context/AppContext';

export default function App() {
    const changeBar = async () => {
        if(Platform.OS === 'android'){
            NavigationBar.setBackgroundColorAsync("white");
            NavigationBar.setButtonStyleAsync("dark");
            // NavigationBar.setVisibilityAsync("hidden");
            // await NavigationBar.setBehaviorAsync('overlay-swipe');
        }
    }
    changeBar() // Change android Navigation bar
    
    return (
        <AppProvider>
            <NavigationContainer>
                <Stacks />
            </NavigationContainer>
        </AppProvider>
    );
}
