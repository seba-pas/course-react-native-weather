import { configureStore } from '@reduxjs/toolkit';
import cityReducer from './citySlice'
// Importa otros "reducers" si los tienes

const store = configureStore({
  reducer: {
    city: cityReducer,
    // Agrega otros "reducers" aquí si los tienes
  },
});

export default store;
