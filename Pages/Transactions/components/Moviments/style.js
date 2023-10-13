import { StyleSheet } from 'react-native';

import {
  primary,
  terciary,
  quaternary,
  quinternary,
} from '../../../../colors';

export const styles = StyleSheet.create({
  containerTransactions: {
    flex: 1,
    marginTop: 25,
    borderRadius: 15,
    borderBottomWidth: 6,
    borderColor: quaternary,
    paddingVertical: 10,
  },
  buttonMonth: {
    margin: 8,
    backgroundColor: primary,
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  selectedButton: {
    margin: 10,
    backgroundColor: terciary,
    borderRadius: 15,
    paddingHorizontal: 28,
    paddingVertical: 10,
  },
  containerButtonMonths: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonMonthText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff',
  },
  iconColor: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  data: {
    fontSize: 11,
    color: '#A4A4A4',
    fontWeight: 'bold',
    margin: 4,
  },
  label: {
    fontSize: 17,
    color: quinternary,
    fontWeight: 'bold',
    margin: 4,
  },
  balance: {
    textAlign: 'center',
    fontSize: 17,
    color: '#37B84C',
    fontWeight: 'bold',
    margin: 4,
  },
  expenses: {
    textAlign: 'center',
    fontSize: 17,
    color: '#C31E1E',
    fontWeight: 'bold',
    margin: 4,
  },
});
