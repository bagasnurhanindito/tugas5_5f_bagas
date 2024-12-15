import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-elements';

export default function TranslationCard({ word, translation, onButtonPress }) {
  return (
    <Card>
      <Card.Title>Hasil Terjemahan</Card.Title>
      <Card.Divider />
      <Text style={styles.word}>Kata: {word}</Text>
      <Text style={styles.translation}>Terjemahan: {translation}</Text>
      <Button
        title="Salin Terjemahan"
        buttonStyle={styles.button}
        titleStyle={styles.buttonText}
        onPress={onButtonPress}
      />
    </Card>
  );
}

const styles = StyleSheet.create({
  word: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  translation: {
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#2196F3', // Warna biru yang elegan
    borderRadius: 10,
    padding: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
