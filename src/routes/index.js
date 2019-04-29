import Vue from 'vue';
import VueRouter from "vue-router";

import RenderlessView from "@/views/pattern/RenderlessView.vue";
import CreateListView from '@/views/CreateListView';
import bus from "@/utils/bus";
import {store} from '@/store';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: "history",
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        {
            path: "/",
            redirect: "/news"
        },
        {
            path: "/chart",
            name: "chart",
            component: () => import('../views/ChartView.vue')
        },
        {
            path: "/news",
            name: "news",
            component: CreateListView("NewsView"),
            beforeEnter: (to, from, next) => {
                beforeEnterFetchList(to.name, next);
            }
        },
        {
            path: "/ask",
            name: "ask",
            component: CreateListView("AskView"),
            beforeEnter: (to, from, next) => {
                beforeEnterFetchList(to.name, next);
            }
        },
        {
            path: "/jobs",
            name: "jobs",
            component: CreateListView("JobsView"),
            beforeEnter: (to, from, next) => {
                beforeEnterFetchList(to.name, next);
            }
        },
        {
            path: "/user/:id",
            component: () => import('../views/UserView.vue')
        },
        {
            path: "/item/:id",
            component: () => import('../views/ItemView.vue')
        },
        {
            path: "/common",
            component: () => import('../views/CommonView.vue')
        },
        {
            path: "/slot",
            component: () => import('../views/pattern/SlotView.vue')
        },
        {
            path: "/controlled",
            component: () => import('../views/pattern/ControlledView.vue')
        },
        {
            path: "/renderless",
            component: RenderlessView
        }
    ]
});

export function createRouter() {
    return new VueRouter({
        mode: "history",
        routes: [
            {
                path: "/",
                redirect: "/news"
            },
            {
                path: "/chart",
                name: "chart",
                component: () => import('../views/ChartView.vue')
            },
            {
                path: "/news",
                name: "news",
                component: CreateListView("NewsView"),
                beforeEnter: (to, from, next) => {
                    beforeEnterFetchList(to.name, next);
                }
            },
            {
                path: "/ask",
                name: "ask",
                component: CreateListView("AskView"),
                beforeEnter: (to, from, next) => {
                    beforeEnterFetchList(to.name, next);
                }
            },
            {
                path: "/jobs",
                name: "jobs",
                component: CreateListView("JobsView"),
                beforeEnter: (to, from, next) => {
                    beforeEnterFetchList(to.name, next);
                }
            },
            {
                path: "/user/:id",
                component: () => import('../views/UserView.vue')
            },
            {
                path: "/item/:id",
                component: () => import('../views/ItemView.vue')
            },
            {
                path: "/common",
                component: () => import('../views/CommonView.vue')
            },
            {
                path: "/slot",
                component: () => import('../views/pattern/SlotView.vue')
            },
            {
                path: "/controlled",
                component: () => import('../views/pattern/ControlledView.vue')
            },
            {
                path: "/renderless",
                component: RenderlessView
            }
        ]
    });
}


const beforeEnterFetchList = async (listName, next) => {
    await bus.$emit('start:spinner');

    try {
        await store.dispatch("list/FETCH_LIST", listName);
        await next();
    } catch (e) {
        next();
    }

}

