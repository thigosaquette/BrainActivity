import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppLoading } from 'expo';

import AppStack from './src/routes/AppStack';

import {Archivo_400Regular, Archivo_700Bold} from '@expo-google-fonts/archivo';
import {Poppins_400Regular, Poppins_600SemiBold} from '@expo-google-fonts/poppins';
import {Roboto_400Regular, Roboto_700Bold, useFonts} from '@expo-google-fonts/roboto';

export default function App() {
  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
    Roboto_400Regular,
    Roboto_700Bold
    
  });

  if(!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
      <AppStack />
      <StatusBar style='light' />
      </>
    );
  } 
}
