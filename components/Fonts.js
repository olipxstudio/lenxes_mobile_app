// import React from 'react';
// import { useFonts, Amarante_400Regular } from '@expo-google-fonts/amarante';
// import { Allura_400Regular } from '@expo-google-fonts/allura';
// import { AlexBrush_400Regular } from '@expo-google-fonts/alex-brush';
// import { AguafinaScript_400Regular } from '@expo-google-fonts/aguafina-script';
// import { Anton_400Regular } from '@expo-google-fonts/anton';
// import { Arizonia_400Regular } from '@expo-google-fonts/arizonia';
// import { BalooBhaijaan_400Regular } from '@expo-google-fonts/baloo-bhaijaan';
// import { Bangers_400Regular } from '@expo-google-fonts/bangers';
// import { Cookie_400Regular } from '@expo-google-fonts/cookie';

// export default Fonts = () => {
//     let [fontsLoaded, error] = useFonts({
//         Amarante_400Regular,
//     });
// }
import * as Font from 'expo-font';
import { useFonts } from 'expo-font';

export default useFonts = async () =>
  await Font.loadAsync({
    Amarante_400Regular,
});