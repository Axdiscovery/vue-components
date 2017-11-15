<template>
    <header>
        <div class="l-set">
            <a href="javascript:void(0)"><i class="iconfont icon-yifu"></i></a>
            <a href="javascript:void(0)"><i class="iconfont icon-seting"></i></a>
            <a href="javascript:void(0)"><i class="iconfont icon-tubiaozhizuomoban"></i></a>
        </div>
        <div class="l-click">
            <a href="#/regist"><i class="iconfont icon-touxiang"></i></a>
            <span class="l-login">请点击登录</span>
        </div>
    </header>
</template>

<script type="text/ecmascript-6">
    export default {}
</script>

<style scoped>
    header{
        background: #06c1ae;
        height:1.2rem;
    }
    .l-set{
        float:right;
        margin-top:0.12rem;
        display: flex;
    }
    .l-set .iconfont{
        margin:0 0.1rem;
        font-size: 25px;
        color:white;
        font-weight: bold;
    }
    .l-click{
        float:left;
        display: flex;
        margin:0.5rem 0 0 0.2rem;
        align-items: center;
    }
    .l-click .iconfont{
        display: block;
        font-size:60px;
        margin-right: 0.15rem;
        color:pink;
        font-weight: bold;
    }
    .l-login{
        font-size:16px;
        color:white;
        font-weight: bold;
    }
</style>