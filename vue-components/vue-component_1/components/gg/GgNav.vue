<template>

    <div class="gg-nav">
        <a href="javascript:void(0)" class="gg-now">精选</a>
        <a href="javascript:void(0)">精选</a>
        <a href="javascript:void(0)">精选</a>
        <a href="javascript:void(0)">精选</a>
        <a href="javascript:void(0)">精选</a>
        <a href="javascript:void(0)">精选</a>
        <a href="javascript:void(0)">精选</a>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
    }
</script>

<style scoped>

    .gg-nav{
        width:auto;
        display: flex;
        background:#fff;
        justify-content: space-between;
        align-items: center;
        overflow-x:auto;
        overflow-y:hidden;
        border-top:1px solid #dedede;
        border-bottom:1px solid #dedede;
    }
    .gg-nav a{
        font-size:16px;
        color:#848484;
        padding:0.14rem 0;
        margin: 0 0.25rem ;
        white-space:nowrap;
    }
    .gg-nav a:hover,.gg-nav .gg-now{
        color:#040404;
        background:url(../../assets/img/gg-bg.png) repeat-x bottom left;
    }
</style>