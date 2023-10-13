import { useState, useEffect, useCallback } from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
  RefreshControl,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { database } from '../../../../Firebase/firebase';
import { styles } from './style';
import { primary, secundary } from '../../../../colors';
import Piechart from './PieChart/index';
import Balance from './Balance/index';
import { list, months } from './list';

export default function Moviments() {
  const [moviments, setMoviments] = useState([]); // Estado que armazena os dados do banco.

  const [refreshing, setRefreshing] = useState(false); // Estado para gerenciar atualização da tela.

  const [selectedButton, setSelectedButton] = useState(1); // Estado que armazena o ID do item selecionado.

  const [month, setMonth] = useState('Janeiro'); // Estado que armazena o mês selecionado.

  const [selected, setSelected] = useState(''); // Estado que armazena o ID do item selecionado   passando para o <PieChart/> para renderizar no gráfico.



  const onRefresh = useCallback(() => {
    // Callback refreshing pra atualizar a tela.
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);



  function handleItemFocus(id: string) {
    // Função para verificar qual foi o item selecionado para rederização no gráfico.
    setSelected((prev) => (prev === id ? '' : id));
  }


  const monthFilter = moviments.filter(function (obj) {
    // Função que filtra os objetos que contenham o índice com o mês igual ao mês selecionado.
    return obj.month == month;
  });



  useEffect(() => {
    // Obtendo banco...
    database.collection('moviments').onSnapshot((query) => {
      const data = [];
      query.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      setMoviments(data);
    });
  }, []);

  const renderMoviments = ({ item }) => (
    // Componente de renderização da Lista
    <LinearGradient
      colors={[primary, secundary]}
      style={styles.containerTransactions}>
      <TouchableOpacity
        style={styles.content}
        onPress={() => handleItemFocus(item.id)}>
        <View style={styles.iconColor}>
          <MaterialCommunityIcons
            name="star-four-points"
            size={24}
            color={item.color}
          />
        </View>
        <View style={{ flexDirection: 'column' }}>
          <Text style={styles.label}>{item.label}</Text>
          <Text style={styles.data}>{item.date}</Text>
        </View>

        <View style={{ justifyContent: 'center' }}>
          {item.type === 1 ? (
            <Text style={styles.balance}>+ R$ {item.value} </Text>
          ) : (
            <Text style={styles.expenses}>- R$ {item.value} </Text>
          )}
        </View>
      </TouchableOpacity>
    </LinearGradient>
  );

  const buttons = ({ item }) => (
    // Componente que renderiza os meses.
    <View style={styles.containerButtonMonths}>
      <TouchableOpacity
        onPress={() => {
          setMonth(item.month);
          setSelectedButton(item.id);
        }}
        style={[
          styles.buttonMonth,
          selectedButton === item.id && styles.selectedButton,
        ]}>
        <Text style={styles.buttonMonthText}>{item.month}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ paddingBottom: 80 }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={months}
        renderItem={buttons}
      />

      <Piechart data={monthFilter} selected={selected} />
      <Balance data={monthFilter} />
      <View>
        <FlatList
          data={monthFilter}
          showsVerticalScrollIndicator={false}
          renderItem={renderMoviments}
        />
      </View>
    </ScrollView>
  );
}
