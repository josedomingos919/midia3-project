import { StyleSheet } from 'react-native'
import { globalStyles } from '../../../style'

export const styles = StyleSheet.create({
  ...globalStyles,

  textul: {
    color: 'rgba(0,0,0,0.3)',
  },
  vwulitem: {
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})
