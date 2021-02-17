import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './../styles/style.js';
import { calculatorSlice } from './../redux/calculatorSlice';

// Declare variables
export const operators = ['C', 'Del', '/', '*', '-', '+'];
let operatorButtons = [];

class Operators extends Component {
  render() {
    operators.forEach((item, i) => {
      let callback = (item === 'C') ? this.props.reset :
        (item === 'Del') ? this.props.delete :
          () => { this.props.addOperator(item) }
      operatorButtons.push(
        <TouchableOpacity
          key={'operators' + i}
          style={[styles.operatorBtn, styles.digits]}
          onPress={
            callback
          }>
          <Text style={styles.text}>{item}</Text>
        </TouchableOpacity >)
    });
    return (
      <View style={styles.operators}>
        {operatorButtons}
      </View>
    );
  }
}

// Prepare actions for use in the component
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    reset: calculatorSlice.actions.clear,
    delete: calculatorSlice.actions.delete,
    addOperator: calculatorSlice.actions.addOperator
  }, dispatch)
};

//  Connect the actions to the component with redux connect
export default connect(null, mapDispatchToProps)(Operators);
