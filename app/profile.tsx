import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Profile = () => {
  return (
    <SafeAreaView className='flex-1'>
      
      <View className='px-[14px]' >
        <View className='py-5 border-b border-b-gray-200'>
            <Text className='text-center font-bold text-2xl '>Profile</Text>
        </View>

        <View className='flex flex-col items-center space-y-1 my-5'>
            <Image source={require("./../assets/images/profile.png")} resizeMode='contain' className='h-[124px] w-[124px] ' />
            <Text className='text-gray-400 font-bold text-base mt-5'>Hello Itunuoluwa</Text>
            <Text className='text-primary font-bold text-base '>Account Number: 043423802</Text>
        </View>

      </View>

      <ScrollView 
      className='px-[14px] my-5' 
      contentContainerStyle={{ flexGrow: 1  }}
      showsVerticalScrollIndicator={false}
      >

        <View className='flex flex-col gap-y-2 my-5'>

            <View className='flex flex-row items-center justify-between bg-secondary border border-gray-200 px-[19px] py-[17px] space-x-[9px] rounded-md '>
                <View className='flex flex-row space-x-2'>
                    <MaterialCommunityIcons name="water-plus" size={24} color="#40196D" />
                    <View>
                        <Text className='text-[16px] font-bold text-primary'>@thisisaltgian</Text>
                        <Text className='text-gray-400'>Account Name</Text>
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
                        <Text className='text-[16px] font-bold text-primary'>Lagos, Nigeria</Text>
                        <Text className='text-gray-400'>Address</Text>
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
                        <Text className='text-[16px] font-bold text-primary'>080***********</Text>
                        <Text className='text-gray-400'>Phone number</Text>
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
                        <Text className='text-[16px] font-bold text-primary'>itunu221@gmail.com</Text>
                        <Text className='text-gray-400'>Email Address</Text>
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
                        <Text className='text-[16px] font-bold text-primary'>NIN</Text>
                        <Text className='text-gray-400'>Identification Verification</Text>
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
                        <Text className='text-[16px] font-bold text-primary'>Father</Text>
                        <Text className='text-gray-400'>Next Of Kin</Text>
                    </View>
                </View>
                <TouchableOpacity activeOpacity={0.8} className=''>
                    <MaterialCommunityIcons name="water-plus" size={24} color="#40196D" />
                </TouchableOpacity>
            </View>

        </View>



        </ScrollView>

    </SafeAreaView>
  )
}

export default Profile