import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Payment = () => {
  return (
    <SafeAreaView className='flex-1'>
      <ScrollView className='px-[21px]' contentContainerStyle={{ flex: 1, }}>
        <View className='py-5 border-b border-b-gray-200'>
            <Text className='text-center font-bold text-2xl '>Payments</Text>
        </View>

        <View className='flex flex-row items-center space-x-2 my-5'>
            <Image source={require("./../assets/images/Ellipse 644.png")} />
            <Text className='text-gray-400 font-semibold'>Friends on Kuda</Text>
        </View>

        <View className='flex flex-row items-center justify-between bg-secondary border border-gray-200 px-[19px] py-[17px] space-x-[9px] rounded-md '>

            <View>
                <Text className='text-[16px] font-bold text-primary'>Friends on Kuda</Text>
                <Text className='text-gray-400'>Find your contacts on Kuda.</Text>
            </View>

            <TouchableOpacity activeOpacity={0.8} className='bg-primary py-2.5 px-6 rounded-md'>
                <Text className='text-secondary'>Connect</Text>
            </TouchableOpacity>
        </View>


        <View className='flex flex-col gap-y-2 my-5'>

            <View className='flex flex-row items-center justify-between bg-secondary border border-gray-200 px-[19px] py-[17px] space-x-[9px] rounded-md '>
                <View className='flex flex-row space-x-2'>
                    <MaterialCommunityIcons name="water-plus" size={24} color="#40196D" />
                    <View>
                        <Text className='text-[16px] font-bold text-primary'>Send Money</Text>
                        <Text className='text-gray-400'>Free transfers to all banks</Text>
                    </View>
                </View>
                <TouchableOpacity activeOpacity={0.8} className=''>
                    <MaterialCommunityIcons name="water-plus" size={24} color="#40196D" />
                </TouchableOpacity>
            </View>

            <View className='flex flex-row items-center justify-between bg-secondary border border-gray-200 px-[19px] py-[17px] space-x-[9px] rounded-md '>
                <View className='flex flex-row space-x-2'>
                    <MaterialCommunityIcons name="water-plus" size={24} color="#40196D" />
                    <View>
                        <Text className='text-[16px] font-bold text-primary'>Send Money</Text>
                        <Text className='text-gray-400'>Free transfers to all banks</Text>
                    </View>
                </View>
                <TouchableOpacity activeOpacity={0.8} className=''>
                    <MaterialCommunityIcons name="water-plus" size={24} color="#40196D" />
                </TouchableOpacity>
            </View>

            <View className='flex flex-row items-center justify-between bg-secondary border border-gray-200 px-[19px] py-[17px] space-x-[9px] rounded-md '>
                <View className='flex flex-row space-x-2'>
                    <MaterialCommunityIcons name="water-plus" size={24} color="#40196D" />
                    <View>
                        <Text className='text-[16px] font-bold text-primary'>Send Money</Text>
                        <Text className='text-gray-400'>Free transfers to all banks</Text>
                    </View>
                </View>
                <TouchableOpacity activeOpacity={0.8} className=''>
                    <MaterialCommunityIcons name="water-plus" size={24} color="#40196D" />
                </TouchableOpacity>
            </View>
            
            <View className='flex flex-row items-center justify-between bg-secondary border border-gray-200 px-[19px] py-[17px] space-x-[9px] rounded-md '>
                <View className='flex flex-row space-x-2'>
                    <MaterialCommunityIcons name="water-plus" size={24} color="#40196D" />
                    <View>
                        <Text className='text-[16px] font-bold text-primary'>Send Money</Text>
                        <Text className='text-gray-400'>Free transfers to all banks</Text>
                    </View>
                </View>
                <TouchableOpacity activeOpacity={0.8} className=''>
                    <MaterialCommunityIcons name="water-plus" size={24} color="#40196D" />
                </TouchableOpacity>
            </View>

            <View className='flex flex-row items-center justify-between bg-secondary border border-gray-200 px-[19px] py-[17px] space-x-[9px] rounded-md '>
                <View className='flex flex-row space-x-2'>
                    <MaterialCommunityIcons name="water-plus" size={24} color="#40196D" />
                    <View>
                        <Text className='text-[16px] font-bold text-primary'>Send Money</Text>
                        <Text className='text-gray-400'>Free transfers to all banks</Text>
                    </View>
                </View>
                <TouchableOpacity activeOpacity={0.8} className=''>
                    <MaterialCommunityIcons name="water-plus" size={24} color="#40196D" />
                </TouchableOpacity>
            </View>

        </View>

        <View className='my-3 flex flex-row items-center justify-between'>
            <Text className='font-bold text-base text-gray-600'>Send to Beneficiary</Text>
            <TouchableOpacity activeOpacity={0.8} className='bg-primary py-2.5 px-6 rounded-md'>
                <Text className='text-secondary'>View All</Text>
            </TouchableOpacity>
        </View>



      </ScrollView>
    </SafeAreaView>
  )
}

export default Payment