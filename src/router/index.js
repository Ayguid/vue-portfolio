import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      layout: 'MainLayout', // we add new meta layout here to use it later
    },
  },
  {
    path: '/admin',
    name: 'admin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminPanel.vue'),
    meta: {
      layout: 'MainLayout', // we add new meta layout here to use it later
    },
  },
  {
    path: '/trivia',
    name: 'trivia',
    component: () => import(/* webpackChunkName: "about" */ '../views/TriviaGame.vue'),
    meta: {
      layout: 'GameLayout', // we add new meta layout here to use it later
    },
  },
  {
    path: '/todos',
    name: 'todos',
    component: () => import(/* webpackChunkName: "about" */ '../views/TodoApp.vue'),
    meta: {
      layout: 'GameLayout', // we add new meta layout here to use it later
    },
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
