import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';
import { Slide } from '../data/slidesItem';
// import { Container } from './Container';
import { useContext } from 'react';
import { ThemeContext } from '../context/theme/themeContext';

interface SlideItemProps {
    slideItem: Slide
}

export const SlideItem = ({ slideItem }: SlideItemProps) => {

    const { theme: { colors } } = useContext(ThemeContext);


    return (

        <View style={styles.container}>
            <Text style={{ ...styles.title, color: colors.text }}>{slideItem.title}</Text>
            <Image
                style={styles.image}
                source={slideItem.img}
            />
            <Text style={{ ...styles.description, color: colors.text }}>{slideItem.desc}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 0.9,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'white'
    },
    title: {
        // color: '#66aa00',
        // color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        padding: 20
    },
    image: {
        width: 400,
        height: 285,
        resizeMode: 'contain'
    },
    description: {
        // color: 'white',
        fontSize: 14,
        paddingVertical: 20
    }
})