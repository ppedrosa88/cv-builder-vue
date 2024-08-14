import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layout/MainLayout.vue'
import DashboardLayout from '../layout/DashboardLayout.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'main',
        component: MainLayout,
        children: [
          {
            path: '/login',
            name: 'login',
            component: () => import('../pages/LoginPage.vue')
          },
          {
            path: '/register',
            name: 'register',
            component: () => import('../pages/RegisterPage.vue')
          }
        ]
      },
      {
        path: '/dashboard',
        name: 'dashboard',
        component: DashboardLayout,
        children: [
          {
            path: '',
            name: 'all-cv',
            component: () => import('../pages/DashboardPage.vue')
          },
          {
            path: '/create',
            name: 'create',
            component: () => import('../pages/CreateResume.vue')
          },
          {
            path: '/profile',
            name: 'profile',
            component: () => import('../pages/ProfilePage.vue')
          },
        ]
      },
    ]
  })

export default router
