import { useState, useEffect, useCallback } from 'react';
import {
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
  RefreshControl,
  Text,
  Platform,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Divider } from 'react-native-elements';
import { Input } from 'react-native-elements';
import Modal from 'react-native-modal';

import { styles } from './style';
import LoadingAnimation from '../../../../Components/Loading/index';
import ProgressGoals from './ProgressBar/index';
import { database } from '../../../../Firebase/firebase';
import GoalsImage from './GoalsImage/index';
import Animation from '../../../../Components/Animation/index';

import {
  primary,
  secundary,
  terciary,
  quaternary,
  quinternary,
} from '../../../../colors';

export default function MyGoals() {
  const [goals, setGoals] = useState([]); //Estado que recebe o banco externo.

  const [refreshing, setRefreshing] = useState(false); // Estado para gerenciar atualização da tela.

  const [editVisible, setEditVisible] = useState(false); // Estado para gerenciar a renderização do input de edição

  const [modalVisible, setModalVisible] = useState(false); // Estado para gerenciar a exibição do modal

  const [newValue, setNewValue] = useState(''); // Estado que armazena o novo valor para edição no banco

  const [selectedButtonId, setSelectedButtonId] = useState(''); // Estado para armazenar o ID do botão selecionado, usado como condição na edição do item

  const onRefresh = useCallback(() => {
    // Callback refreshing pra atualizar a tela.
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  function editGoals(id) {
    // Função para editar o item selecionado
    database.collection('goals').doc(id).update({
      myValue: newValue,
    });
    setSelectedButtonId('');
    setNewValue('');
  }

  function deleteGoals(id) {
    // Função para deletar o item selecionado
    database
      .collection('goals')
      .doc(id)
      .delete()
      .then(() => {
        console.log('Deleted document!');
      })
      .catch((error) => {
        console.error('Error', error);
      });
    setModalVisible(!modalVisible);
  }

  useEffect(() => {
    // Obtendo banco...
    database.collection('goals').onSnapshot((query) => {
      const list = [];
      query.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id });
      });
      setGoals(list);
      console.log('Concluido');
    });
  }, [refreshing]);

  const ModalDelete = ({ id }) => {
    // Modal renderizado ao clicar no botão de delete
    return (
      <View>
        <Modal isVisible={modalVisible}>
          <View style={styles.modalDelete}>
            <LinearGradient
              colors={[primary, secundary]}
              style={styles.containerModalDelete}>
              <Text style={styles.titleModalDelete}>
                Você deseja realmente excluir ?{' '}
              </Text>
              <View style={styles.contentModalDelete}>
                <TouchableOpacity onPress={() => deleteGoals(id)}>
                  <View style={styles.buttonDeleteConfirm}>
                    <Text style={styles.buttonTextDelete}> Sim </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => setModalVisible(!modalVisible)}>
                  <View style={styles.buttonDeleteCancel}>
                    <Text style={styles.buttonTextDelete}> Não </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </LinearGradient>
          </View>
        </Modal>
      </View>
    );
  };

  const render = ({ item }) => {
    // Componente usado para renderizar dados obtidos do banco externo.
    return (
      <LinearGradient
        colors={[secundary, primary, secundary]}
        style={styles.containerGoals}>
        <View style={styles.header}>
          <View style={styles.icon}>
            <MaterialCommunityIcons
              name={item.icon}
              size={28}
              color={quinternary}
            />
          </View>
          <View style={styles.headerText}>
            <Text style={styles.title}>{item.category}</Text>
            <Text style={styles.subTitle}> {item.label} </Text>
          </View>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View>
              <TouchableOpacity
                onPress={() => {
                  setSelectedButtonId(item.id);
                }}>
                <View
                  style={[styles.buttonsConfig, { backgroundColor: terciary }]}>
                  <MaterialCommunityIcons
                    name="database-edit"
                    size={20}
                    color={quinternary}
                  />
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <View
                  style={[styles.buttonsConfig, { backgroundColor: 'red' }]}>
                  <MaterialCommunityIcons
                    name="delete-forever"
                    size={20}
                    color={quinternary}
                  />
                </View>
              </TouchableOpacity>
            </View>

            <ModalDelete id={item.id} />
          </View>
        </View>

        <Divider style={{ marginVertical: 15, backgroundColor: terciary }} />

        <View style={styles.values}>
          {selectedButtonId === item.id ? (
            <View>
              <Input
                label="Novo valor"
                labelStyle={{ color: quinternary }}
                placeholder="Ex: 0.00"
                placeholderTextColor={quinternary}
                inputStyle={{ color: quinternary }}
                keyboardType={
                  Platform.OS === 'android'
                    ? 'numeric'
                    : 'numbers-and-punctuation'
                }
                returnKeyType="next"
                onChangeText={(newValue) => setNewValue(newValue)}
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity
                  onPress={() => editGoals(item.id)}
                  style={styles.buttonConfirmEdit}>
                  <Text style={styles.textConfirmEdit}> Confirmar </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setSelectedButtonId('')}
                  style={styles.buttonCancelEdit}>
                  <Text style={styles.textConfirmEdit}> Cancelar </Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <Text style={styles.myValue}> R$ {item.myValue} </Text>
          )}
          <Text style={styles.necessaryValue}> R$ {item.necessaryValue} </Text>
        </View>

        <View style={styles.containerBarProgress}>
          <ProgressGoals valueAdd={item.myValue} goals={item.necessaryValue} />
        </View>
      </LinearGradient>
    );
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={styles.loadingAnimation}>
        <GoalsImage />
      </View>
      <View>
        {refreshing ? (
          <View style={styles.loadingAnimation}>
            <Animation
              animation="https://assets2.lottiefiles.com/packages/lf20_alg1vyxd.json"
              width={300}
              height={300}
            />
          </View>
        ) : (
          <View style={{ paddingBottom: 80 }}>
            <FlatList data={goals} renderItem={render} />
          </View>
        )}
      </View>
    </ScrollView>
  );
}
