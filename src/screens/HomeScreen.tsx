import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { MenuItem } from '../components/MenuItem';
// import Icon from 'react-native-vector-icons/Ionicons';

const menuItems = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101Screen'
  },
  {
    name: 'Animation 102',
    icon: 'albums-outline',
    component: 'Animation102Screen'
  },
]

export const HomeScreen = () => {



  const renderListHeader = () => {
    return (
      <View>
        <Text style={styles.title}>Menu de Opciones</Text>
      </View>
    )
  }

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
        ListHeaderComponent={() => renderListHeader()}
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
  title: {
    fontSize: 20,
    fontWeight:'bold',
    marginVertical: 10,
    color: 'white'
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