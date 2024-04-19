import React from 'react'
import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { View, Text, Button, Image } from 'react-native'
import { cudaLogo } from '@/constants'
import ScreenOne from '@/components/splash/ScreenOne'
import SplashTwo from '@/components/splash/SplashTwo'
import ScreenThree from '@/components/splash/ScreenThree'

const Index = () => {
  return (
    <View className="flex-1 items-center justify-center relative ">
        <StatusBar style='light' />
      {/* <ScreenOne /> */}
      {/* <SplashTwo /> */}
      <ScreenThree />
    </View>
  )
}

export default Index