import React, { useRef } from 'react';
import { View, StyleSheet, Animated, Button, Easing } from 'react-native';
import { Header } from '../components/Header';


export const Animation101Screen = () => {

    const opacity = useRef(new Animated.Value(0)).current;
    let top = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
        }).start();
    }

    const fadeOut = () => {
        Animated.timing(opacity, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
            // easing: Easing.bounce
        }).start();
    }

    const translate = () => {
        Animated.timing(top, {
            toValue: -250,
            duration: 1000,
            useNativeDriver: true,
            easing: Easing.bounce
        }).start();
    }

    return (
        <View style={styles.container}>
            <Header title='Animation 101' />
            <View style={styles.container}>
                <Animated.View style={{
                    ...styles.purpleBox,
                    opacity: opacity,
                    transform: [{
                        translateY: top
                    }]
                }} />
                <View style={styles.containerButtons}>
                    <Button
                        title="Fade In"
                        onPress={fadeIn}
                    />
                    <Button
                        title="translate"
                        onPress={translate}
                    />
                    <Button
                        title="Fade Out"
                        onPress={fadeOut}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    purpleBox: {
        backgroundColor: 'magenta',
        width: 120,
        height: 120
    },
    containerButtons: {
        flexDirection: 'row',
        margin: 10
    }
})