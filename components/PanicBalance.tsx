import { View, Text, TextInput, Pressable } from 'react-native'
import React from 'react'

const PanicBalance = () => {
  return (
    <>
      <View className='flex-1'>
        <Text className='text-center text-base font-bold text-primary '>Set Panic Balance</Text>
        <View className='flex flex-col gap-y-3 my-5 '>
            <TextInput placeholder='Enter Amount' className='border border-gray-200 text-gray-500 font-semibold px-4 py-3 rounded-md ' />
            <TextInput placeholder='Enter Amount' className='border border-gray-200 text-gray-500 font-semibold px-4 py-3 rounded-md ' />
        </View>
        <Pressable className='w-[50%] mx-auto mt-6 bg-primary px-4 py-3 rounded-md '>
            <Text className='text-secondary text-center font-semibold'>Set Amount</Text>
        </Pressable>
      </View>
    </>
  )
}

export default PanicBalance