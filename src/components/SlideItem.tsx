import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';
import { Slide } from '../data/slidesItem';
// import { Container } from './Container';

interface SlideItemProps {
    slideItem: Slide
}

export const SlideItem = ({ slideItem }: SlideItemProps) => {


    return (

        <View style={styles.container}>
            <Text style={styles.title}>{slideItem.title}</Text>
            <Image
                style={styles.image}
                source={slideItem.img}
            />
            <Text style={styles.description}>{slideItem.desc}</Text>
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
    title:{
        // color: '#66aa00',
        color: 'white',
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
        color: 'white',
        fontSize: 14,
        paddingVertical: 20
    }
})