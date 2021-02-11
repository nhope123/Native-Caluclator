import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { store } from './redux/store.js';
import Calculator from './components/calculator.js';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar />
      <Calculator />
    </Provider>
  )
}
