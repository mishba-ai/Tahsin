import React from 'react'
import { Tabs } from "expo-router";
import { SvgXml } from 'react-native-svg';

import HomeIcon from '../../assets/icons/Tabhome'
import AkhlaqIcon from '../../assets/icons/Tabakhlaq'
import CommunityIcon from '../../assets/icons/Tabcommunity'
import JournalIcon from '../../assets/icons/Tabjournal'
import ProfileIcon from '../../assets/icons/Tabprofile'

// const SvgIcon = ({ xml, color, size = 24 }) => {
//   // Replace stroke or fill colors if needed
//   const updatedXml = xml.replace(/#121212/g, color).replace(/#212121/g, color);
//   return <SvgXml xml={updatedXml} width={size} height={size} />;
// };

const _layout = () => {
  return (
    <Tabs 
    screenOptions={{
      // tabBarShowLabel:false,
      tabBarItemStyle:{

      },
      tabBarActiveTintColor:'#7D882F',
      tabBarInactiveTintColor:'#8E8E93',
      tabBarStyle:{
        // backfaceVisibility:
        backgroundColor:'#e9ebc7',
        borderRadius:50,
        marginHorizontal:20,
        marginBottom:15,
        height:52,
        position:'absolute',
        overflow:'hidden',
        borderWidth:1,
        borderColor:'#C3CD79',
        // opacity:90
      }
    }} >
      <Tabs.Screen name='index' options={{
        title: 'Home',
        
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <HomeIcon
            width={24}
            height={24}
            stroke={focused ? "#7D882F" : "#8E8E93"}
          />
        )
      }} 
      />
      <Tabs.Screen name='akhlaq' options={{
        title: 'akhlaq',
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <AkhlaqIcon
            width={24}
            height={24}
            stroke={focused ? "#7D882F" : "#8E8E93"}
          />
        )
      }} />
      <Tabs.Screen name='community' options={{
        title: 'community',
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <CommunityIcon
            width={24}
            height={24}
            stroke={focused ? "#7D882F" : "#8E8E93"}
          />
        )
      }} />
      <Tabs.Screen name='journal' options={{
        title: 'journal',
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <JournalIcon
            width={24}
            height={24}
            stroke={focused ? "#7D882F" : "#8E8E93"}
          />
        )
      }} />
      <Tabs.Screen name='profile' options={{
        title: 'profile',
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <ProfileIcon
            width={24}
            height={24}
            stroke={focused ? "#7D882F" : "#8E8E93"}
          />
        )
      }} />
    </Tabs>
  )
}

export default _layout

