import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Botas from '@/components/Botas'
import Guantes from '@/components/Guantes'
import RopaFutbol from '@/components/RopaFutbol'
import Sala from '@/components/Sala'
import RopaCalle from '@/components/RopaCalle'
import Accesorios from '@/components/Accesorios'
import Producto from '@/components/Producto'
import Carro from '@/components/Carro'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/botas',
      name: 'botas',
      component: Botas
    },
    {
      path: '/guantes',
      name: 'guantes',
      component: Guantes
    },
    {
      path: '/ropaFutbol',
      name: 'ropaFutbol',
      component: RopaFutbol
    },
    {
      path: '/sala',
      name: 'sala',
      component: Sala
    },
    {
      path: '/ropaCalle',
      name: 'ropaCalle',
      component: RopaCalle
    },
    {
      path: '/accesorios',
      name: 'accesorios',
      component: Accesorios
    },
    {
      path: '/producto',
      name: 'producto',
      component: Producto,
      props: true
    },
    {
      path: '/carro',
      name: 'carro',
      component: Carro,
      props: true
    }
    

  ]
})
