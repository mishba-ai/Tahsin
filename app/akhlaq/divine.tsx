import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, StatusBar, Platform, Image } from 'react-native'; 
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { images } from '@/constants/images';
import Header from '../components/Header'

const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();

const divine = () => {
  const [activeTab, setActiveTab] = useState('Ikhlas');
  const akhlaqTabs = ['Ikhlas', 'Tawakkul', 'Shukr', 'Sabr'];

  return (
    <View className='flex-1 bg-primary ' style={[{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight || 20 : 20 }]}>
      <ExpoStatusBar style="dark" translucent={true} />
      <View className=' '>
      <Header 
      //  bgcolor='[#D9D9D9]/30'
        currentSection="Akhlaq" 
        tabs={akhlaqTabs} 
        activeTab={activeTab} 
        onTabPress={setActiveTab} 
      />
      </View>
      <View className='w-12 h-12 relative left-4'>
        <Image source={images.m1} className='w-[380px]   h-[626px]' />
      </View>
    </View>
  )
}

export default divine