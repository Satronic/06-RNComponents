import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Header } from './Header';

interface ContainerProps {
    title: string;
    children?: JSX.Element | JSX.Element[];
}

export const Container = ({ title, children }: ContainerProps) => {
    return (
        <View style={styles.container}>
            <Header title={title} />
            {children}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: 'black'
    },
})