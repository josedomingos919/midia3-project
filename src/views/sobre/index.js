import React from 'react'
import { Text, ScrollView, SafeAreaView, View, Image } from 'react-native'
import { styles } from './style'
import { Header } from '../../components'
import { appAssets } from '../../../assets'
import MD3SobreListItem from './listItem'

const MD3Sobre = function () {
  const { icon } = appAssets

  return (
    <SafeAreaView style={styles.view}>
      <Header
        title=" -- MIdia 3 --"
        subTitle="Desde o ano 2000 criando, construindo e entregando soluções tecnológicas com sucesso."
      />
      <Image style={styles.imgLogo} source={icon} />
      <ScrollView style={styles.svwtext}>
        <Text style={styles.txtCopyRight}>CopyRight@2021</Text>
        <View style={styles.vwul}>
          <MD3SobreListItem />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default MD3Sobre
