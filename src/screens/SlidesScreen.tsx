import React, { useState } from 'react'
import { Container } from '../components/Container';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { itemsSlide } from '../data/slidesItem';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { Dimensions } from 'react-native';
import { SlideItem } from '../components/SlideItem';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


const widthScreen = Dimensions.get('screen').width;

export const SlidesScreen = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const navigation = useNavigation();

    return (
        <Container title='Slides'>
            <Carousel
                data={itemsSlide}
                keyExtractor={(item) => item.title}
                renderItem={({ item }) => <SlideItem slideItem={item} />}
                sliderWidth={widthScreen}
                itemWidth={widthScreen}
                layout={'default'}
                onSnapToItem={(index) => {
                    setActiveIndex(index)
                }}
            />

            <TouchableOpacity
                style={{
                    display: activeIndex === (itemsSlide.length - 1) ? 'flex' : 'none'
                }}
                onPress={()=> navigation.navigate('HomeScreen' as never)}
            >
                <View style={styles.buttonContainer}>
                    <Icon name="caret-back-outline" size={24} color={"white"}/>
                    <Text style={styles.buttonText}>Volver al Menu</Text>
                </View>
            </TouchableOpacity>

            <Pagination
                activeDotIndex={activeIndex}
                dotsLength={itemsSlide.length}
                dotColor={'yellow'}
                inactiveDotColor={'white'}
                dotStyle={{
                    width: 20,
                    // height: 10,
                    paddingBottom: 20
                }}
            />


        </Container>

    )
};

const styles = StyleSheet.create({
    buttonContainer:{
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        padding: 8,
        // width: 120
        marginHorizontal: 80
    },
    buttonText: {
        color: 'white',
        fontSize: 17
    }

})
