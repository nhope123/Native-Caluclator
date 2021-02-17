import {operators} from './../components/operator.js';
import { store } from './store.js';

// Function accept a number arguement, returns an array with vaild display and raw data
export const validNumber = (value)=>{
  // return  [display,rawInputs]
  let stateValue =  store.getState();
  let displayData = stateValue.inputs;
  let rawData = stateValue.rawInputs;
  value = String(value);
  switch (value) {
    case '0':
      // Number sould not start with multiple zeros
      // zero immediately after an operator gets a period
      return (rawData === '0' && displayData === '0')? ['0','0']:
                (operators.includes(rawData[rawData.length -1]))? [displayData + '0.', '0.']:
                    [displayData + value, rawData + value];
    case '.':
      // Number should not have multiple periods
      // Period should not come after an operator
      return (rawData[rawData.length -1] === '.' || rawData.includes('.'))? [displayData, rawData]:
                (operators.includes(rawData[rawData.length -1]))? [displayData + '0.', '0.']:
                    [displayData + value, rawData + value];
    default:
      return (rawData.length === 1 && rawData === '0' && displayData === '0')? [value,value]:
                (rawData.length === 1 && rawData === '0')?
                [displayData.substring(0,displayData.length -1) + value, value]:
                    (operators.includes(rawData[rawData.length -1]))? [displayData + value, value]:
                        [displayData + value, rawData + value];
  }
}

export const setOperator = (operator)=>{
  // return  [display,rawInputs]
  let stateValue =  store.getState();
  let displayData = stateValue.inputs;
  let rawData = stateValue.rawInputs;
  switch (operator) {
    case '/':

      break;
    default:

  }
}
