import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { CustomSwitch } from '../components/CustomSwitch';
import { Header } from '../components/Header';

interface State {
  isActive: boolean;
  isHungry: boolean;
  isHappy: boolean;
}

export const SwitchScreen = () => {

  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true
  });

  const onChange = (value: boolean, field: keyof State) => {
    setState({
      ...state,
      [field]: value
    });
  }

  return (
    <View style={styles.container}>
      <Header title="Switches" />

      <View style={styles.switchContainer}>
        <Text style={styles.text}>Is Active</Text>
        <CustomSwitch isOn={state.isActive} onChange={(value) => onChange(value, 'isActive')} />
      </View>

      <View style={styles.switchContainer}>
        <Text style={styles.text}>Is Hungry</Text>
        <CustomSwitch isOn={state.isHungry} onChange={(value) => onChange(value, 'isHungry')} />
      </View>

      <View style={styles.switchContainer}>
        <Text style={styles.text}>Is Happy</Text>
        <CustomSwitch isOn={state.isHappy} onChange={(value) => onChange(value, 'isHappy')} />
      </View>

      <Text style={styles.text}>
        {JSON.stringify(state, null, 4)}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5
  },
  text: {
    color: 'white',
  }
});