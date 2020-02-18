import VueRouter from 'vue-router'

const routes = [
  { path: '/', component: () => import('@/views/Home') },
  { path: '/login', component: () => import('@/views/Login') },
  { path: '/register', component: () => import('@/views/Register') },
  { path: '/center', component: () => import('@/views/Personal') },
  { path: '/mall', component: () => import('@/views/Mall') },
  { path: '/more', component: () => import('@/views/KnowMore') },
  { path: '/detail', component: () => import('@/views/Detail') },
  { path: '/search', component: () => import('@/views/SearchResult') }
]

export default new VueRouter({
  mode: 'history',
  routes
})
