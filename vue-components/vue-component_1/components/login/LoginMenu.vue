<template>
    <nav>
        <a href="javascript:void(0)"><i class="iconfont icon-staro"></i><span>收藏</span></a>
        <a href="javascript:void(0)"><i class="iconfont icon-message"></i><span>评价</span></a>
        <a href="javascript:void(0)"><i class="iconfont icon-qingdan"></i><span>清单</span></a>
    </nav>
</template>

<script type="text/ecmascript-6">
    export default {}
</script>

<style scoped>
    nav{
        display: flex;
        height:0.6rem;
        justify-content: space-around;
        align-items: center;
        background: white;
    }
    nav .iconfont{
        display: block;
        color: #6a6a6a;
        font-weight: bold;
        font-size: 22px;
    }
    nav span{
        font-size: 12px;
        color:#191919;
    }
</style>