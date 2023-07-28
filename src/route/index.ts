import {createRouter, createWebHashHistory} from "vue-router";
import HelloWorld from "../pages/NavPage.vue";
import NotFound from "../pages/NotFound.vue";
import Main from "../pages/Main.vue";
import BackendPage from "../pages/backend/BackendPage.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/main'
        },
        {
            path: '/main',
            component: Main,
            redirect: '/main/page1',
            children: [
                {
                    path: 'page1',
                    component: HelloWorld
                },
                {
                    path: '404',
                    component: NotFound
                }
            ]
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: '/main/404'
        },
        {
            path: '/backendPage',
            component: BackendPage
        }
    ]
})

export default router
