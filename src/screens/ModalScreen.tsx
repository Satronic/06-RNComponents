import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Button, Modal, View } from 'react-native';
import { Container } from '../components/Container';

export const ModalScreen = () => {

    const [isVisible, setIsVisible] = useState(false);

    return (
        <Container title="Modal">
            <Button
                title="Abrir Modal"
                onPress={() => setIsVisible(true)}
            />

            <Modal
                animationType='fade'
                visible={isVisible}
                transparent={true}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContainerTitle}>
                            <Text style={styles.modalTitle}>Titulo</Text>
                        </View>
                        <Text style={styles.modalMessage}>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</Text>
                        <View style={styles.modalContainerButtons}>
                            <Button
                                title="Cancelar"
                                onPress={() => setIsVisible(false)}
                            />
                            <Button
                                title="Aceptar"
                                onPress={() => setIsVisible(false)}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        </Container>
    )
}

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(50, 50, 50, 0.6)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContainer: {
        backgroundColor: 'black',
        width: '90%',
        height: '25%',
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: 'white',
        padding: 10
    },
    modalContainerTitle: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    },
    modalTitle: {
        color: 'yellow',
        fontSize: 20
    },
    modalMessage: {
        color: 'white',
        fontSize: 15,
        alignSelf: 'auto'
    },
    modalContainerButtons: {
        // flex: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 20
    }
});