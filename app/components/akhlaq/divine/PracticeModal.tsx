import { View, Text, Modal, Pressable, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

interface PracticeModal {
    id?: number;
    text?: string;
    description?: string;
    onUpdate?: (id: number, updatedPractice: { name: string; description: string }) => void;
    onDelete?: (id: number) => void;
    modalVisible: boolean;
    setModalVisible: (visible: boolean) => void;
    onAdd?: (practice: { name: string; description: string }) => void;
    isNewPractice: boolean,


}

const PracticeModal: React.FC<PracticeModal> = ({
    text = '',
    description = '',
    id = 0,
    onUpdate,
    onDelete,
    onAdd,
    modalVisible,
    setModalVisible,
    isNewPractice = false,

}) => {

    const [practiceName, setPracticeName] = useState(text);
    const [practiceDescription, setPracticeDescription] = useState(description);

    //update local state when props change
    useEffect(() => {
        setPracticeName(text);
        setPracticeDescription(description);
    }, [text, description, modalVisible]);

    const handleAction = () => {
        if (practiceName.trim() !== '') {
            if (isNewPractice && onAdd) {
                onAdd({
                    name: practiceName,
                    description: practiceDescription,
                })
            } else if (onUpdate) {
                onUpdate(id, {
                    name: practiceName,
                    description: practiceDescription,
                })
            }
            setModalVisible(false)
        }
    };


    const handleDelete = () => {
        if (onDelete) {
            onDelete(id);
        }
        setModalVisible(false);
    };

    return (
        <Modal
            animationType='slide'
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
        >

            <View className='flex-1 justify-center items-center'>
                <View className='w-5/6 bg-[#f0f1e9] p-4 rounded-lg shadow'>
                    <View className='flex-row justify-between items-center mb-4'>
                        <Text className='text-[#41523f] text-xl font-bold'>Edit Practice</Text>
                        <Pressable onPress={() => setModalVisible(false)}>
                            <Text className='text-[#73803f] text-xl font-bold'>X</Text>
                        </Pressable>
                    </View>

                    <View className='mb-4'>
                        <Text className='text-[#41523f] mb-1'>Practice Name</Text>
                        <TextInput
                            className='border border-[#aaae89] rounded-md p-2 bg-white'
                            placeholder='Enter Practice Name'
                            value={practiceName}
                            onChangeText={setPracticeName}
                        />
                    </View>

                    <View className='mb-6'>
                        <Text className='text-[#41523f] mb-1'>Description</Text>
                        <TextInput
                            className='border border-[#aaae89] rounded-md p-2 h-20 bg-white'
                            placeholder='Enter Practice Description'
                            multiline
                            value={practiceDescription}
                            onChangeText={setPracticeDescription}
                        />
                    </View>

                    {isNewPractice ?
                        <View className='items-center'>
                            <TouchableOpacity className='bg-[#a3aa94] w-44 justify-center items-center rounded-sm px-2 py-4' onPress={handleAction}>
                                <Text>Create</Text>
                            </TouchableOpacity>

                        </View>
                        : <View className='flex-row justify-between'>
                            <TouchableOpacity
                                className='bg-red-500 p-3 rounded-md items-center w-1/3'
                                onPress={handleDelete}
                            >
                                <Text className='text-white font-bold'>Delete</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                className='bg-[#a3aa94] p-3 rounded-md items-center w-1/2'
                                onPress={handleAction}
                            >
                                <Text className='text-[#41523f] font-bold'>Update</Text>
                            </TouchableOpacity>
                        </View>
                    }
                </View>
            </View>
        </Modal>
    )
}
export default PracticeModal