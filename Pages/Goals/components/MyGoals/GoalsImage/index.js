import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Divider } from 'react-native-elements';
import {
  primary,
  secundary,
  terciary,
  quaternary,
  quinternary,
} from '../../../../../colors';

const GoalsImage = () => {
  const navigation = useNavigation();
  const animValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animValue, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, [animValue]);

  const opacity = animValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const translateY = animValue.interpolate({
    inputRange: [0, 1],
    outputRange: [50, 0],
  });

  const scale = animValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0.9, 1.1, 1],
  });

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../../../../../assets/goals.png')}
        style={{
          opacity,
          translateY,
          transform: [{ scale }],
          width: 300,
          height: 250,
        }}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AddGoals')}>
        <Text style={styles.buttonText}> ADICIONAR </Text>
      </TouchableOpacity>
      <Divider
        style={{ marginVertical: 10, width: '100%', backgroundColor: terciary }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 400,
    height: 250,
  },
  button: {
    marginTop: 20,
    backgroundColor: terciary,
    borderRadius: 15,
    height: 50,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default GoalsImage;
