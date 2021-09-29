import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './style'
import { generateKey } from '../../scripts/util'

const MD3Header = function ({ title, subTitle }) {
  return (
    <View key={generateKey()} style={styles.vwtitle}>
      <Text key={generateKey()}> {title}</Text>
      <Text key={generateKey()} style={styles.txtSubTitle}>
        {subTitle}
      </Text>
    </View>
  )
}

export default MD3Header
