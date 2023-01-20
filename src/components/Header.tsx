import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface HeaderProps {
    title: string;
}

export const Header = ({ title }: HeaderProps) => {

    const { top } = useSafeAreaInsets(); // Evitar el notch

    return (
        <View style={{
            ...styles.containerTitle,
            top
        }}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containerTitle: {
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
        color: 'yellow'
    },
});