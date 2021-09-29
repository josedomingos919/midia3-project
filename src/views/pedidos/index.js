import React from 'react'
import { FlatList, View, Text } from 'react-native'
import { Header } from '../../components'
import { getAllPedidos } from './api'
import MD3MeusPedidosListItem from './listItem'
import { styles } from './style'

const MD3MeusPedidos = function () {
  const data = getAllPedidos()

  return (
    <View style={styles.view}>
      <Header
        title="-- Lista de Pedidos --"
        subTitle="Aqui tu podes ver os pedidos feitos na aplicação!..."
      />

      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={styles.list}
        data={data}
        renderItem={({ index, item }) => (
          <MD3MeusPedidosListItem key={index} data={item} />
        )}
      />
    </View>
  )
}

export default MD3MeusPedidos
