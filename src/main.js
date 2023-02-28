import { createApp } from 'vue'
import App from './App.vue'
import router from './config/router'
import mdui from 'mdui';
import axios from 'axios'
import { http } from './api/baseAPI'
import Highlight from './components/hljs'
import 'highlight.js/styles/atom-one-dark.css' 
// 全局引入mdui
import 'mdui/dist/css/mdui.min.css';

const app  = createApp(App);

let config = {}
// 从config.json中获取配置
axios.get('/config.json').then(res=>{
    config= res.data
    app.config.globalProperties.$baseURL= config.baseURL

    const api = http(config.baseURL)
    app.config.globalProperties.$api = api
    app.use(router).use(mdui).use(Highlight);
    
    app.mount('#app')
   })
