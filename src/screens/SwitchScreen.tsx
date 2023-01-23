import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { Container } from '../components/Container';
import { CustomSwitch } from '../components/CustomSwitch';
import { Header } from '../components/Header';
import { ThemeContext } from '../context/theme/themeContext';

interface State {
  isActive: boolean;
  isHungry: boolean;
  isHappy: boolean;
}

export const SwitchScreen = () => {

  const { theme: { colors } } = useContext(ThemeContext)

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
    <Container title='Switches'>

      <View style={styles.switchContainer}>
        <Text style={{ ...styles.text, color: colors.text }}>Is Active</Text>
        <CustomSwitch isOn={state.isActive} onChange={(value) => onChange(value, 'isActive')} />
      </View>

      <View style={styles.switchContainer}>
        <Text style={{ ...styles.text, color: colors.text }}>Is Hungry</Text>
        <CustomSwitch isOn={state.isHungry} onChange={(value) => onChange(value, 'isHungry')} />
      </View>

      <View style={styles.switchContainer}>
        <Text style={{ ...styles.text, color: colors.text }}>Is Happy</Text>
        <CustomSwitch isOn={state.isHappy} onChange={(value) => onChange(value, 'isHappy')} />
      </View>

      <Text style={{ ...styles.text, color: colors.text }}>
        {JSON.stringify(state, null, 4)}
      </Text>
    </Container>
  )
}

const styles = StyleSheet.create({
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