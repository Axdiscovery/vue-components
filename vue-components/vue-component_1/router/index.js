
import VueRouter from "vue-router";
import Index from "../pages/Index.vue";
import GuangG from "../pages/GuangG.vue";
import LoginPage from "../pages/LoginPage.vue";
import NearlyFood from "../pages/NearlyFood.vue";
import RegistPage from "../pages/RegistPage.vue";
import ShopCarts from "../pages/ShopCarts.vue";
import DetailFood from "../pages/DetailFood.vue";
const router = new VueRouter({
    routes:[
        {path:"/",component:Index},
        {path:"/guangg",component:GuangG},
        {path:"/nearly",component:NearlyFood},
        {path:"/login",component:LoginPage},
        {path:"/regist",component:RegistPage},
        {path:"/cart",component:ShopCarts},
        {path:"/detail",component:DetailFood}
    ]
});


module.exports = router;