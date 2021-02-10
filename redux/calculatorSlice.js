import { createSlice } from '@reduxjs/toolkit';

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: {
    input: '0',
    result: 0,
  },
  reducers: {
    addDigit: state, digit => {
      state.input += digit
    }
  }
});
