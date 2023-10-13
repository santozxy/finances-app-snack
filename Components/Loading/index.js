import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { terciary } from '../../colors';
const LoadingAnimation = () => {
  const [dots, setDots] = useState('.');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => {
        if (prevDots === '...') {
          return '.';
        } else {
          return prevDots + '.';
        }
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Carregando{dots}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: terciary,
  },
});

export default LoadingAnimation;
