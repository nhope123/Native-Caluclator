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
    const numbers = [[9,8,7],[6,5,4],[3,2,1],['.',0,'=']];
    const operators = ['/','*','-','+'];
    let numberButtons = [];
    let operatorButtons = [];
    operators.forEach((item, i) => {
      operatorButtons.push(
        <TouchableOpacity >
          <Text>{item}</Text>
        </TouchableOpacity >)
    });

    for (var i = 0; i < numbers.length; i++) {
      var constest = [];
      console.log(i);
      for (var j = 0; j < numbers[i].length; j++) {
        constest.push(
          <TouchableOpacity style={styles.digits} >
            <Text>{numbers[i][j]}</Text>
          </TouchableOpacity >)

      }

      numberButtons.push(<View style={styles.numberRows}>{constest}</View>);
    }




    return (
      <View style={styles.container} >
        <View style={styles.display} > 123*313.0-1023</View>
        <View  style={styles.results}>12</View>
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
  },
  display:{
    flex: 2,
    backgroundColor: 'red',
  },
  results:{
    flex: 1,
    background-color: 'blue',
  },
  buttons:{
    flex: 7,
    backgroundColor: 'green',
    flexDirection: 'row',
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

  }

});
