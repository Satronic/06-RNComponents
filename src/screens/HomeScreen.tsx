import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Header } from '../components/Header';
import { MenuItem } from '../components/MenuItem';
// import Icon from 'react-native-vector-icons/Ionicons';
import { menuItems } from '../data/menuItem';


export const HomeScreen = () => {

  const renderItemSeparator = () => {
    return (
      <View style={styles.separator}/>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={menuItems}
        renderItem={({ item }) => <MenuItem menuItem={item}/>}
        keyExtractor={(item) => item.name}
        ListHeaderComponent={() => <Header title="Menu de Opciones" />}
        ItemSeparatorComponent={() => renderItemSeparator()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'black'
  },
  itemContainer: {
    padding: 5
  },
  separator: {
    borderWidth: 0.2,
    borderColor: 'white'
  },
  text: {
    color: 'white'
  }
})