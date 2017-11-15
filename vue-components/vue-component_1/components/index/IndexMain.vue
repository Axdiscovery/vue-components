<template>

    <div class="i-main">
        <index-banner></index-banner>
        <index-nav></index-nav>
        <index-nav2></index-nav2>
        <index-big></index-big>
        <index-lists></index-lists>
    </div>
</template>

<script type="text/ecmascript-6">
    import IndexBanner from "./IndexBanner.vue";
    import IndexNav from "./IndexNav.vue";
    import IndexNav2 from "./IndexNav2.vue";
    import IndexBig from "./IndexBig.vue";
    import IndexLists from "./IndexLists.vue";
    export default {
        components:{
            IndexBanner,
            IndexNav,
            IndexNav2,
            IndexBig,
            IndexLists
        }
    }
</script>

<style scoped>
    .i-main{
        flex:1;
        width:100%;
        overflow-x:hidden;
        overflow-y:auto;
    }

</style>