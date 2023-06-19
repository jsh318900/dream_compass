import { createRouter, createWebHistory } from 'vue-router'
import TitleView from '../views/TitleView.vue'
import HomeView from '../views/HomeView.vue'
import DiaryView from '../views/DiaryView.vue'
import Episode1View from '../views/Episode1View.vue'
import Ending1View from '../views/Ending1View.vue'
import Ending2View from '../views/Ending2View.vue'
import ThanksView from '../views/ThanksView.vue'

const routes = [
  {
    path: '/',
    name: 'TitleView',
    component: TitleView
  },
  {
    path: '/home',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/diary',
    name: 'DiaryView',
    component: DiaryView
  },
  {
    path: '/episode',
    name: 'Episode1View',
    component: Episode1View
  },
  {
    path: '/ending1',
    name: 'Ending1View',
    component: Ending1View
  },
  {
    path: '/ending2',
    name: 'Ending2View',
    component: Ending2View
  },
  {
    path: '/thanks',
    name: 'ThanksView',
    component: ThanksView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
