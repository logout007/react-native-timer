import React from 'react';
import { View, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Import the icon library


export default function TimerControls({ isRunning, onStart, onPause, onReset,onDelete }) {
  return (
    <View style={styles.controls}>
      <View style={styles.buttonContainer}>
        {isRunning ? (
          <Button title="Pause" onPress={onPause} color="#ff5722" />
        ) : (
          <Button title="Start" onPress={onStart} color="#00bfff" />
        )}
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Reset" onPress={onReset} color="#00bfff" />
      </View>
      <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
        <MaterialCommunityIcons name="delete" size={32} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  buttonContainer: {
    width: '40%',
    borderRadius: 25,
    overflow: 'hidden',
  },
  deleteButton: {
    backgroundColor: '#e53935', 
    borderRadius: 50,
    padding: 5,
  },
});
