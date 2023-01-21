import React, { useState } from 'react';
import { View } from 'react-native';
import { ActivityIndicator } from 'react-native';
import { Image } from 'react-native';
import { FlatList } from 'react-native';
import { Text, StyleSheet } from 'react-native';
import { Container } from '../components/Container';

export const InfiniteScrollScreen = () => {

    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
    const [isLoading, setIsLoading] = useState(false);

    const renderItem = (item: number) => {
        return (
            <View style={styles.containerItem}>
                <Text style={styles.text}>{item}</Text>
                <View style={styles.containerImage}>
                    <Image
                        style={styles.image}
                        onLoadStart={() => setIsLoading(true)}
                        onLoad={() => {
                            setTimeout(() => {
                                setIsLoading(false);
                            }, 300);
                        }}
                        source={{
                            uri: `https://picsum.photos/id/${item}/200/300`
                        }}
                    />
                    <ActivityIndicator
                        size={48}
                        style={{
                            elevation: 10,
                            position: 'absolute',
                            display: isLoading ? 'flex' : 'none'
                        }}
                    />

                </View>
            </View>
        )
    };

    const loadData = () => {
        const newArray: number[] = [];
        for (let i = 0; i < 8; i++) {
            newArray[i] = numbers.length + (i + 1);
        }

        setNumbers([...numbers, ...newArray]);
    }

    return (
        <Container title='Infinite Scroll'>
            <View>
                <FlatList
                    data={numbers}
                    keyExtractor={item => item.toString()}
                    renderItem={({ item }) => renderItem(item)}
                    onEndReached={() => loadData()}
                    onEndReachedThreshold={0.5}
                />
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    containerItem: {
        height: 200,
        flexDirection: 'row',
        margin: 10
    },
    text: {
        color: 'white',
    },
    containerImage: {
        justifyContent:'center',
        alignItems: 'center'
    },
    image: {
        width: 300,
        height: 200
    }
})