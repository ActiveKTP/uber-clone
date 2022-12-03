import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import { GOOGLE_MAPS_APIKEY } from '@env'
import NavFavourites from './NavFavourites';
import { Icon } from 'react-native-elements'

const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    return (
        <SafeAreaView className="bg-white flex-1">
            <Text className="text-center py-3 text-xl">HelloooOO Activex</Text>
            <View className="text-center border-gray-200 flex-shrink">
                <View>
                    <GooglePlacesAutocomplete
                        placeholder="Where to?"
                        nearbyPlaceAPI="GooglePlacesSearch"
                        debounce={400}
                        styles={toInputBoxStyles}
                        fetchDetails={true}
                        enablePewerByContainer={false}
                        query={{
                            key: GOOGLE_MAPS_APIKEY,
                            language: 'en',
                        }}
                        returnKeyType={"search"}
                        onPress={(data, details = null) => {
                            dispatch(setDestination({
                                location: details.geometry.location,
                                description: data.description,
                            }))
                            navigation.navigate('RideOptionsCard')
                        }}
                    />
                </View>

                <NavFavourites />
            </View>

            <View className="flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100">
                <TouchableOpacity
                    onPress={() => navigation.navigate("RideOptionsCard")}
                    className="flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full">
                    <Icon name="car" type="font-awesome" color="white" size={16} />
                    <Text className="text-white text-center">Rides</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    className="flex flex-row justify-between w-24 px-4 py-3 rounded-full">
                    <Icon name="fast-food-outline" type="ionicon" color="black" size={16} />
                    <Text className="text-center">Eats</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingTop: 20,
        flex: 0,
    },
    textInput: {
        backgroundColor: "#DDDDDF",
        borderRadius: 0,
        fontSize: 18,
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    }
})