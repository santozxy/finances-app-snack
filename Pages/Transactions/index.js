import { View, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { primary, secundary } from '../../colors';
import Header from '../../Components/Header/index';
import Moviments from './components/Moviments/index';

export default function Transactions() {
  return (
    <LinearGradient
      colors={[primary, secundary, primary]}
      style={styles.container}>
      <View style={styles.contentHeader}>
        <Header title1="TRANSAÇÕES" />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.contentMoviments}>
        <Moviments />
      </ScrollView>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentMoviments: {
    marginHorizontal: 15,
    paddingBottom: 70,
  },
});
