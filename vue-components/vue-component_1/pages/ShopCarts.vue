<template>
    <div id="cart">
        <shop-header title="北京亚辰自助涮烤"></shop-header>
        <carts-product-list :add="adds"  :sub="subs" :tm="totalMoney" :list="cartsList"  ></carts-product-list>
        <shop-footer :tm="totalMoney"></shop-footer>
    </div>

</template>

<script type="text/ecmascript-6">
    import ShopHeader from"../components/commons/ShopHeader.vue";
    import ShopFooter from"../components/commons/ShopFooter.vue";
    import CartsProductList from"../components/shopcarts/CartsProductList.vue";
    import ShopCartsApi from"../apis/ShopCartsApi";
    import "../css/gouwuche.css";
    export default {
        components:{
            ShopHeader,
            ShopFooter,
            CartsProductList
        },
        created:function () {
              this.initData()
        },
        methods:{
            adds:function (index) {
                this.cartsList[index].qal++;
                this.counter(this.cartsList);
            },
            subs:function (index) {
                    if(this.cartsList[index].qal<=1){
                        this.cartsList[index].qal=1;
                    }else{
                        this.cartsList[index].qal--;
                        this.counter(this.cartsList);
                    }

            },
            counter:function (data) {
                this.totalNum=0;
                this.totalMoney=0;
                data.forEach((item,index)=>{
                    this.totalNum+=item.qal;
                    this.totalMoney+=item.qal*item.price;
                })
            },
            initData:function () {
                ShopCartsApi.getShopCartsList((data)=>{
                    this.counter(data);
                    this.cartsList=data;
                })
            },

        },
        data(){
            return {
                totalNum:0,
                totalMoney:0,
                cartsList:[]
            }
        }
    }
</script>

<style scoped>
    #cart {
        background: #f0f0f0;
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: space-between;
    }
</style>