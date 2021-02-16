import { createSlice } from '@reduxjs/toolkit';
import { store } from './store.js';

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: {
    inputs: '0',
    result: '0',
    rawInputs: '0'
  },
  reducers: {
    /* Made changes here:
      To recieve data from the actionCreator/callback
      we have to add a separation of the reducer. So we add
      a Object with keys reducer and prepare. the reducer adds
      this action to the reducer and the prepare acts as the action
      https://redux-toolkit.js.org/api/createSlice#reducers
      */
    addDigit: {
      reducer: (state, action) => {
        state.inputs += action.payload
      },
      prepare: (digit) => {
        // let currentState = store.getState();
        // let inputs = currentState.inputs;
        // inputs += digit

        // if (passValidation())
        // if digit passes validation, add it to inputs, if not, do nothing
        // 5-*6
        // 
        // 
        // if digit is a period, check to see that there's only one period
        // check to see if number is valid for operator (eg. can't divide by zero)

        // if digit passed in is !== 0, overwrite with digit
        // if first digit is a number, and the next digit is a number, add the number to it
        // if the first digit is a 0, and the next input is a period, leave it

        // raw inputs - store value until the operator comes

        // a period before an operator is invalid

        // any number divided by 0 is invalid

        return { payload: digit };
      }
    },
    clear: (state) => {
      state.inputs = '0';
      state.results = '0';
      state.rawInputs = '0';
    },
    delete: {
      reducer: (state, action) => {
        state.inputs = action.payload
      },
      prepare: () => {
        let currentState = store.getState();
        currentState = currentState.inputs.substring(0, currentState.inputs.length - 1);
        return { payload: (currentState.length < 1) ? '0' : currentState }
      }
    }
  }
});
