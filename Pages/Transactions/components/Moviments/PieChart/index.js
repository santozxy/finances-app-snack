import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { VictoryPie } from 'victory-native';
import {
  primary,
  secundary,
  terciary,
  quaternary,
  quinternary,
} from '../../../../../colors';

export default function Piechart({ data, selected }) {
  return (
    <LinearGradient
      style={styles.containerGraphic}
      colors={[secundary, primary]}>
      <VictoryPie
        height={300}
        data={data}
        x="label"
        y="value"
        labelRadius={({ innerRadius }) => innerRadius + 10}
        colorScale={data.map((list) => list.color)}
        innerRadius={50}
        padAngle={8}
        style={{
          labels: {
            fontSize: 15,
            fill: quinternary,
            fontWeight: 'bold',
            display: ({ datum }) =>
              datum.id === selected  ? datum.label : 'none',
          },

          data: {
            fillOpacity: ({ datum }) =>
              datum.id === selected || selected === '' ? 1 : 0.3,
            stroke: ({ datum }) =>
              datum.id === selected ? datum.color : 'none',
            strokeWidth: 10,
            strokeOpacity: 0.7,
          },
        }}
        animate={{
          easing: 'bounce',
          duration: 800,
          onLoad: { duration: 800 },
        }}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  containerGraphic: {
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: quaternary,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.45,
    shadowRadius: 3.84,
    elevation: 5,
  },
  
});
