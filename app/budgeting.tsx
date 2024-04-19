import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

interface RenderItemProps {
    item: {
        id: string;
        amount: string;
        title: string;
        iconBgColor: string;
    }
}

const data = [
    {id: "1", amount: "$0.00", title: "Money In", iconBgColor: "white"},
    {id: "2", amount: "$0.00", title: "Money In", iconBgColor: "white"},
    {id: "3", amount: "$0.00", title: "Balance", iconBgColor: "white"},
    {id: "4", amount: "$0.00", title: "Create a Budget", iconBgColor: "white"},
];

const RenderItem = ({item: { id, amount, title, iconBgColor }}: RenderItemProps) => {
    return (
        <>
            <View className='flex-1 flex flex-row items-center space-x-2 border border-gray-200 p-2 rounded-md'>
                <View className='bg-primary rounded-full p-1 '>
                <Feather name="plus" size={20} color="white" />
                </View>
                <View>
                    <Text className='text-base font-bold'>{amount}</Text>
                    <Text className='text-[12px]'>{title}</Text>
                </View>
            </View>
        </>
    )
}

const Budgeting = () => {
  return (
    <SafeAreaView className='px-[21px] w-full'>
      <View className=''>
        <Text className='font-bold text-lg text-center py-5 border-b border-b-gray-200 '>Budgeting</Text>

        <Text className='text-lg text-center py-2 text-gray-400 '>JUNE 2021</Text>
      </View>
        {/* <View className='flex flex-col justify-between'> */}
        <FlatList 
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (<RenderItem item={item} />)}
        contentContainerStyle={{ gap: 10 }}
        columnWrapperStyle={{ gap: 10 }}
        numColumns={2}
        />
        
        <View className='flex flex-row items-center space-x-5 my-5 '>
            <AntDesign name="piechart" size={30} color="#40196D" />
            <View className='flex-1'>
                <Text className='text-base font-bold text-primary'>Create a Budget</Text>
                <Text className='text-gray-500'>Create a smart budget not to manage your finances better.</Text>
            </View>
            <AntDesign name="piechart" size={24} color="#40196D" />
        </View>

        <View className='mt-3'>
            <Text className='font-bold text-base text-primary'>All Categories</Text>
            <View className='flex flex-col items-center justify-center '>
                <View className='bg-gray-200 h-[75px] w-[75px] rounded-full flex items-center justify-center '>
                    <AntDesign name="piechart" size={24} color="#40196D" />
                </View>
                <Text className='text-base font-bold text-primary my-2'>Nothing to see here</Text>
                <Text className='w-[80%] mx-auto text-center text-gray-500'>It appears you have not created any transaction in this period</Text>
            </View>
        </View>

    </SafeAreaView>
  )
}

export default Budgeting