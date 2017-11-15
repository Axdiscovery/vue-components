
import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import "./assets/css/public.css";
import "./assets/css/swiper.min.css";
import "./constants/swiper-3.4.2.min";
import "./constants/jquery-1.8.3.min";
import "./assets/css/iconfont.css";
import router from "./router/";

Vue.use(VueRouter);
new Vue({
    el:"#app",
    router,
    render:(h)=>{
        return h(App);
    }
});