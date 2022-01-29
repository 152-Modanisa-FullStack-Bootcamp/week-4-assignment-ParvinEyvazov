import VueRouter from "vue-router";
import MainPage from "@/views/Main";
import FavoritePage from "@/views/Favorite";
import WatchPage from "@/views/Watch";
import Vue from "vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: MainPage },
    { path: "/favorite/:user_id", component: FavoritePage },
    { path: "/watch", component: WatchPage },
  ],
});

export default router;
