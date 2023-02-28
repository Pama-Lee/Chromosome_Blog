
import { createRouter, createWebHistory  } from 'vue-router'
import HomePage from '../pages/Home/HomePage.vue'
import ArticleDetail from '../pages/Article/ArticleDetail.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/detail/:user/:article',
    name: 'detail',
    component: ArticleDetail
  }
]

const router = createRouter({
    history: createWebHistory(),
  routes
})

export default router