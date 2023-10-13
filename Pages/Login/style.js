import { Platform,StyleSheet,StatusBar } from 'react-native';

import {
  primary,
  secundary,
  terciary,
  quaternary,
  quinternary,
} from '../../colors';

const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 15
  : 64;


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: statusBarHeight,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: Platform.OS === 'ios' ? 10 : 30,
  },
  headerTitle1: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    color: quinternary,
  },
  headerTitle2: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    color: terciary,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    marginHorizontal: 20,
    borderRadius: 15,
  },
  buttonLogin: {
    backgroundColor: terciary,
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 100,
    padding: 5,
    borderRadius: 10,
  },
  buttonCreate: {
    alignItems: 'center',
    margin: 20,
  },
  buttonTextLogin: {
    fontSize: 24,
    fontWeight: 'bold',
    color: quinternary,
  },
  buttonTextCreate: {
    margin: 10,
    fontSize: 15,
    fontWeight: 'bold',
    color: quinternary,
  },
});
