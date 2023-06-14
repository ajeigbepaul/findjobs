import {useState} from "react";
import { View, Text,SafeAreaView,ScrollView } from "react-native";
import { Stack, useRouter } from "expo-router";
import {COLORS, icons, images, SIZES} from '../constants'
import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from '../components'

export default function Home() {
  return (
    <SafeAreaView style={{flex:1, backgroundColor:COLORS.lightWhite}}>
      <Stack.Screen options={{
        headerStyle:{
          backgroundColor: COLORS.lightWhite
        }
      }}/>
    </SafeAreaView>
  );
}
