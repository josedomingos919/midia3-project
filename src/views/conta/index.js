import React from 'react'
import { SafeAreaView, View } from 'react-native'
import { styles } from './style'
import { Input, Button, Header } from '../../components'
import { generateKey } from '../../scripts/util'

const MD3MinhaConta = function () {
  return (
    <SafeAreaView style={styles.view}>
      <Header
        title="Olá!, Bem-Vindo"
        subTitle="Aprobeite! Crie já sua conta!..."
      />
      <Input
        icon={{ name: 'user', color: 'rgba(0,0,0,0.2)' }}
        key={generateKey()}
        placeholder="ex.: josedomingos@gmail.com"
      />
      <Input
        icon={{ name: 'lock', color: 'rgba(0,0,0,0.2)' }}
        key={generateKey()}
        placeholder="ex.: domingos.qwe123"
      />
      <View style={styles.vwbtn}>
        <Button title="Registrar" />
      </View>
    </SafeAreaView>
  )
}

export default MD3MinhaConta
