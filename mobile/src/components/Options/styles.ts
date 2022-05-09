import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 20,
  },

  options:{
    width:'100%',
    marginBottom:48,
    justifyContent:'center',
    flexDirection: 'row',
  },
  title:{
    fontSize: 20,
    marginBottom: 32,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text_primary,
  }
});