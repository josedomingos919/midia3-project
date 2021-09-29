import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './style'
import { information } from './util'
import { generateKey } from '../../../scripts/util'

const MD3SobreListItem = function () {
  return information.map(({ label, value }, i) => (
    <View key={i} style={styles.vwulitem}>
      <Text key={generateKey()} style={styles.textul}>
        {label}
      </Text>
      <Text key={generateKey()} style={styles.textul}>
        {value}
      </Text>
    </View>
  ))
}

export default MD3SobreListItem
