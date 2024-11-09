import React, { useState, useEffect } from 'react';
import { View, Button, FlatList, Alert, StyleSheet, ScrollView, Text } from 'react-native';
import Timer from './components/Timer';

const MAX_TIMERS = 5;

export default function App() {
  const [timers, setTimers] = useState([]);

  const addTimer = () => {
    if (timers.length < MAX_TIMERS) {
      setTimers([
        ...timers,
        { id: Date.now().toString(), time: 60, isRunning: false },
      ]);
    } else {
      Alert.alert("Maximum timer limit reached.");
    }
  };

  const updateTimer = (id, changes) => {
    setTimers(timers.map(timer => timer.id === id ? { ...timer, ...changes } : timer));
  };

  const deleteTimer = (id) => {
    setTimers((prevTimers) => prevTimers.filter((timer) => timer.id !== id));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimers(timers.map(timer => {
        if (timer.isRunning && timer.time > 0) {
          return { ...timer, time: timer.time - 1 };
        } else if (timer.isRunning && timer.time === 0) {
          Alert.alert(`Timer ${timer.id} completed!`);
          return { ...timer, isRunning: false };
        }
        return timer;
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, [timers]);

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.navbarText}>TimerApp</Text>
      </View>
      <Button title="Add Timer" onPress={addTimer} color="#00bfff" style={styles.addButton} />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <FlatList
          data={timers}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Timer
              timer={item}
              onStart={() => updateTimer(item.id, { isRunning: true })}
              onPause={() => updateTimer(item.id, { isRunning: false })}
              onReset={() => updateTimer(item.id, { time: 60, isRunning: false })}
              onDelete={() => deleteTimer(item.id)}

            />
          )}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c',
    padding: 20,
  },
  navbar: {
    backgroundColor: '#00bfff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'left',
    marginBottom: 20,
    marginTop:30
  },
  navbarText: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  },
  addButton: {
    marginBottom: 20,
  },
  scrollView: {
    marginTop: 20,
  },
});
