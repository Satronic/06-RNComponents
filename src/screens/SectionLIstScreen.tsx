import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';
import { Container } from '../components/Container';

interface Casas {
    casa: string;
    data: string[];
}

const casas: Casas[] = [
    {
        casa: "DC Comics",
        data: ["Batman", "Superman", "Robin", "Batman", "Superman", "Robin", "Batman", "Superman", "Robin", "Batman", "Superman", "Robin",]
    },
    {
        casa: "Marvel Comics",
        data: ["Antman", "Thor", "Spiderman", "Antman", "Thor", "Spiderman", "Antman", "Thor", "Spiderman", "Antman", "Thor", "Spiderman"]
    },
    {
        casa: "Anime",
        data: ["Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama",]
    }
];

export const SectionLIstScreen = () => {
    return (
        <Container title="Section List">
            <SectionList
                sections={casas}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <Text style={styles.text}>{item}</Text>}
                ListHeaderComponent={() => {
                    return (
                        <View style={styles.listHeader}>
                            <Text style={styles.listHeaderTitle}>HEADER</Text>
                        </View>
                    )
                }}
                ListFooterComponent={() => {
                    return (
                        <View style={styles.listHeader}>
                            <Text style={styles.listHeaderTitle}>FOOTER</Text>
                        </View>
                    )
                }}
                renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.casa}</Text>}
                renderSectionFooter={({ section }) => <Text style={styles.sectionFooter}>{`Total: ${section.data.length}`}</Text>}
                stickySectionHeadersEnabled
            />
        </Container>
    )
}

const styles = StyleSheet.create({
    listHeader: {
        alignItems: 'center',
        padding: 10,
        borderColor: 'white',
        borderWidth: 1
    },
    listHeaderTitle: {
        color: 'white',
        fontSize: 18
    },
    sectionHeader: {
        // color: '#66cc33',
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        paddingVertical: 5,
        paddingHorizontal: 10,
        // backgroundColor: 'rgba(200, 200, 0, 0.3)'
        backgroundColor: 'green'
    },
    sectionFooter: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
        backgroundColor: 'white'
    },
    text: {
        color: 'white',
        paddingHorizontal: 10,
    }
})