import { StyleSheet } from 'react-native';
import {
  primary,
  secundary,
  terciary,
  quaternary,
  quinternary,
} from '../../../../colors';

export const styles = StyleSheet.create({
  containerGoals: {
    flex: 1,
    margin: 10,
    padding: 15,
    borderRadius: 15,
    borderBottomWidth: 6,
    borderColor: quaternary,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 8,
    backgroundColor: terciary,
  },
  headerText: {
    marginRight: 60,
  },
  title: {
    fontSize: 23,
    color: quinternary,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 12,
    color: '#91908D',
    fontWeight: 'bold',
  },
  buttonsConfig: {
    borderRadius: 60 / 2,
    padding: 10,
    margin: 5,
  },
  buttonConfirmEdit: {
    backgroundColor: terciary,
    padding: 5,
    borderRadius: 10,
    margin: 5,
  },
  buttonCancelEdit: {
    backgroundColor: '#ff0000',
    padding: 5,
    borderRadius: 10,
    margin: 5,
  },
  textConfirmEdit: {
    fontSize: 16,
    color: quinternary,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalDelete: {
    flex: 1,
    justifyContent: 'center',
  },
  containerModalDelete: {
    borderRadius: 15,
    padding: 3,
  },
  contentModalDelete: {
    margin: 10,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  titleModalDelete: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: quinternary,
  },
  buttonDeleteConfirm: {
    backgroundColor: terciary,
    paddingHorizontal: 25,
    paddingVertical: 10,
    margin: 10,
    borderRadius: 15,
  },
  buttonDeleteCancel: {
    backgroundColor: '#ff0000',
    paddingHorizontal: 25,
    paddingVertical: 10,
    margin: 10,
    borderRadius: 15,
  },
  buttonTextDelete: {
    color: quinternary,
    textAlign: 'center',
    fontSize: 20,
    fontWeight:'bold'
  },
  values: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  myValue: {
    fontSize: 17,
    color: quinternary,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  necessaryValue: {
    fontSize: 17,
    color: quinternary,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  containerBarProgress: {
    justifyContent: 'center',
  },
  loadingAnimation: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    backgroundColor: secundary,
    borderRadius: 10,
    padding: 20,
    overflow: 'hidden',
  },
  headerModal: {
    backgroundColor: primary,
    padding: 10,
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  titleModal: {
    fontSize: 18,
    fontWeight: 'bold',
    color: quinternary,
  },
  inputModal: {
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
