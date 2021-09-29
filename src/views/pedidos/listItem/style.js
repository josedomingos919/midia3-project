import { StyleSheet } from 'react-native'
import { globalStyles } from '../../../style'

export const styles = StyleSheet.create({
  ...globalStyles,
  textH1: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  textul: {
    color: 'rgba(0,0,0,0.3)',
  },
  vwimg: {
    marginRight: 5,
  },
  vwulitem: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
  img: {
    borderRadius: 20,
    resizeMode: 'stretch',
    width: 100,
    height: 100,
  },
  vwcontent: {
    paddingLeft: 20,
  },
})
