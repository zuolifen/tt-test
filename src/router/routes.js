import Home from '@/pages/home/home.vue'
import Login from '@/pages/login/login.vue'
import Search from '@/pages/search/search.vue'     
import Register from '@/pages/register/register.vue'

export default [
    {path:'/home',component:Home},
    {path:'/',redirect:'/home'},
    {path:'/search',component:Search},
    {path:'/login',component:Login},
    {path:'/register',component:Register},
]