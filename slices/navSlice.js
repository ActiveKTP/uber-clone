import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    origin: null,
    destination: null,
    travelTimeInfomation: null,
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setOrigin: (state, action) => {
            state.origin = action.payload;
        },
        setDestination: (state, action) => {
            state.destination = action.payload;
        },
        setTravelTimeInfomation: (state, action) => {
            state.travelTimeInfomation = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setOrigin, setDestination, setTravelTimeInfomation } = navSlice.actions

//selector
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInfomation = (state) => state.nav.travelTimeInfomation;

export default navSlice.reducer