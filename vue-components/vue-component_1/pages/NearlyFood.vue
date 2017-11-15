<template>
    <div class="NearlyFood">
        <nearly-header></nearly-header>
        <nearly-menu></nearly-menu>
        <nearly-food-list :list="cartsList" ></nearly-food-list>
        <public-footer :idx="1"></public-footer>
    </div>
</template>

<script type="text/ecmascript-6">
    import NearlyHeader from "../components/nearly/NearlyHeader.vue";
    import NearlyMenu from "../components/nearly/NearlyMenu.vue";
    import NearlyFoodList from "../components/nearly/NearlyFoodList.vue";
    import PublicFooter from "../components/commons/PublicFooter.vue";
    import ShopCartsApi from"../apis/ShopCartsApi";
    export default {
        components:{
            NearlyHeader,
            NearlyMenu,
            NearlyFoodList,
            PublicFooter
        },
        created:function () {
            this.initData();
        },
        methods:{
            initData:function () {
                ShopCartsApi.getShopCartsList((data)=>{
                    this.cartsList = data;
                })
            }
        },
        data(){
            return{
                cartsList:[]
            }
        }
    }
</script>

<style scoped>
    .NearlyFood{
        display: flex;
        flex-direction: column;
        flex:1;
        justify-content: space-between;
    }
</style>