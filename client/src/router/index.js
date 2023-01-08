import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomePage.vue'
import Profile from '../views/UserProfile.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/AboutPage.vue')
    },
    {
        path: '/profile',
        redirect: {
            name: 'Home'
        },
        name: 'Profile',
        component: Profile
    }
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
export default router
