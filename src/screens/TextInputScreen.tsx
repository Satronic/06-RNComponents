import React, { useState } from 'react';
import { Container } from '../components/Container';
import { TextInput, StyleSheet, Text } from 'react-native';

export const TextInputScreen = () => {

    const [text, onChangeText] = useState('Useless Text');
    const [number, onChangeNumber] = useState('');

    return (
        <Container title='Text Input'>
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="useless placeholder"
                keyboardType="ascii-capable"
            />
            <Text style={styles.text}>
                {JSON.stringify(number, null, 4)}
            </Text>
        </Container>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        color: 'white',
        borderWidth: 1,
        borderColor: 'white',
        padding: 10,
    },
    text: {
        color: 'white'
    }
});
