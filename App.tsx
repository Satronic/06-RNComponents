import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';
import { ThemeProvider } from './src/context/theme/themeContext';

export default function App() {
  return (
    <AppTheme>
        <StackNavigator />
    </AppTheme>

  );
};

const AppTheme = ({ children }: any) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}