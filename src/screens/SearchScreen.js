import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';
import TranslationCard from '../components/TranslationCard';

export default function SearchScreen({ navigation }) {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);

  const translateWord = () => {
    // Simulasi API
    const translations = {
      hello: 'halo',
      world: 'dunia',
      apple: 'apel',
      buku: 'book',

    };

    const translated = translations[query.toLowerCase()] || 'Tidak ditemukan';
    setResult({ word: query, translation: translated });
    setHistory([...history, { word: query, translation: translated }]);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Cari kata..."
        value={query}
        onChangeText={setQuery}
      />
      <Button title="Terjemahkan" onPress={translateWord} />
      {result && (
        <TranslationCard word={result.word} translation={result.translation} />
      )}
      <Button
        title="Lihat Riwayat"
        onPress={() => navigation.navigate('History', { history })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
  },
});
