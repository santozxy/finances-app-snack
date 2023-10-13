import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, Animated } from 'react-native';

import { terciary } from '../../colors';
import { styles } from './style';

function Header({ title1, title2 }) {
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View
      style={[styles.header, { opacity: fadeAnim, flexDirection: 'row' }]}>
      <Text style={styles.title}>{title1}</Text>
      <Text style={[styles.title, { color: terciary }]}> {title2} </Text>
    </Animated.View>
  );
}

export default Header;
