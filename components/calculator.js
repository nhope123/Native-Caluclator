import React,{Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';

import { calculatorSlice } from './../redux/calculatorSlice';
import styles from './../styles/style.js';
import Digits from './numbers.js';
import Operators from './operator.js';

const mapStateToProps = state => {
  /*
    I change the way we access the state, realized this through viewing
    the state in the web redux developer tool.
  */
  return{
  inputValue: state.inputs,
  resultValue: state.result
  }
};

class Calculator extends Component {
  render(){

    return (
      <View style={styles.container} >
        <View style={[styles.display, styles.rightText]} >
          {/* Keyboard input */}
         <Text style={styles.displayText}>{this.props.inputValue}</Text>
        </View>
        <View  style={[styles.results, styles.rightText]}>
          {/* Calculation results */ }
          <Text style={styles.displayText} >{this.props.resultValue}</Text>
        </View>
        <View  style={styles.buttons}>
          {/* Numbers Buttons */}
          <Digits />
          {/* operators Buttons */}
          <Operators />
        </View>
      </View>
    );
  }
}

//  Connect the store and the actions to the component with redux connect
export default connect(mapStateToProps)(Calculator);
