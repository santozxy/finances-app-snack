import { Text, View } from 'react-native';
import { styles } from './style';

export default function Balance({ data }) {
  var converterString = Number(data.value);


  var balance = data.map((list) => (list.type === 1 ? Number(list.value) : 0));
  var spending = data.map((list) => (list.type === 0 ? Number(list.value) : 0));

  const initialValue = 0;

  const inputs = balance.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
  const outputs = spending.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );

  return (
    <View style={styles.container}>
      <View style={styles.containerInfo}>
        <Text style={styles.itemTitle}>Entradas </Text>
        <View style={styles.content}>
          <Text style={styles.currentSymbol}>R$</Text>
          <Text style={styles.balance}>{inputs}</Text>
        </View>
      </View>

      <View style={styles.containerInfo}>
        <Text style={styles.itemTitle}>Saídas </Text>
        <View style={styles.content}>
          <Text style={styles.currentSymbol}>R$</Text>
          <Text style={styles.expenses}>{outputs}</Text>
        </View>
      </View>
    </View>
  );
}
