import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, StatusBar, Platform, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { images } from '@/constants/images';
import Header from '../components/Header';

const community = () => {
  const [activeTab, setActiveTab] = useState('Learnings');
  const communityTabs = ['Learnings', 'Events', 'Mentors', 'channel'];
  return (
    <View className='flex-1 bg-primary  ' style={[{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight || 20 : 20 }]}>
      <View className='h-[48%] w-full absolute top-0'>
        <Image source={images.community} className='w-full h-full' resizeMode='cover' />
        <View className='relative bottom-24 '>
          <Header
            bgColor='gray-200'
            currentSection="community"
            tabs={communityTabs}
            activeTab={activeTab}
            onTabPress={setActiveTab} />
        </View>
      </View>
    </View>
  )
}

export default community

const styles = StyleSheet.create({})