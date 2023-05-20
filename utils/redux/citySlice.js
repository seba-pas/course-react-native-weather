import { createSlice } from '@reduxjs/toolkit';

const citySlice = createSlice({
  name: 'city',
  initialState: [],
  reducers: {
    addCity: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addCity } = citySlice.actions;

export default citySlice.reducer;
