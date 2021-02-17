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
      // BUG: delete on '0.' then a number creates an error
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

export const putOperator = (oper)=>{
  // return  [display,rawInputs]
  /*
    1) Period before operator, add zero and operator to display.
    2) Two consecutive operators, first is removed and last added except '-'.
       eg [ 5 + * 7 = 35 ( 5 * 7) ] [ 5 * - 5 = -25 ]
    3) A third operator overrides the previous. eg 5 * - / = 5/
  */
  let statevalue =  store.getState();
  let display = statevalue.inputs;
  let data = statevalue.rawInputs;
  return (data[data.length -1] === '.')?[display+'0'+oper , oper]:
          (data.length ===1 && operators.includes(data) && oper === '-')?
                [display + oper, data + oper]:
            (data.length ===1 && operators.includes(data))?
                [display.substring(0,display.length -1) + oper, oper]:
              (data.length ===2 && operators.includes(data[0]))?
                [display.substring(0,display.length -2)+oper, oper]:
                [display + oper, oper];
}

export const remove = ()=>{
  let freshState = store.getState();
  let displayState = freshState.inputs;
  let inputState = freshState.rawInputs;
  var displayLength = displayState.length;
  let removeDisplay = displayState.substring(0,displayLength -1);
  let removeInput = inputState.substring(0,inputState.length -1);
  return (displayLength === 1)? ['0','0']:
          (inputState.length === 1 && displayLength > 1)? [removeDisplay, displayState[displayLength -2]]:
            (inputState.substr(inputState.length - 2,2) === '0.' && operators.includes(displayState[displayLength -3]))?
            [displayState.substring(0,displayLength -2),displayState[displayLength -3]]:
              [removeDisplay,removeInput]
}
