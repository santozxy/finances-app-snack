import { StyleSheet } from 'react-native';

import {
  primary,
  quinternary,
} from '../../colors';

export const styles = StyleSheet.create({
  header: {
    paddingVertical: 25,
    backgroundColor: primary,
    borderBottomWidth: 5,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: 30,
    fontSize: 24,
    fontWeight: 'bold',
    color: quinternary,
  },
});
