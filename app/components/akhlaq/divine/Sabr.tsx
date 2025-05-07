import React from 'react'
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, StatusBar, Platform, Image, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { images } from '@/constants/images';
import { Ionicons } from '@expo/vector-icons';

const Sabr = () => {
  return (
    <View>
       <View className='w-12 h-12 relative left-4'>
        <Image source={images.m3} className='w-[380px]   h-[626px] opacity-20' />
      </View>
      <Text>Sabr</Text>
    </View>
  )
}

export default Sabr