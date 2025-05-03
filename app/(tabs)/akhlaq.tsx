import React, { useEffect } from 'react';
import { StyleSheet, Image, View, Text, SafeAreaView, TouchableOpacity, StatusBar, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { images } from '@/constants/images'

const akhlaq = () => {
  return (
    <View className='flex-1 bg-primary'>

      <ExpoStatusBar style="dark" translucent={true} />

      <View className='w-full h-[70%]'>
        <Image source={images.ilm} className='w-full h-full rounded-b-[24rem] opacity-65' resizeMode="cover"
        />
      </View>
      <View>
        {/* blobls link to akhlaqs  */}
        
      </View>
    </View>
  )
}

export default akhlaq