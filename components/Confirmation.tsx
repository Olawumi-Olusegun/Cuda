import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Confirmation = () => {
  return (
    <>
      <View className='flex flex-col items-center justify-center flex-1 '>
            <Text className='text-primary font-bold text-base w-[50%] mx-auto text-center '>Click Confirm to Freeze your Account</Text>
            <Pressable className='w-[50%] mx-auto mt-6 bg-primary px-4 py-3 rounded-md '>
                <Text className='text-secondary text-center font-semibold'>Confirm</Text>
            </Pressable>
      </View>
    </>
  )
}

export default Confirmation

const styles = StyleSheet.create({})