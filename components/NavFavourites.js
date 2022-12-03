import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'

const data = [
    {
        id: "123",
        icon: "home",
        location: "Home",
        destination: "อำเภอบ้านบึง Chon Buri, Thailand",
    },
    {
        id: "456",
        icon: "briefcase",
        location: "Work",
        destination: "ก๋วยจั๊บโบราณน้ำใส, Lam Phaen Nueang Chamnong",
    }
];

const NavFavourites = () => {

    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => (
                <View
                    className="bg-gray-100 h-0.5"
                />
            )}
            renderItem={({ item: { location, destination, icon } }) => (
                <TouchableOpacity
                    className="flex-row items-center p-5">
                    <Icon
                        className="mr-4 rounded-full bg-gray-300 p-3"
                        name={icon}
                        type="ionicon"
                        color="white"
                        sizw={18}
                    />
                    <View>
                        <Text className="font-semibold text-lg">{location}</Text>
                        <Text className="text-gray-500">{destination}</Text>
                    </View>
                </TouchableOpacity>
            )}
        />
    )
}

export default NavFavourites