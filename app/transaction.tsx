
import { View, Text, ScrollView, Image, Pressable, Alert, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';

const Transaction = () => {

    const handleAddMoney = () => {
        Alert.alert("Info", "Add Money")
      }

  return (
    <>
      <SafeAreaView className='flex-1'>
        <StatusBar style='dark' />
        <ScrollView 
          className='flex-1 flex flex-col w-full px-[21px]' 
          showsVerticalScrollIndicator={false} 
          contentContainerStyle={{ flex: 1, }} 
          >
            <View className='flex flex-row items-center py-3 my-5 '>
              <View className='flex flex-row items-center space-x-[7px] '>
                <Image source={require("./../assets/images/Ellipse 644.png")}  />
                <Text className='text-[18px] font-bold  ' >Hi Itunuoluwa</Text>
              </View>
              <View className='ml-auto flex flex-row items-center'>
                <Pressable onPress={handleAddMoney} className='flex flex-row items-center space-x-1 '>
                  <Text className='text-[11px] text-gray-400 ' >Add Money</Text>
                  <View className='w-[27px] h-[27px] border-2 border-gray-300 rounded-full flex flex-row items-center justify-center '>
                    <View className='bg-primary rounded-full h-[19px] w-[19px] flex justify-center items-center '>
                      <Feather name="plus" size={15} color="white" />
                    </View>
                  </View>

                </Pressable>
              </View>
            </View>

            <View className='w-full mx-auto px-4 pb-4  bg-primary rounded-md flex flex-col gap-y-[14px] '>
                <Text className='text-[11px] text-secondary text-center '>Account Balance</Text>
                <Text className='text-[18px] font-bold text-secondary text-center '>$ 10,000.00</Text>
            
              <View className='flex flex-row items-center space-x-[46px] self-center'>

                <View className='flex flex-row items-center'>
                  {/* <Image source={}  /> className="w-[34px] h-[45px] rounded-md  " */}
                  <Text className='text-secondary'>Spend</Text>
                </View>

                <View className='flex flex-row items-center'>
                  {/* <Image source={}  /> */}
                  <Text className='text-secondary'>Save</Text>
                </View>

                <View className='flex flex-row items-center'>
                  {/* <Image source={}  /> */}
                  <Text className='text-secondary'>Borrow</Text>
                </View>

              </View>

            </View>

            <View className='py-3'>
              <View className='flex flex-row items-center justify-between'>
              <Pressable onPress={() =>{}} >
                <Text className='text-[18px] font-bold'>My Favourites</Text>
              </Pressable>
              
              <Pressable onPress={() =>{}} className='text-[18px]  ' >
                <Text>Edit Favourites</Text>                
              </Pressable>
              </View>
            </View>

            <View className='flex flex-row items-center justify-center space-x-[53px] border-b  pb-10 border-b-gray-200 '>

              <Pressable className='flex flex-col items-center justify-center space-y-2'>
                <View className='w-[59px] h-[59px] rounded-full bg-gray-300 flex items-center justify-center '>
                  <MaterialCommunityIcons name="water-plus" size={24} color="#40196D" />
                </View>
                <Text className='text-[13px] font-semibold'>Transfer</Text>
              </Pressable>

              <Pressable className='flex flex-col items-center justify-center space-y-2'>
                <View className='w-[59px] h-[59px] rounded-full bg-gray-300 flex items-center justify-center '>
                  <Ionicons name="wallet" size={24} color="#40196D" />
                </View>
                <Text className='text-[13px] font-semibold'>Top-Up</Text>
              </Pressable>

              <Pressable className='flex flex-col items-center justify-center space-y-2'>
                <View className='w-[59px] h-[59px] rounded-full bg-gray-300 flex items-center justify-center '>
                  <FontAwesome6 name="briefcase" size={24} color="#40196D" />
                </View>
                <Text className='text-[13px] font-semibold'>Manage</Text>
              </Pressable>

            </View>

            <View>
                <View className='w-full flex flex-row  bg-gray-200 rounded-md'>
                    <View className='flex-1 flex items-center justify-center bg-primary h-10 rounded-md '>
                        <Text className='text-secondary font-semibold'>Transaction</Text>
                    </View>

                    <View className='flex-1 flex items-center justify-center bg-gray-200 h-10 rounded-md '>
                        <Text className='text-primary font-semibold'>Feeds</Text>
                    </View>
                </View>

                <View className='flex flex-col space-y-2 my-5 '>
                    <View className='bg-secondary border border-gray-200 flex flex-row items-center px-[19px] py-[17px] space-x-[9px] rounded-md '>
                        <FontAwesome6 name="briefcase" size={24} color="#40196D" />
                        <View className='flex flex-col '>
                            <Text className='text-primary text-[11px] font-bold'>$400 was sent into your account</Text>
                            <Text className='text-gray-500 text-[8px]'>25th June 2021</Text>
                        </View>
                    </View>
                    <View className='bg-secondary border border-gray-200 flex flex-row items-center px-[19px] py-[17px] space-x-[9px] rounded-md '>
                        <FontAwesome6 name="briefcase" size={24} color="#40196D" />
                        <View className='flex flex-col '>
                            <Text className='text-primary text-[11px] font-bold'>$400 was sent into your account</Text>
                            <Text className='text-gray-500 text-[8px]'>25th June 2021</Text>
                        </View>
                    </View>
                    <View className='bg-secondary border border-gray-200 flex flex-row items-center px-[19px] py-[17px] space-x-[9px] rounded-md '>
                        <FontAwesome6 name="briefcase" size={24} color="#40196D" />
                        <View className='flex flex-col '>
                            <Text className='text-primary text-[11px] font-bold'>$400 was sent into your account</Text>
                            <Text className='text-gray-500 text-[8px]'>25th June 2021</Text>
                        </View>
                    </View>
                    <View className='bg-secondary border border-gray-200 flex flex-row items-center px-[19px] py-[17px] space-x-[9px] rounded-md '>
                        <FontAwesome6 name="briefcase" size={24} color="#40196D" />
                        <View className='flex flex-col '>
                            <Text className='text-primary text-[11px] font-bold'>$400 was sent into your account</Text>
                            <Text className='text-gray-500 text-[8px]'>25th June 2021</Text>
                        </View>
                    </View>
                </View>
            </View>

        </ScrollView>

      </SafeAreaView>
    </>
  )
}

export default Transaction