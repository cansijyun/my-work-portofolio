import Vue from 'vue'
import Router from 'vue-router'
// import Navbar from '../pages/Navbar.vue';

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: () =>import( '@/pages/HomePage')
        },
        {
            path: '/three-d',
            name: 'index-three-d',
            component: (resolve) => require(['@/pages/three-d-lab/index'], resolve)
        },
        {
            path: '/three-d/jump',
            name: 'jump',
            component: (resolve) => require(['@/pages/three-d-lab/jump'], resolve)
        },
        {
            path: '/three-d/mini-city',
            name: 'mini-city',
            component: (resolve) => require(['@/pages/three-d-lab/mini-city'], resolve)
        },
        {
            path: '/three-d/china-map',
            name: 'mall',
            component: (resolve) => require(['@/pages/three-d-lab/china-map'], resolve)
        },
        {
            path: '/data-visual',
            name: 'data-visual',
            component: () =>import( '@/pages/data-visualization/Home')
        },
        {
            path: '/website',
            name: 'website',
            component: () =>import( '@/pages/wesite/Home')
        },
        {
            path: '/nav',
            name: 'Navbar',
            // component:Navbar,
            component: () =>import( '@/pages/Navbar')
            // component: (resolve) => require(['@/pages/Navbar'], resolve)
        }
    ]
})
