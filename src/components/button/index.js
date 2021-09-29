import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from './style'

const MD3Button = function ({ title, ...restProps }) {
  return (
    <TouchableOpacity {...restProps} style={styles.btnRegistrar}>
      <Text style={styles.textBtnRegistrar}>{title}</Text>
    </TouchableOpacity>
  )
}

export default MD3Button
