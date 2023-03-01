import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/Home/HomePage.vue'
import ArticleDetail from '../pages/Article/ArticleDetail.vue'
import UserPage from '../pages/User/UserPage.vue'
const routes = [{
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/detail/:user/:article',
        name: 'detail',
        component: ArticleDetail
    },
    {
        path: '/user/:user',
        name: 'user',
        component: UserPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router