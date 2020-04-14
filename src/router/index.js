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
        path: '/about',
        name: 'About',
        component: () =>
            import ('../views/About.vue')
    },
    {
        path: '/map',
        name: 'Map',
        component: () =>
            import ('../views/Map.vue')
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
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Photos.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router