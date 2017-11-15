<template>
    <header class="n-menu">
        <a href="javascript:void(0)">享美食</a>
        <a href="javascript:void(0)">住酒店</a>
        <a href="javascript:void(0)">爱玩乐</a>
        <a href="javascript:void(0)">全部</a>
    </header>
</template>

<script type="text/ecmascript-6">
    export default {}
</script>

<style scoped>
    .n-menu{
        width: 100%;
        height:0.45rem;
        display: flex;
        border-bottom: 2px solid #dfdfdf;
    }
    .n-menu a{
        display: block;
        width:25%;
        height:0.45rem;
        font-size:16px;
        line-height: 0.45rem;
        text-align: center;
        color:#848484;
    }
    .n-menu .red{
        border-bottom: 2px solid red;
        color:red;
    }
</style>