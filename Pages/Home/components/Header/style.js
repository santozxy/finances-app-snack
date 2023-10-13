import { StyleSheet } from 'react-native';

import {
  primary,
  secundary,
  terciary,
  quaternary,
  quinternary,
} from '../../../../colors';

export const styles = StyleSheet.create({
  container: {
    paddingTop: statusBarHeight,
    paddingStart: 18,
    paddingEnd: 18,
    paddingBottom: 45,
    borderBottomEndRadius: 5,
    borderBottomStartRadius: 5,
    borderBottomWidth:6,
    borderColor:quaternary
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderBottomWidth: 4,
    borderColor: terciary,
  },
  username: {
    marginVertical: 15,
    fontSize: 19,
    fontWeight: 'bold',
    color: quinternary,
    textAlign: 'center',
  },
});
