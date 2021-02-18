import { createSlice } from '@reduxjs/toolkit';
import { store } from './store.js';
import {validNumber, putOperator, remove,calculate} from './logics.js';

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
    /*
      I believe once you've memtioned payload in preapre you have to do it for
      all reducers or else it gives a 'non-serialized value' error
    */

    // 3) results should have atleast 4 decimal point precision
    clear: {
      reducer:(state,action) => {
      state.inputs = action.payload;
      state.result = action.payload;
      state.rawInputs = action.payload;
      },
      prepare: ()=>{
        return {payload: '0'}
      }
    },
    addDigit: {
      reducer: (state, action) => {
        state.inputs = action.payload[0];
        state.rawInputs = action.payload[1];
      },
      prepare: (digit) => {
        return { payload: validNumber(digit)};
      }
    },
    delete: {
      reducer: (state, action) => {
        state.inputs = action.payload[0];
        state.rawInputs = action.payload[1];
      },
      prepare: () => {
        return {payload: remove()}
      }
    },
    addOperator:{
    reducer:(state,action)=>{
     state.inputs = action.payload[0];
     state.rawInputs = action.payload[1];
     },
     prepare:(symbol)=>{
       return{ payload: putOperator(symbol)}
     }
  },
    evaluate: {
      reducer:(state,action)=>{
        state.inputs = action.payload[0];
        state.rawInputs = action.payload[1];
        state.result = action.payload[2];
      },
      prepare: ()=>{
        return {payload: calculate()}
      }
    }
  }
});


/*

  2) Pressing an operator immediately following = should start a new
     calculation that operates on the result of the previous evaluation
     */
     // check to see if number is valid for operator (eg. can't divide by zero)

     // any number divided by 0 is invalid
