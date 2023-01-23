import React from 'react'
import { View, StyleSheet } from 'react-native';
import { useContext } from 'react';
import { ThemeContext } from '../context/theme/themeContext';

export const Separator = () => {

    const { theme: { colors } } = useContext(ThemeContext);

    return (
        <View style={{...styles.separator, borderColor: colors.primary}} />
    )
}

const styles = StyleSheet.create({

    separator: {
        borderWidth: 0.2,
    },
});