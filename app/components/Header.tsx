import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
  currentSection?: string;
  tabs: string[];
  activeTab: string;
  onTabPress: (tab: string) => void;
  bgColor?: string; 
}

const Header: React.FC<HeaderProps> = ({
  currentSection,
  tabs,
  onTabPress,
  activeTab,
  bgColor = 'primary' 
}) => {
  const navigation = useNavigation();

  return (
    <View className={`flex-row justify-between p-3 z-50  bg-${bgColor} items-center`}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          className={` ${activeTab === tab ? 'border-b-2 border-[#4f46e5]' : ''}`}
          onPress={() => onTabPress(tab)}
        >
          <Text
            className={`font-medium ${activeTab === tab ? 'text-[#4f46e5]' : 'text-gray-600'}`}
          >
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default Header