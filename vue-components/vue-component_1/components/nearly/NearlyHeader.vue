<template>
    <header class="n-head">
        <a href="" class="n-a1"><span>高新六路附近</span><img src="img/n-icon.png"></a>
        <a href="" class="n-a2"><input type="text" placeholder="找附近的吃喝玩乐"/></a>
    </header>
</template>

<script type="text/ecmascript-6">
    export default {}
</script>

<style scoped>
    /*header*/
    .n-head{
        height:0.5rem;
        border-bottom: 1px solid #bcbcbc;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 0.22rem;
    }
    .n-a1{
        font-size:16px;
        color:#6b6b6b;
        display: flex;
        margin-right: 0.15rem;
        align-items: center;
    }
    .n-a1 img{
        width:0.18rem;
        height:0.12rem;
    }
    .n-a2{
        display: flex;
    }
    .n-a2 input{
        width:2rem;
        height:0.3rem;
        /*background: url(../../img/n-fdg.png) no-repeat 15% center #e6e7e9;*/
        background-size:0.16rem;
        border: none;
        border-radius: 0.05rem;
        text-align: center;
    }
</style>