import { createSlice } from '@reduxjs/toolkit';
import {store} from './store.js';

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: {
    inputs: '0',
    result: '0',
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
      reducer: (state, action)=>{
        state.inputs += action.payload
      },
      prepare: (digit)=>{
        return {payload: digit};
      }
    },
    clear: (state)=>{
      state.inputs = '0';
      state.results = '0';
    },
    delete:{
      reducer:(state, action)=>{
        state.inputs = action.payload
      },
      prepare: ()=>{
        let currentState = store.getState();
        currentState = currentState.inputs.substring(0,currentState.inputs.length -1);
        return {payload: (currentState.length < 1)? '0': currentState }
      }
    }
  }
});
