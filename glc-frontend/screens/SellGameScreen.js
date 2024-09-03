import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function SellGameScreen() {
  const [gameName, setGameName] = useState('');
  const [gamePrice, setGamePrice] = useState('');

  const handleSubmit = () => {
    // Aqui você faria a lógica para enviar os dados para o backend ou salvar localmente
    console.log('Game Name:', gameName);
    console.log('Game Price:', gamePrice);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sell Your Game</Text>
      <TextInput
        style={styles.input}
        placeholder="Game Name"
        value={gameName}
        onChangeText={setGameName}
      />
      <TextInput
        style={styles.input}
        placeholder="Game Price"
        keyboardType="numeric"
        value={gamePrice}
        onChangeText={setGamePrice}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
});
