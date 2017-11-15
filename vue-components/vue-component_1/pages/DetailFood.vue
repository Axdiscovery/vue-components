<template>
<div>
    <detail-header></detail-header>
    <detail-content :pro="item"></detail-content>
</div>

</template>

<script type="text/ecmascript-6">
    import DetailHeader from"../components/commons/DetailHeader.vue";
    import DetailContent from"../components/shopcarts/DetailContent.vue";
    import ShopCartsApi from"../apis/ShopCartsApi";
export default {
    components:{
        DetailHeader,
        DetailContent
    },
    data(){
        return {
            item:{}
        }
    },
    created:function(){
        this.initData()
    },
    methods:{
        initData:function () {
            var id=this.$route.query.id;
            ShopCartsApi.getShopCartsList((data)=>{
                this.item = data[id];
            })
        }
    }
}
</script>

<style scoped>
    @import "../css/index.css";
</style>