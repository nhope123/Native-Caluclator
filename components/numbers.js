import React,{Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Text, View, TouchableOpacity } from 'react-native';

import styles from './../styles/style.js';
import { calculatorSlice } from './../redux/calculatorSlice';

// Declare variables
const numbers = [[9,8,7],[6,5,4],[3,2,1],['.',0,'=']];
let numberButtons = [];

class Digits extends Component {
  render(){

    numbers.forEach((item, i) => {
      var content = [];
      item.forEach((value, u) => {
        content.push(
          <TouchableOpacity
              key={'digits' + i +u}
              style={styles.digits}
              onPress={(value === '=')? this.props.evaluate :
                ()=>this.props.addDigit(value)
              }
              >
            <Text style={styles.text}>{value}</Text>
          </TouchableOpacity >)
      });
      numberButtons.push(<View key={'view'+i}style={styles.numberRows}>{content}</View>);
    });
    return (
      <View style={styles.numbers}>
        {numberButtons}
      </View>
    );
  }
}

// Prepare actions for use in the component
const mapDispatchToProps = (dispatch) => {
  /*
    To access the actionCreator/ callback we call the slice with actions then
    point it to the actionCreator/callbak you wish to use.
  */
  return bindActionCreators({
    addDigit: calculatorSlice.actions.addDigit,
    evaluate: calculatorSlice.actions.evaluate
  },dispatch)
};

//  Connect the actions to the component with redux connect
export default connect(null,mapDispatchToProps)( Digits);
