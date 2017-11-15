<template>

    <div class="bds">
        <index-header></index-header>
        <index-main></index-main>
        <public-footer :idx="0"></public-footer>
    </div>
</template>

<script type="text/ecmascript-6">
    import IndexHeader from "../components/index/IndexHeader.vue";
    import IndexMain from "../components/index/IndexMain.vue";
    import PublicFooter from "../components/commons/PublicFooter.vue";
    export default {
        components:{
            IndexHeader,
            IndexMain,
            PublicFooter
        }
    }
</script>

<style scoped>
   .bds{
        height:100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

</style>