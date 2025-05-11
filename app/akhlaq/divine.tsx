import { View, Text, SafeAreaView, TouchableOpacity, StatusBar, Platform, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { images } from '@/constants/images';
import SegmentTabs from '../components/SegmentTabs'
import Ikhlas from '../components/akhlaq/divine/Ikhlas'
import Tawakkul from '../components/akhlaq/divine/Tawakkul'
import Shukr from '../components/akhlaq/divine/Shukr'
import Sabr from '../components/akhlaq/divine/Sabr'
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();
const tabContents = {
  Ikhlas: <Ikhlas />,
  Tawakkul: <Tawakkul />,
  Shukr: <Shukr />,
  Sabr: <Sabr />
}

//define the type of the tabContents

const divine = () => {
  const [activeTab, setActiveTab] = useState('Ikhlas');
  const akhlaqTabs = ['Ikhlas', 'Tawakkul', 'Shukr', 'Sabr'];
  const currentContent = tabContents[activeTab]

  return (
    <View className='flex-1 bg-primary' style={[{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight || 20 : 20 }]}>
      <ExpoStatusBar style="dark" translucent={true} />
      <View className=' '> 
        <SegmentTabs
          //  bgcolor='[#D9D9D9]/30'
          currentSection="Akhlaq ma'Allah"
          tabs={akhlaqTabs}
          activeTab={activeTab}
          onTabPress={setActiveTab}
        />
      </View>


      <View className='flex-1'>
        <View className='px-4 py-6 flex-row gap-x-4'>
          {/* Daily Practice Section */}
          <Ionicons
            name="checkmark-circle-outline"
            size={24} 
            color={'#e1f4c4'}
            />
          <Text className=' text-3xl font-thin text-[#e1f4c4]'>
            Daily Practice for {activeTab}
          </Text>
        </View>
        <View className=' flex-1'>{currentContent}</View>

      </View>
    </View>
  )
}

export default divine