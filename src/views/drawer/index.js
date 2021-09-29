import React from 'react'
import { View, Image, Linking } from 'react-native'
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer'
import { appAssets } from '../../../assets'
import { styles } from './style'

function MD3CustomDrawerContent(props) {
  return (
    <>
      <View style={styles.view}>
        <Image style={styles.img} source={appAssets.icon} />
      </View>

      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Ajuda"
          onPress={() =>
            Linking.openURL('https://www.midia3.com.br/sobre.shtml')
          }
        />
      </DrawerContentScrollView>
    </>
  )
}

export { MD3CustomDrawerContent }
