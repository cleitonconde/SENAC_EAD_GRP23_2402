import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('GameList')}
      >
        <Text style={styles.buttonText}>Comprar Jogos</Text>
      </TouchableOpacity>
      <View style={styles.buttonSpacing} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SellGame')}
      >
        <Text style={styles.buttonText}>Vender Jogos</Text>
        
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 200,
    padding: 15,
    backgroundColor: '#007BFF',
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonSpacing: {
    height: 16,
  },
});
