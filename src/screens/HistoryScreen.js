import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function HistoryScreen({ route }) {
  const { history } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Riwayat Pencarian</Text>
      <FlatList
        data={history}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>Kata: {item.word}</Text>
            <Text>Terjemahan: {item.translation}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
});
