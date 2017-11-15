<template>

    <div class="i-header">
        <div class="ih-l">
            <a href="javascript:void(0)">西安<i class="iconfont icon-jtx"></i></a>
        </div>
        <div class="ih-m">
            <a href="javascript:void(0)">
                <i class="iconfont icon-search"></i>
                <span>庆祝自助涮烤</span>
            </a>
        </div>
        <div class="ih-r">
            <a href="javascript:void(0)"><i class="iconfont icon-jia"></i></a>
        </div>
    </div>

</template>

<script type="text/ecmascript-6">
    export default {}
</script>

<style scoped>
    .i-header{
        padding:0.09rem 0.15rem;
        background:#fff;
        height:0.3rem;
        color:#5a5a5a;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    a{
        color:inherit;
    }
    .i-header .ih-m{
        height:100%;
        margin:0 0.12rem;
        flex:1;
        background:#eee;
        border-radius:0.12rem;
        display: flex;
        align-items: center;
        padding-left:0.08rem;
    }
    .i-header .iconfont{
        font-size:16px;
    }
</style>