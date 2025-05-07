import { View, Text, SafeAreaView, TouchableOpacity, StatusBar, Platform, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { images } from '@/constants/images';

const self = () => {
  return (
    <View className='flex-1 bg-primary ' style={[{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight || 20 : 20 }]}>
      <ExpoStatusBar style="dark" translucent={true} />

      <View className='relative px-4'>
      <View className='w-12 h-12 absolute  left-1 top-36'>
        <Image source={images.m5} className='w-[390px] bg-no-repeat  h-[628px] opacity-20'  resizeMode='cover' />
      </View>
        <Text className='text-4xl font-bold text-lime-700'>Focus Area</Text>
      </View>
    </View>
  )
}

export default self