import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TimerControls from './TimerControls';

export default function Timer({ timer, onStart, onPause, onReset }) {
  return (
    <View style={styles.timer}>
      <Text style={styles.timeText}>{timer.time}s</Text>
      <TimerControls
        isRunning={timer.isRunning}
        onStart={onStart}
        onPause={onPause}
        onReset={onReset}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  timer: {
    flex: 1,
    padding: 20,
    marginBottom: 20,
    borderRadius: 20,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#00bfff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation: 5,
  },
  timeText: {
    fontSize: 60,
    color: '#fff',
    fontFamily: 'Roboto',
    marginBottom: 20,
  },
});
