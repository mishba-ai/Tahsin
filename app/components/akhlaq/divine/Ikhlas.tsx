import React, { useState } from 'react'
import {
  StyleSheet, View, Text, TouchableOpacity, StatusBar, Platform, Image, ScrollView, ImageBackground
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'
import { images } from '@/constants/images';
import { Ionicons } from '@expo/vector-icons';
import PracticeCard from './PracticeCard';
import PracticeButton from './PracticeButton';

const Ikhlas = () => {

  const [practices, setPractices] = useState([
    {
      name: 'Hidden Good Deeds',
      description: 'Record acts that only Allah Knows',
      id: 1
    },
    {
      name: 'Morning Intention Check',
      description: 'Begin Your day with pure Intentions',
      id: 2
    },
    {
      name: 'Daily Practice for Ikhlas',
      description: 'Track your daily practices for Ikhlas',
      id: 3
    }
  ])

  //generate a new unique ID for new practices
  const getNextId = () => {
    return practices.length > 0 ? Math.max(...practices.map(p => p.id)) + 1 : 1
  }

  // Function to add a new practice
  const addPractice = (practice) => {
    const newPractice = {
      id: getNextId(),
      name: practice.name,
      description: practice.description
    };
    setPractices([...practices, newPractice]);
  };

  //function to update an existing practice
  const updatePractice = (id, updatedPractice) => {
    setPractices(
      practices.map(practice => 
        practice.id === id 
        ? {...practice,name:updatedPractice.name,description:updatedPractice.description} 
        : practice
      )
    )
  }

  const deletePractice = (id) =>{
    setPractices(practices.filter(practice => practice.id !== id))
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView className='flex-1'>
        <ImageBackground
          source={images.m1}
          className='flex-1 '
          resizeMode="cover"
          imageStyle={{ marginLeft: 1, opacity: 0.5 }} >
          <ScrollView className='px-4 pb-16 ' contentContainerStyle={{ gap: 12, paddingBottom: 80 }}>
            {practices.map((practice) => (
              <PracticeCard 
              key={practice.id} 
              text={practice.name} 
              description={practice.description} 
              onUpdate={updatePractice}
              onDelete={deletePractice}
              id={practice.id}
              />
            ))}
          </ScrollView>

          <View className='absolute bottom-5 left-0 right-0'>
            <PracticeButton title={'create new Practice'} onAddPractice={addPractice} />
          </View>
        </ImageBackground>
      </SafeAreaView >
    </SafeAreaProvider>

  )
}

export default Ikhlas
