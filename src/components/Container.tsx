import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Header } from './Header';
import { useContext } from 'react';
import { ThemeContext } from '../context/theme/themeContext';

interface ContainerProps {
    title: string;
    children?: JSX.Element | JSX.Element[];
}

export const Container = ({ title, children }: ContainerProps) => {

    const { theme: { colors } } = useContext(ThemeContext);

    return (
        <View style={{ ...styles.container, backgroundColor: colors.background }}>
            <Header title={title} />
            {children}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
})