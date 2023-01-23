import React, { useContext } from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Container } from '../components/Container';
import { ThemeContext } from '../context/theme/themeContext';

export const ChangeThemeScreen = () => {

    const { theme, setDarkTheme, setLightTheme } = useContext(ThemeContext); 


    return (
        <Container title='Themes'>
            <View style={styles.container}>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() =>setLightTheme()}
            >
                <Text style={styles.buttonText}>Light</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() =>setDarkTheme()}
            >
                <Text style={styles.buttonText}>Dark</Text>
            </TouchableOpacity>
            </View>
        </Container>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttonContainer: {
        backgroundColor: '#009900',
        padding: 10,
        width: '33%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 16
    }
})