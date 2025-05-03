import React, { useEffect } from 'react';
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, StatusBar, Platform ,Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import {images} from '@/constants/images'
import Progress from '../components/Home/Progress'
import HomeCard from '../components/Home/HomeCard';


export default function HomeScreen() {

  // Set status bar to match app background color and make it translucent
  useEffect(() => {
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent', true);
      StatusBar.setTranslucent(true);
    }
  }, []);

  return (
    <View className='flex-1 bg-primary px-4' style={[{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight || 20 : 20 }]}>
      <ExpoStatusBar style="dark" backgroundColor="transparent" translucent={true} />

       <View className='flex-row justify-between p-4 items-center w-full '>
        <Image source={images.profile} className='w-12 h-12 rounded-full mt-4 mx-4'/>
        <Text>Salam,User</Text>
        <Ionicons name='notifications-outline' size={24} color='#7D882F' />
       </View>

       <View className='p-4'>
       <HomeCard width={'54'}/>
       </View>

       <View className='mt-6 p-4  flex-row justify-between items-center '>
        <Progress/>
        <HomeCard width={'44'}/>
       </View>
     
     <Text className='text-3xl p-4 mt-2 text-[#E9EDCA]'>Daily Challenges</Text>
     <View className='mt-4 p-4  flex-row justify-between items-center '>
        <HomeCard width={'44'}/>
        <HomeCard width={'44'}/>
       </View>
    </View>


  );
}