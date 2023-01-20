import React, { useState } from 'react';
import { RefreshControl, ScrollView, StyleSheet, Text } from 'react-native';
import { Container } from '../components/Container';

export const PullToRefreshScreen = () => {

    const [refresing, setRefresing] = useState(false);
    const [data, setData] = useState('');

    const onRefresh = () => {
        setRefresing(true);
        setTimeout(() => {
            setRefresing(false);
            setData('Se ha cargado los datos');
        }, 1500);
    }

    return (
        <ScrollView
            style={styles.scroll}
            refreshControl={
                <RefreshControl
                    refreshing={refresing} // Estado inicial
                    onRefresh={onRefresh}
                />
            }
        >
            <Container title='Pull to Refresh'>
                <Text style={styles.text}>{data}</Text>
            </Container>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scroll: {
        backgroundColor: 'black'
    },
    text: {
        color: 'white',
        fontSize: 16
    }
})