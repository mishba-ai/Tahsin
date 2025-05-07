import React, { useEffect } from 'react';
import { StyleSheet, Image, View, Text, SafeAreaView, TouchableOpacity, StatusBar, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { images } from '@/constants/images'
import { Link } from 'expo-router';


const akhlaq = () => {
  return (
    <View className='flex-1 bg-primary'>

      <ExpoStatusBar style="dark" translucent={true} />

      <View className='w-full h-[70%]'>
        <Image source={images.ilm} className='w-full opacity-30 h-full rounded-b-[24rem] ' resizeMode="cover"
        />
      </View>
      <View className='mt-1 px-8 flex-row justify-between  '>
        <Link href='/akhlaq/divine'>
          <Image source={images.pilgrim} className='w-20 h-20' />
        </Link>
        <Link href='/akhlaq/social' className='mt-20'>
          <Image source={images.aother} className='w-20 h-16 ' />
        </Link>
        <Link href='/akhlaq/self'>
          <Image source={images.aself} className='w-[64px] h-[60px]' />
        </Link>
      </View>
    </View>
  )
}

export default akhlaq