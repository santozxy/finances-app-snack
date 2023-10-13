import { View, StyleSheet } from 'react-native';

import MyGoals from './components/MyGoals/index';
import Header from '../../Components/Header/index';
import { primary } from '../../colors';

export default function Goals() {
  return (
    <View style={styles.container}>
      <View>
        <Header title1 = 'CRIE SUAS' title2 = 'CAIXINHAS' />
      </View>

      <View style={{ flex: 1 }}>
        <MyGoals />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primary,
  },
});
