import { View, Text, Image, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';


const SplashTwo = () => {
  return (
    <>
    <StatusBar style='dark' />
        <View className='flex-1 flex flex-col w-full'>
            <Text className='text-primary mt-14 text-center font-bold text-xl '>Welcome to Cuda.</Text>
           
            <View className='mt-16 self-center '>
                <Image source={require("./../../assets/images/Capturekuda 2.png")} resizeMode='contain' />
            </View>
            
            <View className='flex items-center justify-center mt-8'>
                <Text className='text-primary text-[24px] font-bold '>Bank of the Free</Text>
                <Text className='w-[65%] mx-auto text-primary my-5 text-center font-semibold text-[16px] leading-6'>Kuda is the bank of the free, bank for free with us and join the free nation. lets go!</Text>
            </View>

            <View className='flex items-center w-full'>
                <TouchableOpacity activeOpacity={0.8} onPress={() => {}} className='ml-auto mr-5 border-2 border-gray-200 flex items-center justify-center h-[64px] w-[64px] rounded-full '>
                    <View className='bg-primary flex items-center justify-center h-[52px] w-[52px] rounded-full '>
                        <Ionicons name="arrow-forward" size={24} color="white" />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    </>
  )
}

export default SplashTwo