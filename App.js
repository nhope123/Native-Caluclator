import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TextInput,
  TouchableOpacity
} from 'react-native';

class Calculator extends Component {
  render(){
    // Declare variables
    const numbers = [[9,8,7],[6,5,4],[3,2,1],['.',0,'=']];
    const operators = ['C','Del','/','*','-','+'];
    let numberButtons = [];
    let operatorButtons = [];
    // Operator buttons
    operators.forEach((item, i) => {
      operatorButtons.push(
        <TouchableOpacity key={'operators' + i} style={styles.operatorBtn}>
          <Text>{item}</Text>
        </TouchableOpacity >)
    });
    // Digits Buttons
    numbers.forEach((item, i) => {
      var content = [];
      item.forEach((value, u) => {
        content.push(
          <TouchableOpacity key={'digits' +i + u} style={styles.digits} >
            <Text>{value}</Text>
          </TouchableOpacity >)
      });
      numberButtons.push(<View style={styles.numberRows}>{content}</View>);
    });

    return (
      <View style={styles.container} >
        <View style={[styles.display, styles.rightText]} >
         <Text>{'123*313.0-1023'}</Text>
        </View>
        <View  style={[styles.results, styles.rightText]}><Text>12</Text></View>
        <View  style={styles.buttons}>
          {/* Numbers Buttons */}
          <View style={styles.numbers}>
            {numberButtons}
          </View>
          {/* operators Buttons */}
          <View style={styles.operators}>
            {operatorButtons}
          </View>

        </View>
      </View>
    );
  }
}

export default function App() {
  return (
    <Calculator />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 28,
  },
  rightText:{
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 15,
  },
  display:{
    flex: 2,
    backgroundColor: 'red',

  },
  results:{
    flex: 1,
    backgroundColor: 'blue',

  },
  buttons:{
    flex: 7,
    backgroundColor: 'green',
    flexDirection: 'row',
    fontWeight: 'bold',
  },
  numbers:{
    flex: 4,
    backgroundColor: 'brown',
  },
  operators:{
    flex:1,
    backgroundColor: 'pink',
  },
  numberRows:{
    flex: 1,
    flexDirection:'row',
  },
  digits:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  operatorBtn:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }

});
