import 'react-native-gesture-handler'
import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { appRoutes } from './routes'
import { MD3CustomDrawerContent } from './src/views/drawer'

const Drawer = createDrawerNavigator()

export default function App() {
  const { initial, routes } = appRoutes

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName={initial}
        drawerContent={(props) => <MD3CustomDrawerContent {...props} />}
      >
        {routes.map(({ name, component }, i) => (
          <Drawer.Screen key={i} name={name} component={component} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
