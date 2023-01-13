import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HorsesView from '../views/HorsesView.vue';
import UpdateView from '../views/UpdateView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Start',
      component: HomeView,
    },
    {
      path: '/horses',
      name: 'Hästar',
      component: HorsesView,
    },
    {
      path: '/update/:id',
      name: 'Uppdatera',
      component: UpdateView,
      props: true,
    },
  ]
})

export default router