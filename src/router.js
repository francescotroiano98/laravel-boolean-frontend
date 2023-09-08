import { createRouter, createWebHistory } from "vue-router";

// importo componenti

import HomePage from './pages/HomePage.vue';
import AboutUs from './pages/AboutUs.vue';
import Contacts from './pages/Contacts.vue';


const router= createRouter({
    history: createWebHistory(),

    routes: [
        {
            path: '/',
            name: 'homepage',
            component: HomePage,
        },

        {
            path: '/chi-siamo',
            name: 'aboutUs',
            component: AboutUs,
        },
        {
            path: '/contatti',
            name: 'contact',
            component: Contacts,
        },
    ]

})

export{router};