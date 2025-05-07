import React from 'react'
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, StatusBar, Platform, Image, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { images } from '@/constants/images';
import { Ionicons } from '@expo/vector-icons';



const Ikhlas = () => {
  return (
    <View>
      <View className='w-12 h-12 relative left-4'>
        <Image source={images.m1} className='w-[380px] opacity-20  h-[626px]' />
      </View>
      <Text>Ikhlas</Text>
    </View>
  )
}

export default Ikhlas
