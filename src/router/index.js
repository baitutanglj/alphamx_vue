import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/Main'),
    children:[
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/Home/Home')
      },
      {
        path: '/generate',
        name: 'generate',
        component: () => import('@/views/PyProject/PageOne')
      },
    ]
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
