import { StyleSheet } from 'react-native';

import { primary, quinternary } from '../../../../../colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    zIndex: 99,
    borderColor: '#1A1A1A',
    backgroundColor: primary,
    marginBottom: 20,
    marginTop: -20,
    padding: 10,
  },
  containerInfo: {
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 10,
  },
  itemTitle: {
    fontSize: 18,
    color: quinternary,
    fontWeight: 'bold',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  currentSymbol: {
    color: quinternary,
    marginRight: 5,
    fontSize: 17,
    fontWeight: 'bold',
  },
  balance: {
    fontSize: 20,
    color: '#37B84C',
    fontWeight: 'bold',
  },
  expenses: {
    fontSize: 20,
    color: '#C31E1E',
    fontWeight: 'bold',
  },
});
