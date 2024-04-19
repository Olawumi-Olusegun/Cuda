import { View, Text } from 'react-native'
import React from 'react'
import ControlCard from '@/components/ControlCard'
import PanicBalance from '@/components/PanicBalance'
import { SafeAreaView } from 'react-native-safe-area-context'
import Confirmation from '@/components/Confirmation'
import SelectBank from '@/components/SelectBank'

const Test = () => {
  return (
    <>
    <SafeAreaView className='flex-1 mt-10 px-[12px]' >
        {/* <ControlCard /> */}
        {/* <PanicBalance /> */}
        {/* <Confirmation /> */}
        <SelectBank />

    </SafeAreaView>
    </>
  )
}

export default Test