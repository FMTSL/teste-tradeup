import { createRouter, createWebHistory } from 'vue-router';
import Inicio from '@/components/Inicio.vue';
import BemVindo from '@/components/BemVindo.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: BemVindo
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/ConsultaForm.vue')
    }
  ]
})

export default router
