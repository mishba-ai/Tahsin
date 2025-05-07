import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

interface SegmentTabsProps {
  currentSection?: string;
  tabs: string[];
  activeTab: string;
  onTabPress: (tab: string) => void;
  bgColor?: string; 
}

const SegmentTabs: React.FC<SegmentTabsProps> = ({
  currentSection,
  tabs,
  onTabPress,
  activeTab,
  bgColor = 'primary' 
}) => {
  const navigation = useNavigation();

  return (
    <View className={`flex-row justify-between px-3 z-50  bg-${bgColor} items-center`}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          className={` ${activeTab === tab ? 'border-b-2 border-[#547a43]' : ''}`}
          onPress={() => onTabPress(tab)}
        >
          <Text
            className={`font-bold text-xl ${activeTab === tab ? 'text-[#547a43]' : 'text-[#495542]'}`}
          >
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default SegmentTabs