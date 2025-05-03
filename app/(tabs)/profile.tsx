import React, { useEffect } from 'react';
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, StatusBar, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

const profile = () => {
  return (
    <View className='flex-1 bg-primary  ' style={[{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight || 20 : 20 }]}>
      <Text>profile</Text>
    </View>
  )
}

export default profile

const styles = StyleSheet.create({})