import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const RootLayout = () => {
  return (
    <Stack screenOptions={{
        // headerStyle: {
        //     backgroundColor: "black"
        // },
        // headerTintColor: "white"
    }}>
        <Stack.Screen name='index' options={{ headerShown: false }} />
        <Stack.Screen name='welcome' options={{ headerShown: false }} />
        <Stack.Screen name='transaction' options={{ headerShown: false }} />
        <Stack.Screen name='payment' options={{ headerShown: false }} />
        <Stack.Screen name='budgeting' options={{ headerShown: false }} />
        <Stack.Screen name='card' options={{ headerShown: false }} />
        <Stack.Screen name='test' options={{ headerShown: false }} />
        <Stack.Screen name='profile' options={{ headerShown: false }} />
        <Stack.Screen name='location' options={{ headerShown: false }} />
        <Stack.Screen name='feeds' options={{ headerShown: false }} />
        <Stack.Screen name='register/index' options={{ title: "Register", headerTitleAlign: "center" }} />
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
        <Stack.Screen name='[missing]' options={{ title: "Page Not Found", headerTitleAlign: "center" }} />
    </Stack>
  )
}

export default RootLayout