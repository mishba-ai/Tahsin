import { View, Text } from 'react-native'
import React from 'react'

const HomeCard = ({width}) => {
    return (
        <View className={`w-${width} h-44 rounded-sm flex-col items-center pt-2 shadow-2xl bg-[#B7BF96] text-[#DFEB83]`}>
            <Text>HomeCard</Text>
        </View>
    )
}

export default HomeCard