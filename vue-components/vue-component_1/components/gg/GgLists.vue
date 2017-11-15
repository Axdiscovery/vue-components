<template>

    <div class="gg-list">
        <gg-list></gg-list>
        <gg-list></gg-list>
        <gg-list></gg-list>
    </div>


</template>

<script type="text/ecmascript-6">
    import GgList from "./GgList.vue";
    export default {
        components:{
            GgList
        }
    }
</script>

<style scoped>
    .gg-list{
        width:100%;
        background:#fff;
        box-sizing:border-box;
        padding:0.12rem 0.13rem 0.17rem;
    }

</style>