import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const ControlCard = () => {
  return (
    <>
    <View className='flex flex-col gap-y-2 my-10 px-[12px] '>

        <View className='flex flex-row items-center bg-secondary border border-gray-200 px-[18px] py-[17px] space-x-[18px] rounded-md '>
            <MaterialCommunityIcons name="water-plus" size={24} color="#40196D" />
            <View className='flex flex-1 flex-row space-x-2'>
                <View className=''>
                    <Text className='text-[16px] font-bold text-primary'>Panic Balance</Text>
                    <Text className='text-gray-400  text-xs'>Change Balance in any case needed.</Text>
                </View>
            </View>
            <TouchableOpacity activeOpacity={0.8} className=''>
                <MaterialCommunityIcons name="water-plus" size={24} color="#40196D" />
            </TouchableOpacity>
        </View>

        <View className='flex flex-row items-center bg-secondary border border-gray-200 px-[18px] py-[17px] space-x-[18px] rounded-md '>
            <MaterialCommunityIcons name="water-plus" size={24} color="#40196D" />
            <View className='flex flex-1 flex-row space-x-2'>
                <View className=''>
                    <Text className='text-[16px] font-bold text-primary'>Freeze Account</Text>
                    <Text className='text-gray-400  text-xs'>Stop your Account in case of theft</Text>
                </View>
            </View>
            <TouchableOpacity activeOpacity={0.8} className=''>
                <MaterialCommunityIcons name="water-plus" size={24} color="#40196D" />
            </TouchableOpacity>
        </View>

        <View className='flex flex-row items-center bg-secondary border border-gray-200 px-[18px] py-[17px] space-x-[18px] rounded-md '>
            <MaterialCommunityIcons name="water-plus" size={24} color="#40196D" />
            <View className='flex flex-1 flex-row space-x-2'>
                <View className=''>
                    <Text className='text-[16px] font-bold text-primary'>Block Card</Text>
                    <Text className='text-gray-400  text-xs'>Block your card to avoid unknown transaction</Text>
                </View>
            </View>
            <TouchableOpacity activeOpacity={0.8} className=''>
                <MaterialCommunityIcons name="water-plus" size={24} color="#40196D" />
            </TouchableOpacity>
        </View>

        <View className='flex flex-row items-center bg-secondary border border-gray-200 px-[18px] py-[17px] space-x-[18px] rounded-md '>
            <MaterialCommunityIcons name="water-plus" size={24} color="#40196D" />
            <View className='flex flex-1 flex-row space-x-2'>
                <View className=''>
                    <Text className='text-[16px] font-bold text-primary'>Enable and Disable Card</Text>
                    <Text className='text-gray-400  text-xs'>Stop card Operations for a period of time</Text>
                </View>
            </View>
            <TouchableOpacity activeOpacity={0.8} className=''>
                <MaterialCommunityIcons name="water-plus" size={24} color="#40196D" />
            </TouchableOpacity>
        </View>


    </View>
    </>
  )
}

export default ControlCard