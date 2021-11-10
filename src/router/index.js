import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    component: () => import(/* webpackChunkName: "recommend" */ '@/views/recommend')
  },
  {
    path: '/singer',
    component: () => import(/* webpackChunkName: "singer" */ '@/views/singer'),
    children: [
      {
        path: ':id',
        component: () => import(/* webpackChunkName: "singer-detail" */ '@/views/singer-detail')
      }
    ]
  },
  {
    path: '/top-list',
    component: () => import(/* webpackChunkName: "top-list" */ '@/views/top-list')
  },
  {
    path: '/search',
    component: () => import(/* webpackChunkName: "search" */ '@/views/search')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
