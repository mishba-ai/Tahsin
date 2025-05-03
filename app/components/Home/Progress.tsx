import { View, Text } from 'react-native'
import React from 'react'
import CircularProgress from 'react-native-circular-progress-indicator';

const Progress = () => {
  return (
    <View className='w-44 h-44 rounded-s flex-col items-center pt-2  bg-[#B7BF96] text-[#DFEB83]'>
      <Text className='text-[#82894c] text-xl'>progress</Text>

     {/* progress bar */}
      <View className=' p-2 flex jusitfy-center items-center'>
        <CircularProgress
          value={50}
          radius={35}
          inActiveStrokeOpacity={0.5}
          activeStrokeWidth={10}
          inActiveStrokeWidth={15}
          valueSuffix='%'
          progressValueStyle={{ fontWeight: '100', color: '#3a5a40' }}
          activeStrokeSecondaryColor="yellow"
          inActiveStrokeColor="black"
          duration={5000}
          // dashedStrokeConfig={{
          //   count: 50,
          //   width: 2,
          // }}
        />
      </View>
      <Text className='text-[#82894c] text-xl'>Day 10</Text>
    </View>
  )
}

export default Progress