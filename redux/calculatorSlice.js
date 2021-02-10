import { createSlice } from '@reduxjs/toolkit';

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: {
    inputs: '0',
    result: 0,
  },
  reducers: {
    addDigit: (state, digit) => {
      console.log(digit)
      state.input += digit
    }
  }
});
