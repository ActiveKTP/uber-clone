import { View, Text, SafeAreaView, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectTravelTimeInfomation } from '../slices/navSlice';
import Currency from 'react-currency-formatter';

const data = [
    {
        id: "Uber-X-123",
        title: "UberX",
        multiplier: 1,
        image: "https://links.papareact.com/3pn"
    },
    {
        id: "Uber-XL-456",
        title: "Uber XL",
        multiplier: 1.2,
        image: "https://links.papareact.com/5w8"
    },
    {
        id: "Uber-LUX-789",
        title: "Uber LUX",
        multiplier: 1.75,
        image: "https://links.papareact.com/7pf"
    },
];

// If we have SURGE pricing, this goes up
const SURGE_CHARGE_RATE = 15;

const RideOptionsCard = () => {
    const navigation = useNavigation();
    const [selected, setSelected] = useState(null)
    const travelTimeInfomation = useSelector(selectTravelTimeInfomation)

    return (
        <SafeAreaView className="bg-white flex-1">
            <View>
                <TouchableOpacity
                    onPress={() => navigation.navigate("NavigateCard")}
                    className="absolute top-3 left-5 z-50 p-2 rounded-full">
                    <Icon name="chevron-left" type="fontawesome" />
                </TouchableOpacity>
                <Text className="text-center py-3 text-xl">Select a Ride - {travelTimeInfomation?.distance?.text}</Text>
            </View>

            <View className="text-center border-gray-200 flex-shrink">
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item: { id, title, multiplier, image }, item }) => (
                        <TouchableOpacity

                            onPress={() => setSelected(item)}
                            className={`flex-row justify-between items-center px-10 ${id === selected?.id && "bg-gray-200"}`}
                        >
                            <Image
                                style={{
                                    width: 100,
                                    height: 100,
                                    resizeMode: "contain",
                                }}
                                source={{ uri: image }}
                            />
                            <View className="-ml-6">
                                <Text className="text-xl font-semibold">{title}</Text>
                                <Text>{travelTimeInfomation?.duration?.text} Travel time</Text>
                            </View>
                            <Text>
                                <Currency
                                    quantity={(travelTimeInfomation?.duration?.value * SURGE_CHARGE_RATE * multiplier) / 100}
                                    currency="THB"
                                />
                            </Text>
                        </TouchableOpacity>
                    )}
                />
            </View>

            <View className="mt-auto border-t border-gray-200">
                <TouchableOpacity
                    disabled={!selected}
                    className={`bg-black py-3 m-3 ${!selected && "bg-gray-300"}`}
                >
                    <Text className="text-center text-white text-xl">
                        Choose {selected?.title}
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default RideOptionsCard