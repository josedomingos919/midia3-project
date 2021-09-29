import React from 'react'
import { Image, Text, View } from 'react-native'
import { styles } from './style'
import { generateKey } from '../../../scripts/util'

const MD3MeusPedidosListItem = ({ data = {} }) => {
  const { img, name, price, quantity, available } = data

  return (
    <View key={generateKey()} style={styles.vwulitem}>
      <View key={generateKey()} style={styles.vwimg}>
        <Image style={styles.img} source={{ uri: img }} />
      </View>
      <View key={generateKey()} style={styles.vwcontent}>
        <Text key={generateKey()} style={styles.textH1}>
          {name}
        </Text>
        <Text style={styles.textul} key={generateKey()}>
          Preço: R$ {price},00
        </Text>
        <Text style={styles.textul} key={generateKey()}>
          quantidade: ( {quantity} )
        </Text>
        <Text style={styles.textul} key={generateKey()}>
          Total: R$ {quantity * price}{' '}
        </Text>

        <Text style={styles.textul} key={generateKey()}>
          Estado: {available ? 'Pago' : 'Cancelado'}
        </Text>
      </View>
    </View>
  )
}

export default MD3MeusPedidosListItem
