import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    margin: 20,
  },
  title: {
    fontSize: 16,
    paddingBottom: 15,
  },
  input: {
    borderBottomColor: theme.colors.primary,
    borderBottomWidth: 1,
    marginBottom: 15,
    padding: 5,
  },
});
