<template>

    <div class="i-lists">
        <div class="il-h"><p>猜你喜欢</p></div>
        <ul>
            <index-list :idx="index" :pro="n" v-for="(n,index) in lists"></index-list>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
    import IndexList from "./IndexList.vue";
    import ShopCartsApi from"../../apis/ShopCartsApi";
    export default {
        components:{
            IndexList
        },
        data(){
            return {
                lists:[]
            }
        },
        methods:{
            initData:function(){
                ShopCartsApi.getShopCartsList((data)=>{
                    this.lists=data;
                })
            }
        },
        created:function(){
            this.initData();
        }
    }
</script>

<style scoped>

    .i-lists{
        background:#fff;
        color:#bbb;
    }
    .i-lists .il-h{
        padding:0.13rem 0;
        text-align: center;
    }
</style>