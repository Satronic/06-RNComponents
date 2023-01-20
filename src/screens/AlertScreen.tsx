import React from 'react';
import { Container } from '../components/Container';
import { Button, Alert } from 'react-native';

export const AlertScreen = () => {

    const showAlert = () => {
        Alert.alert('Alert Title', 'My Alert Msg', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'destructive',
            },
            {
                text: 'OK',
                onPress: () => console.log('OK Pressed'),
                style: 'default'
            },
        ]);
    }

    return (
        <Container title='Alert'>
            <Button
                title="Mostrar Alerta"
                onPress={showAlert}
            />
        </Container>
    )
}
