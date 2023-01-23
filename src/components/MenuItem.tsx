import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MenuItemInterface } from '../interfaces/interfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { ThemeContext } from '../context/theme/themeContext';

interface MenuItemProps {
    menuItem: MenuItemInterface
}

export const MenuItem = ({ menuItem }: MenuItemProps) => {

    const navigation = useNavigation();
    const { theme } = useContext(ThemeContext);

    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate(menuItem.component as never)}
        >
            <View style={styles.itemContainer}>
                <Icon name={menuItem.icon} size={24} color={theme.colors.primary} />
                <Text style={{
                    ...styles.text,
                    color: theme.colors.text
                }}>
                    {menuItem.name}
                </Text>
                <View style={styles.spacer} />
                <Icon name="chevron-forward-outline" size={24} color={theme.colors.primary} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    spacer: {
        flex: 1
    },
    text: {
        // color: 'white',
        paddingHorizontal: 10
    }
})