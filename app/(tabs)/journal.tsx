import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, StatusBar, Platform,Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import {images} from '@/constants/images'
import Header from '../components/Header'

const journal = () => {
  const [activeTab, setActiveTab] = useState('Journals');
  const journalTabs = ['Journals', 'Habits', 'Goals'];
  return (
    <View className='flex-1 bg-primary  ' style={[{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight || 20 : 20 }]}>
      <View className='h-[48%] w-full absolute top-0'>
        <Image source={images.journal} className='w-full h-full'/>
      </View>
      <View className=' relative top-72'>
      <Header
        //  bgColor='gray-200'
         currentSection="journal"
         tabs={journalTabs}
         activeTab={activeTab}
         onTabPress={setActiveTab} 
       />
      </View>
    </View>
  )
}

export default journal