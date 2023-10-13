import { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Platform,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { Input } from 'react-native-elements';
import Select from '@redmin_delishaj/react-native-select';

import { database } from '../../Firebase/firebase';
import Header from '../../Components/Header/index';
import {
  primary,
  secundary,
  terciary,
  quaternary,
  quinternary,
} from '../../colors';

const categories = [
  { text: 'Compras', value: 'Compras' },
  { text: 'Emergência', value: 'Emergência' },
  { text: 'Reserva', value: 'Reserva' },
  { text: 'Viagens', value: 'Viagens' },
  { text: 'Contas', value: 'Contas' },
];
export default function AddGoals({ navigation }) {
  const [date, setDate] = useState(new Date()); // Estado para armazenar a data selecionada.

  const [newCategory, setNewCategory] = useState(); //Estado para armazenar a categoria selecionada.

  const [newLabel, setNewLabel] = useState(); // Estado para armazenar o título da meta.

  const [newMyValue, setNewMyValue] = useState(); // Estado para armazenar o valor que o usuário deseja reservar.

  const [newNecessaryValue, setNewNecessaryValue] = useState(); // Estado para armazenar o valor que o usuário precisa alcançar.

  const [addIcon, setAddIcon] = useState(); // Estado para armazenar o ícone de acordo com a categoria escolhida.

  const [isFormValid, setIsFormValid] = useState(false); // Estado para armazenar vericação dos formulários.

  const [alertMessage, setAlertMessage] = useState(false); // Estado para gerenciar alerta caso, os campus não seja preenchidos.

  function iconAdd(value) {
    // Faz a verificação para utilizar o ícone de acordo com a categoria selecionada.
    switch (value) {
      case 'Compras':
        setAddIcon('shopping-outline');
        break;
      case 'Emergência':
        setAddIcon('hospital-box-outline');
        break;
      case 'Reserva':
        setAddIcon('cash-register');
        break;
      case 'Viagens':
        setAddIcon('airplane');
        break;
      case 'Contas':
        setAddIcon('ticket-percent-outline');
        break;
      default:
        null;
    }
  }

  const addGoals = () => {
    database
      .collection('goals')
      .add({
        category: newCategory,
        label: newLabel,
        myValue: newMyValue,
        necessaryValue: newNecessaryValue,
        icon: addIcon,
      })
      .then((docRef) => {
        console.log('Documento feito com o ID: ', docRef.id);
      })
      .catch((error) => {
        console.error('Erro na adição do documento: ', error);
      });
    setAddIcon(null);
  };
  function verifyForms() {
    // Faz a verificação caso o usuário não tenha preenchido o formulário
    if (isFormValid) {
      setAlertMessage(null);
      addGoals();
      setTimeout(() => {
        navigation.navigate('Goals');
      }, 2000);
    } else {
      setAlertMessage(true);
    }
  }
  useEffect(() => {
    setIsFormValid(
      !!newCategory && !!newLabel && !!newMyValue && !!newNecessaryValue
    );
  }, [newCategory, newLabel, newMyValue, newNecessaryValue]);

  return (
    <LinearGradient colors={[secundary, primary]} style={styles.container}>
      <Header title1="ADICIONAR" title2="CAIXINHA" />

      <LinearGradient colors={[primary, secundary]} style={styles.inputs}>
        <View></View>
        <View style={styles.dropContainer}>
          <Text style={styles.titleCategory}> Categoria </Text>

          <Select
            placeholder="Selecionar"
            data={categories}
            onSelect={(value) => {
              setNewCategory(value);
              iconAdd(value);
            }}
            value={newCategory}
            config={styles.drop}
            width={200}
            dropdownHeight={700}
            search
            searchPlaceholder="Procurar"
            noDataText="Nenhum resultado"
          />
        </View>

        <Input
          leftIcon={
            <MaterialCommunityIcons
              name="subtitles"
              size={25}
              color={terciary}
            />
          }
          label="Titulo"
          labelStyle={{ color: quinternary, fontWeight: 'bold', fontSize: 16 }}
          placeholder="Ex: Reserva de Emergência"
          placeholderTextColor={quinternary}
          inputStyle={{ color: quinternary }}
          returnKeyType="done"
          maxLength={28}
          onChangeText={(newLabel) => setNewLabel(newLabel)}
        />
        <Input
          leftIcon={
            <MaterialCommunityIcons
              name="account-cash"
              size={25}
              color={terciary}
            />
          }
          label="Valor para reserva"
          labelStyle={{ color: quinternary }}
          placeholder="Ex: 0.00"
          placeholderTextColor={quinternary}
          inputStyle={{ color: quinternary }}
          keyboardType={
            Platform.OS === 'android' ? 'numeric' : 'numbers-and-punctuation'
          }
          returnKeyType="next"
          onChangeText={(newMyValue) => setNewMyValue(newMyValue)}
        />
        <Input
          leftIcon={
            <MaterialCommunityIcons
              name="archive-arrow-down"
              size={25}
              color={terciary}
            />
          }
          label="Valor Final"
          labelStyle={{ color: quinternary }}
          placeholderTextColor={quinternary}
          placeholder="Ex: 10000.00"
          keyboardType={
            Platform.OS === 'android' ? 'numeric' : 'numbers-and-punctuation'
          }
          inputStyle={{ color: quinternary }}
          returnKeyType="next"
          onChangeText={(newNecessaryValue) =>
            setNewNecessaryValue(newNecessaryValue)
          }
        />
        <View>
          <TouchableOpacity onPress={verifyForms} style={styles.buttonAdd}>
            {alertMessage !== null ? (
              <Text style={styles.buttonAddText}> Adicionar meta </Text>
            ) : (
              <Text style={styles.buttonAddText}> Caixinha adicionada! </Text>
            )}
          </TouchableOpacity>
          {alertMessage ? (
            <Text style={styles.alertMessage}> Preencha os campos </Text>
          ) : null}
        </View>
      </LinearGradient>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputs: {
    marginHorizontal: 15,
    paddingVertical: 40,
    borderRadius: 15,
    shadowColor: quaternary,
    shadowOpacity: 0.7,
    shadowRadius: 10,
    shadowOffset: {
      width: 1,
      height: 10,
    },
    elevation: 5,
  },
  titleCategory: {
    fontSize: 18,
    fontWeight: 'bold',
    color: quinternary,
  },
  dropContainer: {
    alignItems: 'center',
    zIndex: 99,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  drop: {
    fontSize: 16,
    backgroundColor: secundary,
    textColor: quinternary,
    selectedBackgroundColor: 'white',
    selectedTextColor: 'black',
    selectedFontWeight: 'bold',
    zIndex: 99,
  },
  buttonAdd: {
    marginTop: 20,
    padding: 5,
    marginHorizontal: 30,
    backgroundColor: terciary,
    borderRadius: 10,
  },
  buttonAddText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: quinternary,
    textAlign: 'center',
  },
  alertMessage: {
    fontSize: 17,
    color: '#ff0000',
    fontWeight: '50%',
    textAlign: 'center',
  },
});
