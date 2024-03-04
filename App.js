// App.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import GameInterface from './GameInterface';

const App = () => {
  return (
    <View style={styles.container}>
      <GameInterface />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
