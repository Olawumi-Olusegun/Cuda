import { View, Text, Image } from 'react-native'
import React from 'react'

const ScreenOne = () => {
  return (
    <>
        <View className='flex-1 bg-primary'>
            <Image source={require("./../../assets/images/kuda_logo.png")} resizeMode='contain' />
        </View>
        <View className="h-[195px] w-[195px] absolute top-20 -right-28 bg-secondary rounded-full " />
        <View className="h-[100px] w-[100px] absolute top-48 -left-16 bg-secondary rounded-full " />
        <View className="h-[48px] w-[48px] absolute bottom-40 left-10 bg-secondary rounded-full " />
        <View className="h-[125px] w-[125px] absolute bottom-40 right-10 bg-secondary rounded-full " />
    </>
  )
}

export default ScreenOne