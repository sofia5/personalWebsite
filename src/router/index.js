import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/cv',
        name: 'CV',
        component: () =>
            import ('../views/CV.vue')
    },
    {
        path: '/timeline',
        name: 'Timeline',
        component: () =>
            import ('../views/Timeline.vue')
    },
    {
        path: '/photos',
        name: 'Photos',

        component: () =>
            import ('../views/Photos.vue')
    },
    {
        path: '/map',
        name: 'Map',
        component: () =>
            import ('../views/Map.vue')
    }

]

const router = new VueRouter({
    routes
})

export default router