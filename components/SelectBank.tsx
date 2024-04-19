import { View, Text, TextInput, Pressable } from 'react-native'
import React from 'react'

const SelectBank = () => {
  return (
    <>
      <View className='flex-1'>
        <Text className='text-center text-base font-bold text-primary w-[50%] mx-auto '>Click Confirm to Block your Active Card</Text>
        <View className='flex flex-col gap-y-3 my-5 '>
            <TextInput placeholder='Select Bank' className='border border-gray-200 text-gray-500 font-semibold px-4 py-3 rounded-md ' />
        </View>
        <Pressable className='w-[50%] mx-auto mt-6 bg-primary px-4 py-3 rounded-md '>
            <Text className='text-secondary text-center font-semibold'>Confirm</Text>
        </Pressable>
      </View>
    </>
  )
}

export default SelectBank