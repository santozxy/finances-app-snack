import { useState } from 'react';
import {
  Text,
  ScrollView,
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

import {
  primary,
  secundary,
  terciary,
  quaternary,
  quinternary,
} from '../../../../colors';

export default function Actions() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}>
      <LinearGradient
        colors={[secundary, primary, secundary]}
        style={styles.actionButton}>
        <TouchableOpacity>
          <View style={styles.areaButton}>
            <MaterialCommunityIcons
              name="transfer"
              size={30}
              color={terciary}
            />
          </View>
          <Text style={styles.labelButton}> Entradas </Text>
        </TouchableOpacity>
      </LinearGradient>

      <LinearGradient
        colors={[secundary, primary, secundary]}
        style={styles.actionButton}>
        <TouchableOpacity>
          <View style={styles.areaButton}>
            <AntDesign name="tagso" size={30} color={terciary} />
          </View>
          <Text style={styles.labelButton}> Compras </Text>
        </TouchableOpacity>
      </LinearGradient>

      <LinearGradient
        colors={[secundary, primary, secundary]}
        style={styles.actionButton}>
        <TouchableOpacity>
          <View style={styles.areaButton}>
            <AntDesign name="creditcard" size={30} color={terciary} />
          </View>
          <Text style={styles.labelButton}> Carteira </Text>
        </TouchableOpacity>
      </LinearGradient>

      <LinearGradient
        colors={[secundary, primary, secundary]}
        style={styles.actionButton}>
        <TouchableOpacity>
          <View style={styles.areaButton}>
            <MaterialCommunityIcons
              name="chart-line"
              size={30}
              color={terciary}
            />
          </View>
          <Text style={styles.labelButton}> Investir </Text>
        </TouchableOpacity>
      </LinearGradient>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 18,
    paddingVertical: 14,
  },
  actionButton: {
    margin: 8,
    backgroundColor: primary,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 15,
    borderBottomWidth:6,
    borderColor:quaternary
  },
  areaButton: {
    alignItems: 'center',
  },
  labelButton: {
    fontsize: 18,
    marginTop: 5,
    fontWeight: 'bold',
    color: quinternary,
  },
});
