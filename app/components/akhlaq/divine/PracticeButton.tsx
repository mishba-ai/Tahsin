import React, { useState } from 'react';
import { TouchableOpacity, Text, View, Modal, Pressable, TextInput } from 'react-native';
import PracticeModal from './PracticeModal';

//props for PracticeButton
interface PracticeButtonProps {
  title: string;
  onAddPractice: (practice: { name: string; description: string }) => void;
}

//when clicked on Onpress 

const PracticeButton = ({ title, onAddPractice }: PracticeButtonProps) => {

  const [modalVisible, setModalVisible] = useState(false);
  
  return (
    <TouchableOpacity onPress={() => setModalVisible(true)}

      className='mx-14 bg-[#a3aa94]  h-20 items-center rounded-lg justify-center'
    >
      <Text className='text-[#41523f] text-2xl'>
        {title}
      </Text>
      {/* only shown create option not delete and update */}
      <PracticeModal
        isNewPractice={true}
        onAdd={onAddPractice}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </TouchableOpacity>

  )
};

export default PracticeButton;
