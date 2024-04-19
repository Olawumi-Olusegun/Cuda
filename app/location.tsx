import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router'

const Location = () => {

    const router = useRouter();

  return (
    <SafeAreaView className='flex-1' >
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View>
            <Text className='text-center text-lg font-bold py-5 '>Card Location</Text>
        </View>
        <View className='h-[50%] bg-primary '></View>
        <View className='flex flex-col items-center my-5 '>
            <Text className='w-[80%] mx-auto text-center text-gray-500 text-base '>Your card is at Lekki Phase 1 and would be delivered to you shortly </Text>
        
            <TouchableOpacity activeOpacity={0.8} onPress={() => router.push("/profile")} className='bg-primary py-2.5 mt-3 px-6 rounded-md'>
                <Text className='text-secondary'>Back</Text>
            </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Location