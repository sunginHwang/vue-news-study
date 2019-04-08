import Vue from 'vue';
import VueRouter from "vue-router";

import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView.vue";
import ChartView from "../views/ChartView.vue";
import CommonView from "../views/CommonView.vue";
import SlotView from "../views/SlotView.vue";
import CreateListView from '../views/CreateListView';
import bus from "../utils/bus";
import {store} from '../store';
Vue.use(VueRouter);

export const router = new VueRouter({
         mode: "history",
         routes: [
           {
             path: "/",
             redirect: "/news"
           },
           {
             path: "/chart",
             name: "chart",
             component: ChartView
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
             component: UserView
           },
           {
             path: "/item/:id",
             component: ItemView
           },
           {
             path: "/common",
             component: CommonView
           },
           {
             path: "/slot",
             component: SlotView
           }
         ]
       });


const beforeEnterFetchList = async (listName,next) => {
  await bus.$emit('start:spinner');

  try{
    await store.dispatch("FETCH_LIST", listName);
    await next();
  }catch(e){
    next();
  }
  
}