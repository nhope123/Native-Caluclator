import { configureStore } from '@reduxjs/toolkit';
import { calculatorSlice } from './calculatorSlice';

export const store = configureStore({
  
  reducer: calculatorSlice.reducer
},
{
  inputs: '0',
  result: '0',
  rawInputs: '0'
})
