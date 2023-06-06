import { createSlice } from '@reduxjs/toolkit';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const citySlice = createSlice({
  name: 'city',
  initialState: [],
  reducers: {
    addCity: (state, action) => {
      state.push(action.payload);
      // AsyncStorage.setItem('city', JSON.stringify(state))      
    },
  },
});

export const { addCity } = citySlice.actions;

export default citySlice.reducer;
