import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import SearchSpa from "./pages/SearchSpa.vue";
import Login from "./pages/login.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: SearchSpa },
  { path: "/login", component: Login },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
