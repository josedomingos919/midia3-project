import MD3MinhaConta from './src/views/conta'
import MD3MeusPedidos from './src/views/pedidos'
import MD3Sobre from './src/views/sobre'

export const appRoutes = {
  initial: 'Minha Conta',
  routes: [
    {
      name: 'Minha Conta',
      component: MD3MinhaConta,
    },
    {
      name: 'Meus Pedidos',
      component: MD3MeusPedidos,
    },
    {
      name: 'Sobre',
      component: MD3Sobre,
    },
  ],
}
