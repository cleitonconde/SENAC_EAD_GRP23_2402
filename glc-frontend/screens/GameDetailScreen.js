import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function GameDetailScreen({ route, navigation }) {
  const { game } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{game.title}</Text>
      <Text style={styles.price}>{game.price}</Text>
      <Text style={styles.description}>Descrição do jogo...</Text>
      <Button title="Comprar" onPress={() => { /* Lógica de compra */ }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 8,
  },
  price: {
    fontSize: 20,
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
});
