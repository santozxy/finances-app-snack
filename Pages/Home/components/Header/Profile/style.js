import { StyleSheet } from 'react-native';

import {
  primary,
  secundary,
  terciary,
  quaternary,
  quinternary,
} from '../../../../../colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 48,
  },
});