import { View, Text, TouchableOpacity, Modal, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import PracticeModal from './PracticeModal';

interface PracticeCardProps {
  text:string;
  description:string;
  onUpdate: (id: number, updatedPractice: { name: string; description: string }) => void;
  onDelete: (id: number) => void;
  id:number;
}

const PracticeCard: React.FC<PracticeCardProps> = ({
  text,
  description,
  onUpdate,
  onDelete,
  id
 
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  return (
    <>
      <TouchableOpacity onPress={openModal}>
        <View className='w-full  h-20 items-center px-3 rounded-lg bg-[#aaae89] flex-row  justify-between' >
          <View>
            <Text className='text-[#73803f] text-xl '>{text}</Text>
            {/* description */}
            <Text className='text-[#8b9467] text-sm '>{description}</Text>
          </View>
          <View>
            <Ionicons name='checkmark-circle-outline' size={36} color='#73803f' />
          </View>
        </View>
      </TouchableOpacity>

      {/* modal */}
      <PracticeModal
      id={id}
      text={text}
      description={description}
      isNewPractice={false}
      onUpdate={onUpdate}
      onDelete={onDelete}
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      />
    </>
  )
}

export default PracticeCard