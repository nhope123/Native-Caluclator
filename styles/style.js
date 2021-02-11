import {StyleSheet}from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 28,
  },
  rightText:{
    justifyContent: 'center',
    alignItems: 'flex-end',

  },
  displayText:{
    padding: 20,
    fontSize: 28,
    fontWeight: 'bold',
    borderBottomWidth:2,
    borderBottomColor: 'grey',
  },
  text:{
    fontSize: 18,
    fontWeight: 'bold',
  },
  display:{
    flex: 2,
    backgroundColor: 'white',

  },
  results:{
    flex: 1,
    backgroundColor: 'white',

  },
  buttons:{
    flex: 7,
    backgroundColor: 'green',
    flexDirection: 'row',
    fontWeight: 'bold',
    backgroundColor: 'brown',
  },
  numbers:{
    flex: 4,

  },
  operators:{
    flex:1,
    //backgroundColor: 'pink',
  },
  numberRows:{
    flex: 1,
    flexDirection:'row',
  },
  digits:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 20,
    margin:15,
    backgroundColor:'white',
    // ios
    shadowColor: 'black',
    shadowOffset: {width:5, height: 5},
    shadowOpacity: 0.7,
    shadowRadius: 7,
    // android
    elevation: 3,
  },
  operatorBtn:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }

});

export default styles;
