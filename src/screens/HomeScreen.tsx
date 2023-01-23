import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Header } from '../components/Header';
import { MenuItem } from '../components/MenuItem';
// import Icon from 'react-native-vector-icons/Ionicons';
import { menuItems } from '../data/menuItem';
import { useContext } from 'react';
import { ThemeContext } from '../context/theme/themeContext';
import { Separator } from '../components/Separator';


export const HomeScreen = () => {

  const { theme } = useContext(ThemeContext);
  console.log('Background: ', theme.colors.background);

  return (
    <View style={{
      ...styles.container,
      backgroundColor: theme.colors.background
    }}>
      <FlatList
        data={menuItems}
        renderItem={({ item }) => <MenuItem menuItem={item} />}
        keyExtractor={(item) => item.name}
        ListHeaderComponent={() => <Header title="Menu de Opciones" />}
        ItemSeparatorComponent={() => <Separator />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    // backgroundColor: 'black'
    // backgroundColor: theme.
  },
  itemContainer: {
    padding: 5
  },
  text: {
    // color: theme.colors.text
  }
})