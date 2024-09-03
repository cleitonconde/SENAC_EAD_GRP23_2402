import * as React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const games = [
  { id: '1', title: 'Age of Empires II', price: '$10' },
  { id: '2', title: 'DOOM 2', price: '$15' },
  { id: '3', title: 'Gran Theft Auto V', price: '$35' },
];

export default function GameListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={games}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('GameDetail', { game: item })}>
            <View style={styles.item}>
              <Text>{item.title}</Text>
              <Text>{item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
