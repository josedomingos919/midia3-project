import { StyleSheet } from 'react-native'
import { globalStyles } from '../../style'

export const styles = StyleSheet.create({
  ...globalStyles,
  vwbtn: {
    marginTop: 20,
    width: '100%',
  },
  imgLogo: {
    marginTop: 20,
    width: 200,
    height: 80,
    resizeMode: 'stretch',
  },
  svwtext: {
    display: 'flex',
    padding: 20,
    textAlign: 'center',
    width: '100%',
    borderTopColor: 'rgba(0,0,0,0.05)',
    borderTopWidth: 1,
    marginTop: 30,
  },
  txtCopyRight: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.3)',
  },
  vwul: {
    width: '100%',
  },
})
