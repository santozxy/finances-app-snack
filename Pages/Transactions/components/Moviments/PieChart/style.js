import { StyleSheet } from 'react-native';

import {
  primary,
  secundary,
  terciary,
  quaternary,
  quinternary,
} from '../../../../../colors';

export const styles = StyleSheet.create({
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
  containerBalance: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    zIndex: 99,
    borderColor: '#1A1A1A',
    backgroundColor:primary,
    marginBottom:20,
    padding:10
  },
});
