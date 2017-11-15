<template>
    <div class="bds">
        <gg-header></gg-header>
        <gg-nav></gg-nav>
        <gg-main></gg-main>
        <public-footer :idx="2"></public-footer>
    </div>

</template>

<script type="text/ecmascript-6">
    import GgHeader from "../components/gg/GgHeader.vue";
    import GgNav from "../components/gg/GgNav.vue";
    import GgMain from "../components/gg/GgMain.vue";
    import PublicFooter from "../components/commons/PublicFooter.vue";
    export default {
        components:{
            GgHeader,
            GgNav,
            GgMain,
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