import VueRouter from 'vue-router'

import Home from '@/views/Home'
import Login from '@/views/Login'
import Register from '@/views/Register'
import PersonalCenter from '@/views/Personal'
import Mall from '@/views/Mall'
import More from '@/views/KnowMore'
import Detail from '@/views/Detail'

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/center', component: PersonalCenter },
  { path: '/mall', component: Mall },
  { path: '/more', component: More },
  { path: '/Detail', component: Detail }
]

export default new VueRouter({
  mode: 'history',
  routes
})
