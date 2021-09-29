import React from 'react'
import { TextInput, Text, View } from 'react-native'
import { styles } from './style'
import { FontAwesome } from '@expo/vector-icons'

const MD3Input = function ({ icon = {}, ...props }) {
  const {
    name: iconName,
    size: iconSize = 24,
    color: iconColor = 'black',
  } = icon

  return (
    <View style={styles.vwinput}>
      <View>
        <FontAwesome name={iconName} size={iconSize} color={iconColor} />
      </View>
      <View>
        <TextInput {...props} style={styles.input} />
      </View>
    </View>
  )
}

export default MD3Input
