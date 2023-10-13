import { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import {
  primary,
  secundary,
  terciary,
  quaternary,
  quinternary,
} from '../../../../colors';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';


export default function Balance() {
  const [showBalance, setShowBalance] = useState(true);
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.itemTitle}> Saldo atual </Text>
        <View style={styles.content}>
          <Text style={styles.currentSymbol}>R$</Text>
          {showBalance ? (
            <View style={styles.skeleton}></View>
          ) : (
            <Text style={styles.balance}>10.073</Text>
          )}
        </View>
      </View>
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity
          onPress={() => setShowBalance(!showBalance)}
          style={styles.buttonUser}>
          {showBalance ? (
            <MaterialCommunityIcons name="eye-off" size={30} color={terciary} />
          ) : (
            <AntDesign name="eye" size={30} color={terciary} />
          )}
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.itemTitle}> Gastos </Text>
        <View style={styles.content}>
          <Text style={styles.currentSymbol}>R$</Text>
          {showBalance ? (
            <View style={styles.skeleton}></View>
          ) : (
            <Text style={styles.expenses}>-568.00</Text>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: secundary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -30,
    marginHorizontal: 14,
    paddingHorizontal: 8,
    borderRadius: 10,
    paddingVertical: 20,
    zIndex: 99,
    borderBottomWidth:5,
    borderColor:quaternary
  },
  itemTitle: {
    fontSize: 20,
    color: quinternary,
    fontWeight:'bold',

  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  currentSymbol: {
    color: quinternary,
    marginRight: 5,
    fontSize: 17,
    fontWeight:'bold'
  },
  skeleton: {
    backgroundColor: terciary,
    width: 80,
    height: 10,
    borderRadius: 10,
  },
  balance: {
    fontSize: 22,
    color: '#37B84C',
    fontWeight:'bold'
  },
  expenses: {
    fontSize: 22,
    color: '#C31E1E',
    fontWeight:'bold'
  },
});
