import { configStore } from '@reduxjs/toolkit';
import { calculatorSlice } from './calculatorSlice';

export const store = configStore({
  reducers: calculatorSlice.reducers
})
