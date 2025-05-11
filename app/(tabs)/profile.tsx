import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, StatusBar, Platform, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { images } from '@/constants/images'
import Header from '../components/SegmentTabs'
import Growth from '../components/profile/Growth'
import Settings from '../components/profile/Settings'


const profile = () => {

  const tabContents = {
    Growth: <Growth />,
    Settings: <Settings />
  }

  const [activeTab, setActiveTab] = useState('Growth');
  const profileTabs = ['Growth', 'Settings'];
  const currentContent = tabContents[activeTab]

  return (
    <View className='flex-1 bg-primary  ' style={[{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight || 20 : 20 }]}>
      <ExpoStatusBar style="light" backgroundColor='#3d4723' />

      <TouchableOpacity className='flex bg-[#3d4723] justify-center p-12 items-center'>
        <Image source={images.profile} className='w-40 h-40' />
        <Text className='text-4xl text-white font-bold mt-4'> User </Text>
      </TouchableOpacity>
      <View className=' mt-8 p-6'>
        <Header
          currentSection="profile"
          tabs={profileTabs}
          activeTab={activeTab}
          onTabPress={setActiveTab} />
        {/* growth tree */}

      </View>
      <View>
        <View className=''>{currentContent}</View>
      </View>
    </View>
  )
}

export default profile

const styles = StyleSheet.create({})